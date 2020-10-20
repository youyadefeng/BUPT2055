//=============================================================================
// MOG_MenuParticles.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.1]  主菜单 - 菜单粒子效果
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @help
 * =============================================================================
 * +++ MOG - Menu Particles (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 你可以在任意菜单中设置菜单粒子及属性。但是粒子和菜单是一对一关系。
 * ★★必须放在 各菜单界面、菜单插件 的前面★★
 * ★★自带背景的菜单插件可能不起作用，因为那个插件自己设置了底图★★
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有menus文件夹！（img/menus）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-默认粒子
 *
 * 以下可以选择性配置:
 *
 * 资源-主菜单粒子
 * 资源-道具粒子
 * 资源-技能粒子
 * 资源-装备粒子 
 * 资源-状态粒子 
 * 资源-队形粒子 
 * 资源-选项粒子 
 * 资源-保存粒子 
 * 资源-商店粒子
 * 资源-游戏结束选择粒子
 *
 * 你还可以选择配置自定义的菜单粒子:
 *
 * 资源-敌人图鉴粒子（EnemyBook插件）
 * 资源-道具图鉴粒子（ItemBook插件）
 * 资源-画廊粒子（MOG_PictureGallery插件）
 * （MOG_Music_Book音乐书插件没有交互）
 *
 * 自定义关键字-1  （其它插件菜单的命名）
 * 自定义粒子-1
 * 自定义关键字-2  
 * 自定义粒子-2
 * ……
 *
 * 关于自定义菜单中的粒子，需要与你使用的插件名字设置相互匹配。
 * 比如：YEP_ItemSynthesis.js物品合成插件，这个菜单的命令关键字为Synthesis。
 * 那么填写Scene_Synthesis关键字并配置粒子，即可修改物品合成插件的粒子效果。
 *
 * -----------------------------------------------------------------------------
 * ----关于如何识别自定义关键字
 * YEP有物品合成界面、任务系统界面等插件，这些界面不设置则都使用默认粒子。
 * 如果要指定粒子，那么一般查看yep的第一个设置参数名，比如：
 * YEP物品合成第一个设置参数名是：Synthesis Command，那么关键字为Synthesis。
 * YEP任务系统第一个设置参数名是：Quest Command，那么关键字为Quest。
 *
 * Lagomoro（小优）的菜单关键字是：Lagomoro_Mission
 *
 * -----------------------------------------------------------------------------
 * ----界面与粒子关系表
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
 *  x       CharSelect       （角色选择界面，强制使用默认粒子）
 *
 *  √       Selfplate_A      （全自定义信息面板A）
 *  √       Lagomoro_Mission （小优任务界面）
 *  √       Synthesis        （YEP物品合成界面）
 *  √       Quest            （YEP任务系统界面）
 *
 * 配置粒子关键字时，不要忘了加"Scene_"前缀！
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 *
 *
 * @param 资源-默认粒子
 * @desc 默认粒子的图片资源。如果其他粒子为空，则使用默认粒子。
 * 如果你使用了其他选项，在那个选项中将使用默认粒子。
 * @default 粒子-默认粒子
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 默认-粒子数量
 * @type number
 * @min 1
 * @desc 菜单的粒子数量。
 * @default 15
 *
 * @param 默认-X轴速度
 * @desc 粒子按x轴方向漂浮的速度。正数向左，负数向右。
 * @default 0
 *
 * @param 默认-Y轴速度
 * @desc 粒子按y轴方向漂浮的速度。正数向上，负数向下。
 * @default -1
 *
 * @param 默认-旋转速度
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 1.0
 *
 * @param 默认-混合模式
 * @type number
 * @min 0
 * @max 16
 * @desc pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 * @default 1
 *
 *
 * @param 资源-主菜单粒子
 * @desc 主菜单粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-道具粒子
 * @desc 道具粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-技能粒子
 * @desc 技能粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-装备粒子
 * @desc 装备粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-状态粒子
 * @desc 状态粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-队形粒子
 * @desc 队形粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-选项粒子
 * @desc 选项粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-保存粒子
 * @desc 保存粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-商店粒子
 * @desc 商店粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-游戏结束选择粒子
 * @desc 游戏结束选择粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-敌人图鉴粒子
 * @desc 敌人图鉴粒子的图片资源。如果为空，则使用默认粒子。
 * 前提是你使用了敌人图鉴插件EnemyBook.js。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-道具图鉴粒子
 * @desc 道具图鉴粒子的图片资源。如果为空，则使用默认粒子。
 * 前提是你使用了道具图鉴插件ItemBook.js。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 资源-画廊粒子
 * @desc 画廊粒子的图片资源。如果为空，则使用默认粒子。
 * 前提是你使用了画廊插件MOG_PictureGallery.js。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 * 
 * @param ---自定义粒子组---
 * @desc
 *
 * @param 自定义关键字-1
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-1
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-2
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-2
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-3
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-3
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-4
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-4
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-5
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-5
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-6
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-6
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-7
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-7
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-8
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-8
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-9
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-9
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 * @param 自定义关键字-10
 * @parent ---自定义粒子组---
 * @desc 如果你使用了特殊插件对菜单进行了命名，则填写此关键字。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
 *
 * @param 自定义粒子-10
 * @parent ---自定义粒子组---
 * @desc 自定义粒子的图片资源。如果为空，则使用默认粒子。
 * @default 
 * @require 1
 * @dir img/menus/
 * @type file
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_MenuParticles = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_MenuParticles');
	//Moghunter.mpart_skipscenes = Object(Moghunter.parameters['不使用粒子的界面'] || []);
	Moghunter.mpart_number = Number(Moghunter.parameters['默认-粒子数量'] || 15);
	Moghunter.mpart_ox = Number(Moghunter.parameters['默认-X轴速度'] || 0);
	Moghunter.mpart_oy = Number(Moghunter.parameters['默认-Y轴速度'] || -1);
	Moghunter.mpart_a = Number(Moghunter.parameters['默认-旋转速度'] || 1);
	Moghunter.mpart_blendMode = Number(Moghunter.parameters['默认-混合模式'] || 1);
	SceneManager._mpart             = false;
	
	Moghunter.src_par_0 = String(Moghunter.parameters['资源-默认粒子']);
	Moghunter.src_par_1 = String(Moghunter.parameters['资源-主菜单粒子']);
	Moghunter.src_par_2 = String(Moghunter.parameters['资源-道具粒子']);
	Moghunter.src_par_3 = String(Moghunter.parameters['资源-技能粒子']);
	Moghunter.src_par_4 = String(Moghunter.parameters['资源-装备粒子']);
	Moghunter.src_par_5 = String(Moghunter.parameters['资源-状态粒子']);
	Moghunter.src_par_6 = String(Moghunter.parameters['资源-队形粒子']);
	Moghunter.src_par_7 = String(Moghunter.parameters['资源-选项粒子']);
	Moghunter.src_par_8 = String(Moghunter.parameters['资源-保存粒子']);
	Moghunter.src_par_9 = String(Moghunter.parameters['资源-商店粒子']);
	Moghunter.src_par_10 = String(Moghunter.parameters['资源-游戏结束选择粒子']);
	Moghunter.src_par_11 = String(Moghunter.parameters['资源-敌人图鉴粒子']);
	Moghunter.src_par_12 = String(Moghunter.parameters['资源-道具图鉴粒子']);
	Moghunter.src_par_13 = String(Moghunter.parameters['资源-画廊粒子']);
	
	Moghunter.menu_par_list_length = 10;
	Moghunter.menu_par_list = {};
	Moghunter.menu_par_key_list = {};
	for (Moghunter.i = 1; Moghunter.i <= Moghunter.menu_par_list_length ; ++Moghunter.i) {
	  Moghunter.line = "String(Moghunter.parameters['自定义关键字-" + Moghunter.i + "'] )";
	  Moghunter.menu_par_key_list[Moghunter.i] = eval(Moghunter.line);
	  Moghunter.line = "String(Moghunter.parameters['自定义粒子-" + Moghunter.i + "'] )";
	  Moghunter.menu_par_list[Moghunter.i] = eval(Moghunter.line);
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
// ** Scene MenuBase
//=============================================================================

//==============================
// * Skip Particles
//==============================
Scene_MenuBase.prototype.skip_particles = function() {
	if (!SceneManager._scene) {return false};
	this._mb_skip_scenes = [];
	//$gameSystem.get_par_array(this._mb_skip_scenes, Moghunter.mpart_skipscenes, 0);
   	for (var i = 0; i < this._mb_skip_scenes.length; i++) {
		if (this._mb_skip_scenes[i] === SceneManager._scene.constructor.name) {return true};
	};	
    return false;
};

//==============================
// * Create
//==============================
var _alias_mog_mpart_scbase_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function() {
	SceneManager._mpart = false;	
	_alias_mog_mpart_scbase_createBackground.call(this);
	if (!this.skip_particles()) {this.create_mparticles()};
};

//==============================
// * Terminate
//==============================
var _alias_mog_mpart_scmb_terminate = Scene_MenuBase.prototype.terminate;
Scene_MenuBase.prototype.terminate = function() {
	_alias_mog_mpart_scmb_terminate.call(this);
	SceneManager._mpart = false;
};

//==============================
// * Set Particle Img
//==============================
Scene_MenuBase.prototype.set_particle_img = function() {
	if (this._self_par && SceneManager._scene) {
/*
 * Scene_Menu     （主菜单界面） 
 * Scene_Item     （道具界面） 
 * Scene_Skill     (技能界面)
 * Scene_Equip    （装备界面） 
 * Scene_Status   （状态界面） 
 * Scene_Formation（队形界面） 
 * Scene_Options  （选项界面） 
 * Scene_Save     （保存界面） 
 * Scene_Shop     （商店界面） 
 * Scene_GameEnd  （游戏结束选择界面）
 *
 * Scene_EnemyBook（敌人图鉴界面）
 * Scene_ItemBook （道具图鉴界面）
 * Scene_Picture_Gallery （画廊界面）
 */
		if( SceneManager._scene.constructor.name === "Scene_Menu" && Moghunter.src_par_1 != "" ){
			return Moghunter.src_par_1;
		}else if( SceneManager._scene.constructor.name === "Scene_Item" && Moghunter.src_par_2 != "" ){
			return Moghunter.src_par_2;
		}else if( SceneManager._scene.constructor.name === "Scene_Skill" && Moghunter.src_par_3 != "" ){
			return Moghunter.src_par_3;
		}else if( SceneManager._scene.constructor.name === "Scene_Equip" && Moghunter.src_par_4 != "" ){
			return Moghunter.src_par_4;
		}else if( SceneManager._scene.constructor.name === "Scene_Status" && Moghunter.src_par_5 != "" ){
			return Moghunter.src_par_5;
		}else if( (SceneManager._scene.constructor.name === "Scene_Party"||SceneManager._scene.constructor.name === "Scene_Formation") && Moghunter.src_par_6 != "" ){
			return Moghunter.src_par_6;
		}else if( SceneManager._scene.constructor.name === "Scene_Options" && Moghunter.src_par_7 != "" ){
			return Moghunter.src_par_7;
		}else if( SceneManager._scene.constructor.name === "Scene_Save" && Moghunter.src_par_8 != "" ){
			return Moghunter.src_par_8;
		}else if( SceneManager._scene.constructor.name === "Scene_Shop" && Moghunter.src_par_9 != "" ){
			return Moghunter.src_par_9;
		}else if( SceneManager._scene.constructor.name === "Scene_GameEnd" && Moghunter.src_par_10 != "" ){
			return Moghunter.src_par_10;
		}else if( SceneManager._scene.constructor.name === "Scene_EnemyBook" && Moghunter.src_par_11 != "" ){
			return Moghunter.src_par_11;
		}else if( SceneManager._scene.constructor.name === "Scene_ItemBook" && Moghunter.src_par_12 != "" ){
			return Moghunter.src_par_12;
		}else if( SceneManager._scene.constructor.name === "Scene_Picture_Gallery" && Moghunter.src_par_13 != "" ){
			return Moghunter.src_par_13;
		}else{
			for (var j = 1; j <= Moghunter.menu_par_list_length ; j++) {
				if( SceneManager._scene.constructor.name === Moghunter.menu_par_key_list[j] 
					&& Moghunter.menu_par_list[j] != "" ){
					return Moghunter.menu_par_list[j];
				}
			};
			return Moghunter.src_par_0;
		}
	}
	return Moghunter.src_par_0;
};

//==============================
// * Create Mbackground
//==============================
Scene_MenuBase.prototype.create_mparticles = function() {	
    this._self_par = true;
	SceneManager._mpart = true;
   	this._sprite_particles = [];
	this._sprite_particles_data = [];
	this._nw = [0,0];
	if (Moghunter.mpart_ox > 0) {this._nw[0] = -(Graphics.boxWidth / 3)};
	if (Moghunter.mpart_ox < 0) {this._nw[0] =(Graphics.boxWidth / 3)};
	this._nw[1] = Math.abs(this._nw[0]);
    for (i = 0; i < Moghunter.mpart_number; i++) {
	  this._sprite_particles.push(new Sprite(ImageManager.loadMenus(this.set_particle_img())));
	  this.addChild(this._sprite_particles[i]);
	  this._sprite_particles_data[i] = []	  
	  this.reset_particles(i);
	  this._sprite_particles[i].x = Math.randomInt(Graphics.boxWidth);
	  this._sprite_particles[i].y = Math.randomInt(Graphics.boxHeight);
	  this._sprite_particles[i].opacity = 0;
	  this._sprite_particles[i].blendMode = Moghunter.mpart_blendMode;
    };	
};

//==============================
// * Reset Particles
//==============================	
Scene_MenuBase.prototype.reset_particles = function(i) {	
    var sx = Math.max()
	this._sprite_particles_data[i][0] = ((Math.random() * 2) + 0.4) * Moghunter.mpart_ox
	this._sprite_particles_data[i][1] = ((Math.random() * 2) + 0.4) * Moghunter.mpart_oy
	this._sprite_particles_data[i][2] = ((Math.random() * Moghunter.mpart_a)) * 0.01;
	this._sprite_particles[i].opacity = 0;
	this._sprite_particles[i].x = this._nw[0] + Math.randomInt(Graphics.boxWidth);
	var pz = ((Math.random() * 0.5) * 1);
	this._sprite_particles[i].scale = new PIXI.Point(0.5 + Number(pz), 0.5 + Number(pz));
	if (Moghunter.mpart_oy < 0) { 
	    this._sprite_particles[i].y = Graphics.boxHeight + this._sprite_particles[i].height * 3;
	} else if (Moghunter.mpart_oy > 0) {
		this._sprite_particles[i].y = -this._sprite_particles[i].height * 3;
	} else {
	    this._sprite_particles[i].y = Math.randomInt(Graphics.boxHeight);
    }; 
	if (this._sprite_particles_data[i][0] == 0 && this._sprite_particles_data[i][1] == 0) {
       this._sprite_particles[i].x = -Graphics.width
    };
};

//==============================
// * Update
//==============================
var _mog_mpart_scbase_update = Scene_MenuBase.prototype.update;
Scene_MenuBase.prototype.update = function() {
	_mog_mpart_scbase_update.call(this);
	if (SceneManager._mpart) {this.update_particles()};	
};

//==============================
// * Update Particles
//==============================
Scene_MenuBase.prototype.update_particles = function() {
   for (var i = 0; i < this._sprite_particles.length; i++) {
        this._sprite_particles[i].x += this._sprite_particles_data[i][0];
		this._sprite_particles[i].y += this._sprite_particles_data[i][1];
		this._sprite_particles[i].opacity += 4;
		this._sprite_particles[i].rotation += this._sprite_particles_data[i][2];
    	if (this.need_reset_particles(i)) { this.reset_particles(i);};
	};
};

//==============================
// * Need Reset Particles
//==============================	
Scene_MenuBase.prototype.need_reset_particles = function(i) {
	if (this._sprite_particles[i].x < -this._nw[1] - this._sprite_particles[i].width * 3) {return true};
	if (this._sprite_particles[i].x > this._nw[1] + Graphics.boxWidth + this._sprite_particles[i].width * 3) {return true};
	if (this._sprite_particles[i].y < - this._sprite_particles[i].height * 3) {return true};
	if (this._sprite_particles[i].y > Graphics.boxHeight + this._sprite_particles[i].height * 3) {return true};
	return false;
};