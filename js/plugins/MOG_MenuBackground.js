//=============================================================================
// MOG_MenuBackground.js
//=============================================================================

/*:
 * @plugindesc (v1.2)[v1.2]  主菜单 - 菜单背景
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 主菜单透明度
 * @type number
 * @min 0
 * @max 255
 * @desc 设置主菜单框架的透明度，0为完全透明，255为完全不透明。
 * @default 100 
 *
 * @param 是否叠加当前景深
 * @type boolean
 * @on 叠加
 * @off 不叠加
 * @desc true - 叠加，false - 不叠加。进入菜单后，可以看到当前地图的景深图片，景深可以与透明菜单叠加。如果选择不叠加，景深将会涂成全黑。
 * @default false
 *
 * @param 速度-X轴方向
 * @desc 背景按x轴方向循环移动的速度。正数向左，负数向右。
 * @default 0
 *
 * @param 速度-Y轴方向
 * @desc 背景按y轴方向循环移动的速度。正数向上，负数向下。
 * @default 0
 *
 * @param 资源-默认背景
 * @desc 默认背景的图片资源。如果其他背景为空，则使用默认背景。
 * 如果你使用了自创的其他选项，在那个选项中将使用默认背景。
 * @default 背景-默认背景
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-主菜单背景
 * @desc 主菜单背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-道具背景
 * @desc 道具背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-技能背景
 * @desc 技能背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-装备背景
 * @desc 装备背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-状态背景
 * @desc 状态背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-队形背景
 * @desc 队形背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-选项背景
 * @desc 选项背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-保存背景
 * @desc 保存背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-商店背景
 * @desc 商店背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-游戏结束选择背景
 * @desc 游戏结束选择背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-敌人图鉴背景
 * @desc 敌人图鉴背景的图片资源。如果为空，则使用默认背景。
 * 前提是你使用了敌人图鉴插件EnemyBook.js。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-道具图鉴背景
 * @desc 道具图鉴背景的图片资源。如果为空，则使用默认背景。
 * 前提是你使用了道具图鉴插件ItemBook.js。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-画廊背景
 * @desc 画廊背景的图片资源。如果为空，则使用默认背景。
 * 前提是你使用了画廊插件MOG_PictureGallery.js。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 * 
 * @param ---自定义背景组---
 * @desc
 *
 * @param 自定义关键字-1
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-1
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-2
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-2
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-3
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-3
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-4
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-4
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-5
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-5
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-6
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-6
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-7
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-7
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-8
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-8
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-9
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-9
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-10
 * @parent ---自定义背景组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义背景-10
 * @parent ---自定义背景组---
 * @desc 自定义背景的图片资源。如果为空，则使用默认背景。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @help
 * =============================================================================
 * +++ MOG - Menu Background (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 进入主菜单，会在菜单背后放置一个背景图片。
 * ★★必须放在 各菜单界面、菜单插件 的前面★★
 * ★★自带背景的菜单插件可能不起作用，因为那个插件自己设置了底图★★
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有menus文件夹！（img/menus）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-默认背景
 *
 * 以下可以选择性配置:
 *
 * 资源-主菜单背景
 * 资源-道具背景
 * 资源-技能背景
 * 资源-装备背景 
 * 资源-状态背景 
 * 资源-队形背景 
 * 资源-选项背景 
 * 资源-保存背景 
 * 资源-商店背景
 * 资源-游戏结束选择背景
 *
 * 你还可以选择配置自定义的菜单背景:
 *
 * 资源-敌人图鉴背景（EnemyBook插件）
 * 资源-道具图鉴背景（ItemBook插件）
 * 资源-画廊背景（MOG_PictureGallery插件）
 * （MOG_Music_Book音乐书插件没有交互）
 *
 * 自定义关键字-1  （其它插件菜单的命名）
 * 自定义背景-1
 * 自定义关键字-2  
 * 自定义背景-2
 * ……
 *
 * 关于自定义菜单中的背景，需要与你使用的插件名字设置相互匹配。
 * 比如：YEP_ItemSynthesis.js物品合成插件，这个菜单的命令关键字为Synthesis。
 * 那么填写Scene_Synthesis关键字并配置背景，即可修改物品合成插件的背景图片。
 *
 * -----------------------------------------------------------------------------
 * ----用法提示
 * 你可以设置菜单框完全透明，xy轴速度为0，然后自己画一个非常漂亮的菜单来作
 * 为背景。（网页前端都是这样弄的，前面文字，后面就是一幅画。但是用户看起
 * 来就感觉他们是一体的）
 *
 * -----------------------------------------------------------------------------
 * ----关于如何识别自定义关键字
 * YEP有物品合成界面、任务系统界面等插件，这些界面不设置则都使用默认背景。
 * 如果要指定背景，那么一般查看yep的第一个设置参数名，比如：
 * YEP物品合成第一个设置参数名是：Synthesis Command，那么关键字为Synthesis。
 * YEP任务系统第一个设置参数名是：Quest Command，那么关键字为Quest。
 *
 * Lagomoro（小优）的菜单关键字是：Lagomoro_Mission
 * 
 * -----------------------------------------------------------------------------
 * ----界面与背景关系表
 * 
 * 可设置   关键字            关系界面
 *  √       Menu             （主菜单界面） 
 *  √       Item             （道具界面） 
 *  √       Skill            （技能界面）
 *  √       Equip            （装备界面） 
 *  √       Status           （状态界面） 
 *  √       Formation        （队形界面） 
 *  √       Options          （选项界面） 
 *  √       Save             （保存界面） 
 *  √       Shop             （商店界面） 
 *  √       GameEnd          （游戏结束选择界面）
 *
 *  √       EnemyBook        （敌人图鉴界面）
 *  √       ItemBook         （道具图鉴界面）
 *  √       Picture_Gallery  （画廊界面）
 *  x       Music_Book       （音乐书界面）
 *  x       Fast_Travel      （世界地图界面）
 *  x       CharSelect       （角色选择界面）
 *
 *  √       Selfplate_A      （全自定义信息面板A）
 *  √       Lagomoro_Mission （小优任务界面）
 *  √       Synthesis        （YEP物品合成界面）
 *  √       Quest            （YEP任务系统界面）
 *
 * 配置背景关键字时，不要忘了加"Scene_"前缀！
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 添加了 是否叠加当前景深 的选项。
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_MenuBackground = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_MenuBackground');
	//Moghunter.mback_skipscenes = Object(Moghunter.parameters['不使用背景的界面'] || []);
	Moghunter.mback_ox = Number(Moghunter.parameters['速度-X轴方向'] || 0);
	Moghunter.mback_oy = Number(Moghunter.parameters['速度-Y轴方向'] || 0);
	Moghunter.mback_opacity = Number(Moghunter.parameters['主菜单透明度'] || 100);
	SceneManager._mback             = false;
	Moghunter.mback_visible = String(Moghunter.parameters['是否叠加当前景深'] || "false") === "true";	
	
	Moghunter.src_bak_0 = String(Moghunter.parameters['资源-默认背景']);
	Moghunter.src_bak_1 = String(Moghunter.parameters['资源-主菜单背景']);
	Moghunter.src_bak_2 = String(Moghunter.parameters['资源-道具背景']);
	Moghunter.src_bak_3 = String(Moghunter.parameters['资源-技能背景']);
	Moghunter.src_bak_4 = String(Moghunter.parameters['资源-装备背景']);
	Moghunter.src_bak_5 = String(Moghunter.parameters['资源-状态背景']);
	Moghunter.src_bak_6 = String(Moghunter.parameters['资源-队形背景']);
	Moghunter.src_bak_7 = String(Moghunter.parameters['资源-选项背景']);
	Moghunter.src_bak_8 = String(Moghunter.parameters['资源-保存背景']);
	Moghunter.src_bak_9 = String(Moghunter.parameters['资源-商店背景']);
	Moghunter.src_bak_10 = String(Moghunter.parameters['资源-游戏结束选择背景']);
	Moghunter.src_bak_11 = String(Moghunter.parameters['资源-敌人图鉴背景']);
	Moghunter.src_bak_12 = String(Moghunter.parameters['资源-道具图鉴背景']);
	Moghunter.src_bak_13 = String(Moghunter.parameters['资源-画廊背景']);
	
	Moghunter.menu_back_list_length = 10;
	Moghunter.menu_back_list = {};
	Moghunter.menu_back_key_list = {};
	for (Moghunter.i = 1; Moghunter.i <= Moghunter.menu_back_list_length ; ++Moghunter.i) {
	  Moghunter.line = "String(Moghunter.parameters['自定义关键字-" + Moghunter.i + "'] )";
	  Moghunter.menu_back_key_list[Moghunter.i] = eval(Moghunter.line);
	  Moghunter.line = "String(Moghunter.parameters['自定义背景-" + Moghunter.i + "'] )";
	  Moghunter.menu_back_list[Moghunter.i] = eval(Moghunter.line);
	};
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Menus
//==============================
ImageManager.loadMenus = function(filename) {
    return this.loadBitmap('img/menus/', filename, 0, true);
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Get Par Array
//==============================
Game_System.prototype.get_par_array = function(object,value,type) {
	if (value.length === 0) {return};
	var s = value.split(',');
	if (type === 0){
		for (var i = 0; i < s.length; i++) {object.push(String(s[i]));	};
	} else {
	    for (var i = 0; i < s.length; i++) {object.push(Number(s[i]));	};
   };
};

//=============================================================================
// ** Window Base
//=============================================================================

//==============================
// * Update
//==============================
var _alias_mog_mback_wbase_update = Window_Base.prototype.update;
Window_Base.prototype.update = function() {
	_alias_mog_mback_wbase_update.call(this);
	if (SceneManager._mback) {this.opacity = Moghunter.mback_opacity}
};

if (Imported.MOG_TimeSystem) {
	//==============================
	// * Update
	//==============================
	var _alias_mog_mback_time_status_update = Window_Time_Status.prototype.update;
	Window_Time_Status.prototype.update = function() {
		_alias_mog_mback_time_status_update.call(this);
		if (SceneManager._mback) {this.contentsOpacity = 255;this.opacity = Moghunter.mback_opacity}
	};
};

//=============================================================================
// ** Scene MenuBase
//=============================================================================

//==============================
// * Skip Mbackground
//==============================
Scene_MenuBase.prototype.skip_mbackground = function() {
	if (!SceneManager._scene) {return false};
	this._mb_skip_scenes = [];
	//$gameSystem.get_par_array(this._mb_skip_scenes, Moghunter.mback_skipscenes, 0);
   	for (var i = 0; i < this._mb_skip_scenes.length; i++) {
		if (this._mb_skip_scenes[i] === SceneManager._scene.constructor.name) {return true};
	};	
    return false;
};

//==============================
// * create Background
//==============================
var _alias_mog_mback_scbase_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function() {		
	_alias_mog_mback_scbase_createBackground.call(this);
	SceneManager._mback = false;
	if (!this.skip_mbackground()) {this.create_mbackground()};
};

//==============================
// * Skip Mbackground
//==============================
var _alias_mog_mback_scmb_terminate = Scene_MenuBase.prototype.terminate;
Scene_MenuBase.prototype.terminate = function() {
	_alias_mog_mback_scmb_terminate.call(this);
	SceneManager._mback = false;
};

//==============================
// * Set Background Img
//==============================
Scene_MenuBase.prototype.set_background_img = function() {
	if (this._self_background && SceneManager._scene) {
/*
 * Scene_Menu     （主菜单界面） 
 * Scene_Item     （道具界面） 
 * Scene_Skill     (技能界面)
 * Scene_Equip    （装备界面） 
 * Scene_Status   （状态界面） 
 * Scene_Party    （队形界面） 
 * Scene_Options  （选项界面） 
 * Scene_Save     （保存界面） 
 * Scene_Shop     （商店界面） 
 * Scene_GameEnd  （游戏结束选择界面）
 *
 * Scene_EnemyBook（敌人图鉴界面）
 * Scene_ItemBook （道具图鉴界面）
 * Scene_Picture_Gallery （画廊界面）
 */
		if( SceneManager._scene.constructor.name === "Scene_Menu" && Moghunter.src_bak_1 != "" ){
			return Moghunter.src_bak_1;
		}else if( SceneManager._scene.constructor.name === "Scene_Item" && Moghunter.src_bak_2 != "" ){
			return Moghunter.src_bak_2;
		}else if( SceneManager._scene.constructor.name === "Scene_Skill" && Moghunter.src_bak_3 != "" ){
			return Moghunter.src_bak_3;
		}else if( SceneManager._scene.constructor.name === "Scene_Equip" && Moghunter.src_bak_4 != "" ){
			return Moghunter.src_bak_4;
		}else if( SceneManager._scene.constructor.name === "Scene_Status" && Moghunter.src_bak_5 != "" ){
			return Moghunter.src_bak_5;
		}else if(  (SceneManager._scene.constructor.name === "Scene_Party"||SceneManager._scene.constructor.name === "Scene_Formation") && Moghunter.src_bak_6 != "" ){
			return Moghunter.src_bak_6;
		}else if( SceneManager._scene.constructor.name === "Scene_Options" && Moghunter.src_bak_7 != "" ){
			return Moghunter.src_bak_7;
		}else if( SceneManager._scene.constructor.name === "Scene_Save" && Moghunter.src_bak_8 != "" ){
			return Moghunter.src_bak_8;
		}else if( SceneManager._scene.constructor.name === "Scene_Shop" && Moghunter.src_bak_9 != "" ){
			return Moghunter.src_bak_9;
		}else if( SceneManager._scene.constructor.name === "Scene_GameEnd" && Moghunter.src_bak_10 != "" ){
			return Moghunter.src_bak_10;
		}else if( SceneManager._scene.constructor.name === "Scene_EnemyBook" && Moghunter.src_bak_11 != "" ){
			return Moghunter.src_bak_11;
		}else if( SceneManager._scene.constructor.name === "Scene_ItemBook" && Moghunter.src_bak_12 != "" ){
			return Moghunter.src_bak_12;
		}else if( SceneManager._scene.constructor.name === "Scene_Picture_Gallery" && Moghunter.src_bak_13 != "" ){
			return Moghunter.src_bak_13;
		}else{
			for (var j = 1; j <= Moghunter.menu_back_list_length ; j++) {
				if( SceneManager._scene.constructor.name === Moghunter.menu_back_key_list[j] 
					&& Moghunter.menu_back_list[j] != "" ){
					return Moghunter.menu_back_list[j];
				}
			};
			return Moghunter.src_bak_0;
		}
	}
	return Moghunter.src_bak_0;
};

//==============================
// * Create Mbackground
//==============================
Scene_MenuBase.prototype.create_mbackground = function() {
	if (this._backgroundSprite && !Moghunter.mback_visible ) {this.removeChild(this._backgroundSprite)};
	SceneManager._mback = true;
	this._self_background = true;
    this._backgroundSprite = new TilingSprite(ImageManager.loadMenus(this.set_background_img()));
	this._backgroundSprite.move(0, 0, Graphics.width, Graphics.height);	
    this.addChild(this._backgroundSprite);		
};

//==============================
// * Update
//==============================
var _mog_mback_scbase_update = Scene_MenuBase.prototype.update;
Scene_MenuBase.prototype.update = function() {
	_mog_mback_scbase_update.call(this);
	if (SceneManager._mback) {this.update_mbackground()};	
};

//==============================
// * Update MBackground
//==============================
Scene_MenuBase.prototype.update_mbackground = function() {
	this._backgroundSprite.origin.x += Moghunter.mback_ox;
	this._backgroundSprite.origin.y += Moghunter.mback_oy;
};