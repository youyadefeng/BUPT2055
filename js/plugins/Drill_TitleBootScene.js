//=============================================================================
// Drill_TitleBootScene.js
//=============================================================================

/*:
 * @plugindesc [v1.2]        标题 - 启动界面
 * @author Drill_up
 * 
 * @Drill_LE_param "阶段-%d"
 * @Drill_LE_parentKey ""
 * @Drill_LE_var "DrillUp.g_TBS_list_length"
 *
 * @help  
 * =============================================================================
 * +++ Drill_TitleBootScene +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得你可以在游戏加载后，初始化游戏窗口设置，并播放商标logo等内容。
 * 【支持插件关联资源的打包、加密】
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   作用于游戏的启动界面。
 * 2.该面板属于rmmv特殊系统面板。
 *   该面板关键字为：Scene_Boot
 * 结构：
 *   (1.rmmv启动的流程如下：
 *      游戏启动 -> 启动界面 -> 标题界面 -> 其他界面
 *      该插件只在rmmv的启动界面添加logo等内容的显示。
 *   (2.更多内容可以去看看"关于全自定义标题界面.docx"。
 * 启动初始化：
 *   (1.启动界面可以控制软件窗口的大小，或者设置全屏。
 *   (2.注意，全屏模式在win7操作系统中不一定有效，可能会变回窗口模式。
 *      这里的窗口配置都只修改 拉伸缩放 的高宽，不控制分辨率。
 *      如果要改分辨率，需要去 系统-引擎核心 中修改屏幕高宽。
 * 视频：
 *   (1.视频动画只支持 .webm(pc端) 和 .mp4(手机端) 格式的视频。
 *   (2.部分电脑的浏览器可能存在视频禁用的情况，使得视频无法播放。
 *      如果示例的logo视频能正常播放，那就不是浏览器视频禁用的问题。
 * 阶段：
 *   (1.插件中的阶段依次播放，你可以将动画、GIF、视频都配置在启动界面中。
 *   (2.你可以通过"当前阶段至少播放时长"规定玩家必须看几秒才可跳过。
 *      比如一些不可跳过的故事介绍或者影片介绍等。
 *      注意，如果阶段B的至少时长为0，那么点击跳过键，会直接从A跳到C。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/titles2
 * 先确保项目img文件夹下是否有titles2文件夹！
 * 要查看所有关联资源文件的插件，可以去看看"插件清单.xlsx"。
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 阶段-1 资源-单图
 * 阶段-1 资源-GIF
 * 阶段-2 资源-单图
 * 阶段-2 资源-GIF
 * ……
 *
 * 相关图片素材在img/titles2 文件夹下。
 * 相关声音素材在audio/bgm 文件夹下。
 * 相关视频素材在movies 文件夹下。
 *
 * -----------------------------------------------------------------------------
 * ----插件性能
 * 测试仪器：   4G 内存，Intel Core i5-2520M CPU 2.5GHz 处理器
 *              Intel(R) HD Graphics 3000 集显 的垃圾笔记本
 *              (笔记本的3dmark综合分：571，鲁大师综合分：48456)
 * 总时段：     20000.00ms左右
 * 对照表：     0.00ms  - 40.00ms （几乎无消耗）
 *              40.00ms - 80.00ms （低消耗）
 *              80.00ms - 120.00ms（中消耗）
 *              120.00ms以上      （高消耗）
 * 工作类型：   持续执行
 * 时间复杂度： o(n)*o(图像处理) + o(视频图像处理) 每帧
 * 测试方法：   打开标题即可
 * 测试结果：   图片模式/gif模式消耗：【14.46ms】
 *              视频模式消耗：【241.75ms】
 *
 * 1.插件只在自己作用域下工作消耗性能，在其它作用域下是不工作的。
 *   测试结果并不是精确值，范围在给定值的10ms范围内波动。
 *   更多了解插件性能，可以去看看"关于插件性能.docx"。
 * 2.播放视频消耗图形计算能力非常大，有时候可能会出现视频花屏问题。
 * 3.视频和图片是分开的结构，播放视频会掉帧，换图片阶段后会恢复帧。
 *   另外，启动界面的视频实测结果比标题界面的要流畅的多，可能是因为
 *   启动界面只单纯播放视频，不作其它复杂计算。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 修改了注释说明。修复了gif播放出错的bug。
 * [v1.2]
 * 修复了连续播放视频时，视频丢失的bug。
 *
 * 
 * @param ---游戏窗口---
 * @default
 * 
 * @param 游戏窗口模式
 * @parent ---游戏窗口---
 * @type select
 * @option 全屏模式
 * @value 全屏模式
 * @option 窗口模式
 * @value 窗口模式
 * @desc 注意，全屏模式在win7操作系统中不一定有效，会变回窗口模式。
 * @default 窗口模式
 *
 * @param 窗口是否最大化
 * @parent ---游戏窗口---
 * @type boolean
 * @on 最大化
 * @off 不操作
 * @desc true - 最大化，false - 不操作，游戏窗口将自动最大化。浏览器没有效果。
 * @default false
 *
 * @param 窗口是否设置初始缩放高宽
 * @parent ---游戏窗口---
 * @type boolean
 * @on 缩放
 * @off 不操作
 * @desc true - 缩放，false - 不操作，启动游戏后，自动将游戏缩放至指定高宽。
 * @default false
 *
 * @param 窗口初始缩放宽度
 * @parent ---游戏窗口---
 * @type number
 * @min 40
 * @desc 游戏窗口缩放的宽度，默认816。
 * @default 816
 *
 * @param 窗口初始缩放高度
 * @parent ---游戏窗口---
 * @type number
 * @min 40
 * @desc 游戏窗口缩放的高度，默认624。
 * @default 624
 *
 * @param 启动界面底色
 * @parent ---游戏窗口---
 * @desc 启动界面底图的颜色，填入的为颜色代码，比如#FFFFFF白、#000000黑、#98F5FF青。
 * @default #000000
 * 
 * @param ---启动界面---
 * @default
 *
 * @param 阶段-1
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-2
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-3
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-4
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-5
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-6
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-7
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-8
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-9
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-10
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-11
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-12
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-13
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-14
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-15
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-16
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-17
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-18
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-19
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 * @param 阶段-20
 * @parent ---启动界面---
 * @type struct<TitlePart>
 * @desc 启动界面的阶段设置。
 * @default 
 *
 */
