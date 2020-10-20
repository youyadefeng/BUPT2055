//=============================================================================
// MOG_MenuCursor.js
//=============================================================================

/*:
 * @plugindesc (v1.6)[v1.1]  主菜单 - 菜单指针
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-菜单指针
 * @desc 菜单指针的图片资源。
 * @default 菜单指针
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 是否使用gif动画循环
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default false
 *
 * @param gif动画帧数
 * @desc 帧数设置为4，会把Menu_Cursor.png分割成4份，然后依次循环播放。
 * @type number
 * @min 1
 * @default 4
 *
 * @param gif动画速度
 * @desc 每隔多少帧换下一个动画帧，数值越小越快。
 * @type number
 * @min 1
 * @default 7
 *
 * @param 是否使用滑动动画
 * @desc 菜单指针会左右滑动漂浮。
 * @type boolean
 * @on 使用
 * @off 不使用
 * true - 使用，false - 不使用
 * @default true 
 *
 * @param 偏移-指针 X
 * @desc 以指针的原点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 偏移-指针 Y
 * @desc 以指针的原点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @help  
 * =============================================================================
 * +++ MOG - Menu Cursor (v1.6) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 菜单项的左侧会漂浮一个菜单指针，用于帮助显示当前选择的菜单项。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 使用菜单指针，需要配置资源文件：（img/system文件夹）
 *
 * 资源-菜单指针
 * 
 * （如果设置了gif动画，那么就要按照帧数，将图片的每一帧从左往右依次添加，
 * 存储成一张图。插件会根据设置对图片进行切割。）
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 */
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_MenuCursor = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_MenuCursor');
    Moghunter.mcursor_float = String(Moghunter.parameters['是否使用滑动动画'] || true);
	Moghunter.mcursor_x = Number(Moghunter.parameters['偏移-指针 X'] || 0);
	Moghunter.mcursor_y = Number(Moghunter.parameters['偏移-指针 Y'] || 0);
	Moghunter.mcursor_animated = String(Moghunter.parameters['是否使用gif动画循环'] || false);
	Moghunter.mcursor_maxframes = Number(Moghunter.parameters['gif动画帧数'] || 4);
	Moghunter.mcursor_animationSpeed = Number(Moghunter.parameters['gif动画速度'] || 7);
	Moghunter.src_Menu_Cursor = String(Moghunter.parameters['资源-菜单指针']);
	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_mcursor_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_mcursor_temp_initialize.call(this);
	this._mcursorData = [false,0,0,0];
};

//=============================================================================
// ** Scene_Base
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_mcursor_scnBase_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
	_mog_mcursor_scnBase_initialize.call(this);
	if ($gameTemp) {$gameTemp._mcursorData = [false,0,0,0]};
	this._sprite_mcursor = null;
};

//==============================
// * Update
//==============================
var _mog_mcursor_scnBase_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
    _mog_mcursor_scnBase_update.call(this);
	if (!this._sprite_mcursor && $gameTemp && $gameTemp._mcursorData[0]){this.create_menucursor()};
	if (this._sprite_mcursor) {this.update_mcursor();};
};

//==============================
// * Create Menu Cursor
//==============================
Scene_Base.prototype.create_menucursor = function() {
	this.removeChild(this._sprite_mcursor);
    this._sprite_mcursor = new Sprite(ImageManager.loadSystem(Moghunter.src_Menu_Cursor));
	this._sprite_mcursor.opacity = 0;
	this._sprite_mcursor.anchor.x = 0.5;
	this._sprite_mcursor.anchor.y = 0.5;
	this._mcursor_data = [-1,-1,0,0,0,false,false,0,0,0,5,0,0];
	if (String(Moghunter.mcursor_float) === "true") {this._mcursor_data[5] = true};
	if (String(Moghunter.mcursor_animated) === "true"){this._mcursor_data[6] = true};
    this._mcursor_data[11] = Math.min(Math.max(Moghunter.mcursor_animationSpeed,1),999);
	this.addChild(this._sprite_mcursor);
};

//==============================
// * Update Menu Cursor
//==============================
Scene_Base.prototype.update_mcursor = function() {
	if (this.isBusy()) {this._sprite_mcursor.opacity -= 25;return};
    if (this._mcursor_data[0] == -1) {this.set_mcursor_initial();return}
	if ($gameTemp._mcursorData[1] > 0) {$gameTemp._mcursorData[1] -= 1,this._sprite_mcursor.opacity +=15;}
	else {this._sprite_mcursor.opacity = 0};
	if (this._mcursor_data[5]) {this.update_mcursor_float()};
	if (this._mcursor_data[6]) {this.update_mcursor_frames()};
	var nx = $gameTemp._mcursorData[2] + this._mcursor_data[0] + this._mcursor_data[2];
    this._sprite_mcursor.x = this.cursorMoveToSVD(this._sprite_mcursor.x,nx,5);
	this._sprite_mcursor.y = this.cursorMoveToSVD(this._sprite_mcursor.y,$gameTemp._mcursorData[3] + this._mcursor_data[1],5);
};

