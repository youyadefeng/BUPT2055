//=============================================================================
// MOG_MapNameHud.js
//=============================================================================

/*:
 * @plugindesc (v1.3)[v1.1]  画面 - 地图浮动框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-浮动框
 * @desc 图浮动框的图片资源。
 * @default 地图浮动框-框
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-浮动框 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 250
 *
 * @param 平移-浮动框 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 32
 *
 * @param 平移-地图名 X
 * @desc 以浮动框为基准，x轴方向平移，单位像素。
 * @default 80
 *
 * @param 平移-地图名 Y
 * @desc 以浮动框为基准，y轴方向平移，单位像素。
 * @default 15
 *
 * @param 持续时间
 * @desc 浮动框的持续时间。120表示120帧后浮动框消失。
 * （1秒60帧）
 * @default 140
 *
 * @param 字体大小
 * @type number
 * @min 1
 * @desc 浮动框的字体大小。
 * @default 20
 *
 * @param 字体是否为斜体
 * @type boolean
 * @on 是
 * @off 否
 * @desc true - 是，false - 否
 * @default false
 *
 * @param 是否使用滑动效果
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 是否使用浮动框缩放效果
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 是否使用文字缩放效果
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default false
 * 
 * @param 是否使用粒子
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-粒子
 * @parent 是否使用粒子
 * @desc 粒子的图片资源。
 * @default 地图浮动框-粒子
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 粒子数量
 * @parent 是否使用粒子
 * @type number
 * @min 1
 * @desc 粒子图片的数量。
 * @default 15
 *
 * @param 是否使用滚轮
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-滚轮
 * @parent 是否使用滚轮
 * @desc 滚轮的图片资源。
 * @default 地图浮动框-滚轮
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-滚轮 X
 * @parent 是否使用滚轮
 * @desc 以浮动框中心为基准，x轴方向平移，单位像素。
 * @default -120
 *
 * @param 平移-滚轮 Y
 * @parent 是否使用滚轮
 * @desc 以浮动框中心为基准，y轴方向平移，单位像素。
 * @default 0
 *
 * @param 滚轮优先权
 * @parent 是否使用滚轮
 * @type select
 * @option 滚轮在浮动框下面
 * @value 0
 * @option 滚轮在浮动框上面
 * @value 1
 * @desc 0 - 滚轮在浮动框下面，1 - 滚轮在浮动框上面。
 * @default 0
 *
 * @param 滚轮旋转速度
 * @parent 是否使用滚轮
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0.01
 *
 * @help  
 * =============================================================================
 * +++ MOG Map Name Hud(v1.3) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 进入地图时会弹出浮动框表示地图的名字。插件用于美化地图浮动框。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 使用地图浮动框，需要配置资源文件：（img/system文件夹）
 *
 * 资源-浮动框
 * 资源-粒子
 * 资源-滚轮
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

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_MapNameHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_MapNameHud');   
    Moghunter.mhud_pos_x = Number(Moghunter.parameters['平移-浮动框 X'] || 250);
	Moghunter.mhud_pos_y = Number(Moghunter.parameters['平移-浮动框 Y'] || 32);
	Moghunter.mhud_text_x = Number(Moghunter.parameters['平移-地图名 X'] || 80);
	Moghunter.mhud_text_y = Number(Moghunter.parameters['平移-地图名 Y'] || 15);
	Moghunter.mhud_duration = Number(Moghunter.parameters['持续时间'] || 160);
	Moghunter.mhud_fontsize = Number(Moghunter.parameters['字体大小'] || 20);	
	Moghunter.mhud_fontItalic = String(Moghunter.parameters['字体是否为斜体'] || 'false');	
    Moghunter.mhud_slide = String(Moghunter.parameters['是否使用滑动效果'] || 'true');
    Moghunter.mhud_zoom = String(Moghunter.parameters['是否使用浮动框缩放效果'] || 'false');
	Moghunter.mhud_textZoom = String(Moghunter.parameters['是否使用文字缩放效果'] || 'true');
    Moghunter.mhud_paticles = String(Moghunter.parameters['是否使用粒子'] || 'true');
    Moghunter.mhud_paticlesNumber = Number(Moghunter.parameters['粒子数量'] || 15);
	Moghunter.mhud_circle = String(Moghunter.parameters['是否使用滚轮'] || 'true');
	Moghunter.mhud_circleX = Number(Moghunter.parameters['平移-滚轮 X'] || -120);
	Moghunter.mhud_circleY = Number(Moghunter.parameters['平移-滚轮 Y'] || 0);
	Moghunter.mhud_circleZ = Number(Moghunter.parameters['滚轮优先权'] || 0);
	Moghunter.mhud_circleR = Number(Moghunter.parameters['滚轮旋转速度'] || 0.01);
    
	Moghunter.src_MapName = String(Moghunter.parameters['资源-浮动框']);
	Moghunter.src_MapName_Particles = String(Moghunter.parameters['资源-粒子']);
	Moghunter.src_MapName_Circle = String(Moghunter.parameters['资源-滚轮']);
	
//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_mhud_system_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_mhud_system_initialize.call(this);
    this.setMapNameTemp();
};

//==============================
// * set Map Name Temp
//==============================
Game_System.prototype.setMapNameTemp = function() {
	this._mapNameData = {};
	this._mapNameData.refresh = false;
	this._mapNameData.slide = String(Moghunter.mhud_slide) === "true" ? true : false;
	this._mapNameData.zoomMode = String(Moghunter.mhud_zoom) === "true" ? true : false;
	this._mapNameData.particles = String(Moghunter.mhud_paticles) === "true" ? true : false;
	this._mapNameData.nParticles = Number(Moghunter.mhud_paticlesNumber);
	this._mapNameData.circle = String(Moghunter.mhud_circle) === "true" ? true : false;
	this._mapNameData.circleZ = Number(Moghunter.mhud_circleZ);
    this._mapNameData.orgX = Number(Moghunter.mhud_pos_x);
	this._mapNameData.orgY = Number(Moghunter.mhud_pos_y);	
	this._mapNameData.name = "";
	this._mapNameData.xo = 0;
	this._mapNameData.textZoom = String(Moghunter.mhud_textZoom) === "true" ? true : false;
	this._mapNameData.textScale = 0;
	this._mapNameData.x = 0;
	this._mapNameData.y = 0;
	this._mapNameData.cw = 0;
	this._mapNameData.ch = 0;
	this._mapNameData.cw2 = 0;
	this._mapNameData.rotation = 0;
	this._mapNameData.ch2 = 0;	
	this._mapNameData.opacity = 0;
	this._mapNameData.scaleX = 1.00;
	this._mapNameData.scaleY = 1.00;
	this._mapNameData.mode = 0;
	this._mapNameData.mapID = 0;
	this._mapNameData.duration = 0;
	this._mapNameData.startDuration = 0;
	this._mapNameData.endDuration = 0;
};

//==============================
// * clear Map Name Temp
//==============================
Game_System.prototype.clearMapNameTemp = function() {
	this._mapNameData.rotation = 0;
	this._mapNameData.xo = 0;
	this._mapNameData.textScale = 0;
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_mapName_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_mapName_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createMapNameHud();
	this.sortMz();
};

//==============================
// ** create Map Name Hud
//==============================
Scene_Map.prototype.createMapNameHud = function() {
	if (this.needRefreshMhud()) {
		$gameSystem._mapNameData.refresh = true;
		$gameSystem._mapNameData.name = $gameMap.displayName();
	};
	if ($gameSystem._mapNameData.mapID != $gameMap._mapId) {
		$gameSystem.clearMapNameTemp();
		
	};
	$gameSystem._mapNameData.mapID = $gameMap._mapId;
	if ($gameMap.displayName()) {
	    this._mapNameHud = new Map_Name_Hud();
		this._mapNameHud.mz = 140;
		this._hudField.addChild(this._mapNameHud);			
	};	
};

//==============================
// * Need Refresh MHud
//==============================
Scene_Map.prototype.needRefreshMhud = function() {
	if (!$gameMap.isNameDisplayEnabled()) {return false};
	if (!$gameMap.displayName()) {return false};
	if ($gameSystem._mapNameData.mapID === $gameMap._mapId) {return false};
	return true;
};

//=============================================================================
// * Map_Name_Hud
//=============================================================================
function Map_Name_Hud() {
    this.initialize.apply(this, arguments);
};

Map_Name_Hud.prototype = Object.create(Sprite.prototype);
Map_Name_Hud.prototype.constructor = Map_Name_Hud;

//==============================
// * Initialize
//==============================
Map_Name_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
    this.loadBitmap();
	this.createSprites();
	if (this.data().refresh) {this.refresh()};
	this.updateBase();
};

//==============================
// * Data
//==============================
Map_Name_Hud.prototype.data = function() {	
    return $gameSystem._mapNameData;
};

//==============================
// * Load Img
//==============================
Map_Name_Hud.prototype.loadBitmap = function() {
	this._layoutImg = ImageManager.loadSystem(Moghunter.src_MapName);
};

//==============================
// * get Data
//==============================
Map_Name_Hud.prototype.getData = function() {
    this.data().cw = this._layoutImg.width;
	this.data().ch = this._layoutImg.height;
    this.data().cw2 = Math.floor(this.data().cw / 2);
	this.data().ch2 = Math.floor(this.data().ch / 2);	
	if (this._particles) {
		for (var i = 0; i < this._particles.length ; i++) {
			 this.refreshParticles(this._particles[i],true);
		};
	};
};

//==============================
// * mode
//==============================
Map_Name_Hud.prototype.mode = function() {
    return this.data().mode;
};

//==============================
// * map Name
//==============================
Map_Name_Hud.prototype.mapName = function() {
    return this.data().name ? String(this.data().name) : "";
};

//==============================
// * create Sprites
//==============================
Map_Name_Hud.prototype.createSprites = function() {
	if (this.data().circle && this.data().circleZ === 0) {this.createCircle()};
    this.createLayout();
	if (this.data().circle && this.data().circleZ != 0) {this.createCircle()};
	if (this.data().particles) {this.createParticles()};
	this.createName();
};

//==============================
// * create Sprites
//==============================
Map_Name_Hud.prototype.createLayout = function() {
	this._layout = new Sprite(this._layoutImg);
	this._layout.anchor.x = 0.5;
	this._layout.anchor.y = 0.5;
	this.addChild(this._layout);
};

//==============================
// * create Name
//==============================
Map_Name_Hud.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(160,32));
	this._name.bitmap.fontSize = Number(Moghunter.mhud_fontsize);
	this._name.bitmap.fontItalic = String(Moghunter.mhud_fontItalic) === "true" ? true : false;
	this._name.anchor.x = 0.5;
	this._name.anchor.y = 0.5;
	this._name.cw = this._name.bitmap.width;
	this._name.ch = this._name.bitmap.height;
	this._name.org = [
	    	Number(Moghunter.mhud_text_x) - this._name.cw / 2,
		    Number(Moghunter.mhud_text_y) - this._name.ch / 2
	];
	this.addChild(this._name);
	this.refreshName();
};

//==============================
// * refresh Name
//==============================
Map_Name_Hud.prototype.refreshName = function() {
	this._name.bitmap.clear()
	this._name.bitmap.drawText(this.mapName(),0,0,this._name.cw,this._name.ch,"center");
	if (this.data().slide && this.data().xo === 0 && !this.data().textZoom) {this.data().xo = -10};
};

//==============================
// * create Circle
//==============================
Map_Name_Hud.prototype.createCircle = function() {
	this._circle = new Sprite(ImageManager.loadSystem(Moghunter.src_MapName_Circle));
	this._circle.anchor.x = 0.5;
	this._circle.anchor.y = 0.5;
	this._circle.org = [Moghunter.mhud_circleX,Moghunter.mhud_circleY];
	this._circle.rs = Moghunter.mhud_circleR;
	this._circle.rotation = this.data().rotation;
	this.addChild(this._circle);
};

//==============================
// * update Circle
//==============================
Map_Name_Hud.prototype.updateCircle = function() {
	this.data().rotation += this._circle.rs;
	this._circle.rotation = this.data().rotation;
};

//==============================
// * create Particles
//==============================
Map_Name_Hud.prototype.createParticles = function() {
	this._particlesField = new Sprite();
	this.addChild(this._particlesField); 
	this._particles = [];
	for (var i = 0; i < this.data().nParticles ; i++) {
		 this._particles[i] = new Sprite(ImageManager.loadSystem(Moghunter.src_MapName_Particles ));
		 this._particles[i].anchor.x = 0.5;
		 this._particles[i].anchor.y = 0.5;
		 this._particles[i].sx = 0;
		 this._particles[i].sy = 0;
		 this._particles[i].so = 0;
		 this._particles[i].sr = 0;	
		 this._particlesField.addChild(this._particles[i]); 
		 if (this.data().cw != 0) {this.refreshParticles(this._particles[i],true)};
	};
};
  
//==============================
// * update Particles
//==============================
Map_Name_Hud.prototype.updateParticles = function() {
    for (var i = 0; i < this._particles.length ; i++) {
		 this.updateParticlesAnimation(this._particles[i]);
	};
};

//==============================
// * refresh Sprites
//==============================
Map_Name_Hud.prototype.refreshParticles = function(sprite,start) {
	if (start) {
        var wrange = -this.data().cw2 + Math.randomInt(this.data().cw);
	} else {
		var wrange = -this.data().cw2 + Math.randomInt(this.data().cw / 5);
	};
	var hrange = -this.data().ch2 + Math.randomInt(this.data().ch);
	sprite.x = wrange;	
	sprite.y = hrange;	
	var srange = Math.randomInt(5) * 0.2 + 0.7;
	sprite.sx = srange;
	sprite.opacity = 0
	var orange = 0.5 + ((Math.randomInt(2) + 0.5) * 1.2);
	sprite.so = orange;	
	sprite.scale.x = 0.75 + (Math.randomInt(50) * 0.01);
	sprite.scale.y = sprite.scale.x;	
	var rrange = 0.002 + (Math.randomInt(10) * 0.002);
	sprite.sr = rrange;
	
};

//==============================
// * update Particles
//==============================
Map_Name_Hud.prototype.updateParticlesAnimation = function(sprite) {
	sprite.x += sprite.sx;
	sprite.y += sprite.sy;
	sprite.rotation += sprite.sr;
	if (sprite.x < this.data().cw2 - 25) {
	    sprite.opacity += sprite.so;
	} else {
	    sprite.opacity -= 10;
    };
    if (this.needRefreshParticles(sprite)) {this.refreshParticles(sprite,false)};	
};

//==============================
// * need Refresh Particles
//==============================
Map_Name_Hud.prototype.needRefreshParticles = function(sprite) {
 	if (sprite.x > this.data().cw2 ) {return true};
	if (sprite.x < -this.data().cw2) {return true};
 	if (sprite.y > this.data().ch2) {return true};
	if (sprite.y < -this.data().ch2) {return true};	
	return false;
};


//==============================
// * refresh
//==============================
Map_Name_Hud.prototype.refresh = function() {
    this.data().refresh = false;
    this.data().x = this.data().orgX;
	this.data().y = this.data().orgY;
	this.data().duration = Number(Moghunter.mhud_duration);
    this.setStartAnimation();
};

//==============================
// * Update Zoom Normal
//==============================
Map_Name_Hud.prototype.updateZoomNormal = function(zoomSpeed) {
	if (this.data().scaleX < 1.00) {
		this.data().scaleX += zoomSpeed;
		if (this.data().scaleX > 1.00) {this.data().scaleX = 1.00};
	} else if (this.data().scaleX > 1.00) {
		this.data().scaleX -= zoomSpeed;
		if (this.data().scaleX < 1.00) {this.data().scaleX = 1.00};		
	};
	if (this.data().scaleY < 1.00) {
		this.data().scaleY += zoomSpeed;
		if (this.data().scaleY > 1.00) {this.data().scaleY = 1.00};
	} else if (this.data().scaleY > 1.00) {
		this.data().scaleY -= zoomSpeed;
		if (this.data().scaleY < 1.00) {this.data().scaleY = 1.00};		
	};	
};

//==============================
// * set Start Animation
//==============================
Map_Name_Hud.prototype.setStartAnimation = function() {
	this.data().opacity = 0;
	this.data().startDuration = 60;
	if (this.data().textZoom) {this.data().textScale = 0.50};
    if (this.data().slide) {this.data().x = this.data().orgX - 50};  
	if (this.data().zoomMode) {
		this.data().scaleX = 0;
		this.data().scaleY = 0;
	};
};

//==============================
// * set End Animation
//==============================
Map_Name_Hud.prototype.setEndAnimation = function() {
	this.data().opacity = 255;
	this.data().endDuration = 60;
};

//==============================
// * Update Start Animation
//==============================
Map_Name_Hud.prototype.updateStartAnimation = function() {
	this.data().startDuration--;
	this.data().opacity += 5;
	if (this.data().x < this.data().orgX) {this.data().x++};
	if (this.data().xo < 0) {this.data().xo += 0.2};
	if (this.data().zoomMode) {this.updateZoomNormal(0.015)};
};

//==============================
// * Update Middle Animation
//==============================
Map_Name_Hud.prototype.updateMiddleAnimation = function() {
	this.data().duration--;
	if (this.data().zoomMode) {this.updateZoomNormal(0.015)};
	if (this.data().duration === 0) {this.setEndAnimation()};
};

//==============================
// * Update End Animation
//==============================
Map_Name_Hud.prototype.updateEndAnimation = function() {
	this.data().endDuration--;
	this.data().opacity -= 5;
	if (this.data().zoomMode) {
		this.data().scaleX -= 0.015;
		this.data().scaleY = this.data().scaleX;
	};
	if (this.data().slide) {
		this.data().x++;
		this.data().xo += 0.2	
	};
};

//==============================
// * Update Animation
//==============================
Map_Name_Hud.prototype.updateAnimation = function() {
	if (this.data().startDuration > 0) {
		this.updateStartAnimation();
	} else if (this.data().duration > 0) {
		this.updateMiddleAnimation();
	} else if (this.data().endDuration > 0) {
		this.updateEndAnimation();
	};
	if (this.data().textScale > 0) {this.data().textScale -= 0.01};
	if (this._circle) {this.updateCircle()};
	if (this._particlesField) {this.updateParticles()};
};

//==============================
// * Update Sprites
//==============================
Map_Name_Hud.prototype.updateSprites = function() {	
    this.updateAnimation();
    this.updateBase(); 
};

//==============================
// * Update Base
//==============================
Map_Name_Hud.prototype.updateBase = function() {	
    this.opacity = this.data().opacity;
    this._layout.x = this.data().x + (this.data().cw / 2);
	this._layout.y = this.data().y + (this.data().ch / 2);
	this._layout.scale.x = this.data().scaleX;
	this._layout.scale.y = this.data().scaleY;	
	this._name.x = this._layout.x + this._name.org[0] + this.data().xo;
	this._name.y = this._layout.y + this._name.org[1];	
	this._name.scale.x = this._layout.scale.x + (this.data().textScale * 2);
	this._name.scale.y = this._layout.scale.y - (this.data().textScale * 2);
	if (this._circle) {
		this._circle.x = this._layout.x + this._circle.org[0];
		this._circle.y = this._layout.y + this._circle.org[1];	
		this._circle.scale.x = this._layout.scale.x;
		this._circle.scale.y = this._layout.scale.y;	
	};
	if (this._particlesField) {
		this._particlesField.x = this._layout.x;
		this._particlesField.y = this._layout.y;
		this._particlesField.scale.x = this._layout.scale.x;
		this._particlesField.scale.y = this._layout.scale.y;		
	};
};

//==============================
// * Update
//==============================
Map_Name_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if (this.data().cw === 0) {
		if (this._layoutImg.isReady()) {this.getData()};
		return
	} else {
		this.updateSprites();
	};
};

//=============================================================================
// * Window MapName
//=============================================================================

//==============================
// * Refresh
//==============================
Window_MapName.prototype.refresh = function() {
	 this.contents.clear(); 
};