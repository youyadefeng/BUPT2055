//=============================================================================
// MOG_TitleBackground.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.0]  标题 - 活动背景
 * @author Moghunter （Drill_up翻译）
 *
 * @param 速度-前景画 X
 * @type number
 * @min 0
 * @desc 正数向左，负数向右。
 * @default 1
 *
 * @param 速度-前景画 Y
 * @type number
 * @min 0
 * @desc 正数向上，负数向下。
 * @default 0
 *
 * @param 速度-背景画 X
 * @type number
 * @min 0
 * @desc 正数向左，负数向右。
 * @default 0
 *
 * @param 速度-背景画 Y
 * @type number
 * @min 0
 * @desc 正数向上，负数向下。
 * @default 0
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Title Picture Commands (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 使得两张图组成的标题背景可以移动。
 *
 * （前景画来自title1文件夹，背景画来自title2文件夹。）
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_Picture_Command = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleBackground');
    Moghunter.title_bg1_x = Number(Moghunter.parameters['速度-前景画 X'] || 1);
    Moghunter.title_bg1_y = Number(Moghunter.parameters['速度-前景画 Y'] || 0);
    Moghunter.title_bg2_x = Number(Moghunter.parameters['速度-背景画 X'] || 0);
    Moghunter.title_bg2_y = Number(Moghunter.parameters['速度-背景画 Y'] || 0);

	Moghunter.title_bg1_cur_x = 0;
	Moghunter.title_bg1_cur_y = 0;
	Moghunter.title_bg2_cur_x = 0;
	Moghunter.title_bg2_cur_y = 0;
	
//=============================================================================
// ** Scene Title
//=============================================================================	

//==============================
// * Create Background
//==============================
var _alias_mog_title_background_effects_createBackground = Scene_Title.prototype.createBackground
Scene_Title.prototype.createBackground = function() {
	_alias_mog_title_background_effects_createBackground.call(this);
    this.removeChild(this._backSprite1);
    this.removeChild(this._backSprite2);		
    this._backSprite1 = new TilingSprite(ImageManager.loadTitle1($dataSystem.title1Name));
	this._backSprite1.move(0, 0, Graphics.width, Graphics.height);
    this._backSprite2 = new TilingSprite(ImageManager.loadTitle2($dataSystem.title2Name));
	this._backSprite2.move(0, 0, Graphics.width, Graphics.height);
	Moghunter.title_bg1_cur_x = Graphics.width/2;
	Moghunter.title_bg1_cur_y = Graphics.height/2;
	Moghunter.title_bg2_cur_x = Graphics.width/2;
	Moghunter.title_bg2_cur_y = Graphics.height/2;
    this.addChild(this._backSprite1);
    this.addChild(this._backSprite2);	
};

//==============================
// * Update
//==============================
var _alias_mog_title_background_effects_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
    _alias_mog_title_background_effects_update.call(this);
	this.update_background_effects();
};

//==============================
// * Update Background Effects
//==============================
Scene_Title.prototype.update_background_effects = function() {
	Moghunter.title_bg1_cur_x += Moghunter.title_bg1_x;
	Moghunter.title_bg1_cur_y += Moghunter.title_bg1_y;
	Moghunter.title_bg2_cur_x += Moghunter.title_bg2_x;
	Moghunter.title_bg2_cur_y += Moghunter.title_bg2_y;
	this._backSprite1.origin.x = Moghunter.title_bg1_cur_x
	this._backSprite1.origin.y = Moghunter.title_bg1_cur_y;
	this._backSprite2.origin.x = Moghunter.title_bg2_cur_x;
	this._backSprite2.origin.y = Moghunter.title_bg2_cur_y;
	this._backSprite1.update;
	this._backSprite2.update;
}