//==============================
// * Set Mcursor Initial
//==============================
Scene_Base.prototype.set_mcursor_initial = function() {
    if (!this._sprite_mcursor.bitmap.isReady()) {return};	
    this._mcursor_data[0] = Moghunter.mcursor_x;
	this._mcursor_data[1] = (this._sprite_mcursor.bitmap.height / 2) + Moghunter.mcursor_y;
	if (this._mcursor_data[6] ) {		
	    this._mcursor_data[7] = Math.floor(this._sprite_mcursor.bitmap.width / Moghunter.mcursor_maxframes)
		this._mcursor_data[8] = this._sprite_mcursor.bitmap.height;
	};
};
//==============================
// * Udate Mcursor Frames
//==============================
Scene_Base.prototype.update_mcursor_frames = function() {
	this._mcursor_data[10] += 1
	if (this._mcursor_data[10] < this._mcursor_data[11]) {return};
	this._mcursor_data[10] = 0
	this._sprite_mcursor.setFrame(this._mcursor_data[7] * this._mcursor_data[9],0, this._mcursor_data[7],this._mcursor_data[8]);
	this._mcursor_data[9] += 1;
	if (this._mcursor_data[9] >= Moghunter.mcursor_maxframes) {this._mcursor_data[9] = 0};
};

//==============================
// * Update Mcursor Float
//==============================
Scene_Base.prototype.update_mcursor_float = function() {
	 this._mcursor_data[4] += 1;
	 if (this._mcursor_data[4] < 2) {return;};
     this._mcursor_data[4] = 0;
	 this._mcursor_data[3] += 1;
	 if (this._mcursor_data[3] < 15) {this._mcursor_data[2] += 1}
	 else if (this._mcursor_data[3] < 30) {this._mcursor_data[2] -= 1}
	 else {this._mcursor_data[2] = 0 ;this._mcursor_data[3] = 0};	  
};

//==============================
// * cursor Move toSVD
//==============================
Scene_Base.prototype.cursorMoveToSVD = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 5 + (Math.abs(value - real_value) / 10);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};


//=============================================================================
// ** Window Selectable
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_mcursor_wselect_initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function(x, y, width, height) {
    _mog_mcursor_wselect_initialize.call(this,x, y, width, height);
	this._refCursorIndex = false;
};

//==============================
// * Update Arrows
//==============================
var _mog_mcursor_wSelect_updateArrows = Window_Selectable.prototype.updateArrows
Window_Selectable.prototype.updateArrows = function() {
    _mog_mcursor_wSelect_updateArrows.call(this);
	if (this.need_set_mcursor_data()) {this.set_mcursor_data();};
};

//==============================
// * Need Set MCursor Data
//==============================x
Window_Selectable.prototype.need_set_mcursor_data = function() {
	if (!this.active) {return false};
	if (!this.visible) {return false};
	if (this.index() < 0) {return false};
	if (this._opening) {return false};
	if (this._closing) {return false};
	if (this.openness <= 0) {return false};
	if (this.x <= -this.width || this.x >= Graphics.boxWidth) {return false};
	if (this.y <= -this.height || this.y >= Graphics.boxHeight) {return false};
	if (SceneManager.isSceneChanging()) {return false};
	return true;	
};

//==============================
// * Set Mcursor Data
//==============================
Window_Selectable.prototype.set_mcursor_data = function() {
	if (!this._refCursorIndex) {this._refCursorIndex = true;this.select(this.index())};
	var rect = this.itemRect(this.index());
	if(rect.x < 0 || rect.y < 0 || rect.x > (this.width - 48) || rect.y > (this.height - 48)) {return};
	$gameTemp._mcursorData[0] = true;
	$gameTemp._mcursorData[1] = 1;
	$gameTemp._mcursorData[2] = this.x + rect.x;
	$gameTemp._mcursorData[3] = this.y + rect.y + (rect.height / 2);
	this.updateScrollRoll();
};

//==============================
// * update SCroll Roll
//==============================
Window_Selectable.prototype.updateScrollRoll = function() {
    if (this.isOpenAndActive() && this.maxItems() > 0) {
		var srow = this.maxTopRow() === 0 ? 1 : this.maxCols();
        var threshold = 20;
		var idx = this._index;
        if (TouchInput.wheelY >= threshold) {
            this._index += srow;
			if (this._index > (this.maxItems() - 1)) {this._index = this.maxItems() - 1};
			this.select(this._index);
			if (idx != this._index) {SoundManager.playCursor()};
        };
        if (TouchInput.wheelY <= -threshold) {
            this._index -= srow;
			if (this._index < 0) {this._index = 0};
			this.select(this._index);
			if (idx != this._index) {SoundManager.playCursor()};
        };
    };
};