/*~struct~TitlePart:
 *
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的启动阶段==
 * 
 *
 * @param 当前阶段至少播放时长
 * @type number
 * @min 0
 * @desc 该设置使得玩家必须看当前阶段内容一段时间才可跳过，单位帧。（1秒60帧）
 * @default 0
 *
 * @param 显示模式
 * @type select
 * @option 单图模式
 * @value 单图模式
 * @option GIF模式
 * @value GIF模式
 * @option 视频模式
 * @value 视频模式
 * @desc 当前阶段显示的模式。
 * @default 单图模式
 * 
 * @param ---单图模式---
 * @desc 
 *
 * @param 资源-单图
 * @parent ---单图模式---
 * @desc 单张图片的资源设置。
 * @default 启动界面-单图
 * @require 1
 * @dir img/titles2/
 * @type file
 *
 * @param 单图显现时长
 * @parent ---单图模式---
 * @type number
 * @min 0
 * @desc 单图显现出来的时间，单位帧。（1秒60帧）
 * @default 60
 *
 * @param 单图持续时长
 * @parent ---单图模式---
 * @type number
 * @min 0
 * @desc 单图持续显示的时间，单位帧。（1秒60帧）
 * @default 90
 *
 * @param 单图消失时长
 * @parent ---单图模式---
 * @type number
 * @min 0
 * @desc 单图显现出来的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 单图立即跳过时长
 * @parent ---单图模式---
 * @type number
 * @min 0
 * @desc 玩家点击跳过键，中断显现并跳过的过渡时长，设置0表示无过渡直接下一阶段，单位帧。（1秒60帧）
 * @default 12
 * 
 * @param ---GIF模式---
 * @desc 
 *
 * @param 资源-GIF
 * @parent ---GIF模式---
 * @desc png图片资源组，多张构成gif。
 * @default ["启动界面-默认GIF"]
 * @require 1
 * @dir img/titles2/
 * @type file[]
 *
 * @param 帧间隔
 * @parent ---GIF模式---
 * @type number
 * @min 1
 * @desc gif每帧播放间隔时间，单位帧。（1秒60帧）
 * @default 4
 *
 * @param 是否倒放
 * @parent ---GIF模式---
 * @type boolean
 * @on 倒放
 * @off 不倒放
 * @desc true - 倒放，false - 不倒放
 * @default false
 *
 * @param GIF到末尾是否重播
 * @parent ---GIF模式---
 * @type boolean
 * @on 重播
 * @off 不重播
 * @desc true - 重播，false - 不重播
 * @default false
 *
 * @param GIF显现时长
 * @parent ---GIF模式---
 * @type number
 * @min 0
 * @desc 单图显现出来的时间，单位帧。（1秒60帧）
 * @default 60
 *
 * @param GIF持续时长
 * @parent ---GIF模式---
 * @type number
 * @min 0
 * @desc 单图持续显示的时间，单位帧。（1秒60帧）
 * @default 90
 *
 * @param GIF消失时长
 * @parent ---GIF模式---
 * @type number
 * @min 0
 * @desc 单图显现出来的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param GIF立即跳过时长
 * @parent ---GIF模式---
 * @type number
 * @min 0
 * @desc 玩家点击跳过键，中断显现并跳过的过渡时长，设置0表示无过渡直接下一阶段，单位帧。（1秒60帧）
 * @default 12
 * 
 * @param ---视频模式---
 * @desc 
 * 
 * @param 资源-视频
 * @parent ---视频模式---
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 启动界面-视频
 *
 * @param 当前阶段BGM设置
 * @type select
 * @option 播放新的BGM
 * @value 播放新的BGM
 * @option 不操作
 * @value 不操作
 * @option 暂停之前的BGM
 * @value 暂停之前的BGM
 * @desc 当前阶段设置BGM。
 * @default 不操作
 *
 * @param 资源-BGM
 * @parent 当前阶段BGM设置
 * @desc 设置播放新的BGM时，配置的资源。
 * @default 
 * @require 1
 * @dir audio/bgm/
 * @type file
 * 
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称：		TBS (Title_Boot_Scene)
//		临时全局变量	DrillUp.g_TBS_xxx
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//		工作类型		持续执行
//		时间复杂度		o(n)*o(图像处理) + o(视频图像处理) 每帧
//		性能测试因素	打开标题即可
//		性能测试消耗	241.75ms / 4.21ms（updateVideo）
//		最坏情况		开视频就是最坏情况。
//		备注			视频和图片是分开的结构，播放视频会掉帧，换图片阶段后会恢复帧。
//						真要说的话，开头几秒的视频真测不出来，这里的值是估算的。
//
//插件记录：
//		★大体框架与功能如下：
//			启动界面：
//				->全屏/指定到缩放的窗口大小
//				->轮播图片/视频
//				->跳过按键
//				->第N张图片必须播放M秒才可跳过
//				->播放音乐
//				->界面底色
// 
//		★私有类如下：
//			* Scene_Drill_TBS【播放场景】
//		
//		★必要注意事项：
//			暂无
//
//		★其它说明细节：
//			1.Graphics._requestFullScreen可以设置全屏，但是会一闪而过，win7不能弄，但是win10可以。
//			  1.6版本比1.5版本大一圈，实际大小为820x628的大小，这个是游戏内部引擎的问题，强制设置window窗口的大小，依然会大一圈。
//				SceneManager._screenWidth	窗口大小
//				SceneManager._boxWidth		界面大小（界面会根据窗口自适应）
//				window.resizeBy能改变窗口大小。
//
//		★存在的问题：
//			暂无
//
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_TitleBootScene = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_TitleBootScene');
	
	DrillUp.g_TBS_screen_mode = String(DrillUp.parameters["游戏窗口模式"] || "窗口模式");
	DrillUp.g_TBS_screen_maximize = String(DrillUp.parameters["窗口是否最大化"] || "true") == "true";
	DrillUp.g_TBS_screen = String(DrillUp.parameters["窗口是否设置初始缩放高宽"] || "false") == "true";
	DrillUp.g_TBS_screen_width = Number(DrillUp.parameters["窗口初始缩放宽度"] || 816);
	DrillUp.g_TBS_screen_height = Number(DrillUp.parameters["窗口初始缩放高度"] || 624);
	DrillUp.g_TBS_screen_back_color = String(DrillUp.parameters["启动界面底色"] || "#000000");
	
	DrillUp.g_TBS_list_length = 20;
	DrillUp.g_TBS_list = [];
	
	for (var i = 0; i < DrillUp.g_TBS_list_length; i++) {
		if( DrillUp.parameters['阶段-' + String(i+1) ] != "" ){
			DrillUp.g_TBS_list[i] = JSON.parse(DrillUp.parameters['阶段-' + String(i+1) ]);
			DrillUp.g_TBS_list[i]['mode'] = String(DrillUp.g_TBS_list[i]["显示模式"] || "单图模式");
			DrillUp.g_TBS_list[i]['img_src'] = String(DrillUp.g_TBS_list[i]["资源-单图"] || "");
			DrillUp.g_TBS_list[i]['img_show'] = Number(DrillUp.g_TBS_list[i]["单图显现时长"] || 60);
			DrillUp.g_TBS_list[i]['img_sustain'] = Number(DrillUp.g_TBS_list[i]["单图持续时长"] || 90);
			DrillUp.g_TBS_list[i]['img_hide'] = Number(DrillUp.g_TBS_list[i]["单图消失时长"] || 30);
			DrillUp.g_TBS_list[i]['img_skip'] = Number(DrillUp.g_TBS_list[i]["单图立即跳过时长"] || 12);
			DrillUp.g_TBS_list[i]['gif_src'] = JSON.parse(DrillUp.g_TBS_list[i]["资源-GIF"]);
			DrillUp.g_TBS_list[i]['gif_interval'] = Number(DrillUp.g_TBS_list[i]["帧间隔"]);
			DrillUp.g_TBS_list[i]['gif_back_run'] = String(DrillUp.g_TBS_list[i]["是否倒放"] || "false") == "true";
			DrillUp.g_TBS_list[i]['gif_replay'] = String(DrillUp.g_TBS_list[i]["GIF到末尾是否重播"] || "false") == "true";
			DrillUp.g_TBS_list[i]['gif_show'] = Number(DrillUp.g_TBS_list[i]["GIF显现时长"] || 60);
			DrillUp.g_TBS_list[i]['gif_sustain'] = Number(DrillUp.g_TBS_list[i]["GIF持续时长"] || 90);
			DrillUp.g_TBS_list[i]['gif_hide'] = Number(DrillUp.g_TBS_list[i]["GIF消失时长"] || 30);
			DrillUp.g_TBS_list[i]['gif_skip'] = Number(DrillUp.g_TBS_list[i]["GIF立即跳过时长"] || 12);
			DrillUp.g_TBS_list[i]['video_src'] = String(DrillUp.g_TBS_list[i]["资源-视频"] || "");
			
			DrillUp.g_TBS_list[i]['delay'] = Number(DrillUp.g_TBS_list[i]["当前阶段至少播放时长"] || 0);
			DrillUp.g_TBS_list[i]['bgm_set'] = String(DrillUp.g_TBS_list[i]["当前阶段BGM设置"] || "不操作");
			DrillUp.g_TBS_list[i]['bgm_src'] = String(DrillUp.g_TBS_list[i]["资源-BGM"] || "");
		}else{
			DrillUp.g_TBS_list[i] = [];
		}
	}
	DrillUp.g_TBS_list[DrillUp.g_TBS_list_length] = [];	//跳出界面的收尾设置
	
	
//=============================================================================
// * >>>>基于插件检测>>>>
//=============================================================================
if( typeof(Liquidize) != "undefined" && typeof(Liquidize.MadeWithMV) != "undefined" && typeof(Liquidize.MadeWithMV.ShowMV) != "undefined" ){
	alert(
		"【Drill_TitleBootScene.js 标题-启动界面】\n" +
		"检测到 MadeWithMv.js 插件，请将该插件关闭。\n该插件的功能就是在启动界面显示rmmv图片，但是由于插件修改了内部结构，使得启动界面插件无法运行。"
	);
}


//=============================================================================
// ** 启动
//=============================================================================
//==============================
// * 启动界面绑定
//==============================
var _drill_TBS_boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	if ( DrillUp.g_TBS_screen_mode === "全屏模式" ) {
		Graphics._requestFullScreen();
		
	}else if( DrillUp.g_TBS_screen_mode === "窗口模式" ){
		
		if( DrillUp.g_TBS_screen_maximize && Utils.isNwjs() ){
			var gui = require('nw.gui'); 
			var win = gui.Window.get(); 
			win.maximize(); 
		}else if( DrillUp.g_TBS_screen ){	//yep核心控制
			if( Imported.YEP_CoreEngine ){
				var w = DrillUp.g_TBS_screen_width - Yanfly.Param.ScreenWidth ;
				var h = DrillUp.g_TBS_screen_height - Yanfly.Param.ScreenHeight ;
				window.resizeBy( w , h );
				window.moveBy( -1*w/2 , -1*h/2 );
			}else{
				var w = DrillUp.g_TBS_screen_width - SceneManager._screenWidth ;
				var h = DrillUp.g_TBS_screen_height - SceneManager._screenHeight ;
				window.resizeBy( w , h );
				window.moveBy( -1*w/2 , -1*h/2 );
			}
		}
	}
	DataManager._drill_TBS_in_boot = true;
	_drill_TBS_boot_start.call(this);
};
//==============================
// * 场景转换限制
//==============================
var _drill_TBS_boot_goto = SceneManager.goto;
SceneManager.goto = function(sceneClass) {
	if( DataManager._drill_TBS_in_boot === true && sceneClass == Scene_Title ){
		DataManager._drill_TBS_in_boot = false;
		
		this._nextScene = new Scene_Drill_TBS();
		if (this._scene) { this._scene.stop(); }
		
		return ;
	}
	_drill_TBS_boot_goto.call(this, sceneClass);
}
	
	

//=============================================================================
// ** logo场景-定义
//=============================================================================
function Scene_Drill_TBS() {
    this.initialize.apply(this, arguments);
}

Scene_Drill_TBS.prototype = Object.create(Scene_Base.prototype);
Scene_Drill_TBS.prototype.constructor = Scene_Drill_TBS;

//==============================
// * 场景-初始化
//==============================
Scene_Drill_TBS.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
	
	this._drill_level = 0;
	this._drill_level_time = 0;
	this._drill_TBS_picEnd = false;
	this._drill_TBS_gifEnd = false;
	this._drill_TBS_videoEnd = false;
	this._drill_need_recreate = true;
	
	this._drill_main_sprite = null;
	this._drill_pic_sprite = null;
	this._drill_gif_sprite = null;
}

//==============================
// * 场景-创建
//==============================
Scene_Drill_TBS.prototype.create = function() {	
    Scene_Base.prototype.create.call(this);
	
	var temp_sprite = new Sprite();
    temp_sprite.anchor.x = 0.5;
    temp_sprite.anchor.y = 0.5;
	temp_sprite.x = Graphics.boxWidth / 2;
	temp_sprite.y = Graphics.boxHeight / 2;
	this.addChild(temp_sprite);
	this._drill_main_sprite = temp_sprite;
	
	temp_sprite.bitmap = new Bitmap(Graphics.boxWidth,Graphics.boxHeight);
	temp_sprite.bitmap.fillAll(DrillUp.g_TBS_screen_back_color);
};

//==============================
// * 场景-帧刷新
//==============================
Scene_Drill_TBS.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
	
	this.drill_updateLevel();
	this.drill_updatePic();
	this.drill_updateGIF();
	this.drill_updateVideo();
};
//==============================
// * 帧刷新 - 阶段控制
//==============================
Scene_Drill_TBS.prototype.drill_updateLevel = function() {
	this._drill_level_time += 1;
	
	//>进入下一阶段
	if( this.drill_isLevelFinished() ){
		this._drill_level += 1;
		this._drill_level_time = 0;
		this._drill_TBS_picEnd = false;
		this._drill_TBS_gifEnd = false;
		this._drill_TBS_videoEnd = false;
		this._drill_need_recreate = true;
	}
	
	//>跳出界面
	if( this._drill_level >= DrillUp.g_TBS_list_length ){
		Graphics.playVideo("");			//防止进入标题后，点击造成视频重播的情况
		SceneManager.goto(Scene_Title);
		return ;
	}
	
	//>下一阶段重建
	if( this._drill_need_recreate == true){
		this._drill_need_recreate = false;
		this.drill_createPic();
		this.drill_createGIF();
		this.drill_createVideo();
		this.drill_createMusic();
	}
}
//==============================
// * 帧刷新 - 阶段结束
//==============================
Scene_Drill_TBS.prototype.drill_isLevelFinished = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( temp_data['mode'] && temp_data['mode'] == "单图模式" ){
		return this._drill_TBS_picEnd;
	}
	if( temp_data['mode'] && temp_data['mode'] == "GIF模式" ){
		return this._drill_TBS_gifEnd;
	}
	if( temp_data['mode'] && temp_data['mode'] == "视频模式" ){
		return this._drill_TBS_videoEnd;
	}
	return true;
}
//==============================
// * 帧刷新 - 建立单图
//==============================
Scene_Drill_TBS.prototype.drill_createPic = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( !temp_data ){ return }
	if( temp_data['mode'] !== "单图模式" ){ return }
	
	var temp_sprite = new Sprite();
	temp_sprite.bitmap = ImageManager.loadTitle2(temp_data['img_src']);
    temp_sprite.anchor.x = 0.5;
    temp_sprite.anchor.y = 0.5;
	temp_sprite.opacity = 1;
	this._drill_main_sprite.addChild(temp_sprite);
	this._drill_pic_sprite = temp_sprite;
}
//==============================
// * 帧刷新 - 播放单图
//==============================
Scene_Drill_TBS.prototype.drill_updatePic = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( !temp_data ){ return }
	if( temp_data['mode'] !== "单图模式" ){ return }
	
	//>按键跳过
	if( this._drill_level_time >= temp_data.delay ){
		if( Input.isTriggered("ok") || TouchInput.isTriggered() ){
			this._drill_TBS_picPrepareEnd = true;	//点击后，淡出时间15帧
		}
	}
	
	//>淡入淡出
	var temp_sprite = this._drill_pic_sprite;
	if( this._drill_TBS_picPrepareEnd ){
		temp_sprite.opacity -= 255/temp_data['img_skip'];
	}else{
		if( this._drill_level_time < temp_data['img_show'] ){
			temp_sprite.opacity += 255/temp_data['img_show'];
		}
		if( this._drill_level_time > (temp_data['img_show'] + temp_data['img_sustain'] ) ){
			temp_sprite.opacity -= 255/temp_data['img_hide'];
		}
	}
	if( this._drill_level_time > 1 && temp_sprite.opacity <= 0 ){
		this._drill_TBS_picEnd = true;
	}
}
//==============================
// * 帧刷新 - 建立GIF
//==============================
Scene_Drill_TBS.prototype.drill_createGIF = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( !temp_data ){ return }
	if( temp_data['mode'] !== "GIF模式" ){ return }
	
	var temp_sprite_data = JSON.parse(JSON.stringify( temp_data ));
	temp_sprite_data['gif_bitmaps'] = [];
	for(var j = 0; j < temp_sprite_data['gif_src'].length ; j++){
		temp_sprite_data['gif_bitmaps'].push(ImageManager.loadTitle2(temp_sprite_data['gif_src'][j]));
	}
	
	var temp_sprite = new Sprite();
	temp_sprite.bitmap = temp_sprite_data['gif_bitmaps'][0];
    temp_sprite.anchor.x = 0.5;
    temp_sprite.anchor.y = 0.5;
	temp_sprite.opacity = 1;
	this._drill_main_sprite.addChild(temp_sprite);
	this._drill_gif_sprite = temp_sprite;
	this._drill_gif_sprite_data = temp_sprite_data;
}
//==============================
// * 帧刷新 - 播放GIF
//==============================
Scene_Drill_TBS.prototype.drill_updateGIF = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( !temp_data ){ return }
	if( temp_data['mode'] !== "GIF模式" ){ return }
	
	//>按键跳过
	if( this._drill_level_time >= temp_data.delay ){
		if( Input.isTriggered("ok") || TouchInput.isTriggered() ){
			this._drill_TBS_gifPrepareEnd = true;	//点击后，淡出时间15帧
		}
	}
	
	//>淡入淡出
	var temp_sprite = this._drill_gif_sprite;
	var temp_sprite_data = this._drill_gif_sprite_data;
	if( this._drill_TBS_gifPrepareEnd ){
		temp_sprite.opacity -= 255/temp_sprite_data['gif_skip'];
	}else{
		if( this._drill_level_time < temp_sprite_data['gif_show'] ){
			temp_sprite.opacity += 255/temp_sprite_data['gif_show'];
		}
		if( this._drill_level_time > (temp_sprite_data['gif_show'] + temp_sprite_data['gif_sustain'] ) ){
			temp_sprite.opacity -= 255/temp_sprite_data['gif_hide'];
		}
	}
	if( this._drill_level_time > 1 && temp_sprite.opacity <= 0 ){
		this._drill_TBS_gifEnd = true;
	}
	
	//>GIF播放
	var inter = this._drill_level_time ;
	inter = inter / temp_sprite_data['gif_interval'];
	if( inter >= temp_sprite_data['gif_bitmaps'].length &&
		temp_sprite_data['gif_replay'] == false ){
		inter = temp_sprite_data['gif_bitmaps'].length - 1;			//不重播
	}else{
		inter = inter % temp_sprite_data['gif_bitmaps'].length;		//重播
	}
	if(temp_sprite_data['gif_back_run']){
		inter = temp_sprite_data['gif_bitmaps'].length - 1 - inter;
	}
	inter = Math.floor(inter);
	temp_sprite.bitmap = temp_sprite_data['gif_bitmaps'][inter];
	
}
//==============================
// * 帧刷新 - 建立视频
//==============================
Scene_Drill_TBS.prototype.drill_createVideo = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( !temp_data ){ return }
	if( temp_data['mode'] !== "视频模式" ){ return }
	
	var ext = this.videoFileExt();
	Graphics.playVideo('movies/' + temp_data.video_src + ext);
	Graphics._updateVisibility(true);
}
//==============================
// * 帧刷新 - 播放视频
//==============================
Scene_Drill_TBS.prototype.drill_updateVideo = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( !temp_data ){ return }
	if( temp_data['mode'] !== "视频模式" ){ return }
	
	//>按键跳过
	if( this._drill_level_time >= temp_data.delay ){
		if( Input.isTriggered("ok") || TouchInput.isTriggered() ){
			Graphics._video['muted'] = true;
			Graphics._video.pause();
			//Graphics._video.remove();		//remove会使得视频资源丢失却保留声音
			Graphics._updateVisibility(false);
			this._drill_TBS_videoEnd = true;
		}
	}
	
	//>播放结束
	if( Graphics.isVideoPlaying() ){
		Graphics._video['muted'] = false;		//静音控制
	}else{
		Graphics._video['muted'] = true;
		Graphics._video.pause();
		//Graphics._video.remove();
		Graphics._updateVisibility(false);
		this._drill_TBS_videoEnd = true;
	}
}
//==============================
// * 影片后缀
//==============================
Scene_Drill_TBS.prototype.videoFileExt = function() {
    if (Graphics.canPlayVideoType('video/webm') && !Utils.isMobileDevice()) {
        return '.webm';
    } else {
        return '.mp4';
    }
};

//==============================
// ** 帧刷新 - 建立背景音乐
//==============================
Scene_Drill_TBS.prototype.drill_createMusic = function() {
	var temp_data = DrillUp.g_TBS_list[this._drill_level];
	if( !temp_data ){ return }
	if( temp_data.bgm_set === "不操作" ){ return }
	if( temp_data.bgm_set === "暂停之前的BGM" ){ 
		AudioManager.stopBgm();
		return;
	}
	if( temp_data.bgm_set === "播放新的BGM" ){
		var bgm = {};
		bgm.name = temp_data.bgm_src;
		bgm.pitch = 100;
		bgm.volume = 100;
		AudioManager.playBgm(bgm);
	}
};

