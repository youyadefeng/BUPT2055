//=============================================================================
// MOG_TitleSplashScreen.js
//=============================================================================

/*:
 * @plugindesc (v1.0)[v1.1]  标题 - 启动画面
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 画面持续时间
 * @type number
 * @min 0
 * @desc 画面持续的时间，单位帧。（1秒60帧）
 * @default 60
 *
 * @param 淡入淡出速度
 * @type number
 * @min 1
 * @desc 设置3，则255/3帧内完成画面淡入，然后255/3帧淡出。
 * （1秒60帧）设置2大概4秒左右。
 * @default 2
 *
 * @param 是否初始全屏
 * @type boolean
 * @on 全屏
 * @off 不全屏
 * @desc true - 全屏，false - 不全屏
 * @default false
 * 
 * @param ---播放的画面---
 * @default 
 *
 * @param 画面-1
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-2
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-3
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-4
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-5
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-6
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-7
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-8
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-9
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 画面-10
 * @parent ---播放的画面---
 * @desc 播放的画面图片。注意顺序，如果为空则结束播放。
 * @default 
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 *
 * @help  
 * =============================================================================
 * +++ MOG - Title Splash Screen (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 启动游戏时最初会播放几张图片。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 在画面中配置资源文件：（img/titles2 文件夹）
 *
 * 画面-1
 * 画面-2
 * ……
 *
 * 注意顺序，从1开始依次播放。
 * 如果2没有配置图片，则后面所有配置的画面都跳过。以此类推。
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
　　Imported.MOG_TitleSplashScreen = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleSplashScreen');
    Moghunter.title_splash_duration = Number(Moghunter.parameters['画面持续时间'] || 60);
    Moghunter.title_splash_fade_speed = Number(Moghunter.parameters['淡入淡出速度'] || 2);
    Moghunter.title_full_screen_mode = (Moghunter.parameters['是否初始全屏'] || false);

	Moghunter.title_list_length = 10;
	Moghunter.title_list = {};
	for (Moghunter.i = 1; Moghunter.i <= Moghunter.title_list_length ; ++Moghunter.i) {
	  Moghunter.line = "String(Moghunter.parameters['画面-" + Moghunter.i + "'] )";
	  Moghunter.title_list[Moghunter.i] = eval(Moghunter.line);
	};

//=============================================================================
// ** Scene Boot
//=============================================================================	

//==============================
// * Start
//==============================
var _alias_mog_title_splash_screen_boot_start = Scene_Boot.prototype.start
Scene_Boot.prototype.start = function() {
	if (Moghunter.title_full_screen_mode == "true") {Graphics._requestFullScreen()};
	if (!DataManager.isBattleTest() && !DataManager.isEventTest()) {
	   SceneManager.goto(Scene_Splash_Screen);
	   return
    }
	_alias_mog_title_splash_screen_boot_start.call(this);
};


//=============================================================================
// ** Scene Splash Screen
//=============================================================================	
function Scene_Splash_Screen() {
    this.initialize.apply(this, arguments);
}
Scene_Splash_Screen.prototype = Object.create(Scene_Base.prototype);
Scene_Splash_Screen.prototype.constructor = Scene_Splash_Screen;

//==============================
// * Initialize
//==============================
Scene_Splash_Screen.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

//==============================
// * Create
//==============================
Scene_Splash_Screen.prototype.create = function() {	
    Scene_Base.prototype.create.call(this);
	this._splash_data = [0,0, Math.max(Moghunter.title_splash_duration,1),Math.max(Moghunter.title_splash_fade_speed, 1)];
    this._splash_img = [];
	this._splash_sprite = new Sprite();
    this._splash_sprite.anchor.x = 0.5;
    this._splash_sprite.anchor.y = 0.5;
	this._splash_sprite.x = Graphics.boxWidth / 2;
	this._splash_sprite.y = Graphics.boxHeight / 2;
	this.addChild(this._splash_sprite);
	for (i = 0; i < Moghunter.title_list_length; i++){
		if(Moghunter.title_list[i] === ""){
			break;
		}
		this._splash_img.push(ImageManager.loadTitle2(Moghunter.title_list[i]));
	};
	this.refresh_splash_screen()
};

//==============================
// * Refresh Splash Screen
//==============================
Scene_Splash_Screen.prototype.refresh_splash_screen = function() {
   if (this._splash_data[0] >= this._splash_img.length) {
	   AudioManager.stopMe();
       DataManager.setupNewGame();
       SceneManager.goto(Scene_Title);
       Window_TitleCommand.initCommandPosition();	
       return;
   };	
   this._splash_sprite.bitmap = this._splash_img[this._splash_data[0]];
   this._splash_sprite.opacity = 0;
   this._splash_data[0] += 1;
   this._splash_data[1] = this._splash_data[2];
   
};

//==============================
// * Start
//==============================
Scene_Splash_Screen.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.fadeSpeed(), false);
};

//==============================
// * Update
//==============================
Scene_Splash_Screen.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	if (this._splash_data[1] <= 0) {
		this._splash_sprite.opacity -= this._splash_data[3];
	    if (Input.isTriggered("ok") || TouchInput.isTriggered()) {this._splash_data[0] = this._splash_img.length};		
		if (this._splash_sprite.opacity <= 0) {this.refresh_splash_screen()};
	}
	else {
	  this._splash_sprite.opacity += this._splash_data[3];
	  if ((Input.isTriggered("ok") || TouchInput.isTriggered()) && this._splash_sprite.opacity > 60) {
		  this._splash_data[1] = 0; this._splash_data[0] = this._splash_img.length};
	  if (this._splash_sprite.opacity >= 255) {this._splash_data[1] -= 1};
	};
};