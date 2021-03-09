//==================================================================================================================
/*:
 * @plugindesc 自定义说话 + NPC自动随机说话。
 * 
 * @author 芯☆淡茹水
 * 
 * 
 * @help 
 * 
 * 〓 插件命令 〓
 * 1， 指定对象显示说话： SpeakNow id sp
 *  id :指定的对象ID/序号，事件为正数，角色为负数。
 *       事件直接写事件ID， 角色用负数来表示： -1 :队伍第一个角色； -2 :队伍第二个角色...以此类推。
 *     
 *  sp :当前说话的各种参数，包括：text => 说话内容
 *                                 size => 字体大小
 *                                 bc   => 对话框颜色序号
 *                                 fc   => 文字颜色序号
 *
 *     编写格式，例：text='测试文字';size=20;bc=2;fc=3
 *     整段中间不要留空格，参数之间用 ; 号隔开。
 *     顺序可以打乱，但参数 text (说话内容)必写，并且用 '' 号括起来。
 *     其它参数若未写，bc（对话框颜色序号）默认为 1 ；fc （文字颜色序号）默认为 1；
 *     size （字体大小） 默认为 24 。
 *
 *  例：5 号事件显示说话，内容为 “我是吃瓜群众！”，字体大小 24 ；对话框颜色和字体颜色号都是 1
 *       =>  SpeakNow 5 text='我是吃瓜群众！'
 *
 *       上面的改为 字体大小 16 ；对话框颜色号是 4； 字体颜色号是 2
 *       =>  SpeakNow 5 text='我是吃瓜群众！';size=16;bc=4;fc=2
 *
 *
 *2，停止一个自动说话的事件：  ShutUp id mapId
 *  id     :事件ID。
 *  mapId  :事件所在的地图ID。可省略，省略默认为当前地图。
 *
 *  例：停止当前地图 12 号事件自动说话 =>  ShutUp 12
 *      停止 5 号地图 8 号事件自动说话 =>  ShutUp 8 5
 *
 *3，恢复一个第 2 条停止的自动说话事件： PleaseSpeak id mapId
 *  id     :事件ID。
 *  mapId  :事件所在的地图ID。可省略，省略默认为当前地图。
 *
 *  例：恢复第 2 条停止的 12 号自动说话事件 =>  PleaseSpeak 12
 *      恢复第 2 条停止的 5 号地图 8 号自动说话事件 =>  PleaseSpeak 8 5
 *
 *4，转换自动说话事件的设置和内容页面：  SetAutoPage page id mapId
 *  page  :转换到的页数。（第一页为  1）
 *  id    :事件ID。
 *  mapId :事件所在的地图ID。可省略，省略默认为当前地图。
 *
 *  自动说话事件初始默认读取事件 第一页 作为自动说话的设置和内容。
 *  当运行这条命令转换自动说话事件页后，重新读取所转换的页面设置和内容。
 *
 *  例：转换当前地图 17 号事件的自动说话事件页为 3  =>  SetAutoPage 3 17
 *
 *
 * 〓  自动说话事件的编辑  〓
 * 1，所有自动说话的设置和内容，全部编辑为：事件 - 说明 。事件在任何情况下转换页面不会受影响。
 * 2，事件页的 第一个 说明，为自动说话的设置和标志。说明里写： <AutoTalk:sec,size,bc,fc>
 *    sec  : 自动说话之间的间隔帧数，实际帧数在这个基础上每次 ±30% 。这项必须写。
 *    size : 自动说话的字体大小。该项可省略或写 0，省略或写 0 后，随机 16 ~ 30 号字体大小。
 *    bc   : 自动说话时的对话框颜色。该项可省略或写 0，省略或写 0 后，随机对话框颜色。
 *    fc   : 自动说话时的文字颜色。该项可省略或写 0，省略或写 0 后，随机文字颜色。
 *
 *    例：设置一个事件自动说话，间隔时间 600 帧，其它随机 => 事件 - 第一个说明 ： <AutoTalk:600>
 *        设置一个事件自动说话，间隔时间 400 帧，使用 2 号对话框颜色，其它随机 => 事件 - 第一个说明 ： <AutoTalk:400,0,2>
 *        设置一个事件自动说话，间隔时间 1000 帧，字体大小 22，使用 2 号对话框颜色和 4 号文字颜色
 *        => 事件 - 第一个说明 ： <AutoTalk:1000,22,2,4>
 *
 *3，除了第一个 事件-说明 为设置和标志外，往后的 事件-说明 都是说话内容。编写了多少条内容，就在这些内容中随机。
 *4，设置了自动说话事件但事件未自动说话的情况：
 *  ※事件第一个说明的设置不正确或未设置在事件的 第一个说明 里※
 *  ※事件未编写说话内容※
 *  ※该事件正在运行当中※
 *  ※该事件的上一个说话框未消失或间隔时间未到※
 *  ※该事件不在屏幕内※
 *  ※该事件无行走图或该事件透明※
 *  ※插件命令第 2 条停止了该事件的自动说话※
 *  ※插件命令第 4 条转换到了 无效页面或未设置自动说话的页面※
 *  ※其它※
 *
 * 〓 颜色取样图片的制作 〓
 *
 * 颜色取样图片制作格式为： 每一个颜色块 12x12 ，每排 8 个拼接，高度不限。
 * 制作好的图片保存在工程的 img\system 文件夹里，然后在该插件的设置项设置好图片名和颜色数量。
 * 颜色序号从左到右，从上到下数，第一个序号是  1 。
 * 不使用自制颜色图片的，请把设置项的图片名留空。插件读取默认系统图片 Window 的颜色。
 *
 *
 *
 * @param side
 * @desc 对话框阴影宽度。
 * @default 5
 * 
 * @param shadow
 * @desc 对话框阴影颜色。格式：红,绿,蓝,透明度  (透明度 0 ~ 1)。
 * @default 30,30,30,1
 *
 * @param addY
 * @desc 对话框底部箭头距离对象头顶的距离。
 * @default 5
 *
 * @param count
 * @desc 对话框停留持续的基础时间（帧）。实际时间 ±30% 。
 * @default 200
 *
 * @param wCount
 * @desc 对话内容每个字额外增加的对话框停留时间（帧）。
 * @default 2
 *
 * @param image
 * @desc 取色图片名。（若不写，就取样系统的 Window 图片颜色）
 * @default Talk_Image
 *
 * @param max
 * @desc 颜色最大数。（若使用自制取色图片，填写图片的最大颜色数）
 * @default 16
 *
 * 
*/
//==================================================================================================================
;(function(){
//==================================================================================================================
var XdRsData = XdRsData || {};
XdRsData.npcIs = {};
//==================================================================================================================
XdRsData.npcIs.pepr   =   PluginManager.parameters('XdRs_NPC_Idioglossia');
XdRsData.npcIs.side   =   +XdRsData.npcIs.pepr['side']   || 0;
XdRsData.npcIs.addY   =   +XdRsData.npcIs.pepr['addY']   || 0;
XdRsData.npcIs.count  =   +XdRsData.npcIs.pepr['count']  || 200;
XdRsData.npcIs.wCount =   +XdRsData.npcIs.pepr['wCount'] || 2;
XdRsData.npcIs.max    =   +XdRsData.npcIs.pepr['max']    || 16;
XdRsData.npcIs.shadow = ''+XdRsData.npcIs.pepr['shadow'] || '';
XdRsData.npcIs.image  = ''+XdRsData.npcIs.pepr['image']  || '';
//==================================================================================================================
XdRsData.npcIs.getTalkColr = function(n) {
    var name = this.image || 'Window';
    var bitmap = ImageManager.loadSystem(name);
    var ax = this.image ? 0 : 96, ay = this.image ? 0 : 144;
    var px = ax + (n % 8) * 12 + 6;
    var py = ay + Math.floor(n / 8) * 12 + 6;
    return bitmap.getPixel(px, py);
};
XdRsData.npcIs.colorMax = function() {
    return this.image ? this.max : 32;
};
XdRsData.npcIs.waitCount = function(text) {
    var base = this.count;
    var add = Math.randomInt(Math.floor(base * 0.3));
    return base + (!Math.randomInt(2) ? -add : add) + text.length * this.wCount;
};
//==================================================================================================================
Game_System.prototype.lockAutoTalk = function(mapId, id) {
    if (this.notAutoTalk(mapId, id)) return;
    this._autoTalkData = this._autoTalkData || [];
    this._autoTalkData[mapId] = this._autoTalkData[mapId] || [];
    this._autoTalkData[mapId][id] = true;
    this.interruptTalk(id, mapId);
};
Game_System.prototype.unLockAutoTalk = function(mapId, id) {
    if (!this.notAutoTalk(mapId, id)) return;
    this._autoTalkData[mapId][id] = false;
};
Game_System.prototype.notAutoTalk = function(mapId, id) {
    if (!this._autoTalkData) return false;
    return this._autoTalkData[mapId] && this._autoTalkData[mapId][id];
};
Game_System.prototype.talkPageData = function() {
    return this._talkPageData || [];
};
Game_System.prototype.talkPage = function(id, mapId) {
    if (!this._talkPageData) return null;
    return this._talkPageData[mapId] ? this._talkPageData[mapId][id] : null;
};
Game_System.prototype.setTalkPage = function(index, id, mapId) {
    this._talkPageData = this._talkPageData || [];
    this._talkPageData[mapId] = this._talkPageData[mapId] || [];
    this._talkPageData[mapId][id] = index;
    if ($gameMap.mapId() === mapId) this._pageChangedData = id;
    this.interruptTalk(id, mapId);
};
Game_System.prototype.interruptTalk = function(id, mapId) {
    if ($gameMap.mapId() !== mapId || !$gameMap.event(id)) return;
    $gameMap.event(id).interruptTalk();
};
Game_System.prototype.pageChangedData = function() {
    return this._pageChangedData || 0;
};
Game_System.prototype.closeChangedData = function() {
    this._pageChangedData = 0;
};
//==================================================================================================================
XdRsData.npcIs.GCinitialize = Game_Character.prototype.initialize;
Game_Character.prototype.initialize = function() {
    XdRsData.npcIs.GCinitialize.call(this);
    this.initTalk();
};
Game_Character.prototype.initTalk = function() {
    this._talkData = {'text':null,'bc':1,'fc':1,'size':24};
};
Game_Character.prototype.talkData = function() {
    return this._talkData;
};
Game_Character.prototype.isTalking = function() {
    return this._talking;
};
Game_Character.prototype.isInterruptTalk = function() {
    return this._locked || this._interruptTalk;
};
Game_Character.prototype.interruptTalk = function() {
    this._interruptTalk = true;
};
Game_Character.prototype.closeTalking = function() {
    this._talking = this._interruptTalk = false;
};
Game_Character.prototype.setTalk = function(data) {
    if (!this.canTalk()) return;
    this._interruptTalk = false;
    var text = null,bc = 1, fc = 1, size = 24;
    try {eval(data);} catch(e) {};
    this._talkData.text = text;
    this._talkData.bc = bc;
    this._talkData.fc = fc;
    this._talkData.size = size;
    this._talking = !!this._talkData.text;
};
Game_Character.prototype.closeTalk = function() {
    this._talkData.text = null;
};
Game_Character.prototype.isInScreen = function() {
    return this.screenX() > 0 && this.screenX() < Graphics.boxWidth &&
    this.screenY() > 0 && this.screenY() - 48 < Graphics.boxHeight;
};
Game_Character.prototype.canTalk = function() {
    return this.isInScreen() && !this.isTalking();
};
//==================================================================================================================
Game_Player.prototype.getTalkObj = function(n) {
    return n === -1 ? this : this._followers.follower(Math.abs(n) - 2);
};
Game_Player.prototype.stopTalkAll = function() {
    this.closeTalking();
    for (var i=0;i<$gameParty.members().length-1;i++){
        this._followers.follower(i).closeTalking();
    }
};
//==================================================================================================================
XdRsData.npcIs.GEinitialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
    XdRsData.npcIs.GEinitialize.call(this, mapId, eventId);
    this.initTalkData();
};
Game_Event.prototype.initTalkData = function() {
    $gameSystem.closeChangedData();
    this._isAutoTalk = false;
    var page = this.autoTalkPage();
    if (!page) return;
    var listData = this.allData(page);
    var baseData = listData.shift();
    if (baseData) {
        var data = baseData.match(/<AutoTalk:(\S+)>/);
        data && this.initTalkState((''+RegExp.$1).split(',').map(function(n){return +n;}));
    }
    if (!this._isAutoTalk) return;
    this.setupAutoWait();
    this._autoText = listData;
};
Game_Event.prototype.autoTalkPage = function() {
    var index = $gameSystem.talkPage(this._eventId, this._mapId) || 0;
    return this.event().pages[index];
};
Game_Event.prototype.initTalkState = function(arraw) {
    this._isAutoTalk = true;
    this._baseWait = arraw[0];
    this._tfSize   = arraw[1];
    this._tbColor  = arraw[2];
    this._tfColor  = arraw[3];
};
Game_Event.prototype.setupAutoWait = function() {
    var base = this._baseWait;
    var add = Math.randomInt(Math.floor(base * 0.3));
    this._autoWait = base + (!Math.randomInt(2) ? -add : add);
};
Game_Event.prototype.allData = function(page) {
    var data = page.list.filter(function(l){
        return [108,408].contains(l.code);
    });
    var textData = [],text = '';
    for (var i=0;i<data.length;i++){
        if (data[i].code === 108) {
            text && textData.push(text);
            text = data[i].parameters[0];
        }else{
            text += '\n' + data[i].parameters[0];
        }
    }
    text && textData.push(text);
    return textData;
};
XdRsData.npcIs.GEupdate = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
    XdRsData.npcIs.GEupdate.call(this);
    this.updatePageChanged();
    this.canAutoTalk() && this.updateAutoTalk();
};
Game_Event.prototype.updatePageChanged = function() {
    $gameSystem.pageChangedData() === this._eventId && this.initTalkData();
};
Game_Event.prototype.updateAutoTalk = function() {
    if (this._autoWait) this._autoWait--;
    !this._autoWait && this.startAutoTalk();
};
Game_Event.prototype.canAutoTalk = function() {
    if (!this._characterName || !this.opacity() || !this._isAutoTalk) return false;
    if (!this.canTalk() || !this._autoText || !this._autoText.length) return false;
    return !this._locked && !$gameSystem.notAutoTalk(this._mapId, this._eventId);
};
Game_Event.prototype.startAutoTalk = function() {
    this.setupAutoWait();
    this.setAutoData();
};
Game_Event.prototype.setAutoData = function() {
    this._talkData.text = this.randTalk();
    this._talkData.bc = this.getTBcolor();
    this._talkData.fc = this.getTFcolor();
    this._talkData.size = this.getTFsize();
    this._talking = true;
    $gameMap.setTalkTip(true);
};
Game_Event.prototype.randTalk = function() {
    if (!this._autoText || !this._autoText.length) return null;
    return this._autoText[Math.randomInt(this._autoText.length)];
};
Game_Event.prototype.getTFsize = function() {
    return this._tfSize || Math.randomInt(14)+16;
};
Game_Event.prototype.getTBcolor = function() {
    if (this._tbColor) return this._tbColor-1;
    return Math.randomInt(XdRsData.npcIs.colorMax());
};
Game_Event.prototype.getTFcolor = function() {
    if (this._tfColor) return this._tfColor-1;
    var n = Math.randomInt(XdRsData.npcIs.colorMax());
    while (n === this._talkData.bc) n = Math.randomInt(XdRsData.npcIs.colorMax());
    return n;
};
//==================================================================================================================
Game_Map.prototype.hasTalk = function() {
    return this._hasTalk;
};
Game_Map.prototype.setTalkTip = function(state) {
    this._hasTalk = state;
};
Game_Map.prototype.delTalkTip = function() {
    return this._delTalkTip;
};
Game_Map.prototype.setDelTalkTip = function(state) {
    this._delTalkTip = state;
};
Game_Map.prototype.stopTalkAll = function() {
    $gamePlayer.stopTalkAll();
    this.events().forEach(function(e){e.closeTalking();});
};
//==================================================================================================================
XdRsData.npcIs.GIpluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    XdRsData.npcIs.GIpluginCommand.call(this, command, args);
    command === 'SpeakNow'    && this.setEventTalk(args);
    command === 'ShutUp'      && this.closeAutoTalk(args);
    command === 'PleaseSpeak' && this.unLockAutoTalk(args);
    command === 'SetAutoPage' && this.changeAutoPage(args);
};
Game_Interpreter.prototype.setEventTalk = function(args) {
    var id = +args[0];
    if (!id) return;
    var obj = id < 0 ? $gamePlayer.getTalkObj(id) : $gameMap.event(id);
    if (!obj) return;
    obj.setTalk(''+args[1]);
    $gameMap.setTalkTip(true);
};
Game_Interpreter.prototype.closeAutoTalk = function(args) {
    var id = +args[0];
    if (!id) return;
    var mapId = +args[1] || $gameMap.mapId();
    $gameSystem.lockAutoTalk(mapId, id);
};
Game_Interpreter.prototype.unLockAutoTalk = function(args) {
    var id = +args[0];
    var mapId = +args[1] || $gameMap.mapId();
    $gameSystem.unLockAutoTalk(mapId, id);
};
Game_Interpreter.prototype.changeAutoPage = function(args) {
    var index = +args[0] - 1, id = +args[1];
    var mapId = +args[2] || $gameMap.mapId();
    $gameSystem.setTalkPage(index, id, mapId);
};
//==================================================================================================================
function XdRs_Talk() {
    this.initialize.apply(this, arguments);
}
XdRs_Talk.prototype = Object.create(Sprite.prototype);
XdRs_Talk.prototype.constructor = XdRs_Talk;
XdRs_Talk.prototype.initialize = function(obj) {
    Sprite.prototype.initialize.call(this);
    this._obj = obj;
    this.initData();
    this.sizeCount();
    this.createBitmap();
};
XdRs_Talk.prototype.initData = function() {
    this._arrowType = Math.randomInt(3);
    this._count = XdRsData.npcIs.waitCount(this._obj.talkData().text);
    this._text = this._obj.talkData().text.split('\n');
    this._color = XdRsData.npcIs.getTalkColr(this._obj.talkData().bc);
    this._fontColor = XdRsData.npcIs.getTalkColr(this._obj.talkData().fc);
    this._fontSize = this._obj.talkData().size;
};
XdRs_Talk.prototype.sizeCount = function() {
    var bitmap = new Bitmap(32,32);
    var n = XdRsData.npcIs.side.clamp(0, 10);
    bitmap.fontSize = this._fontSize;
    this._width = 160;
    for (var i=0;i<this._text.length;i++){
        var cw = bitmap.measureTextWidth(this._text[i]) + 24 + n;
        if (cw > this._width) this._width = cw;
    }
    this._height = (this._fontSize + 4) * this._text.length + 54;
};
XdRs_Talk.prototype.createBitmap = function() {
    this.bitmap = new Bitmap(this._width, this._height);
    this._ox = Math.randomInt(this.bitmap.width-120) + 60;
    this.anchor.x = this._ox / this.bitmap.width; this.anchor.y = 1;
    this.drawBack();this.drawArrow();this.drawTalk();
};
XdRs_Talk.prototype.drawBack = function() {
    var n = XdRsData.npcIs.side.clamp(0, 10);
    var shadow = 'rgba('+XdRsData.npcIs.shadow+')';
    var height = this.bitmap.height - 30;
    n && this.drawFrame(n,n,this.bitmap.width,height+n,shadow);
    this.drawFrame(0,0,this.bitmap.width-n,height,this._color);
    this.bitmap.clearRect(0,height+n,this.bitmap.width,n);
    n && this.bitmap.fillRect(this.bitmap.width-10-n,height-10,10,10,shadow);
    n && this.bitmap.drawCircle(this.bitmap.width-10-n,height-10,10,this._color);
};
XdRs_Talk.prototype.drawFrame = function(x,y,w,h,color) {
    this.bitmap.fillRect(x,y,w,h,color);
    for (var i=0;i<4;i++){
        var ax = [x,w-10][i%2];
        var ay = [y,h-10][Math.floor(i/2)];
        this.bitmap.clearRect(ax,ay,10,10);
        var dx = i % 2 ? ax : ax+10, dy = i < 2 ? ay+10 : ay;
        this.bitmap.drawCircle(dx,dy,10,color);
    }
};
XdRs_Talk.prototype.drawArrow = function() {
    var lx1 = lx2 = this._ox;
    var add1 = [-0.4,-1.4,0.4][this._arrowType],add2 = [0.4,-0.4,1.4][this._arrowType];
    var n = XdRsData.npcIs.side.clamp(0, 10);
    if (n) n += this._arrowType == 2 ? 3 : 0;
    var shadow = 'rgba('+XdRsData.npcIs.shadow+')';
    var y = this.bitmap.height;
    for (var i=0;i<31;i++){
        this.bitmap.fillRect(lx1, y, lx2-lx1, 1, this._color);
        n && this.bitmap.fillRect(lx2-1, y, n, 1, shadow);
        lx1 += add1;lx2 += add2; y -= 1;
    }
};
XdRs_Talk.prototype.drawTalk = function() {
    this.bitmap.fontSize = this._fontSize;
    this.bitmap.textColor = this._fontColor;
    var y = 12;
    for (var i=0;i<this._text.length;i++){
        this.bitmap.drawText(this._text[i],12,y,this.bitmap.width,this._fontSize);
        y += this._fontSize + 4;
    }
};
XdRs_Talk.prototype.canDel = function() {
    return !this._count;
};
XdRs_Talk.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this._count && this.updateCount();
    this.x = this._obj.talkX();
    this.y = this._obj.talkY();
};
XdRs_Talk.prototype.updateCount = function() {
    if (this._obj.isInterruptTalk()) this._count = 1;
    this._count--;
    !this._count && $gameMap.setDelTalkTip(true);
    !this._count && this._obj.closeTalking();
};
//==================================================================================================================
Sprite_Character.prototype.isLocked = function() {
    return this._character && this._character.isLocked();
};
Sprite_Character.prototype.isInterruptTalk = function() {
    return this._character && this._character.isInterruptTalk();
};
Sprite_Character.prototype.talkData = function() {
    return this._character ? this._character.talkData() : {};
};
Sprite_Character.prototype.closeTalk = function() {
    this._character && this._character.closeTalk();
};
Sprite_Character.prototype.talkX = function() {
    return this.x;
};
Sprite_Character.prototype.talkY = function() {
    return this.y - this.patternHeight() - XdRsData.npcIs.addY;
};
Sprite_Character.prototype.closeTalking = function() {
    this._character.closeTalking();
};
//==================================================================================================================
XdRsData.npcIs.SMinitialize = Spriteset_Map.prototype.initialize;
Spriteset_Map.prototype.initialize = function() {
    XdRsData.npcIs.SMinitialize.call(this);
    this._talkSprites = [];
};
XdRsData.npcIs.SMcreateTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
    XdRsData.npcIs.SMcreateTilemap.call(this);
    this.createTalkSprite();
};
Spriteset_Map.prototype.createTalkSprite = function() {
    this._talkSprite = new Sprite();
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var x = (Graphics.width - width) / 2;
    var y = (Graphics.height - height) / 2;
    this._talkSprite.setFrame(x, y, width, height);
    this._baseSprite.addChild(this._talkSprite);
};
XdRsData.npcIs.SMupdate = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
    XdRsData.npcIs.SMupdate.call(this);
    this.updateTalk();
};
Spriteset_Map.prototype.updateTalk = function() {
    $gameMap.hasTalk()    && this.createTalk();
    $gameMap.delTalkTip() && this.delTalk();
};
Spriteset_Map.prototype.createTalk = function() {
    $gameMap.setTalkTip(false);
    var sprites = this.talkedObj();
    if (!sprites.length) return;
    for (var i=0;i<sprites.length;i++){
        var talk = new XdRs_Talk(sprites[i]);
        this._talkSprites.push(talk);
        this._talkSprite.addChild(talk);
        sprites[i].closeTalk();
    }
};
Spriteset_Map.prototype.delTalk = function() {
    $gameMap.setDelTalkTip(false);
    if (!this._talkSprites.length) return;
    for (var i=0;i<this._talkSprites.length;i++){
        if (this._talkSprites[i].canDel()) {
            this._talkSprite.removeChild(this._talkSprites[i]);
            this._talkSprites.splice(i,1);
        }
    }
};
Spriteset_Map.prototype.talkedObj = function() {
    return this._characterSprites.filter(function(s){return s.talkData().text;});
};
//==================================================================================================================
XdRsData.npcIs.SBloadSystemImages = Scene_Boot.loadSystemImages;
Scene_Boot.loadSystemImages = function() {
    XdRsData.npcIs.SBloadSystemImages.call(this);
    XdRsData.npcIs.image && ImageManager.reserveSystem(XdRsData.npcIs.image);
};
//==================================================================================================================
XdRsData.npcIs.SMterminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
    XdRsData.npcIs.SMterminate.call(this);
    $gameMap.stopTalkAll();
};
//================================================================================================================== 
}());
//==================================================================================================================