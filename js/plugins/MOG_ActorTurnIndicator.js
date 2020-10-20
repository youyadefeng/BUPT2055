//=============================================================================
// MOG_ActorTurnIndicator.js
//=============================================================================

/*:
 * @plugindesc (v1.0)[v1.1]  战斗 - 角色选择光环(sv)
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-光环
 * @desc 光环的图片资源。
 * @default 角色选择光环
 * @require 1
 * @dir img/system/
 * @type file
 * 
 * @param 光环帧数
 * @desc 设置4，资源图片将根据设置切割成4份，然后依次播放。
 * @default 4
 * 
 * @param 动画播放速度
 * @desc 播放每份的速度，单位 帧/秒。（1秒60帧）
 * @default 5
 *
 * @param 偏移-光环 X
 * @desc 以当前角色的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 偏移-光环 Y
 * @desc 以当前角色的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 混合模式
 * @type number
 * @min 0
 * @max 16
 * @desc pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 * @default 0
 * 
 * @param 旋转速度
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0
 *
 * @help  
 * =============================================================================
 * +++ MOG - Actor Turn Indicator (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * SV模式下，当前选中的角色会出现光环动画。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 需要配置资源文件：（img/system文件夹）
 *
 * 资源-光环
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ActorTurnIndicator = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ActorTurnIndicator');
    Moghunter.turnIndicatorX = Number(Moghunter.parameters['偏移-光环 X'] || 0);
    Moghunter.turnIndicatorY = Number(Moghunter.parameters['偏移-光环 Y'] || 0);
	Moghunter.turnIndicatorBlendMode = Number(Moghunter.parameters['混合模式'] || 1);
    Moghunter.turnIndicatorR = Number(Moghunter.parameters['旋转速度'] || 0.00);
	Moghunter.turnIndicatorFrames = Number(Moghunter.parameters['光环帧数'] || 4);
    Moghunter.turnIndicatorSpeed = Number(Moghunter.parameters['动画播放速度'] || 5);
	
	Moghunter.src_TurnIndicator = String(Moghunter.parameters['资源-光环']);

//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_turnIndicator_TempInitialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_turnIndicator_TempInitialize.call(this);
	this._turnIndicatorData = [0,0];
};

//=============================================================================
// * Sprite Actor
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_turnIndicator_sprActor_initMembers = Sprite_Actor.prototype.initMembers;
Sprite_Actor.prototype.initMembers = function() {
	_mog_turnIndicator_sprActor_initMembers.call(this);
	if ($gameSystem.isSideView()) {this.createTurnIndicator()};
};

//==============================
// * create Turn Indicator
//==============================
Sprite_Actor.prototype.createTurnIndicator = function() {
	this._turnIndicator = new TurnIndicatorBattle(this)
    this.addChild(this._turnIndicator);
};

//==============================
// * set Battler
//==============================
var _mog_turnIndicator_sprActor_setBattler = Sprite_Actor.prototype.setBattler;
Sprite_Actor.prototype.setBattler = function(battler) {
	_mog_turnIndicator_sprActor_setBattler.call(this,battler);
	if (this._turnIndicator) {this._turnIndicator.setActor(battler)};
};

//=============================================================================
// * Turn Indicator Battle
//=============================================================================
function TurnIndicatorBattle() {
    this.initialize.apply(this, arguments);
};

TurnIndicatorBattle.prototype = Object.create(Sprite.prototype);
TurnIndicatorBattle.prototype.constructor = TurnIndicatorBattle;

//==============================
// * Initialize
//==============================
TurnIndicatorBattle.prototype.initialize = function(sprite) {
    Sprite.prototype.initialize.call(this);	
    this.loadBitmap();
	this._sprite = sprite;
    this.setup();
};

//==============================
// * load Bitmap
//==============================
TurnIndicatorBattle.prototype.loadBitmap = function() {
    this._image = ImageManager.loadSystem(Moghunter.src_TurnIndicator);
};

//==============================
// * Setup
//==============================
TurnIndicatorBattle.prototype.setup = function() {
	this.data = {};
	this.data.actor = null;
	this.data.visible = false;
	this.data.cw = 0;
	this.data.ch = 0;
	this.data.ch2 = 0;
	this.data.x = Moghunter.turnIndicatorX;
	this.data.y = Moghunter.turnIndicatorY;
	this.data.xC = 0;
	this.data.yC = 0;	
	this.data.rotation = Moghunter.turnIndicatorR;
	this.data.frames = [Number(Moghunter.turnIndicatorFrames),0,Number(Moghunter.turnIndicatorSpeed),0];
	this.bitmap = this._image;
	this.visible = false;
	this.blendMode = Number(Moghunter.turnIndicatorBlendMode);
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
};

//==============================
// * refresh Frame Animation
//==============================
TurnIndicatorBattle.prototype.refreshFrameAnimation = function() {
	this.data.frames[3] = 0;
	this.data.frames[1]++;
	if (this.data.frames[1] >= this.data.frames[0]) {this.data.frames[1] = 0};
	var rcw = this.data.cw * this.data.frames[1]
	this.setFrame(rcw,0,this.data.cw,this.data.ch);
};

//==============================
// * update Frame Animation
//==============================
TurnIndicatorBattle.prototype.updateFrameAnimation = function() {
    this.data.frames[3]++;
	if (this.data.frames[3] >= this.data.frames[2]) {this.refreshFrameAnimation()};   
};

//==============================
// * battler
//==============================
TurnIndicatorBattle.prototype.setActor = function(battler) {
	this.data.actor = battler;
};

//==============================
// * get Bitmap Data
//==============================
TurnIndicatorBattle.prototype.getBitmapData = function() {
	this.data.cw = this._image.width / this.data.frames[0];
	this.data.ch = this._image.height;
	this.refreshFrameAnimation();
};

//==============================
// * actor
//==============================
TurnIndicatorBattle.prototype.actor = function() {
     return this.data.actor;
};

//==============================
// * refresh Actor
//==============================
TurnIndicatorBattle.prototype.refresh = function() {
     this.data.visible = this.isVisible();
	 this.scale.x = 2;
	 this.scale.y = this.scale.x;
	 this.opacity = 0;
	 this.data.ch2 = this._sprite._mainSprite ? this._sprite._mainSprite.height / 2 : this._sprite.height / 2;
};

//==============================
// * need Refresh Actor
//==============================
TurnIndicatorBattle.prototype.needRefresh = function() {
     return this.data.visible != this.isVisible();
};

//==============================
// * is Visible
//==============================
TurnIndicatorBattle.prototype.isVisible = function() {
    if (this.data.actor != BattleManager.actor()) {return false};
	return true;
};

//==============================
// * update Visible
//==============================
TurnIndicatorBattle.prototype.updateVisible = function() {
     this.visible = this.isVisible();
};

//==============================
// * x Pos X
//==============================
TurnIndicatorBattle.prototype.posX = function() {
	return this.data.x;
};

//==============================
// * x Pos Y
//==============================
TurnIndicatorBattle.prototype.posY = function() {
	return this.data.y - this.data.ch2;
};

//==============================
// * x Pos Y
//==============================
TurnIndicatorBattle.prototype.updateEXCam = function(x,y) {
	this.data.xC = x;
	this.data.yC = y;
};

//==============================
// * update Position
//==============================
TurnIndicatorBattle.prototype.updatePosition = function() {
    this.x = this.posX();
	this.y = this.posY();
};

//==============================
// * update Zoom
//==============================
TurnIndicatorBattle.prototype.updateZoom = function() {
	if (this.scale.x > 1.00) {this.scale.x -= 0.1};
    this.scale.y = this.scale.x;
};

//==============================
// * update Animation
//==============================
TurnIndicatorBattle.prototype.updateAnimation = function() {
    this.updateOther()
	this.updateZoom();
	if (this.data.frames[0] > 1) {this.updateFrameAnimation()};
};

//==============================
// * update Other
//==============================
TurnIndicatorBattle.prototype.updateOther = function() {
    this.rotation += this.data.rotation;
	this.opacity += 20;
};

//==============================
// * update Indicator
//==============================
TurnIndicatorBattle.prototype.updateIndicator = function() {
	if (this.needRefresh()) {this.refresh()};
    this.updateVisible();
	if (!this.visible) {return};
	this.updatePosition();
	this.updateAnimation();
};

//==============================
// * update
//==============================
TurnIndicatorBattle.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this.data.cw === 0) {
		if (this._image.isReady()) {this.getBitmapData()};
	} else {
		this.updateIndicator();
	};
};