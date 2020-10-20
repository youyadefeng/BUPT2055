//==================================================================================================================
// Mini Map
//==================================================================================================================
/*:
 * @plugindesc 实景小地图 。
 * 
 * @author 芯☆淡茹水
 * 
 * @help 
 *---------------------------------------------------------------------------------------------------------------------------------
 * 〓 说明 〓
 * 1，小地图显示对象（角色+事件）所备注的图标，来表示对象在小地图上的位置。
 *    对象（角色+事件）显示的图标序号，在其备注里写 => <MiniIcon:序号>
 *    例：备注 35 号图标 => <MiniIcon:35>
 *
 * 2，事件通过备注以及当前页事件项，来区分事件类型。
 *    具体备注为：
 *    Npc    =>  <Npc>     
 *    敌人   =>  <Enemy>        //事件当前页需要有 战斗项 。
 *    传送点 =>  <Transfer>     //事件当前页需要有 传送项 。
 *    门     =>  <Door>         //事件当前页需要有 传送项 。
 *
 * 3，事件备注了类型，并且是显示的状态（有行走图并且没有暂时移除），才会在小地图上显示。
 *
 * 4，在事件里备注 => <MiniShow> ，并且备注了它显示的图标（第一条），
 *    可无条件的在小地图中显示这个事件。
 *
 * 5，对象的图标，首先读取的是其备注的图标序号，然后才是插件设置项设置的基本图标。
 *    这两项都没有图标的对象，小地图上不显示。
 *
 * 6，描绘地图名时的颜色，在地图备注 => <NameColor:红,绿,蓝>
 *    未备注的，默认为白色。
 *
 * 7，小地图缩放比例，在脚本 244 行左右自行调节，由于本人比较懒，就不写随时更改比例的功能了。
 *
 *---------------------------------------------------------------------------------------------------------------------------------
 * 〓 插件命令 〓
 * 
 * 收起小地图  =>  RetractMiniMap
 * ※例如：用于剧情演出时，小地图遮挡住剧情人物的情况※
 * 
 *---------------------------------------------------------------------------------------------------------------------------------
 *
 * @param key
 * @desc 小地图快捷键键值。（例： M键 => 77）
 * @default 77
 *
 * @param width
 * @desc 小地图窗口显示的宽。
 * @default Graphics.width / 3
 *
 * @param height
 * @desc 小地图窗口显示的高。
 * @default Graphics.height / 3
 *
 * @param miniSize
 * @desc 迷你按钮的尺寸（宽 && 高）
 * @default 24
 * 
 * @param dpFollower
 * @desc 是否将跟随的队员加入到小地图。（是：Y；否：N）
 * @default Y
 *
 * @param dpHide
 * @desc 角色接触到小地图时，是否隐藏小地图。（是：Y；否：N）
 * @default Y
 *
 * @param dpDc1
 * @desc 传送点图标动态。（是：Y；否：N）
 * @default Y
 *
 * @param dpDc2
 * @desc 门图标动态。（是：Y；否：N）
 * @default Y
 * 
 * @param dpMapName
 * @desc 是否显示地图名。（是：Y；否：N）
 * @default Y
 *
 * @param dpPlace
 * @desc 是否显示角色坐标。（是：Y；否：N）
 * @default Y
 *
 * @param dpScale
 * @desc 是否显示小地图比例。（是：Y；否：N）
 * @default Y
 * 
 * @param color1
 * @desc 坐标名（X/Y）文字颜色。（格式：红,绿,蓝）
 * @default 200,0,200
 *
 * @param color2
 * @desc 坐标数字文字颜色。（格式：红,绿,蓝）
 * @default 0,200,0
 *
 * @param color3
 * @desc 小地图比例文字颜色。（格式：红,绿,蓝）
 * @default 0,255,200
 *
 * @param icon1
 * @desc 小地图 传送点 的默认图标序号。
 * @default 320
 *
 * @param icon2
 * @desc 小地图 门 的默认图标序号。
 * @default 320
 *
 * @param icon3
 * @desc 小地图 NPC 的默认图标序号。
 * @default 321
 *
 * @param icon4
 * @desc 小地图 敌人 的默认图标序号。
 * @default 324
 *
 * @param icon5
 * @desc 小地图 角色 的默认图标序号。
 * @default 322
 *
 * @param icon6
 * @desc 小地图显示时，快捷按钮显示的图标序号。
 * @default 32
 *
 * @param icon7
 * @desc 小地图隐藏时，快捷按钮显示的图标序号。
 * @default 48
 * 
*/
//==================================================================================================================
;var XdRsData = XdRsData || {};
XdRsData.miniMap = {};
XdRsData.miniMap.parameters = PluginManager.parameters('XdRs_MiniMap');
//==================================================================================================================
Input.keyMapper[+XdRsData.miniMap.parameters['key']] = 'miniMap';
//==================================================================================================================
Tilemap.prototype.affixMiniMapSign = function() {
    this._miniMapSign = true;
};
XdRsData.miniMap.TMPupdate = Tilemap.prototype.update;
Tilemap.prototype.update = function() {
    !this._miniMapSign && XdRsData.miniMap.TMPupdate.call(this);
};
XdRsData.miniMap.TMP_updateLayerPositions = Tilemap.prototype._updateLayerPositions;
Tilemap.prototype._updateLayerPositions = function(startX, startY) {
    if (this._miniMapSign) this.updateMiniMapPositions();
    else XdRsData.miniMap.TMP_updateLayerPositions.call(this, startX, startY);
};
Tilemap.prototype.updateMiniMapPositions = function() {
    var ox = Math.floor(this.origin.x), oy = Math.floor(this.origin.y);
    var x2 = ox.mod(this._layerWidth),  y2 = oy.mod(this._layerHeight);
    var w1 = ox < this._tileWidth  ? this._width - x2  : this._layerWidth - x2;
    var h1 = oy < this._tileHeight ? this._height - y2 : this._layerHeight - y2;
    var w2 = this._width - w1, h2 = this._height - h1;
    for (var i = 0; i < 2; i++) {
        var children = !i ? this._lowerLayer.children : this._upperLayer.children;
        children[0].move(0, 0, w1, h1);   children[0].setFrame(x2, y2, w1, h1);
        children[1].move(w1, 0, w2, h1);  children[1].setFrame(0, y2, w2, h1);
        children[2].move(0, h1, w1, h2);  children[2].setFrame(x2, 0, w1, h2);
        children[3].move(w1, h1, w2, h2); children[3].setFrame(0, 0, w2, h2);
    }
};
//==================================================================================================================
XdRsData.miniMap.side = function() {
    return 8;
};
XdRsData.miniMap.setupDisplaySize = function() {
    try {
        this._displayWidth  = eval(this.parameters['width']);
        this._displayHeight = eval(this.parameters['height']);
    }catch(e) {
        alert('小地图宽/高参数设置错误，恢复到默认尺寸。');
        this._displayWidth  = Graphics.width  / 3;
        this._displayHeight = Graphics.height / 3;
    }
    this._displayWidth  = Math.max(136, this._displayWidth);
    this._displayHeight = Math.max(104, this._displayHeight);
};
XdRsData.miniMap.displayWidth = function() {
    !this._displayWidth && this.setupDisplaySize();
    return this._displayWidth;
};
XdRsData.miniMap.displayHeight = function() {
    !this._displayHeight && this.setupDisplaySize();
    return this._displayHeight;
};
XdRsData.miniMap.windowWidth = function() {
    return this.displayWidth() + this.side() * 2;
};
XdRsData.miniMap.windowHeight = function() {
    return this.displayHeight() + this.side() * 2;
};
XdRsData.miniMap.realMapWidth = function() {
    return $gameMap.width() * $gameMap.tileWidth();
};
XdRsData.miniMap.realMapHeight = function() {
    return $gameMap.height() * $gameMap.tileHeight();
};
XdRsData.miniMap.makeTilemap = function() {
    var scale = $gameSystem.miniMapData().scale;
    var tilemap = new Tilemap();
    tilemap._margin = 0;
    tilemap.width  = this.displayWidth()  / scale;
    tilemap.height = this.displayHeight() / scale;
    tilemap.tileWidth  = $gameMap.tileWidth();
    tilemap.tileHeight = $gameMap.tileHeight();
    tilemap.scale = new Point(scale, scale);
    tilemap.setData($gameMap.width(), $gameMap.height(), $gameMap.data());
    this.loadTileset(tilemap);
    tilemap.refresh();
    tilemap.update();
    tilemap.affixMiniMapSign();
    return tilemap;
};
XdRsData.miniMap.loadTileset = function(tilemap) {
    var tileset = $gameMap.tileset();
    if (!tileset) return;
    var data = tileset.tilesetNames;
    for (var i = 0; i < data.length; i++) {
        tilemap.bitmaps[i] = ImageManager.loadTileset(data[i]);
    }
};
XdRsData.miniMap.getDpState = function(sym) {
    return this.parameters['dp'+sym] === 'Y';
};
XdRsData.miniMap.getColor = function(n) {
    var data = this.parameters['color'+n] || '255,255,255';
    return 'rgb('+data+')';
};
XdRsData.miniMap.getMiniIcon = function(kind) {
    return this.parameters['icon'+kind] || 0;
};
XdRsData.miniMap.isDynamic = function(kind) {
    if (![1,2].contains(kind)) return false;
    return this.getDpState('Dc'+kind);
};
//==================================================================================================================
XdRsData.miniMap.GSinitialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    XdRsData.miniMap.GSinitialize.call(this);
    this.initMiniMapData();
};
Game_System.prototype.initMiniMapData = function() {
    this._miniMapData = {};
    this._miniMapData.scale   = 0.2;  //缩放比例 （ 0.1 ~ 0.5之间较为合适，大了就失去小地图的意义）。
    this._miniMapData.visible = true;
    this._miniMapData.opacity = 195;
};
Game_System.prototype.miniMapData = function() {
    return this._miniMapData;
};
Game_System.prototype.setMiniMapData = function(sym, val) {
    this._miniMapData[sym] = val;
};
//==================================================================================================================
Game_Actor.prototype.baseMiniIcon = function() {
    return XdRsData.miniMap.getMiniIcon(5);
};
Game_Actor.prototype.miniIcon = function() {
    var data = this.actor().note.match(/<MiniIcon:(\d+)>/);
    return data ? +RegExp.$1 : this.baseMiniIcon();
};
//==================================================================================================================
Game_Character.prototype.miniIcon = function() {
    return this._miniIcon || 0; 
};
Game_Character.prototype.isMiniVisible = function() {
    return this._characterName !== '';
};
//==================================================================================================================
XdRsData.miniMap.GPrefresh = Game_Player.prototype.refresh;
Game_Player.prototype.refresh = function() {
    XdRsData.miniMap.GPrefresh.call(this);
    this.refreshMiniIcon();
};
Game_Player.prototype.refreshMiniIcon = function() {
    var actor = $gameParty.leader();
    this._miniIcon = actor ? actor.miniIcon() : 0;
};
Game_Player.prototype.miniMapMembers = function() {
    if (!XdRsData.miniMap.getDpState('Follower')) return [this];
    return this.followers()._data.concat([this]);
};
//==================================================================================================================
XdRsData.miniMap.GFrefresh = Game_Follower.prototype.refresh;
Game_Follower.prototype.refresh = function() {
    XdRsData.miniMap.GFrefresh.call(this);
    this.refreshMiniIcon();
};
Game_Follower.prototype.refreshMiniIcon = function() {
    this._miniIcon = this.actor() ? this.actor().miniIcon() : 0; 
};
//==================================================================================================================
XdRsData.miniMap.GEsetupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
    XdRsData.miniMap.GEsetupPage.call(this);
    this.setupMiniData();
};
Game_Event.prototype.setupMiniData = function() {
    var data = [this.isTransfer(),this.isDoor(),this.isNpc(),this.isEnemy()];
    this._miniKind = data.indexOf(true) + 1;
    this._miniIcon = this.notesMiniIcon() || this.baseMiniIcon();
};
Game_Event.prototype.baseMiniIcon = function() {
    return XdRsData.miniMap.getMiniIcon(this._miniKind);
};
Game_Event.prototype.notesMiniIcon = function() {
    var notes = this.event().note.match(/<MiniIcon:(\d+)>/);
    return notes ? +RegExp.$1 : null;
};
Game_Event.prototype.miniKind = function() {
    return this._miniKind || 0;
};
Game_Event.prototype.isEnemy = function() {
    return this.isMiniVisible() && this.isMiniNotes(/<Enemy>/) && this.hasCode(301);
};
Game_Event.prototype.isNpc = function() {
    return this.isMiniVisible() && this.isMiniNotes(/<Npc>/);
};
Game_Event.prototype.isTransfer = function() {
    return this.isMiniNotes(/<Transfer>/) && this.hasCode(201);
};
Game_Event.prototype.isDoor = function() {
    return this.isMiniVisible() && this.isMiniNotes(/<Door>/) && this.hasCode(201);
};
Game_Event.prototype.isMiniNotes = function(reg) {
    return reg.test(this.event().note);
};
Game_Event.prototype.isMiniVisible = function() {
    if (this.isTransfer() || this.isMiniNotes(/<MiniShow>/)) return true;
    return Game_Character.prototype.isMiniVisible.call(this);
};
Game_Event.prototype.hasCode = function(code) {
    return this.page() && this.page().list.some(function(l){
        return l.code === code;
    });
};
//==================================================================================================================
XdRsData.miniMap.GIpluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    XdRsData.miniMap.GIpluginCommand.call(this, command, args);
    command === 'RetractMiniMap' && $gameSystem.setMiniMapData('visible', false);
};
//==================================================================================================================
function Window_MiniMap() {
    this.initialize.apply(this, arguments);
}
Window_MiniMap.prototype = Object.create(Window_Base.prototype);
Window_MiniMap.prototype.constructor = Window_MiniMap;
Window_MiniMap.prototype.initialize = function() {
    this._isVisible = $gameSystem.miniMapData().visible;
    this.callSuper();
    this.createSprite();
    this.drawInfo();
};
Window_MiniMap.prototype.callSuper = function() {
    var width  = XdRsData.miniMap.windowWidth();
    var height = XdRsData.miniMap.windowHeight();
    var x = Graphics.width - width;
    var y = this.standardY(height);
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.opacity = $gameSystem.miniMapData().opacity;
    this.contents.paintOpacity = this.opacity;
};
Window_MiniMap.prototype.standardPadding = function() {
    return XdRsData.miniMap.side();
};
Window_MiniMap.prototype.standardY = function(height) {
    return this._isVisible ? 0 : -height;
};
Window_MiniMap.prototype.lineHeight = function() {
    return 20;
};
Window_MiniMap.prototype.standardFontSize = function() {
    return 16;
};
Window_MiniMap.prototype.scaleText = function() {
    var scale = $gameSystem.miniMapData().scale;
    return '' + (1 / scale).toFixed(1) +' : '+1;
};
Window_MiniMap.prototype.mapNameColor = function() {
    var data = $dataMap.note.match(/<NameColor:(\S+)>/);
    data = data ? RegExp.$1 : '255,255,255';
    return 'rgb('+data+')'; 
};
Window_MiniMap.prototype.createSprite = function() {
    this._sprite = new Sprite_MiniMap();
    this.addChildToBack(this._sprite);
};
Window_MiniMap.prototype.drawInfo = function() {
    ['MapName','Place','Scale'].forEach(function(sym){
       XdRsData.miniMap.getDpState(sym) && this['draw'+sym]();
    }, this);
};
Window_MiniMap.prototype.drawMapName = function() {
    if (!$gameMap.displayName()) return;
    var w = this.contents.width / 2;
    this.changeTextColor(this.mapNameColor());
    this.drawText($gameMap.displayName(), 4, 4, w);
};
Window_MiniMap.prototype.drawPlace = function() {
    this._dataX = $gamePlayer.x;
    this._dataY = $gamePlayer.y;
    var w = Math.min(this.contents.width / 3, 90);
    var x1 = this.contents.width - w, x2 = x1 + w / 2;
    this.contents.clearRect(x1-4, 0, w, this.lineHeight()+8);
    this.changeTextColor(XdRsData.miniMap.getColor(1));
    var cw = this.contents.measureTextWidth('X:')+4;
    this.drawText('X:', x1, 4, cw);
    this.drawText('Y:', x2, 4, cw);
    this.changeTextColor(XdRsData.miniMap.getColor(2));
    this.drawText(''+this._dataX, x1+cw, 4, 30);
    this.drawText(''+this._dataY, x2+cw, 4, 30);
};
Window_MiniMap.prototype.drawScale = function() {
    var w = this.contents.width / 4;
    var y = this.contents.height - this.lineHeight();
    var x = this.contents.width - w;
    this.contents.clearRect(x, y, w, this.lineHeight());
    this.changeTextColor(XdRsData.miniMap.getColor(3));
    this.drawText(this.scaleText(), x, y, w, 'center');
};
Window_MiniMap.prototype.isPlayerTouched = function() {
    var px = $gamePlayer.screenX() + 40;
    var py = $gamePlayer.screenY() - 80;
    if (px < this.x || py < this.y)  return false;
    if (px > (this.x + this.width))  return false;
    if (py > (this.y + this.height)) return false;
    return true;
};
Window_MiniMap.prototype.isPlayerMoved = function() {
    return this._dataX !== $gamePlayer.x ||
    this._dataY !== $gamePlayer.y;
};
Window_MiniMap.prototype.isVisibleChanged = function() {
    return this._isVisible !== $gameSystem.miniMapData().visible;
};
Window_MiniMap.prototype.isMoveOver = function() {
    if (this._isVisible) return this.y >= 0;
    return this.y <= -this.height;
};
Window_MiniMap.prototype.moveRange = function() {
    var n = this.height / 10;
    if (this._isVisible) n = Math.min(n, -this.y);
    return this._isVisible ? n : -n;
};
Window_MiniMap.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updateMove();
    this.updateVisible();
    this.updatePlayerMove();
    this.updatePlayerTouch();
};
Window_MiniMap.prototype.updateMove = function() {
    if (!this._moving) return;
    if (this.isMoveOver()) this._moving = false;
    else this.y += this.moveRange();
};
Window_MiniMap.prototype.updateVisible = function() {
    if (!this.isVisibleChanged()) return;
    this._isVisible = $gameSystem.miniMapData().visible;
    this._moving = true;
};
Window_MiniMap.prototype.updatePlayerMove = function() {
    if (!XdRsData.miniMap.getDpState('Place')) return;
    this.isPlayerMoved() && this.drawPlace();
};
Window_MiniMap.prototype.updatePlayerTouch = function() {
    if (!this._isVisible || !XdRsData.miniMap.getDpState('Hide')) return;
    this.visible = !this.isPlayerTouched();
};
//==================================================================================================================
function Mini_Button() {
    this.initialize.apply(this, arguments);
}
Mini_Button.prototype = Object.create(Sprite.prototype);
Mini_Button.prototype.constructor = Mini_Button;
Mini_Button.prototype.initialize = function(x) {
    Sprite.prototype.initialize.call(this);
    this.createBitmap();
    this.drawArrow();
    this._pressCount = 0;
    this.anchor = new Point(0.5, 0.5);
    this.move(x - this.sw(), this.sh());
};
Mini_Button.prototype.sw = function() {
    return this.width / 2;
};
Mini_Button.prototype.sh = function() {
    return this.height / 2;
};
Mini_Button.prototype.size = function() {
    return +XdRsData.miniMap.parameters['miniSize'] || 24;
};
Mini_Button.prototype.createBitmap = function() {
    this.bitmap = new Bitmap(this.size(), this.size());
};
Mini_Button.prototype.drawArrow = function() {
    this.bitmap.clear();
    this._lastState = $gameSystem.miniMapData().visible;
    var n = this._lastState ? 6 : 7;
    var index = XdRsData.miniMap.getMiniIcon(n);
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth, ph = Window_Base._iconHeight;
    var sx = index % 16 * pw, sy = Math.floor(index / 16) * ph;
    this.bitmap.blt(bitmap, sx, sy, pw, ph, 0, 0, this.size(), this.size());
};
Mini_Button.prototype.changeVisible = function() {
    SoundManager.playOk();
    var state = $gameSystem.miniMapData().visible;
    $gameSystem.setMiniMapData('visible', !state);
};
Mini_Button.prototype.isStateChanged = function() {
    return this._lastState !== $gameSystem.miniMapData().visible;
};
Mini_Button.prototype.isTouch = function() {
    var x = TouchInput.x, y = TouchInput.y;
    var bx = this.x - this.sw(),by = this.y - this.sh();
    return x > bx && x < (bx + this.width) &&
    y > by && y < (by + this.height);
};
Mini_Button.prototype.press = function() {
    this.scale = new Point(0.9, 0.9);
    this._pressCount = 8;
    this.changeVisible();
};
Mini_Button.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateState();
    this.updateInput();
    this.updatePressed();
};
Mini_Button.prototype.updateState = function() {
    this.isStateChanged() && this.drawArrow();
};
Mini_Button.prototype.updateInput = function() {
    Input.isTriggered('miniMap') && this.changeVisible();
    if (!TouchInput.isTriggered()) return;
    this.isTouch() && this.press();
};
Mini_Button.prototype.updatePressed = function() {
    if (!this._pressCount) return;
    this._pressCount--;
    if (!this._pressCount) this.scale = new Point(1, 1);
};
//==================================================================================================================
function Sprite_MiniMap() {
    this.initialize.apply(this, arguments);
}
Sprite_MiniMap.prototype = Object.create(Sprite.prototype);
Sprite_MiniMap.prototype.constructor = Sprite_MiniMap;
Sprite_MiniMap.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this.opacity = $gameSystem.miniMapData().opacity;
    this.initData();
    this.createTileMap();
    this.createParts();
    this.refreshScroll();
};
Sprite_MiniMap.prototype.initData = function() {
    this._scale = $gameSystem.miniMapData().scale;
    var rw = XdRsData.miniMap.realMapWidth()  * this._scale;
    var rh = XdRsData.miniMap.realMapHeight() * this._scale;
    this.width  = Math.min(XdRsData.miniMap.displayWidth(),  rw);
    this.height = Math.min(XdRsData.miniMap.displayHeight(), rh);
    this._tileWidth  = $gameMap.tileWidth()  * this._scale;
    this._tileHeight = $gameMap.tileHeight() * this._scale;
    this.setPosition();
};
Sprite_MiniMap.prototype.createTileMap = function() {
    this._tileMap = XdRsData.miniMap.makeTilemap();
    this.addChild(this._tileMap);
};
Sprite_MiniMap.prototype.createParts = function() {
    this._parts = [];
    var data = $gameMap.events().concat($gamePlayer.miniMapMembers());
    data.forEach(function(e){
        var part = new Sprite_MiniPart(e);
        this._parts.push(part);
        this.addChild(part);
    }, this);
};
Sprite_MiniMap.prototype.playerX = function() {
    return $gamePlayer._realX * $gameMap.tileWidth();
};
Sprite_MiniMap.prototype.playerY = function() {
    return $gamePlayer._realY * $gameMap.tileHeight();
};
Sprite_MiniMap.prototype.realX = function(x) {
    x = (x + 0.5)  * this._tileWidth;
    return x - this._miniX * this._scale;
};
Sprite_MiniMap.prototype.realY = function(y, add) {
    y = (y + 1) * this._tileHeight;
    return y - this._miniY * this._scale + add;
};
Sprite_MiniMap.prototype.isScrolled = function() {
    return this._dataX !== this._miniX ||
    this._dataY !== this._miniY;
};
Sprite_MiniMap.prototype.setPosition = function() {
    var x = y = XdRsData.miniMap.side();
    var dw = XdRsData.miniMap.displayWidth();
    var dh = XdRsData.miniMap.displayHeight();
    x = Math.max(x, (dw - this.width) / 2 + x);
    y = Math.max(y, (dh - this.height) / 2 + y);
    this.move(x, y);
};
Sprite_MiniMap.prototype.refreshScroll = function() {
    var mw = XdRsData.miniMap.realMapWidth();
    var mh = XdRsData.miniMap.realMapHeight();
    var tw = this._tileMap.width,th = this._tileMap.height;
    this._miniX = this.playerX() - tw  / 2;
    this._miniY = this.playerY() - th  / 2;
    this._miniX = Math.max(0, Math.min(mw-tw,this._miniX));
    this._miniY = Math.max(0, Math.min(mh-th,this._miniY));
};
Sprite_MiniMap.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateScroll();
    this.updateScrolled();
};
Sprite_MiniMap.prototype.updateScroll = function() {
    this.visible && $gamePlayer.isMoving() && this.refreshScroll();
};
Sprite_MiniMap.prototype.updateScrolled = function() {
    if (!this.visible || !this.isScrolled()) return;
    this._dataX = this._miniX; this._dataY = this._miniY;
    this._tileMap.origin.x = this._miniX;
    this._tileMap.origin.y = this._miniY;
};
//==================================================================================================================
function Sprite_MiniPart() {
    this.initialize.apply(this, arguments);
}
Sprite_MiniPart.prototype = Object.create(Sprite.prototype);
Sprite_MiniPart.prototype.constructor = Sprite_MiniPart;
Sprite_MiniPart.prototype.initialize = function(obj) {
    Sprite.prototype.initialize.call(this);
    this.initData(obj);
    this.createBitmap();
    this.update();
};
Sprite_MiniPart.prototype.initData = function(obj) {
    this._obj = obj;
    this._dynamicY = 0;
    this._dynamicCount = -1;
};
Sprite_MiniPart.prototype.addRate = function() {
    return this.isEvent() ? 0.3 : 0.4;
};
Sprite_MiniPart.prototype.addSize = function(size) {
    return size + size * this.addRate();
};
Sprite_MiniPart.prototype.bitmapWidth = function() {
    var scale = $gameSystem.miniMapData().scale;
    return this.addSize($gameMap.tileWidth() * scale);
};
Sprite_MiniPart.prototype.bitmapHeight = function() {
    var scale = $gameSystem.miniMapData().scale;
    return this.addSize($gameMap.tileHeight() * scale);
};
Sprite_MiniPart.prototype.anchorY = function() {
    var scale = $gameSystem.miniMapData().scale;
    return $gameMap.tileHeight() * scale / this.bitmap.height;
};
Sprite_MiniPart.prototype.createBitmap = function() {
    this.bitmap = new Bitmap(this.bitmapWidth(), this.bitmapHeight());
    this.anchor = new Point(0.5, this.anchorY());
    this.refresh();
};
Sprite_MiniPart.prototype.refresh = function() {
    this.bitmap.clear();
    this._icon   = this._obj.miniIcon();
    this.visible = this.isVisible();
    this.visible && this.drawPart();
};
Sprite_MiniPart.prototype.drawPart = function() {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth, ph = Window_Base._iconHeight;
    var sx = this._icon % 16 * pw, sy = Math.floor(this._icon / 16) * ph;
    var bw = this.bitmap.width, bh = this.bitmap.height;
    this.bitmap.blt(bitmap, sx, sy, pw, ph, 0, 0, bw, bh);
};
Sprite_MiniPart.prototype.isEvent = function() {
    return this._obj.constructor === Game_Event;
};
Sprite_MiniPart.prototype.isVisible = function() {
    return this._obj.isMiniVisible() && !!this._icon;
};
Sprite_MiniPart.prototype.isDynamic = function() {
    if (!this.isEvent()) return false;
    return XdRsData.miniMap.isDynamic(this._obj.miniKind());
};
Sprite_MiniPart.prototype.isStateChanged = function() {
    return this._icon !== this._obj.miniIcon() ||
    this.visible !== this.isVisible();
};
Sprite_MiniPart.prototype.isInScreen = function() {
    var w = XdRsData.miniMap.displayWidth();
    var h = XdRsData.miniMap.displayHeight();
    var side = XdRsData.miniMap.side();
    return this.x >=0 && this.y >= 0 && this.x < w && (this.y-side) < h;
};
Sprite_MiniPart.prototype.dyAdd = function() {
    var scale = $gameSystem.miniMapData().scale;
    return 30 * scale / 10;
};
Sprite_MiniPart.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateState();
    this.updateDynamic();
    this.updatePosition();
};
Sprite_MiniPart.prototype.updateState = function() {
    this.isStateChanged() && this.refresh();
};
Sprite_MiniPart.prototype.updateDynamic = function() {
    if (!this.isDynamic() || !(Graphics.frameCount % 2)) return;
    this._dynamicCount = (this._dynamicCount + 1) % 20;
    this._dynamicY += this._dynamicCount < 10 ? -this.dyAdd() : this.dyAdd();
};
Sprite_MiniPart.prototype.updatePosition = function() {
    if (!this.parent) return;
    this.x = this.parent.realX(this._obj._realX);
    this.y = this.parent.realY(this._obj._realY, this._dynamicY);
    this.visible = this.isInScreen();
};
//==================================================================================================================
XdRsData.miniMap.WOaddGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
    XdRsData.miniMap.WOaddGeneralOptions.call(this);
    this.addCommand('小地图透明度', 'miniMapOpacity');
};
Window_Options.prototype.isMiniSymbol = function(symbol) {
    return symbol === 'miniMapOpacity';
};
XdRsData.miniMap.WOstatusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    if (this.isMiniSymbol(this.commandSymbol(index))) return this.miniValText();
    return XdRsData.miniMap.WOstatusText.call(this, index);
};
Window_Options.prototype.miniValText = function() {
    return ''+$gameSystem.miniMapData().opacity;
};
Window_Options.prototype.setMiniVal = function(type) {
    var val = $gameSystem.miniMapData().opacity;
    val = (val + (type ? 10 : -10)) % 255;
    return val < 5 ? 255 : val;
};
Window_Options.prototype.changeMiniData = function(symbol, type) {
    SoundManager.playCursor();
    var value = this.setMiniVal(type);
    $gameSystem.setMiniMapData('opacity', value);
    this.redrawItem(this.findSymbol(symbol));
};
XdRsData.miniMap.WOprocessOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    var symbol = this.commandSymbol(this.index());
    if (this.isMiniSymbol(symbol)) this.changeMiniData(symbol, 1);
    else XdRsData.miniMap.WOprocessOk.call(this);
};
XdRsData.miniMap.WOcursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
    var symbol = this.commandSymbol(this.index());
    if (this.isMiniSymbol(symbol)) this.changeMiniData(symbol, 1);
    else XdRsData.miniMap.WOcursorRight.call(this, wrap);
};
XdRsData.miniMap.WOcursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
     var symbol = this.commandSymbol(this.index());
    if (this.isMiniSymbol(symbol)) this.changeMiniData(symbol, 0);
    else XdRsData.miniMap.WOcursorLeft.call(this, wrap);
};
//==================================================================================================================
XdRsData.miniMap.SMcreateAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
    XdRsData.miniMap.SMcreateAllWindows.call(this);
    this.createMiniMap();
};
Scene_Map.prototype.createMiniMap = function() {
    this._miniMap    = new Window_MiniMap();
    this._miniButton = new Mini_Button(this._miniMap.x);
    this.addChild(this._miniMap);
    this.addChild(this._miniButton);
};
Scene_Map.prototype.isTouchMiniButton = function() {
    if (!TouchInput.isTriggered()) return false;
    return this._miniButton && this._miniButton.isTouch();
};
XdRsData.miniMap.SMprocessMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
    !this.isTouchMiniButton() && XdRsData.miniMap.SMprocessMapTouch.call(this);
};
//==================================================================================================================
// end
//==================================================================================================================