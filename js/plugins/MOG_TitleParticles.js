//=============================================================================
// MOG_TitleParticles.js
//=============================================================================

/*:
 * @plugindesc (v1.1)[v1.1]  标题 - 标题粒子效果
 * @author Moghunter （Drill_up翻译）
 *
 *
 * @param 资源-粒子
 * @desc 粒子的图片资源。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param 粒子数量
 * @type number
 * @min 1
 * @desc 画面漂浮的粒子数量。
 * @default 25
 *
 * @param 粒子速度 X
 * @desc 粒子漂浮的速度，正数向右，负数向左。
 * @default 1
 *
 * @param 粒子速度 Y
 * @desc 粒子漂浮的速度，正数向下，负数向上。
 * @default -2
 *
 * @param 粒子旋转速度
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0.02
 *
 * @param 粒子混合模式
 * @type number
 * @min 0
 * @max 16
 * @desc pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 * @default 1
 *
 * @param 射线源 X
 * @desc 定义粒子在x轴方向上的出现频率。
 * 0.5 - 中间部分出现多（正态分布），1.0 - 均匀分布
 * @default 1.0
 * 
 * @param 射线源 Y
 * @desc 定义粒子在y轴方向上的出现频率。
 * 0.5 - 中间部分出现多（正态分布），1.0 - 均匀分布
 * @default 1.0
 * 
 * @param 是否显示魔法圈
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * 只在标题画面贴一个旋转的圈。
 * @default false
 *
 * @param 资源-魔法圈
 * @desc 魔法圈的图片资源。资源大小不限，甚至可以直接贴个背景。
 * @default 
 * @require 1
 * @dir img/enemies/
 * @type file
 * 
 * @param 平移-魔法圈 X
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 * 
 * @param 平移-魔法圈 Y
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 0
 * 
 * @param 魔法圈旋转速度
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0.01
 * 
 * @param 魔法圈混合模式
 * @type select
 * @option 普通
 * @value 0
 * @option 叠加
 * @value 1
 * @option 差值
 * @value 2
 * @desc ps层面上的图片效果处理。
 * 0 - 普通   1 - 叠加   2 - 差值
 * @default 1
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Title Particles (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 标题栏会漂浮出现粒子。当前选中项可以设置魔法圈围绕。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 需要配置资源文件：（img/enemies文件夹）
 *
 * 资源-粒子
 * 资源-魔法圈
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * 
 * 
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_Title_Particles = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleParticles');
    Moghunter.title_particle_number  = Number(Moghunter.parameters['粒子数量'] || 25);
    Moghunter.title_particle_sx = Number(Moghunter.parameters['粒子速度 X'] || 1);
    Moghunter.title_particle_sy = Number(Moghunter.parameters['粒子速度 Y'] || 1);
    Moghunter.title_particle_a = Number(Moghunter.parameters['粒子旋转速度'] || 0.02);
	Moghunter.title_particle_blend_mode  = Number(Moghunter.parameters['粒子混合模式'] || 1);
	Moghunter.title_particle_anchor_x = Number(Moghunter.parameters['射线源 X'] || 1.0);
	Moghunter.title_particle_anchor_y = Number(Moghunter.parameters['射线源 Y'] || 1.0);
	Moghunter.title_particle_circle = (Moghunter.parameters['是否显示魔法圈'] || true);
	Moghunter.title_particle_circle_x = Number(Moghunter.parameters['平移-魔法圈 X'] || 0);
	Moghunter.title_particle_circle_y = Number(Moghunter.parameters['平移-魔法圈 Y'] || 0);
	Moghunter.title_particle_circle_a = Number(Moghunter.parameters['魔法圈旋转速度'] || 0.01);
	Moghunter.title_particle_circle_blend = Number(Moghunter.parameters['魔法圈混合模式'] || 1);
	
	Moghunter.src_Particles = String(Moghunter.parameters['资源-粒子']);
	Moghunter.src_MagicCircle = String(Moghunter.parameters['资源-魔法圈']);
	
//=============================================================================
// ** Scene Title
//=============================================================================	
		
//==============================
// * Create
//==============================
var _alias_mog_title_particles_createBackground = Scene_Title.prototype.createBackground;
Scene_Title.prototype.createBackground = function() {	
    _alias_mog_title_particles_createBackground.call(this);
	this.create_particles();
	this.create_magic_circle();
  };
  
//==============================
// * Update
//==============================
var _alias_mog_title_particles_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
    _alias_mog_title_particles_update.call(this);
	this.update_particles();
	this.update_magic_circle();
};  
  
//==============================
// * Create Particles
//==============================
Scene_Title.prototype.create_particles = function() {
	var _sprite_particles_img = ImageManager.loadEnemy(Moghunter.src_Particles);
	this._sprite_particles = [];
	this._sprite_particles_data = [];	
    for (i = 0; i < Moghunter.title_particle_number; i++){
	  this._sprite_particles.push(new Sprite(_sprite_particles_img));
	  this.addChild(this._sprite_particles[i]);
	  this._sprite_particles_data[i] = []
	  this.reset_particles(i);
	  this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	  this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));
	  this._sprite_particles[i].opacity = 0;
	  this._sprite_particles[i].anchor.x = Moghunter.title_particle_anchor_x;
	  this._sprite_particles[i].anchor.y = Moghunter.title_particle_anchor_y;
	  this._sprite_particles[i].blendMode = Moghunter.title_particle_blend_mode;
    };
};
	
//==============================
// * Reset Particles
//==============================	
Scene_Title.prototype.reset_particles = function(i) {
	this._sprite_particles_data[i][0] = Math.floor((Math.random() * 2) * Moghunter.title_particle_sx)
	this._sprite_particles_data[i][1] = Math.floor((Math.random() * 2) * Moghunter.title_particle_sy)
	this._sprite_particles_data[i][2] = ((Math.random() * Moghunter.title_particle_a));
	this._sprite_particles[i].opacity = 0;
	this._sprite_particles[i].x = Math.floor((Math.random() * Graphics.boxWidth));
	var pz = ((Math.random() * 0.5) * 1);
	this._sprite_particles[i].scale = new PIXI.Point(0.5 + Number(pz), 0.5 + Number(pz));
	if (Moghunter.title_particle_sy < 0) { 
	    this._sprite_particles[i].y = Graphics.boxHeight + this._sprite_particles[i].height * 2;
	}
	else if (Moghunter.title_particle_sy > 0)
	{
		this._sprite_particles[i].y = -this._sprite_particles[i].height * 2;
	}
	else {
	    this._sprite_particles[i].y = Math.floor((Math.random() * Graphics.boxHeight));
    }
	if (this._sprite_particles_data[i][0] == 0 && this._sprite_particles_data[i][1] == 0) {
        this._sprite_particles[i].x = -this._sprite_particles[i].width * 5;
		this._sprite_particles_data[i][0] = 9999;
		this._sprite_particles_data[i][1] = 9999;
	};
}

//==============================
// * Reset Particles C
//==============================	
Scene_Title.prototype.reset_particles_c = function(i) {
	//if (this._sprite_particles_data[i] == null) {return false};
	if (this._sprite_particles[i].x < -this._sprite_particles[i].width * 2 || this._sprite_particles[i].x > Graphics.boxWidth + this._sprite_particles[i].width * 2) {return true};
	if (this._sprite_particles[i].y < -this._sprite_particles[i].height * 2 || this._sprite_particles[i].y > Graphics.boxHeight + this._sprite_particles[i].height * 2 ) {return true};
	return false;
}

//==============================
// * Update Particles
//==============================
Scene_Title.prototype.update_particles = function() {	
   for (var i = 0; i < this._sprite_particles.length; i++) {
        this._sprite_particles[i].x += this._sprite_particles_data[i][0];
		this._sprite_particles[i].y += this._sprite_particles_data[i][1];
		this._sprite_particles[i].opacity += 2;
		this._sprite_particles[i].rotation += this._sprite_particles_data[i][2];
    	if (this.reset_particles_c(i)) { this.reset_particles(i);};
	};
};

//==============================
// * Create Magic Circle
//==============================
Scene_Title.prototype.create_magic_circle = function() {
	if (Moghunter.title_particle_circle != "true") {return};
	this._sprite_mgc = new Sprite(ImageManager.loadEnemy(Moghunter.src_MagicCircle));
	this._sprite_mgc.x = Moghunter.title_particle_circle_x;
	this._sprite_mgc.y = Moghunter.title_particle_circle_y;
	this._sprite_mgc.anchor.x = 0.5;
	this._sprite_mgc.anchor.y = 0.5;
	this._sprite_mgc.opacity = 0;
	this._sprite_mgc.blendMode = Moghunter.title_particle_circle_blend;
	this.addChild(this._sprite_mgc);
}

//==============================
// * Update Magic Circle
//==============================
Scene_Title.prototype.update_magic_circle = function() {
	if (Moghunter.title_particle_circle != "true") {return};
	this._sprite_mgc.rotation += Moghunter.title_particle_circle_a;
	this._sprite_mgc.opacity += 3;
}