//=============================================================================
// MOG_BattleCommands.js
//=============================================================================

/*:
 * @plugindesc (v1.2)[v1.3]  战斗UI - 技能类型面板
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param ---技能类型---
 * @default 
 *
 * @param 资源-技能类型框
 * @parent ---技能类型---
 * @desc 技能类型框的图片资源。
 * @default 技能类型面板-框
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 平移-技能类型框 X
 * @parent ---技能类型---
 * @desc 技能类型的外框位置，以角色位置的左上角为基准。x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-技能类型框 Y
 * @parent ---技能类型---
 * @desc 技能类型的外框位置，以角色位置的左上角为基准。y轴方向平移，单位像素。（可为负数）
 * @default 15
 *
 * @param 偏移-技能类型按钮 X
 * @parent ---技能类型---
 * @desc 技能类型按钮组位置，以角色位置的左上角为基准。x轴方向平移，单位像素。（可为负数）
 * @default -20
 *
 * @param 偏移-技能类型按钮 Y
 * @parent ---技能类型---
 * @desc 技能类型按钮组位置，以角色位置的左上角为基准。y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 资源-攻击
 * @parent ---技能类型---
 * @desc 攻击按钮的图片资源。
 * @default Com_节奏攻击
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 资源-防御
 * @parent ---技能类型---
 * @desc 防御按钮的图片资源。
 * @default Com_防御
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 资源-道具
 * @parent ---技能类型---
 * @desc 道具按钮的图片资源。
 * @default Com_道具
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param ---自定义技能类型组---
 * @parent ---技能类型---
 * @default 
 *
 * @param 技能类型-1
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-2
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-3
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-4
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-5
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-6
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-7
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-8
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-9
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-10
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-11
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-12
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-13
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-14
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-15
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-16
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-17
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-18
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-19
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 技能类型-20
 * @parent ---自定义技能类型组---
 * @desc 技能类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param ------------------------
 * @default 
 *
 * @param 菜单模式
 * @type select
 * @option 普通菜单
 * @value 0
 * @option 环菜单
 * @value 1
 * @desc 0 - 普通菜单，1 - 环菜单
 * @default 1
 *
 * @param ---普通菜单---
 * @default 
 *
 * @param 是否使用界限指针
 * @parent ---普通菜单---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc 普通菜单模式下，如果选单超过4个，那么就会出现界限指针提醒。true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-界限指针
 * @parent ---普通菜单---
 * @desc 界限指针的图片资源。
 * @default 技能类型面板-界限指针
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 平移-界限指针 X
 * @parent ---普通菜单---
 * @desc 按钮组的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 5
 *
 * @param 平移-界限指针 Y
 * @parent ---普通菜单---
 * @desc 按钮组的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 菜单最大行
 * @parent ---普通菜单---
 * @type number
 * @min 1
 * @desc 普通菜单显示最多的行数。多出的行可以滚动找出。
 * @default 4 
 *
 * @param ---环菜单---
 * @default 
 *
 * @param 环半径
 * @parent ---环菜单---
 * @desc 环菜单的半径，单位像素。
 * @default 70
 *
 * @param 是否使用旋转效果
 * @parent ---环菜单---
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc 环菜单的旋转效果。true - 使用，false - 不使用
 * @default true
 *
 * @param Pi值范围
 * @parent ---环菜单---
 * @desc 环菜单的pi值范围。
 * @default 2.0
 *
 * @param 是否支持左右按键
 * @parent ---环菜单---
 * @type boolean
 * @on 支持
 * @off 不支持
 * @desc 按左右键可以选择其他按钮，如果为false则只能通过鼠标点击选择。
 * @default true
 *
 * @param 是否使用缩放效果
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc 按钮的缩放效果。true - 使用，false - 不使用
 * @default true
 *
 * @param 缩放效果大小
 * @parent 是否使用缩放效果
 * @desc 按钮最大缩放的比例。
 * @default 1.30
 *
 * @param 缩放效果速度
 * @parent 是否使用缩放效果
 * @desc 按钮最大缩放的速度，单位为比例/帧。（1秒60帧）
 * @default 0.015
 *
 * @param 是否循环来回缩放
 * @parent 是否使用缩放效果
 * @type boolean
 * @on 来回缩放
 * @off 缩放到指定的大小然后不变
 * @desc true - 来回缩放，false - 缩放到指定的大小然后不变
 * @default true
 *
 * @param 是否使用平滑运动
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * 选择的菜单项会向指定位置偏移出队。
 * @default false
 *
 * @param 偏移-平滑 X
 * @parent 是否使用平滑运动
 * @desc 以当前按钮的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 30  
 *
 * @param 偏移-平滑 Y
 * @parent 是否使用平滑运动
 * @desc 以当前按钮的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0 
 *
 * @param 是否显示技能类型名
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 平移-技能类型名 X
 * @parent 是否显示技能类型名
 * @desc 以角色位置的左上角为基准，x轴方向平移，单位像素。（可为负数）
 * @default 35
 *
 * @param 平移-技能类型名 Y
 * @parent 是否显示技能类型名
 * @desc 以角色位置的左上角为基准，y轴方向平移，单位像素。（可为负数）
 * @default 75
 *
 * @param 技能类型名字体大小
 * @parent 是否显示技能类型名
 * @desc 技能类型名的字体大小。
 * @default 22
 *
 * @param 是否使用菜单指针
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default false
 *
 * @param 资源-菜单指针
 * @parent 是否使用菜单指针
 * @desc 菜单指针的图片资源。
 * @default 技能类型面板-菜单指针
 * @require 1
 * @dir img/Battle__ui_command/
 * @type file
 *
 * @param 偏移-菜单指针 X
 * @parent 是否使用菜单指针
 * @desc 以当前按钮的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default -30
 *
 * @param 偏移-菜单指针 Y
 * @parent 是否使用菜单指针
 * @desc 以当前按钮的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 菜单指针是否滑动
 * @parent 是否使用菜单指针
 * @type boolean
 * @on 左右滑动
 * @off 不滑动
 * @desc true - 左右滑动，false - 不滑动
 * @default true
 *
 * @help  
 * =============================================================================
 * +++ MOG - Battle Commands (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 显示技能类型的面板，攻击、防御、道具、自定义技能类型 的按钮选项
 * 都将在该面板绘制。
 * 【现已支持插件关联资源的打包、加密】
 * ★★必须与MOG_BattleHud角色窗口插件配合使用，并放在其插件的后面★★
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，但没有效果。必须依赖其它插件。
 * 作用于：
 *   - MOG_BattleHud 战斗UI-角色窗口
 *     可以给目标插件中的技能类型窗口进行进一步美化。
 * 被扩展：
 *   - Drill_X_BattleComControl 战斗-技能类型控制
 *     指定技能类型被封印时，设置技能被封印时的图标。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   作用于角色窗口，放置在战斗UI层。
 * 2.自定义技能类型是指 数据库>类型>技能类型 中的设置。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Battle__ui_command （Battle后面有两个下划线）
 * 先确保项目img文件夹下是否有Battle__ui_command文件夹。
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。使用技能类型面板，需要配置资源文件：
 *
 * 资源-技能类型框
 * 资源-界限指针
 * 资源-菜单指针
 * 资源-攻击
 * 资源-防御
 * 资源-菜单指针
 * 资源-技能类型（与数据库设置的技能类型编号一一对应！）
 * 
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 优化了面板的点击方式。
 * [v1.3]
 * 修改了插件关联的资源文件夹。
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//插件记录：
//		修改了较多load_com_images函数的设置，根据先后顺序确定图标。
//		
//		优化点击控制，只改了isTouchedInsideCom函数。
//
 
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_BattleCommands = true;
　　var Moghunter = Moghunter || {}; 

    Moghunter.parameters = PluginManager.parameters('MOG_BattleCommands');
	Moghunter.bcom_mode = Number(Moghunter.parameters['菜单模式'] || 0);
    Moghunter.bcom_lay_x = Number(Moghunter.parameters['平移-技能类型框 X'] || 0);
    Moghunter.bcom_lay_y = Number(Moghunter.parameters['平移-技能类型框 Y'] || 15);
	Moghunter.bcom_com_x = Number(Moghunter.parameters['平移-技能类型按钮 X'] || -20);
	Moghunter.bcom_com_y = Number(Moghunter.parameters['平移-技能类型按钮 Y'] || 0);
	Moghunter.bcom_arrow = String(Moghunter.parameters['是否使用界限指针'] || true);
	Moghunter.bcom_arrow_x = Number(Moghunter.parameters['平移-界限指针 X'] || 5);
	Moghunter.bcom_arrow_y = Number(Moghunter.parameters['平移-界限指针 Y'] || 0);
	Moghunter.bcom_row_max = Number(Moghunter.parameters['菜单最大行'] || 4);
	Moghunter.bcom_zoom_effect = String(Moghunter.parameters['是否使用缩放效果'] || true);
	Moghunter.bcom_zoom_rate = Number(Moghunter.parameters['缩放效果大小'] || 1.30);
	Moghunter.bcom_zoom_speed = Number(Moghunter.parameters['缩放效果速度'] || 0.015);
	Moghunter.bcom_zoom_loop = String(Moghunter.parameters['是否循环来回缩放'] || true);
	Moghunter.bcom_slide_effect = String(Moghunter.parameters['是否使用平滑运动'] || false);
	Moghunter.bcom_slide_x = Number(Moghunter.parameters['偏移-平滑 X'] || 30);
	Moghunter.bcom_slide_y = Number(Moghunter.parameters['偏移-平滑 Y'] || 0);
	Moghunter.bcom_com_name = String(Moghunter.parameters['是否显示技能类型名'] || true);
	Moghunter.bcom_com_name_x = Number(Moghunter.parameters['平移-技能类型名 X'] || 35);
	Moghunter.bcom_com_name_y = Number(Moghunter.parameters['平移-技能类型名 Y'] || 75);
	Moghunter.bcom_com_font_size = Number(Moghunter.parameters['技能类型名字体大小'] || 22);
	Moghunter.bcom_ring_range = Number(Moghunter.parameters['环半径'] || 70);
	Moghunter.bcom_pi_range = Number(Moghunter.parameters['Pi值范围'] || 2.0);
	Moghunter.bcom_ring_anime = String(Moghunter.parameters['是否使用旋转效果'] || true);
	Moghunter.bcom_side_input = String(Moghunter.parameters['是否支持左右按键'] || true);
    Moghunter.bcom_cursor = String(Moghunter.parameters['是否使用菜单指针'] || false);	
    Moghunter.bcom_cursor_x = Number(Moghunter.parameters['偏移-菜单指针 X'] || 0);
    Moghunter.bcom_cursor_y = Number(Moghunter.parameters['偏移-菜单指针 Y'] || 0)
    Moghunter.bcom_cursor_slide = String(Moghunter.parameters['菜单指针是否滑动'] || true);
	
	Moghunter.src_type_Layout = String(Moghunter.parameters['资源-技能类型框']);
	Moghunter.src_com_atk = String(Moghunter.parameters['资源-攻击']);
	Moghunter.src_com_def = String(Moghunter.parameters['资源-防御']);
	Moghunter.src_com_item = String(Moghunter.parameters['资源-道具']);
	Moghunter.src_type_arrow = String(Moghunter.parameters['资源-界限指针']);
	Moghunter.src_type_Cursor = String(Moghunter.parameters['资源-菜单指针']);
	
if (Imported.MOG_BattleHud) {
	
	Moghunter.com_list_length = 20;
	Moghunter.com_list = {};
	for (Moghunter.i = 1; Moghunter.i <= Moghunter.com_list_length ; ++Moghunter.i) {
	  Moghunter.line = "String(Moghunter.parameters['技能类型-" + Moghunter.i + "'] )";
	  Moghunter.com_list[Moghunter.i] = eval(Moghunter.line);
	};
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * BHud
//==============================
ImageManager.loadBcom = function(filename) {
    return this.loadBitmap('img/Battle__ui_command/', filename, 0, true);
};	

//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_bcom_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_bcom_temp_initialize.call(this);
	this._bcom_need_refresh = false;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================

//==============================
// * Command129
//==============================
var _alias_mog_bcom_command129 = Game_Interpreter.prototype.command129;
Game_Interpreter.prototype.command129 = function() {	
	_alias_mog_bcom_command129.call(this);	
	$gameTemp._bcom_need_refresh = true;
	return true;
};

//=============================================================================
// ** Window Command
//=============================================================================

//==============================
// * Setup
//==============================
var _mog_batCom_Wact_setup = Window_ActorCommand.prototype.setup;
Window_ActorCommand.prototype.setup = function(actor) {
    _mog_batCom_Wact_setup.call(this,actor);
	if (this._actor) {this.battle_commands_initialize()};
};

//==============================
// * Battle Com Initialize
//==============================
Window_ActorCommand.prototype.battle_commands_initialize = function() {
	this._oldID = -1;
	if (!this._actor) {this.clearComSprites();return};
	this._oldID = this._actor._actorId;
    this.com_pic_initialize();
	this.load_com_images();
	this.create_com_sprites();
    this.refresh_com_sprites()
	this._old_visible = this.visible;
};

//==============================
// * clear Com Sprites
//==============================
Window_ActorCommand.prototype.clearComSprites = function() {
    if (this._layout) {this.removeChild(this._layout);this._layout = null};
    if (this._face) {this.removeChild(this._face);this._face = null};
    if (this._cursor_b) {this.removeChild(this._cursor_b); this._cursor_b = null};
	if (this._com_name) {this.removeChild(this._com_name);this._com_name = null};
	if (this._arrow) {
		for (var i = 0; i < 2; i++) {
		    this.removeChild(this._arrow[i])	
		};
		this._arrow = null;
	};	
    if (this._com_sprites) {this.com_sprites_clear();this._com_sprites = null};
};

//==============================
// * Load Com Images
//==============================
Window_ActorCommand.prototype.com_pic_initialize = function() {
	this.com_sprites_clear();
	this._com_mode_b = Math.min(Math.max(Moghunter.bcom_mode,0),1); 
    this._com_images = [];
    this._com_sprites = [];
	this._com_index = this._index;
	this._max_com = 0;
	this._wh = [0,0];
	this._zoom = [0,0];
	this._np = [0,0];
	this._arrow_slide = [0,0,0];
	this._arrow_org_y = [0,0];
	this._cursor_nxy = [0,0];
	this._cursor_slide = false;
	this.sel_time = 0;
	this._side = [];
	this._side_m = [0,0];
	this._ring_move = false;
	this._side_input = false;
	if (String(Moghunter.bcom_side_input) === "true") {this._side_input = true};
	if (String(Moghunter.bcom_ring_anime) === "true") {this._ring_move = true};	
	this._rol_range = Moghunter.bcom_ring_range;
	this._pi = Moghunter.bcom_pi_range * Math.PI;
	if (String(Moghunter.bcom_slide_effect) === "true") {this._side_m = [Moghunter.bcom_slide_x, Moghunter.bcom_slide_y]};	
	this._row_max = Math.max(Moghunter.bcom_row_max - 1,1)
	this._zoom_speed = Math.max(Moghunter.bcom_zoom_speed,0.001)
	this._zoom_rate = Math.max(Moghunter.bcom_zoom_rate,1.00)	 
	this._zoom_effect = false;
	if (String(Moghunter.bcom_zoom_effect) === "true") {this._zoom_effect = true};
	this._loop_zoom_effect = false;
	if (String(Moghunter.bcom_zoom_loop) === "true") {this._loop_zoom_effect = true};
};

//==============================
// * Com Sprites Clear
//==============================
Window_ActorCommand.prototype.com_sprites_clear = function() {
	if (this._com_sprites) {
		for (var i = 0; i < this._com_sprites.length; i++) {
			 this.removeChild(this._com_sprites[i]);
		};
	};
};

//==============================
// * Load Com Images
//==============================
Window_ActorCommand.prototype.load_com_images = function() {
	this._com_images = [];
	for (var i = 0; i < this._list.length; i++) {
		 if (this._max_com < this._list.length) {this._max_com = this._list.length}
		 //该区域需要一步一步挖取值
		 //this._list[0] 表示 (symbol,attack)-节奏攻击
		 //this._list[1] 表示 (symbol,skill) (ext,1)-物理技
		 //for(var a in this._list[4]){
		 //textb ="key:"+a+" value:"+this._list[4][a]+"\n";
		 //alert(textb);
		 //}
		 for (var r = 0; r < this._list.length; r++) {
			 if( this._list[r]['symbol'] == 'attack' ){
				this._com_images.push(ImageManager.loadBcom(Moghunter.src_com_atk));		//攻击
			 }
			 if( this._list[r]['symbol'] == 'skill' ){
				this._com_images.push(ImageManager.loadBcom(Moghunter.com_list[this._list[r]['ext']]));		//自定义技能类型
			 }
			 if( this._list[r]['symbol'] == 'guard' ){
				this._com_images.push(ImageManager.loadBcom(Moghunter.src_com_def));		//防御
			 }
			 if( this._list[r]['symbol'] == 'item' ){
				this._com_images.push(ImageManager.loadBcom(Moghunter.src_com_item));	//道具
			 }
			 //注意，顺序是固定的
		 };
	};
	this._layout_img = ImageManager.loadBcom(Moghunter.src_type_Layout);
	this._cursor_b_img = ImageManager.loadBcom(Moghunter.src_type_Cursor);
	if (String(Moghunter.bcom_arrow) === "true") {this._arrow_img = ImageManager.loadBcom(Moghunter.src_type_arrow)};
};

//==============================
// * Create Com Sprites
//==============================
Window_ActorCommand.prototype.create_com_sprites = function() {
    this.create_layout();
	if (String(Moghunter.bcom_face) === "true") {this.create_face()};
    this.create_commands();
	if (String(Moghunter.bcom_cursor) === "true") {this.create_cursor()};
    if (String(Moghunter.bcom_arrow) === "true") {this.create_arrows()};
	if (String(Moghunter.bcom_com_name) === "true") {this.create_com_name()};
};

//==============================
// * Create Layout
//==============================
Window_ActorCommand.prototype.create_layout = function() {	
    if (this._layout) {this.removeChild(this._layout)};
	this._layout = new Sprite(this._layout_img);
	this._layout.x = Moghunter.bcom_lay_x;
	this._layout.y = Moghunter.bcom_lay_y;
	this.addChild(this._layout);
};

//==============================
// * Create Face
//==============================
Window_ActorCommand.prototype.create_face = function() {	
    if (this._face) {this.removeChild(this._face)};
	var fname = String("Face_" + this._actor._actorId)
	var face_img = ImageManager.loadBcom("");
	this._face = new Sprite(face_img);
	this._face.x = Moghunter.bcom_face_x;
	this._face.y = Moghunter.bcom_face_y;
	this.addChild(this._face);
};

//==============================
// * Create Cursor
//==============================
Window_ActorCommand.prototype.create_cursor = function() {	
    if (this._cursor_b) {this.removeChild(this._cursor_b)};
	this._cursor_b = new Sprite(this._cursor_b_img);
	this._cursor_b.anchor.x = 0.5;
	this._cursor_b.anchor.y = 0.5;	
	this._cursor_b_s = [0,0,0,0,0];
	if (String(Moghunter.bcom_cursor_slide) === "true") {this._cursor_slide = true};
	this.addChild(this._cursor_b);
};

//==============================
// * Update Cursor B
//==============================
Window_ActorCommand.prototype.update_cursor_b = function() {	
    if (this._cursor_slide) {this.update_cursor_slide()};
    var nx = this._cursor_nxy[0] + Moghunter.bcom_cursor_x + this._cursor_b_s[2];
	var ny = this._cursor_nxy[1] + Moghunter.bcom_cursor_y;
    this._cursor_b.x = this.sprite_move_to(this._cursor_b.x,nx,this.com_move_speed());
	this._cursor_b.y = this.sprite_move_to(this._cursor_b.y,ny,this.com_move_speed());
};

//==============================
// * Update Cursor Slide
//==============================
Window_ActorCommand.prototype.update_cursor_slide = function() {	
	 this._cursor_b_s[4] += 1;
	 if (this._cursor_b_s[4] < 2) {return};
     this._cursor_b_s[4] = 0;
	 this._cursor_b_s[3] += 1;
	 if (this._cursor_b_s[3] < 15) {this._cursor_b_s[2] += 1}
	 else if (this._cursor_b_s[3] < 30) {this._cursor_b_s[2] -= 1}
	 else {this._cursor_b_s[2] = 0 ;this._cursor_b_s[3] = 0};	  	

};

//==============================
// * Create Commands
//==============================
Window_ActorCommand.prototype.create_commands = function() {	
	for (var i = 0; i < this._max_com; i++) {
		 this._com_sprites[i] = new Sprite();
		 this._com_sprites[i].enabled = this.isCommandEnabled(i);
		 this._com_sprites[i].anchor.x = 0.5;
		 this._com_sprites[i].anchor.y = 0.5;
		 this.addChild(this._com_sprites[i]);
		 this._side[i] = [0,0];
	};
};

//==============================
// * Create Arrows
//==============================
Window_ActorCommand.prototype.create_arrows = function() {	
    if (this._com_mode_b === 1) {return}
	if (this._arrow) {
		for (var i = 0; i < 2; i++) {
		    this.removeChild(this._arrow[i])	
		};
	};
	this._arrow = [];
	for (var i = 0; i < 2; i++) {
		 this._arrow[i] = new Sprite(this._arrow_img);
		 this._arrow[i].anchor.x = 0.5;
		 this._arrow[i].anchor.y = 0.5;		 
		 this.addChild(this._arrow[i]);
	};
};

//==============================
// * Create Com Name
//==============================
Window_ActorCommand.prototype.create_com_name = function() {	
    if (this._com_name) {this.removeChild(this._com_name)}; 
	this._com_name = new Sprite(new Bitmap(90,32))
	this._com_name.x = Moghunter.bcom_com_name_x + 45;
	this._com_name.y = Moghunter.bcom_com_name_y + 16; 
	this._com_name.bitmap.fontSize = Moghunter.bcom_com_font_size;
	this.addChild(this._com_name);
};

//==============================
// * Refresh Com Name
//==============================
Window_ActorCommand.prototype.refresh_com_name = function() {
	this._com_name.bitmap.clear();
	this._com_name.opacity = 0;
	this._com_name.anchor.x = 0.5;
	this._com_name.anchor.y = 0.5;
	this._com_name.bitmap.drawText(this.command_name(),0,0,this._com_name.bitmap.width,32,"center");
};

//==============================
// * Refresh Index
//==============================
Window_ActorCommand.prototype.refresh_index = function() {
	this._com_index = this._index;
	if (this._com_name) {this.refresh_com_name();}
};

	
//==============================
// * Refresh Com Sprites
//==============================
Window_ActorCommand.prototype.refresh_com_sprites = function() {
	this._com_index = -1;
	this._wh = [0,0];
	this._zoom = [0,0];	
    this.refresh_bitmap_com();
	this._layout.opacity = 0;
	if (this._arrow) {this.refresh_arrow_position()};
	this.position_clear();
	this.update_battle_commands();
	if (this._com_mode_b === 1) {this.refresh_ring_command()}; 
};

//==============================
// * Refresh Bitmap Com
//==============================
Window_ActorCommand.prototype.refresh_bitmap_com = function() {	
    for (var i = 0; i < this.maxCom(); i++) {
		this._com_sprites[i].bitmap = this._com_images[i];
		this._com_images.enabled = this.isCommandEnabled(i);
		this._wh[0] = this.width / 2;
		if (this._wh[1] < this._com_sprites[i].bitmap.height) {this._wh[1] = this._com_sprites[i].bitmap.height};			
	};
	for (var i = 0; i < this.maxCom(); i++) {	
		this._com_sprites[i].x = this._wh[0] + Moghunter.bcom_com_x;
		this._com_sprites[i].y = this._wh[1] + (this._wh[1] * i) + Moghunter.bcom_com_y;	
	};
};

//==============================
// * Refresh Arrow Position
//==============================
Window_ActorCommand.prototype.refresh_arrow_position = function() {
	this._arrow_org_y = [-Moghunter.bcom_arrow_y,this._wh[1] * ((this.limit_rows_sp() + 2)) + Moghunter.bcom_arrow_y];
	this._arrow[0].x = this._wh[0] + Moghunter.bcom_arrow_x;
	this._arrow[0].y = this._arrow_org_y[0];
	this._arrow[1].x = this._wh[0] + Moghunter.bcom_arrow_x;;
	this._arrow[1].y = this._arrow_org_y[1];
	this._arrow[1].scale.y = -1;
};

//==============================
// * Update Arrow Visible
//==============================
Window_ActorCommand.prototype.update_arrow_visible = function() {
	this._arrow[0].visible = false;
	this._arrow[1].visible = false;
    if (this._index > this.limit_rows_sp()) { this._arrow[0].visible = true};
    if (this.maxCom() > (this.limit_rows_sp() + 1)) {this._arrow[1].visible = true;
	   if (this._index === (this.maxCom() - 1)) {this._arrow[1].visible = false}
	};

};

//==============================
// * Position Clear
//==============================
Window_ActorCommand.prototype.position_clear = function() {
	this._old_visible = this.visible; 
	for (var i = 0; i < this._com_sprites.length; i++) {
		this._com_sprites[i].opacity = 0;
	};		
	for (var i = 0; i < this.maxCom(); i++) {
    	if (this._com_mode_b === 0) {
		    this.position_clear_mode_0(i);
		} else {
    		this._com_sprites[i].x = this._wh[0];
		    this._com_sprites[i].y = this._wh[1] + (this._wh[1] * i);
		};
		this._com_sprites[i].scale.x = 1.00;
		this._com_sprites[i].scale.y > 1.00;
	};
	if (this._com_mode_b === 1) {this.refresh_ring_command()}; 
	if (this._com_name) {this._com_name.opacity = 0};	
};

//==============================
// * Position Clear Mode 0
//==============================
Window_ActorCommand.prototype.position_clear_mode_0 = function(i) {
  if (this._index > this.limit_rows_sp()) {
		   if (i >= this._index - this.limit_rows_sp() && i <= this._index) {
			 this._com_sprites[i].opacity = this.translucentOpacity();
		   } else {
			 this._com_sprites[i].opacity = 0;
		   };
   } else {
		  if (i > this.limit_rows_sp()) {
			  this._com_sprites[i].opacity = 0;
		  } else {
			  this._com_sprites[i].opacity = this.translucentOpacity();
		  };
   };
};

//==============================
// * processWheel
//==============================
Window_ActorCommand.prototype.processWheel = function() {
    if (this.isOpenAndActive()) {
        var threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this._index++;
			SoundManager.playCursor();
			if (this._index > (this.maxCom() - 1)) {this._index = 0};			
        };
        if (TouchInput.wheelY <= -threshold) {
            this._index--;
			SoundManager.playCursor();
			if (this._index < 0) {this._index = (this.maxCom() - 1)};
        };
    };
};

//==============================
// * Update Input Commands
//==============================
Window_ActorCommand.prototype.update_input_commands = function() {
      if (this._side_input) {this.update_side_input()};
};

//==============================
// * Update Side Input
//==============================
Window_ActorCommand.prototype.update_side_input = function() {
	if (this.isOpenAndActive()) {
	if (Input.isRepeated('right')) {
		SoundManager.playCursor(); 
		if (this._com_mode_b === 1) {
		    this._index--;	    
	     	if (this._index < 0) {this._index = (this.maxCom() - 1)};
		} else {
            this._index++;	    
		    if (this._index > (this.maxCom() - 1)) {this._index = 0};		
		}
    };
    if (Input.isRepeated('left')) {
		SoundManager.playCursor();
		if (this._com_mode_b === 1) {
            this._index++;	    
		    if (this._index > (this.maxCom() - 1)) {this._index = 0};	
		} else {
 		    this._index--;	    
	     	if (this._index < 0) {this._index = (this.maxCom() - 1)};	
		}

    };
	};
};

//==============================
// * LineHeight
//==============================
Window_ActorCommand.prototype.lineHeight = function() {
    return 1;
};

//==============================
// * Max Com
//==============================
Window_ActorCommand.prototype.maxCom = function() {
	if (!this._list) {return 0};
	return this._list.length;
};

//==============================
// * Limit Rows SP
//==============================
Window_ActorCommand.prototype.limit_rows_sp = function() {
	if (this._com_mode_b === 1) {this.maxCom()};
	return this._row_max;
};

//==============================
// * Com Fade Speed
//==============================
Window_ActorCommand.prototype.com_fade_speed = function() {
	return 20;
};

//==============================
// * Com Move Speed
//==============================
Window_ActorCommand.prototype.com_move_speed = function() {
	if (this._com_mode_b === 1) {return 5};
	return 20;
};

//==============================
// * Com Zoom Speed
//==============================
Window_ActorCommand.prototype.com_zoom_speed = function() {
	return this._zoom_speed;
};

//==============================
// * Com Zoom Rate
//==============================
Window_ActorCommand.prototype.com_zoom_rate = function() {
	return this._zoom_rate;
};

//==============================
// * Limit Height
//==============================
Window_ActorCommand.prototype.limit_height = function(i) {
	if (this._index >= this.limit_rows_sp()) {
	   return (this._index - this.limit_rows_sp()) * this._wh[1];
	};
	return 0;
};

//==============================
// * Command Name
//==============================
Window_ActorCommand.prototype.command_name = function() {
	if (!this._list || !this._list[this._index]) {return ""};
	return this._list[this._index].name;
};

//==============================
// * need Reset Com
//==============================
Window_ActorCommand.prototype.needResetCom = function() {
     if (!this._com_sprites) {return true};
	 if (this._actor && this._oldID != this._actor._actorId) {return true};
	 return false
};

//==============================
// * Update Com Sprites
//==============================
Window_ActorCommand.prototype.update_battle_commands = function() {
	if (this.needResetCom()) {
	   if (this._actor) {this.battle_commands_initialize()};
	   return	
	};
	this.contentsOpacity = 0;
	this.opacity = 0;
	if (this._com_index != this._index) {this.refresh_index()}; 
	for (var i = 0; i < this._com_sprites.length; i++) {
		if (i <= this.maxCom()) {
		    this._com_sprites[i].visible = true;
			this.update_commands(i);
		} else { 	
			this._com_sprites[i].opacity = 0;
			this._com_sprites[i].visible = false;
	    };
	};
	if (this._old_visible != this.visible) {this.position_clear()};
	if (this._arrow) {this.update_arrow()};
	if (this._cursor_b) {this.update_cursor_b()};
	if (this._com_name) {this._com_name.opacity += this.com_fade_speed()};
	this._layout.opacity += this.com_fade_speed();
	this.update_input_commands();
	if (this._com_mode_b === 0 && this._wh && this._wh[1] === 0) {
		this.refresh_bitmap_com();
		if (this._arrow) {this.refresh_arrow_position()};
	};	
};

//==============================
// * Update Arrow
//==============================
Window_ActorCommand.prototype.update_arrow = function() {
	this.update_arrow_slide();
	this.update_arrow_visible();
	this._arrow[0].y = this._arrow_org_y[0] - this._arrow_slide[0];
	this._arrow[1].y = this._arrow_org_y[1] + this._arrow_slide[0];	
};	

//==============================
// * Update Arrow
//==============================
Window_ActorCommand.prototype.update_arrow_slide = function() {
	this._arrow_slide[2] ++
	if (this._arrow_slide[2] < 2) {return};
	this._arrow_slide[2] = 0
    this._arrow_slide[1] += 0.5;
	if (this._arrow_slide[1] < 5) {
		this._arrow_slide[0] += 1;
	} else if (this._arrow_slide[1] < 10) {
		this._arrow_slide[0] -= 1
	} else {
		this._arrow_slide = [0,0];
	};
};

//==============================
// * Sprite Move To
//==============================
Window_ActorCommand.prototype.sprite_move_to = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 5 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Update Commands
//==============================
Window_ActorCommand.prototype.update_commands = function(i) {
      this.update_position(i); 
	  this.update_effect_selection(i);
	  if (!this._com_sprites[i].enabled) {this._com_sprites[i].opacity = 90};
};

//==============================
// * Update Ring Command
//==============================
Window_ActorCommand.prototype.update_ring_command = function(i,c_index) {
	  if (i >= this.maxCom()) {this._com_sprites[i].visible = false};
 	  var rol_index = 1 / this.maxCom();
	  if (this._ring_move) {var si = c_index}
	  else {var si = 0};
      var now_p = rol_index * (si - i);
      var r_p = this._pi * -now_p;
      this._wh[0] = Math.floor(this._rol_range * Math.sin(r_p));
      this._wh[1] = -Math.floor(this._rol_range * Math.cos(r_p));
};

//==============================
// * Refresh Ring Position
//==============================
Window_ActorCommand.prototype.refresh_ring_command = function() {
	for (var i = 0; i < this._com_sprites.legth; i++) {
		this._com_sprites[i].visible = false;
	};
	for (var i = 0; i < this.maxCom(); i++) {
    	this.update_ring_command(i,i)
    	this._com_sprites[i].x = this.width / 2 + Moghunter.bcom_com_x;
    	this._com_sprites[i].y = this.height / 2 + Moghunter.bcom_com_y;	
		this._com_sprites[i].visible = true;
		this._com_sprites[i].opacity = 0;
	};
};

//==============================
// * Update Position
//==============================
Window_ActorCommand.prototype.update_position = function(i) {
	if (this._com_mode_b === 0) {
    	this._np[0] = this._wh[0] + Moghunter.bcom_com_x + this._side[i][0];
	    this._np[1] = this._wh[1] + (this._wh[1] * i) - this.limit_height() + Moghunter.bcom_com_y + this._side[i][1];
	} else {
		this.update_ring_command(i,this._index);
    	this._np[0] = (this.width / 2) + this._wh[0] + Moghunter.bcom_com_x + this._side[i][0];
	    this._np[1] = (this.height / 2) + this._wh[1] + Moghunter.bcom_com_y + this._side[i][1];		
	};
	this._com_sprites[i].x = this.sprite_move_to(this._com_sprites[i].x,this._np[0],this.com_move_speed());
	this._com_sprites[i].y = this.sprite_move_to(this._com_sprites[i].y,this._np[1],this.com_move_speed());
};

//==============================
// * Update Effect Selection
//==============================
Window_ActorCommand.prototype.update_effect_selection = function(i) {	
	if (this._index === i) { 
		this.update_on_index(i);
	} else {
		this.update_off_index(i);
	};
	this._com_sprites[i].scale.y = this._com_sprites[i].scale.x;
};

//==============================
// * Update On Index
//==============================
Window_ActorCommand.prototype.update_on_index = function(i) {
	this._side[i] = [this._side_m[0],this._side_m[1]];
	this._cursor_nxy = [this._com_sprites[i].x - (this._com_sprites[i].bitmap.width / 2),this._com_sprites[i].y];
    this._com_sprites[i].opacity += this.com_fade_speed();
	if (this._zoom_effect) {this.update_zoom_effect(i);};
};

//==============================
// * Update Off Index
//==============================
Window_ActorCommand.prototype.update_off_index = function(i) {	
   this._side[i] = [0,0];
   if (this._com_sprites[i].opacity > this.translucentOpacity()){this._com_sprites[i].opacity -= this.com_fade_speed()};
   if (this._com_mode_b === 0) {this.update_off_mode_0(i)
   } else {if (this._com_sprites[i].opacity < this.translucentOpacity()){this._com_sprites[i].opacity += this.com_fade_speed()};
   };
   if (this._com_sprites[i].scale.x > 1.00){this._com_sprites[i].scale.x -= this.com_zoom_speed()};
};

//==============================
// * Update Off Mode 0
//==============================
Window_ActorCommand.prototype.update_off_mode_0 = function(i) {
   if (this._index > this.limit_rows_sp()) {
		   if (i >= this._index - this.limit_rows_sp() && i <= this._index) {
			 if (this._com_sprites[i].opacity < this.translucentOpacity()){this._com_sprites[i].opacity += this.com_fade_speed()};
		   } else {
			 this._com_sprites[i].opacity -= this.com_fade_speed();
		   };
   } else {
		  if (i > this.limit_rows_sp()) {
			  this._com_sprites[i].opacity -= this.com_fade_speed();
		  } else {
			  if (this._com_sprites[i].opacity < this.translucentOpacity()){this._com_sprites[i].opacity += this.com_fade_speed()};
		  };
   };
};

//==============================
// * Update Zoom Effect
//==============================
Window_ActorCommand.prototype.update_zoom_effect = function(i) {	
     if (this._zoom[0] === 0) {
		 if (this._com_sprites[i].scale.x < this.com_zoom_rate()) {this._com_sprites[i].scale.x += this.com_zoom_speed()};
		 if (this._loop_zoom_effect && this._com_sprites[i].scale.x >= this.com_zoom_rate()) {this._zoom[0] = 1};
	 } else {
		 this._com_sprites[i].scale.x -= this.com_zoom_speed();
		 if (this._com_sprites[i].scale.x <= 1.00) {this._zoom[0] = 0};
	 };
};

//==============================
// * Process Touch
//==============================
Window_ActorCommand.prototype.processTouch = function() {
    if (this.isOpenAndActive()) {
		if (TouchInput.isCancelled()) {
            if (this.isCancelEnabled()) {
                this.processCancel();
            };
		} else if (TouchInput.isTriggered() && this.isTouchedInsideCom()) {
			this.sel_time = 5;
        };		
	};
};

//==============================
// * Process Touch
//==============================
Window_ActorCommand.prototype.isTouchedInsideCom = function() {
	for (var i = 0; i < this._com_sprites.length; i++) {
		if (this._com_sprites[i].visible && this._com_sprites[i].opacity > 0) {
			if (TouchInput.x > this.x + this._com_sprites[i].x - (this._com_sprites[i].bitmap.width / 2) && 
				TouchInput.x < this.x + this._com_sprites[i].x + this._com_sprites[i].bitmap.width - (this._com_sprites[i].bitmap.width / 2) &&
				TouchInput.y > this.y + this._com_sprites[i].y - (this._com_sprites[i].bitmap.height / 2) &&
				TouchInput.y < this.y + this._com_sprites[i].y + this._com_sprites[i].bitmap.height - (this._com_sprites[i].bitmap.height / 2)) {
					if(this._index == i){
						return true;
					}else{
						this._index = i ; 
						SoundManager.playCursor(); 
						return false
					};
				}
	    };
	};	
	return false;
};

//==============================
// * Update Wait Selection
//==============================
Window_ActorCommand.prototype.update_wait_selection = function() {
	this.sel_time--;
	if (this.sel_time === 0) { this.processOk();};
	if (BattleManager._actorIndex >= 0) {this.update_battle_commands()};
};

//==============================
// * Update
//==============================
var _alias_mog_bcom_wcom_update = Window_ActorCommand.prototype.update;
Window_ActorCommand.prototype.update = function() {
	if ($gameTemp._bcom_need_refresh) {$gameTemp._bcom_need_refresh = false;this.battle_commands_initialize()};
	if (this.sel_time > 0) {this.update_wait_selection();return;};
	_alias_mog_bcom_wcom_update.call(this);	
	if (BattleManager._actorIndex >= 0) {this.update_battle_commands()};
};

//==============================
// * Set Mcursor Data
//==============================
Window_ActorCommand.prototype.set_mcursor_data = function() {
};

//==============================
// * Create Layout Window
//==============================
var _alias_mog_bcom_sbat_create_layout_window = Scene_Battle.prototype.create_layout_window
Scene_Battle.prototype.create_layout_window = function() {
	_alias_mog_bcom_sbat_create_layout_window.call(this)
	if (this._com_layout) {this.removeChild(this._com_layout)};
};

};
