//=============================================================================
// MOG_HPGauge.js
//=============================================================================

/*:
 * @plugindesc (v1.3)[v1.2]  敌人 - 生命浮动框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 玩家是否显示浮动框
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc （非SV模式建议false。）
 * true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-玩家生命框
 * @desc 玩家生命外框的图片资源。
 * @default 生命浮动框-玩家框
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-玩家生命内条
 * @desc 玩家生命内条的图片资源。
 * @default 生命浮动框-玩家条
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-玩家生命数值
 * @desc 玩家生命数值的图片资源。
 * @default 生命浮动框-玩家数值
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 敌人是否显示浮动框
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true 
 *
 * @param 资源-敌人生命框
 * @desc 敌人生命外框的图片资源。
 * @default 生命浮动框-敌人框
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-敌人生命内条
 * @desc 敌人生命内条的图片资源。
 * @default 生命浮动框-敌人条
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-敌人生命数值
 * @desc 敌人生命数值的图片资源。
 * @default 生命浮动框-敌人数值
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 选中时显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc 选中目标的单位时，单位显示其生命浮动框
 * true - 显示，false - 不显示
 * @default true
 * 
 * @param 持续时间
 * @type number
 * @min 1
 * @desc 生命条出现后的持续时间。90表示90帧后生命条消失。
 * （1秒60帧）
 * @default 90
 *
 * @param 滑动动画
 * @type boolean
 * @on 滑动消失
 * @off 固定消失
 * @desc 生命条消失时的动画效果。
 * true - 滑动消失，false - 固定消失
 * @default true
 *
 * @param 生命数值最大显示位
 * @type number
 * @min 1
 * @desc 注意,这里是只显示位数,不负责破限。填12表示最大显示12位数。
 * 如果你使用了生命破限脚本，请及时修正你想要显示的最大位数。
 * @default 8
 *  
 * @param 玩家显示生命数值
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default false
 *
 * @param 敌人显示生命数值
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 生命数值未知化
 * @type boolean
 * @on 未知化
 * @off 不使用
 * @desc 敌人生命数值变成"?"号。（我也不明白用途是什么）
 * true - 未知化，false - 不使用
 * @default false
 * 
 * @param 平移-玩家生命框 X
 * @desc 以单位的点为基准，x轴方向平移，单位像素。
 * @default 0
 *
 * @param 平移-玩家生命框 Y
 * @desc 以单位的点为基准，y轴方向平移，单位像素。
 * @default 0
 *
 * @param 平移-玩家生命内条 X
 * @desc 以单位的点为基准，x轴方向平移，单位像素。
 * @default 0
 *
 * @param 平移-玩家生命内条 Y
 * @desc 以单位的点为基准，y轴方向平移，单位像素。
 * @default 3 
 *
 * @param 平移-玩家生命数值 X
 * @desc 以单位的点为基准，x轴方向平移，单位像素。
 * @default -25
 *
 * @param 平移-玩家生命数值 Y
 * @desc 以单位的点为基准，y轴方向平移，单位像素。
 * @default -22
 * 
 * @param 平移-敌人生命框 X
 * @desc 以单位的点为基准，x轴方向平移，单位像素。
 * @default 0
 *
 * @param 平移-敌人生命框 Y
 * @desc 以单位的点为基准，y轴方向平移，单位像素。
 * @default 0
 *
 * @param 平移-敌人生命内条 X
 * @desc 以单位的点为基准，x轴方向平移，单位像素。
 * @default 8
 *
 * @param 平移-敌人生命内条 Y
 * @desc 以单位的点为基准，y轴方向平移，单位像素。
 * @default 10
 *
 * @param 平移-敌人生命数值 X
 * @desc 以单位的点为基准，x轴方向平移，单位像素。
 * @default -25
 *
 * @param 平移-敌人生命数值 Y
 * @desc 以单位的点为基准，y轴方向平移，单位像素。
 * @default -19
 *  
 * @help  
 * =============================================================================
 * +++ MOG - HP Gauge (v1.3) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 使得战斗显示敌人或者玩家的生命条。
 * 浮动框在选中时会出现（可设置），在玩家或敌人受伤时会出现（不可设置）。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 含有战斗姿势的敌人，需要配置资源文件：（img/system文件夹）
 *
 * 资源-玩家生命框（玩家显示如果设为false，可以不配置）
 * 资源-玩家生命内条
 * 资源-玩家生命数值
 *
 * 资源-敌人生命框（敌人显示如果设为false，可以不配置）
 * 资源-敌人生命内条
 * 资源-敌人生命数值
 *
 * （生命条的图片不一定必须与示例的大小一致，插件只要确定外框、内条、
 * 数值的位置就能自动分层显示出来）
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 如果某个敌人需要永久隐藏生命条，在敌人注释中，必须含有下面的关键字：
 *
 * Hide HP
 *
 * （单独一行，关键字前后不能有多余的字符。）
 * 如果你要手动设置生命条的位置，在敌人注释中，设置如下的规则：
 *
 * Hp Gauge Offset: X:Y
 *
 * X为平移的x坐标，Y为平移的y坐标。
 * 比如：Hp Gauge Offset: 0:-240 表示把生命条上移240像素。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 插件指令
 * 你也可以通过插件指令手动隐藏/显示敌人的生命框：
 * 
 * 插件指令（显示）：show_enemyHPGauge A
 * 插件指令（隐藏）：hide_enemyHPGauge A
 *
 * 参数A：第几个敌人
 *        从左往右数第几个敌人。
 *
 * 比如：
 * show_enemyHPGauge 1
 * 显示最左边的敌人的生命框。
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 添加了生命数值最大显示位选项。
 * 添加了生命框隐藏显示的插件指令。
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_HPGauge = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_HPGauge');
    Moghunter.hpgauge_actors = String(Moghunter.parameters['玩家是否显示浮动框'] || "true"); 
	Moghunter.hpgauge_enemies = String(Moghunter.parameters['敌人是否显示浮动框'] || "true");
	Moghunter.hpgauge_selection = String(Moghunter.parameters['选中时显示'] || "true");
	Moghunter.hpgauge_slide = String(Moghunter.parameters['滑动渐变'] || "true");
	Moghunter.hpgauge_showNumberActor = String(Moghunter.parameters['玩家显示生命数值'] || "false"); 
	Moghunter.hpgauge_showNumberEnemy = String(Moghunter.parameters['敌人显示生命数值'] || "true"); 
	Moghunter.hpgauge_NumberAfter = String(Moghunter.parameters['生命数值未知化'] || "false");
    Moghunter.hpgauge_a_x = Number(Moghunter.parameters['平移-敌人生命框 X'] || 0);
    Moghunter.hpgauge_a_y = Number(Moghunter.parameters['平移-敌人生命框 Y'] || 0);
    Moghunter.hpgauge_b_x = Number(Moghunter.parameters['平移-敌人生命内条 X'] || 8);
    Moghunter.hpgauge_b_y = Number(Moghunter.parameters['平移-敌人生命内条 Y'] || 10);	
    Moghunter.hpgauge_c_x = Number(Moghunter.parameters['平移-敌人生命数值 X'] || -30);
    Moghunter.hpgauge_c_y = Number(Moghunter.parameters['平移-敌人生命数值 Y'] || -19);	
    Moghunter.hpgauge_a_xa = Number(Moghunter.parameters['平移-玩家生命框 X'] || 0);
    Moghunter.hpgauge_a_ya = Number(Moghunter.parameters['平移-玩家生命框 Y'] || 0);
    Moghunter.hpgauge_b_xa = Number(Moghunter.parameters['平移-玩家生命内条 X'] || 0);
    Moghunter.hpgauge_b_ya = Number(Moghunter.parameters['平移-玩家生命内条 Y'] || 3);	
    Moghunter.hpgauge_c_xa = Number(Moghunter.parameters['平移-玩家生命数值 X'] || -25);
    Moghunter.hpgauge_c_ya = Number(Moghunter.parameters['平移-玩家生命数值 Y'] || -19);		
    Moghunter.hp_display = Number(Moghunter.parameters['生命数值最大显示位'] || 8);		
    Moghunter.HPGaugeActor_A = String(Moghunter.parameters['资源-玩家生命框']);	
    Moghunter.HPGaugeActor_B = String(Moghunter.parameters['资源-玩家生命内条']);	
    Moghunter.HPGaugeActor_C = String(Moghunter.parameters['资源-玩家生命数值']);	
    Moghunter.HPGaugeEnemy_A = String(Moghunter.parameters['资源-敌人生命框']);	
    Moghunter.HPGaugeEnemy_B = String(Moghunter.parameters['资源-敌人生命内条']);	
    Moghunter.HPGaugeEnemy_C = String(Moghunter.parameters['资源-敌人生命数值']);	
	Moghunter.hpgauge_duration = Number(Moghunter.parameters['持续时间'] || 90);

//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_hpgauge_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_hpgauge_temp_initialize.call(this);
    this._hpGauge = [true,false];
};

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_hpgauge_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_hpgauge_sys_initialize.call(this);
    this._hpGaugeEDef = [];
};

//==============================
// * 插件指令
//==============================
var _mog_hpGauge_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_hpGauge_Game_Interpreter_pluginCommand.call(this, command, args);
	//打开菜单
	if (command === 'show_enemyHPGauge') {
		if(args.length == 1){
			var temp = Number(args[0])-1;
			if($gameTroop.members()[temp]._ehpgauge){
				$gameTroop.members()[temp]._ehpgauge[0] = true;
			}
		}
	}
	if (command === 'hide_enemyHPGauge') {
		if(args.length == 1){
			var temp = Number(args[0])-1;
			if($gameTroop.members()[temp]._ehpgauge){
				$gameTroop.members()[temp]._ehpgauge[0] = false;
			}
		}
	}
}

//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * processVictory
//==============================
var _mog_hpGauge_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 $gameTemp._hpGauge[0] = false;
	 _mog_hpGauge_processVictory.call(this);	 
};

//==============================
// * processAbort
//==============================
var _mog_hpGauge_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	 $gameTemp._hpGauge[0] = false;
	 _mog_hpGauge_processAbort.call(this);	 
};

//==============================
// * processDefeat
//==============================
var _mog_hpGauge_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	 $gameTemp._hpGauge[0] = false;
	 _mog_hpGauge_processDefeat.call(this);	 
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_hpgauge_gbat_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    _mog_hpgauge_gbat_initMembers.call(this);
    this._ehpgauge = [false,0,0,false,false];
};

//==============================
// * check HP Gauge Notes
//==============================
Game_Battler.prototype.checkHPGaugeNotes = function() {
	this.notetags().forEach(function(note) {
		if (note == "Hide HP") {this._ehpgauge[0] = false};
         var note_data = note.split(': ')
		 if (note_data[0].toLowerCase() == "hp gauge offset"){
			 var par = note_data[1].split(':');
		     this._ehpgauge[1] = Number(par[0]);
			 this._ehpgauge[2] = Number(par[1]);
		 };		
	},this);
};

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//=============================================================================
// ** Game_Actor
//=============================================================================

//==============================
// * Setup
//==============================
var _mog_hp_gauge_gactor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_mog_hp_gauge_gactor_setup.call(this,actorId);
	if (String(Moghunter.hpgauge_actors) === "true") {this._ehpgauge[0] = true};
	this.checkHPGaugeNotes();
};

//=============================================================================
// ** Game_Enemy
//=============================================================================

//==============================
// * Setup
//==============================
var _mog_hpgauge_genemy_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_hpgauge_genemy_setup.call(this,enemyId, x, y);
	if (String(Moghunter.hpgauge_enemies) === "true") {this._ehpgauge[0] = true};
	this.checkHPGaugeNotes();
};

//==============================
// * Die
//==============================
var _mog_hpgauge_genemy_die = Game_Enemy.prototype.die;
Game_Enemy.prototype.die = function() {
	_mog_hpgauge_genemy_die.call(this);
	$gameSystem._hpGaugeEDef[this._enemyId] = true;
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _mog_hpgauge_gaction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 _mog_hpgauge_gaction_apply.call(this,target);
     if (target) {
		 if (this.isHpRecover()) {
			 target._ehpgauge[4] = true;
		 } else if (this.item() && this.item().damage.type === 5) {
			 target._ehpgauge[4] = true;
			 var subj = this.subject();
			 if (subj) {subj._ehpgauge[4] = true};
		 };
	  };
};

//=============================================================================
// ** Spriteset_Battle
//=============================================================================	

//==============================
// * CreateLowerLayer
//==============================
var _mog_hpGauge_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer;
Spriteset_Battle.prototype.createLowerLayer = function() {
	_mog_hpGauge_createLowerLayer.call(this);
	this.create_HPGauge();
};

//==============================
// * Create HP Gauge
//==============================
Spriteset_Battle.prototype.create_HPGauge = function() {
    this.createHPField();
	this.createHPSprites()
};

//==============================
// * Create EHP Field
//==============================
Spriteset_Battle.prototype.createHPField = function() {
    this._hpField = new Sprite();
	this._hpField.z = 100;
	this.addChild(this._hpField);
};

//==============================
// * Create HP Sprites
//==============================
Spriteset_Battle.prototype.createHPSprites = function() {
	$gameTemp._hpGauge[0] = true;
	this._HPSprites = [];
    this.createHPSpritesActor();
	this.createHPSpritesEnemy();
};

//==============================
// * create H PSprites Actor
//==============================
Spriteset_Battle.prototype.createHPSpritesActor = function() {
	if (String(Moghunter.hpgauge_actors) != "true") {return};
	for (var i = 0; i < this._actorSprites.length; i++) {
		 this._HPSprites[i] = new HPGaugeSprite(this._actorSprites[i],0);
		 this._hpField.addChild(this._HPSprites[i]);	

	};
};

//==============================
// * create H PSprites Enemy
//==============================
Spriteset_Battle.prototype.createHPSpritesEnemy = function() {
	if (String(Moghunter.hpgauge_enemies) != "true") {return};
	for (var i = 0; i < this._enemySprites.length; i++) {
		 this._HPSprites[i] = new HPGaugeSprite(this._enemySprites[i],1);
		 this._hpField.addChild(this._HPSprites[i]);
	};
};

//==============================
// * remove HP Sprites
//==============================
Spriteset_Battle.prototype.removeHPSprites = function() {
	if (!this._HPSprites) {return};
	for (var i = 0; i < this._HPSprites.length; i++) {
		 this._hpField.removeChild(this._HPSprites[i]);	
	};
};

//==============================
// * Update
//==============================
var _mog_hpGauge_sprBat_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
	_mog_hpGauge_sprBat_update.call(this);
	if (Imported.MOG_BattleCamera && this._hpField) {this.updateHPField()};
};

//==============================
// * Update
//==============================
Spriteset_Battle.prototype.updateHPField = function() {
    this._hpField.x = this._battleField.x
	this._hpField.y = this._battleField.y
};

//=============================================================================
// ** HP Gauge Sprite
//=============================================================================
function HPGaugeSprite() {
    this.initialize.apply(this, arguments);
};

HPGaugeSprite.prototype = Object.create(Sprite.prototype);
HPGaugeSprite.prototype.constructor = HPGaugeSprite;

//==============================
// * Initialize
//==============================
HPGaugeSprite.prototype.initialize = function(sprite,type) {
    Sprite.prototype.initialize.call(this);
    this._sprite = sprite;
	this._slideX = 0;
	this._duration = 0;
	this.opacity = 0;
	this.type = type;
	this.z = 100;
	this._slideA = String(Moghunter.hpgauge_slide) === "true" ? true : false;
	this._selectionHP = String(Moghunter.hpgauge_selection) === "true" ? true : false;
	if (type === 0) {
    	this._showHPNumber = String(Moghunter.hpgauge_showNumberActor) === "true" ? true : false;
	} else {
	    this._showHPNumber = String(Moghunter.hpgauge_showNumberEnemy) === "true" ? true : false;
	};
	this._IDA = type === 0 ? true : this.enemyIDA();
	if (type === 1 && String(Moghunter.hpgauge_NumberAfter) != "true") {this._IDA = true};
	this._data = [0,0,0,0,0];
	this.loadBitmaps();
};
   
//==============================
// * Battler
//==============================
HPGaugeSprite.prototype.battler = function() {
    return this._sprite._battler;
};

//==============================
// * Load Bitmaps
//==============================
HPGaugeSprite.prototype.loadBitmaps = function() {
	if (this.type === 0) {
        this._layImg = ImageManager.loadSystem(Moghunter.HPGaugeActor_A);
	    this._meterImg = ImageManager.loadSystem(Moghunter.HPGaugeActor_B);
		this._numberImg = ImageManager.loadSystem(Moghunter.HPGaugeActor_C);
	} else {
        this._layImg = ImageManager.loadSystem(Moghunter.HPGaugeEnemy_A);
	    this._meterImg = ImageManager.loadSystem(Moghunter.HPGaugeEnemy_B);	
		this._numberImg = ImageManager.loadSystem(Moghunter.HPGaugeEnemy_C);	
	};
};

//==============================
// * createSprites
//==============================
HPGaugeSprite.prototype.createSprites = function() {
	this.createLayout();
	this.createMeter();
	if (this._showHPNumber) {this.createNumber()};
};

//==============================
// * Create Layout
//==============================
HPGaugeSprite.prototype.createLayout = function() {
    this._layout = new Sprite(this._layImg);
	if (this.type === 0) {
	    this._layout.x = Moghunter.hpgauge_a_xa - this._layImg.width / 2;
	    this._layout.y = Moghunter.hpgauge_a_ya - this._layImg.height / 2;
	} else {
	    this._layout.x = Moghunter.hpgauge_a_x - this._layImg.width / 2;
	    this._layout.y = Moghunter.hpgauge_a_y - this._layImg.height / 2;
	};
	this.addChild(this._layout);
};

//==============================
// * Create Gauge
//==============================
HPGaugeSprite.prototype.createMeter = function() {
	this._meter = [];
	for (var i = 0; i < 2; i++) {
		this._meter[i] = new Sprite(this._meterImg);
		this._meter[i].value1 = this.battler().hp;
		this._meter[i].value2 = this.battler().mhp;
		this._meter[i].ds = 0;
		this._meter[i].w = this._meterImg.width;
		this._meter[i].h = this._meterImg.height / 2;
		if (this.type === 0) {
		    this._meter[i].x = Moghunter.hpgauge_a_xa + Moghunter.hpgauge_b_xa - this._meterImg.width / 2;
		    this._meter[i].y = Moghunter.hpgauge_a_ya + Moghunter.hpgauge_b_ya - this._meterImg.height / 2;
		} else {
		    this._meter[i].x = Moghunter.hpgauge_a_x + Moghunter.hpgauge_b_x - this._meterImg.width / 2;
		    this._meter[i].y = Moghunter.hpgauge_a_y + Moghunter.hpgauge_b_y - this._meterImg.height / 2;
	    };
		this.addChild(this._meter[i]);
	};
    this.refreshMeter(this._meter[0],this._meter[0].value1,this.battler().mhp,1);
	this.refreshMeter(this._meter[1],this.battler().hp,this.battler().mhp,0);	
	this.updateMeter();
};

//==============================
// * Need Refresh Blue Meter
//==============================
HPGaugeSprite.prototype.needRefreshBlueMeter = function() {
	if (this.battler()._ehpgauge[4]) {return true};
    if (this._meter[1].value1 != this.battler().hp) {return true};
	if (this._meter[1].value2 != this.battler().mhp) {return true};
	return false
};

//==============================
// * refresh Blue Meter
//==============================
HPGaugeSprite.prototype.refreshBlueMeter = function() {
	 this.battler()._ehpgauge[4] = false;
     this._meter[1].value1 = this.battler().hp;
	 this._meter[1].value2 = this.battler().mhp;
	 if (!$gameTemp._hpGauge[0]) {return};
	 this.refreshMeter(this._meter[0],this._meter[0].value1,this.battler().mhp,1);
	 this.refreshMeter(this._meter[1],this.battler().hp,this.battler().mhp,0);
	 this.prepareSlide();
};

//==============================
// * prepare Slide
//==============================
HPGaugeSprite.prototype.prepareSlide = function() {
	if (this.opacity < 100 || this._slideX > 0) {
	    this._slideX = this._slideA ? -50 : -0.01;
	    this.opacity = 0;
	};
	this._duration = Math.min(Math.max(Moghunter.hpgauge_duration,1),999);
};

//==============================
// * Update Dif
//==============================
HPGaugeSprite.prototype.update_dif = function(value,real_value,speed,type) {
	if (value == real_value) {return value};
	var mr = type === 0 ? 1 : 0.1; 
    var dnspeed = mr + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};
	} else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	if (type === 0) {
	    return Math.floor(value);
	} else {
		return value;
	};
};

//==============================
// * Need Refresh Red Meter
//==============================
HPGaugeSprite.prototype.needRefreshRedMeter = function() {
     if (this._meter[0].value1 != this.battler().hp) {return true};
	 return false;
};

//==============================
// * refresh Red Meter
//==============================
HPGaugeSprite.prototype.refreshRedMeter = function() {
  	 this._meter[0].value1 = this.update_dif(this._meter[0].value1,this.battler().hp, 60,1);
	 this.refreshMeter(this._meter[0],this._meter[0].value1,this.battler().mhp,1); 
};

//==============================
// * Update Meter
//==============================
HPGaugeSprite.prototype.updateMeter = function() {
	 if (this.needRefreshRedMeter()) {this.refreshRedMeter()};
	 if (this.needRefreshBlueMeter()) {this.refreshBlueMeter()};
};

//==============================
// * Refresh Meter
//==============================
HPGaugeSprite.prototype.refreshMeter = function(sprite,value1,value2,h) {
     var wd = value1 * sprite.w / value2
	 sprite.setFrame(0,sprite.h * h,wd,sprite.h);  
};

//==============================
// * create Number
//==============================
HPGaugeSprite.prototype.createNumber = function() {
	this._hp_number = [];
	this._numberData = [this.battler().hp - 1,this._numberImg.width / 11,this._numberImg.height]
	for (var i = 0; i < Moghunter.hp_display; i++) {
		 this._hp_number[i] = new Sprite(this._numberImg);
		 this._hp_number[i].visible = false;
		 if (this.type === 0) {
		     this._hp_number[i].x = Moghunter.hpgauge_a_xa + Moghunter.hpgauge_c_xa;
		     this._hp_number[i].y = Moghunter.hpgauge_a_ya + Moghunter.hpgauge_c_ya;
		 } else {
		     this._hp_number[i].x = Moghunter.hpgauge_a_x + Moghunter.hpgauge_c_x;
		     this._hp_number[i].y = Moghunter.hpgauge_a_y + Moghunter.hpgauge_c_y;
		 };
		 this._hp_number[i].org = [this._hp_number[i].x,this._hp_number[i].y];
		 this.addChild(this._hp_number[i]);		 
	};
};

//==============================
// * update Number
//==============================
HPGaugeSprite.prototype.updateNumber = function() {
	if (this._numberData[0] != this.battler().hp) {this.refreshNumber()};
};

//==============================
// * enemy IDA
//==============================
HPGaugeSprite.prototype.enemyIDA = function() {
	 if (this.battler().isActor()) {return true};
     return $gameSystem._hpGaugeEDef[this.battler()._enemyId];
};

//==============================
// * ID available
//==============================
HPGaugeSprite.prototype.idIsAvailable = function() {
	return this._IDA;
};

//==============================
// * refresh Number
//==============================
HPGaugeSprite.prototype.refreshNumber = function() {
	this._numberData[0] = this.update_dif(this._numberData[0],this.battler().hp, 40,0);
    var w = this._numberData[1];
	var h = this._numberData[2];
	var number = Math.abs(this._numberData[0]).toString().split(""); 
    for (var i = 0; i < this._hp_number.length; i++) {
	   this._hp_number[i].visible = false;	 
	   if (this.idIsAvailable()) {	
		   if (i <  number.length) {
			   var n = Number(number[i]);
			   this._hp_number[i].setFrame(n * w, 0, w, h);
			   this._hp_number[i].visible = true;	   
			   this._hp_number[i].x = this._hp_number[i].org[0] + (w * i);
		   };
	   } else {
		   if (i === 0) {
			   this._hp_number[0].setFrame(10 * w, 0, w, h);
			   this._hp_number[0].visible = true;	   
			   this._hp_number[0].x = this._hp_number[0].org[0] + (w * 2);			     
		   };
	   };
    };	
};

//==============================
// * Is Visible
//==============================
HPGaugeSprite.prototype.isVisible = function() {
	if (!this.battler()) {return false};
	if (this.battler().isHidden()) {return false};
    if (!this.battler()._ehpgauge[0]) {return false};
	if (this.type === 0 && !$gameSystem.isSideView()) {
		return false;
	};
	return true;
};

//==============================
// * force Visible
//==============================
HPGaugeSprite.prototype.forceVisible = function() {
     if (this.battler()._ehpgauge[3]) {return true};
	 if (this._selectionHP && this.battler().isSelected() && !this.battler().isDead()) {return true};
	 return false;
};

//==============================
// * pos X
//==============================
HPGaugeSprite.prototype.posX = function() {
	var xs = this.forceVisible() ? 0 : this._slideX;
    return this._sprite.x + xs + this.battler()._ehpgauge[1];
};

//==============================
// * pos Y
//==============================
HPGaugeSprite.prototype.posY = function() {
    return this._sprite.y + this.battler()._ehpgauge[2];
};

//==============================
// * Update Slide
//==============================
HPGaugeSprite.prototype.updateSlide = function() {
	this._slideX += 2;
	this.opacity += 10;
	if (this._slideX >= 0) {
		this._slideX = 0;
		this.opacity = 255;
	};
};

//==============================
// * Update Fade
//==============================
HPGaugeSprite.prototype.updateFade = function() {
	if (this._slideA) {this._slideX += 2};
	this.opacity -= 10;
};

//==============================
// * Update Slide
//==============================
HPGaugeSprite.prototype.updateAnimation = function() {
    if (this._slideX < 0) {this.updateSlide();return};
	if (this._duration > 0) {this._duration--;return};
	if (this.opacity > 0) {this.updateFade()};	
};

//==============================
// * Update Force Visible
//==============================
HPGaugeSprite.prototype.updateForceVisible = function() {
    this.opacity = 255;
    this._duration = 0;
    this._slideX = 0;
};

//==============================
// * Update Position
//==============================
HPGaugeSprite.prototype.updatePosition = function() {
   if (this.forceVisible()) {
       this.updateForceVisible();
   } else {
	   this.updateAnimation();
   };
   this.x = this.posX();
   this.y = this.posY();
};

//==============================
// * Update
//==============================
HPGaugeSprite.prototype.update = function() {
    Sprite.prototype.update.call(this);
	this.visible = this.isVisible();
	if (!this.battler()) {return};
	if (!this._layout && this._meterImg.isReady()) {this.createSprites()};
	if (this._meter) {this.updateMeter()};
	if (this._hp_number) {this.updateNumber()};
    this.updatePosition();
};