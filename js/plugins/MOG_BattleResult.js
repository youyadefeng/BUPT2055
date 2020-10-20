//=============================================================================
// MOG_BattleResult.js
//=============================================================================

/*:
 * @plugindesc (v1.3)[v1.1]  战斗 - 战斗结果
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 资源-胜利窗口
 * @desc 胜利窗口的图片资源。
 * @default 战斗结果-胜利窗口
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-经验窗口
 * @desc 经验窗口的图片资源。
 * @default 战斗结果-经验窗口
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-经验数值
 * @desc 经验数值的图片资源。
 * @default 战斗结果-经验数值
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-经验数值 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 760
 *
 * @param 平移-经验数值 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 160
 *
 * @param 平移-金钱数值 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 760
 *
 * @param 平移-金钱数值 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 230
 *
 * @param 平移-道具统计 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 32
 *
 * @param 平移-道具统计 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 330 
 *
 * @param 资源-升级窗口
 * @desc 升级数值的图片资源。
 * @default 战斗结果-升级窗口
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-升级数值
 * @desc 升级窗口的图片资源。
 * @default 战斗结果-升级数值
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-角色图 X
 * @desc 0表示在最左边，816表示在最右边。x轴方向平移，单位像素。
 * @default 250
 *
 * @param 平移-角色图 Y
 * @desc 注意，0表示在最下面，624表示在最上面。y轴方向平移，单位像素。
 * @default 0  
 *
 * @param 平移-升级前数值组 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * 一共9个数值字符，从上往下排列。（角色的攻击、防御等数值）
 * @default 550
 *
 * @param 平移-升级前数值组 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * 一共9个数值字符，从上往下排列。（角色的攻击、防御等数值）
 * @default 140 
 *
 * @param 平移-升级后数值组 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * 一共9个数值字符，从上往下排列。（角色的攻击、防御等数值）
 * @default 700
 *
 * @param 平移-升级后数值组 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * 一共9个数值字符，从上往下排列。（角色的攻击、防御等数值）
 * @default 140  
 *
 * @param 偏移-升级数值组 X
 * @desc x轴方向平移，单位像素。
 * 整个数值组会在显示之后根据当前位置偏移移动一段距离。
 * @default 0
 *
 * @param 偏移-升级数值组 Y
 * @desc y轴方向平移，单位像素。
 * 整个数值组会在显示之后根据当前位置偏移移动一段距离。
 * @default 0
 *
 * @param 平移-新技能 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 570
 *
 * @param 平移-新技能 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 520
 *
 * @param 平移-角色名 X
 * @desc x轴方向平移，单位像素。0为贴最左边。
 * @default 155
 *
 * @param 平移-角色名 Y
 * @desc y轴方向平移，单位像素。0为贴最上面。
 * @default 540   
 *
 * @param ---------------------------
 * @default 
 * @param --角色组 1至20--
 * @default 
 *
 * @param 角色-1-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-2-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-3-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-4-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-5-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-6-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-7-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-8-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-9-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-10-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-11-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-12-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-13-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-14-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-15-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-16-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-17-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-18-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-19-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-20-前视图
 * @parent --角色组 1至20--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param --角色组21至40--
 * @default 
 *
 * @param 角色-21-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-22-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-23-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-24-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-25-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-26-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-27-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-28-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-29-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-30-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-31-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-32-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-33-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-34-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-35-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-36-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-37-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-38-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-39-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-40-前视图
 * @parent --角色组21至40--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param --角色组41至60--
 * @default 
 *
 * @param 角色-41-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-42-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-43-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-44-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-45-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-46-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-47-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-48-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-49-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-50-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-51-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-52-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-53-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-54-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-55-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-56-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-57-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-58-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-59-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param 角色-60-前视图
 * @parent --角色组41至60--
 * @desc 角色前视图的图片资源。没有图片可以不设置。
 * @default 
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ MOG - Battle Result (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 战斗胜利之后，会显示出战斗的统计清单，以及升级情况。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有pictures文件夹！ （img/pictures）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 *  角色-1-前视图（数字1对应角色配置中编号为1的角色）
 *  角色-2-前视图
 *  ……
 *
 * 另外，使用面板需要配置下面资源文件：（img/system文件夹）
 *
 * 资源-经验窗口
 * 资源-经验数值
 * 资源-升级窗口
 * 资源-升级数值
 * 资源-胜利窗口
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
　　Imported.MOG_BattleResult = true;
　　var Moghunter = Moghunter || {}; 	
	Moghunter.parameters = PluginManager.parameters('MOG_BattleResult');
	Moghunter.bresult_exp_x = Number(Moghunter.parameters['平移-经验数值 X'] || 760);
    Moghunter.bresult_exp_y = Number(Moghunter.parameters['平移-经验数值 Y'] || 160);
	Moghunter.bresult_gold_x = Number(Moghunter.parameters['平移-金钱数值 X'] || 760);
    Moghunter.bresult_gold_y = Number(Moghunter.parameters['平移-金钱数值 Y'] || 230);	
	Moghunter.bresult_treasure_x = Number(Moghunter.parameters['平移-道具统计 X'] || 32);
    Moghunter.bresult_treasure_y = Number(Moghunter.parameters['平移-道具统计 Y'] || 330);
	Moghunter.bresult_actor_x = Number(Moghunter.parameters['平移-角色图 X'] || 250);
    Moghunter.bresult_actor_y = Number(Moghunter.parameters['平移-角色图 Y'] || 0);	
	Moghunter.bresult_par0_x = Number(Moghunter.parameters['偏移-升级数值组 X'] || 0);
    Moghunter.bresult_par0_y = Number(Moghunter.parameters['偏移-升级数值组 Y'] || 0);		
	Moghunter.bresult_par1_x = Number(Moghunter.parameters['平移-升级前数值组 X'] || 550);
    Moghunter.bresult_par1_y = Number(Moghunter.parameters['平移-升级前数值组 Y'] || 140);	
	Moghunter.bresult_par2_x = Number(Moghunter.parameters['平移-升级后数值组 X'] || 700);
    Moghunter.bresult_par2_y = Number(Moghunter.parameters['平移-升级后数值组 Y'] || 140);		
	Moghunter.bresult_skill_x = Number(Moghunter.parameters['平移-新技能 X'] || 570);
    Moghunter.bresult_skill_y = Number(Moghunter.parameters['平移-新技能 Y'] || 520);		
	Moghunter.bresult_name_x = Number(Moghunter.parameters['平移-角色名 X'] || 155);
    Moghunter.bresult_name_y = Number(Moghunter.parameters['平移-角色名 Y'] || 540);
	
	Moghunter.src_Result_A = String(Moghunter.parameters['资源-经验窗口']);
	Moghunter.src_Result_B = String(Moghunter.parameters['资源-经验数值']);
	Moghunter.src_Result_C = String(Moghunter.parameters['资源-升级数值']);
	Moghunter.src_Result_D = String(Moghunter.parameters['资源-升级窗口']);
	Moghunter.src_Result_E = String(Moghunter.parameters['资源-胜利窗口']);
			
	Moghunter.result_list_length = 60;
	Moghunter.result_list = {};
	for (var i = 1; i <= Moghunter.result_list_length ; i++ ) {
		Moghunter.result_list[i] = Moghunter.parameters['角色-' + String(i)+ '-前视图' ];
	};

//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// ** Initialize
//==============================
var _mog_bresult_gtemp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
    _mog_bresult_gtemp_initialize.call(this);
    this.battleResultClear()
};

//==============================
// ** battle Result Clear
//==============================
Game_Temp.prototype.battleResultClear = function() {
	this._bResult = [false,[],0,0,[]];
	this._battleEnd = false;
};

//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// ** display LevelUP
//==============================
var _mog_bresult_gact_displayLevelUp = Game_Actor.prototype.displayLevelUp;
Game_Actor.prototype.displayLevelUp = function(newSkills) {
	if ($gameTemp._bResult[0]) {
		$gameTemp._bResult[4] = newSkills;
		return;
	};
	_mog_bresult_gact_displayLevelUp.call(this,newSkills);
};


//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// ** setup
//==============================
var _mog_brt_bmngr_setup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
	_mog_brt_bmngr_setup.call(this,troopId, canEscape, canLose);
	$gameTemp.battleResultClear();
};

//==============================
// ** process Victory
//==============================
BattleManager.processVictory = function() {
	if (Imported.MOG_BattleCry) {
	    var actor = this.randomActor();
        if (actor) {SoundManager.selectVoice(actor._v_victory)};	
	};
	AudioManager.fadeOutBgm(1);
	$gameTemp._battleEnd = true;
	$gameTemp._battleResult = true;
	this.getResultData();
    $gameParty.removeBattleStates();
    $gameParty.performVictory();
	this.endBattle(0);	
};


//==============================
// ** get Result Data
//==============================
BattleManager.getResultData = function() {
	 this.makeRewards();
     $gameTemp._bResult[0] = true;	 
	 $gameTemp._bResult[1] = this._rewards.exp;
	 $gameTemp._bResult[2] = this._rewards.gold;
	 $gameTemp._bResult[3] = this._rewards.items;
	 $gameTemp._bResult[4] = []; 
};

//==============================
// ** Update
//==============================
var _mog_bresult_update = BattleManager.update;
BattleManager.update = function() {
	if ($gameTemp._bResult[0]) {return};
	_mog_bresult_update.call(this);
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** Terminate
//==============================
var _mog_bresult_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
	_mog_bresult_terminate.call(this);
	$gameTemp._bResult =  [false,[],0,0,[]];
};

//==============================
// ** Update
//==============================
var _mog_bresult_sbat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_mog_bresult_sbat_update.call(this);
	if ($gameTemp._bResult[0]) {this.updateBResult()};
};

//==============================
// ** updateWindow Position
//==============================
var _mog_bresult_updateWindowPositions = Scene_Battle.prototype.updateWindowPositions;
Scene_Battle.prototype.updateWindowPositions = function() {
	_mog_bresult_updateWindowPositions.call(this);
	if ($gameTemp._battleEnd) {
		this._statusWindow.opacity -= 10;
	    this._statusWindow.contentsOpacity -= 10;
	};
};

//==============================
// ** Update BResult
//==============================
Scene_Battle.prototype.updateBResult = function() {
	if (!this._bresult) {this.createBResult()};
};

//==============================
// ** createBresult
//==============================
Scene_Battle.prototype.createBResult = function() {
	this._bresult = new BattleResult();
	this.addChild(this._bresult);
};

//=============================================================================
// * Battle Result
//=============================================================================
function BattleResult() {
    this.initialize.apply(this, arguments);
};

BattleResult.prototype = Object.create(Sprite.prototype);
BattleResult.prototype.constructor = BattleResult;

//==============================
// * Initialize
//==============================
BattleResult.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	if (BattleManager._spriteset && BattleManager._spriteset.combo_sprite_data) {
		BattleManager._spriteset.combo_sprite_data[0] = 1;
	};
	this._phase = 0;
	this._actorIndex = 0;
	this._skillIndex = 0;
	this.z = 50;
	this._actor = null;
	this._actopar = [];
	this._playME = 10;
	this.phaseAniClear();
	this._phaseAnime[0] = 1;
	this._phaseAnime[1] = 60; 
	this._numbeData = [-1,-1];
	this.loadImages();
	this.createObjects();
};

//==============================
// * Phase Ani Clear
//==============================
BattleResult.prototype.phaseAniClear = function() {
	this._phaseAnime = [0,0,0];
};


//==============================
// * loadImages
//==============================
BattleResult.prototype.loadImages = function() {
	this._icon_img = ImageManager.loadSystem("IconSet");
	this._layout_img = ImageManager.loadSystem(Moghunter.src_Result_A);
	this._number_img1 = ImageManager.loadSystem(Moghunter.src_Result_B);
	this._number_img2 = ImageManager.loadSystem(Moghunter.src_Result_C);
	this._layout2_img = ImageManager.loadSystem(Moghunter.src_Result_D);
	this._vict_img = ImageManager.loadSystem(Moghunter.src_Result_E);
};

//==============================
// * Press Any Key
//==============================
BattleResult.prototype.pressAnyKey = function() {
    if (TouchInput.isTriggered()) {return true};
	if (TouchInput.isCancelled()) {return true};
	if (Input.isTriggered("ok")) {return true};
	if (Input.isTriggered("cancel")) {return true};
    return false;
};

//==============================
// * Create Objects
//==============================
BattleResult.prototype.createObjects = function() {
	this.createVict();
	this.createLayout();
	this.createExp();
	this.createGold();
	this.createTreasures();
};

//==============================
// * Create Vict
//==============================
BattleResult.prototype.createVict = function() {
	this._vict = new Sprite(this._vict_img);
	this._vict.opacity = 0;
	this._vict.scale.x = 3.0;
	this._vict.scale.y = 3.0;
	this._vict.anchor.x = 0.5;
	this._vict.anchor.y = 0.5;
	this._vict.x = Graphics.boxWidth / 2;
	this._vict.y = Graphics.boxHeight / 2;
	this.addChild(this._vict);
};

//==============================
// * Create Layout
//==============================
BattleResult.prototype.createLayout = function() {
	this._layout = new Sprite(this._layout_img);
	this._layout.opacity = 0;
	this._layout.scale.x = 3.0;
	this._layout.anchor.x = 0.5;
	this._layout.x = Graphics.boxWidth / 2;
	this.addChild(this._layout);
};

//==============================
// * Create Exp
//==============================
BattleResult.prototype.createExp = function() {
    this._expNumber = [];
	this._expOld = 0;
	this._expOrg = [Moghunter.bresult_exp_x,Moghunter.bresult_exp_y];
	for (var i = 0; i < 8; i++) {
	   this._expNumber[i] = new Sprite(this._number_img1);
	   this._expNumber[i].visible = false;
	   this._expNumber[i].x = this._expOrg[0];
	   this._expNumber[i].y = this._expOrg[1];
	   this.addChild(this._expNumber[i]);
	};		
	
};

//==============================
// * Create Gold
//==============================
BattleResult.prototype.createGold = function() {
    this._goldNumber = [];
    this._goldNumber = [];
	this._goldOld = 0;
	this._goldOrg = [Moghunter.bresult_gold_x,Moghunter.bresult_gold_y];
	for (var i = 0; i < 8; i++) {
	   this._goldNumber[i] = new Sprite(this._number_img1);
	   this._goldNumber[i].visible = false;
	   this._goldNumber[i].x = this._goldOrg[0];
	   this._goldNumber[i].y = this._goldOrg[1];
	   this.addChild(this._goldNumber[i]);
	};	
};

//==============================
// * Add ICon
//==============================
BattleResult.prototype.addIcon = function(sprite,data) {
	var icon = new Sprite(this._icon_img);
	var w = Window_Base._iconWidth;
	var h = Window_Base._iconHeight;
	var sx = data.iconIndex % 16 * w;
	var sy = Math.floor(data.iconIndex / 16) * h;
    icon.setFrame(sx,sy,w,h);
    sprite.addChild(icon);
	var name = new Sprite(new Bitmap(160,32));
	name.bitmap.drawText(data.name,0,0,160,32);
	name.x = w + 4;
	sprite.addChild(name);
};

//==============================
// * Create Treasures
//==============================
BattleResult.prototype.createTreasures = function() {
	this._treasures = [];
	var x = Moghunter.bresult_treasure_x;
	var y = Moghunter.bresult_treasure_y;
	var s = Graphics.boxWidth - 64;
	var w = (s / 3);
	var h = Window_Base._iconHeight + 4;
	for (var i = 0; i < $gameTemp._bResult[3].length; i++) {
		  if (i > 23) {
			  break;
		  }
	      this._treasures[i] = new Sprite();
		  this._treasures[i].opacity = 0;
		  this.addChild(this._treasures[i]);
		  var l = Math.floor(i / 3);
		  this._treasures[i].x = x + (w * i) - Math.floor(l * s);
		  this._treasures[i].y = y + (l * h);
		  this.addIcon(this._treasures[i],$gameTemp._bResult[3][i]);
	};      
};

//==============================
// * getData
//==============================
BattleResult.prototype.getData = function() {
    this._numbeData[0] = this._number_img1.width / 10;
    this._numbeData[1] = this._number_img1.height;
};

//==============================
// * Update Dif
//==============================
BattleResult.prototype.update_dif = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 1 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Refresh Number
//==============================
BattleResult.prototype.refresh_number = function(sprites,value,img_data,x,center) {
    numbers = Math.abs(value).toString().split("");  
   	for (var i = 0; i < sprites.length ; i++) {sprites[i].visible = false;
	   if (i > numbers.length) {return};
	   var n = Number(numbers[i]);
	   sprites[i].setFrame(n * img_data[0], 0, img_data[0], img_data[1]);
	   sprites[i].visible = true;
	   if (center === 0) {
     	   var nx = -(img_data[0] * i) + (img_data[0] * numbers.length);
	   } else {
		   var nx = -(img_data[0] * i) + ((img_data[0] / 2) * numbers.length);
	   };
	   sprites[i].x = x - nx;
    };	
};

//==============================
// * Update
//==============================
BattleResult.prototype.update = function() {
	Sprite.prototype.update.call(this);	 
	if (this._numbeData[0] === -1 && this._number_img1.isReady() && this._number_img2.isReady()) {this.getData()};
	if (this._numbeData[0] === -1) {return};
	if (this._phaseAnime[1] > 0) {this._phaseAnime[1] --;return};
	if (this._playME > 0) {this.updateME()};
    switch (this._phase) {
		case 0:
            this.updateStart();
            break;		
        case 1:
            this.updateExp();
            break;
        case 2:
            this.updateGold();
            break;
        case 3:
            this.updateTreasure();
            break;
        case 4:
            this.updateLevel();
            break;
        case 5:
            this.updateEnd();
            break;			
        };
};


//==============================
// * update ME
//==============================
BattleResult.prototype.updateME = function() {
	this._playME --
	if (this._playME === 0) {
		BattleManager.playVictoryMe();
		BattleManager.replayBgmAndBgs();	
	};
};

//==============================
// * Update Start
//==============================
BattleResult.prototype.updateStart = function() {
	if (this._phaseAnime[0] > 0) {
        this.updateVictAnimation();
    } else { 
        this.updateLayoutAnimation();
	};
};


//==============================
// * Update Layout Animation
//==============================
BattleResult.prototype.updateLayoutAnimation = function() {
	this._layout.opacity += 5;
	if (this._layout.scale.x > 1.00) {
		this._layout.scale.x -= 0.05;
		if (this._layout.scale.x < 1.00) {this._layout.scale.x = 1.00};
	} else {
		this.phaseAniClear();
		this._phase = 1;
	};
};

//==============================
// * Update Vict Animation
//==============================
BattleResult.prototype.updateVictAnimation = function() {
	   if (this._phaseAnime[0] === 1) { 
		    if (this._vict.scale.x > 1.00) {
				this._vict.scale.x -= 0.05;
				this._vict.opacity += 15;
				if (this._vict.scale.x <= 1.00) {
					this._vict.scale.x = 1.00;
					this._vict.opacity = 255;
					this._phaseAnime[0] = 2;
					this._phaseAnime[1] = 40;
				};
			};
	   } else {
		    if (this._vict.scale.x < 3.00) {
				this._vict.scale.x += 0.05;
				this._vict.opacity -= 10;
				if (this._vict.scale.x >= 3.00) {
					this._vict.scale.x = 3.00;
					this._vict.opacity = 0;
					this._phaseAnime[0] = 0;
				};
			};		   
	   };
	   this._vict.scale.y = this._vict.scale.x;
};

//==============================
// * Update Exp
//==============================
BattleResult.prototype.updateExp = function() {
	 if (this.pressAnyKey() &&  $gameTemp._bResult[1] > 0) {
         this._expOld = $gameTemp._bResult[1] - 1;
	 };
	 var dif_number = this.update_dif(this._expOld,$gameTemp._bResult[1],15);
	 if (this._expOld != dif_number) {this._expOld = dif_number;
	 this.refresh_number(this._expNumber,this._expOld,this._numbeData,this._expOrg[0],0)};
	 if (this._expOld === $gameTemp._bResult[1]) {
		 this.phaseAniClear();
		 this._phase = 2;
		 SoundManager.playCursor();	 
	 };
};

//==============================
// * Update Gold
//==============================
BattleResult.prototype.updateGold = function() {
	 if (this.pressAnyKey() &&  $gameTemp._bResult[1] > 0) {
         this._goldOld = $gameTemp._bResult[2] - 1;
	 };
	 var dif_number = this.update_dif(this._goldOld,$gameTemp._bResult[2],15);
	 if (this._goldOld != dif_number) {this._goldOld = dif_number;
	 this.refresh_number(this._goldNumber,this._goldOld,this._numbeData,this._goldOrg[0],0)};
	 if (this._goldOld === $gameTemp._bResult[2]) {
		 BattleManager.gainGold();
		 this.phaseAniClear();
		 this._phase = 3;
		 SoundManager.playCursor();
	 };
};

//==============================
// * Update Treasure
//==============================
BattleResult.prototype.updateTreasure = function() {
	if (this._treasures.length > 0) {
		for (var i = 0; i < this._treasures.length; i++) {
			this._treasures[i].opacity += 10;
		};
		if (this._treasures[0].opacity >= 255 && this._phaseAnime[0] === 0) {
			this._phaseAnime[0] = 1;
		};	
	} else {
	    this._phaseAnime[0] = 1;
	};
	if (this._phaseAnime[0] === 1 && this.pressAnyKey()) {
		BattleManager.gainDropItems();
		this.phaseAniClear();
		this._phase = 4;
	};
};

//==============================
// * Update Level
//==============================
BattleResult.prototype.updateLevel = function() {
	if (this._layout.opacity > 0) {this.updateFade()};
	if (!this._actor && this._actorIndex >= $gameParty.battleMembers().length) {
		this._phase = 5;
		SoundManager.playCursor();
	} else {
		if (this._actor) {
			this.updateLevelAnimation();
		} else {
			this.gainEXP();
		};
	};
};

//==============================
// * Create Level Sprites
//==============================
BattleResult.prototype.createLevelSprites = function() {
	this.disposeLevel();
	this._phaseAnime[0] = 0;
	this._phaseAnime[1] = 10;
	this.createActorSprite();
    this.createLevelLayout();   
    this.createParameters();
    this.createActorName();
	this.playVoice();
};

//==============================
// * Play Voice
//==============================
BattleResult.prototype.playVoice = function() {
	if (Imported.MOG_BattleCry) {SoundManager.selectVoice(this._actor._v_levelup)};
};

//==============================
// * Create Level Layout
//==============================
BattleResult.prototype.createLevelLayout = function() {
	this._levelLayout = new Sprite(this._layout2_img);
	this._levelLayout.opacity = 0;
	this._levelLayout.anchor.x = 0.5;
	this._levelLayout.anchor.y = 0.5;
	this._levelLayout.x = Graphics.boxWidth / 2;
	this._levelLayout.y = Graphics.boxHeight / 2;
	this._levelLayout.scale.x = 3.0;
	this.addChild(this._levelLayout);	
};

//==============================
// * Create Actor Name
//==============================
BattleResult.prototype.createActorName = function() {
	this._name = new Sprite(new Bitmap(140,32));
	this._name.opacity = 0;
	this._name.bitmap.drawText(this._actor._name,0,0,140,32);
	this._name.x = Moghunter.bresult_name_x;
	this._name.y = Moghunter.bresult_name_y;
	this.addChild(this._name);	
};

//==============================
// * Create Actor Sprite
//==============================
BattleResult.prototype.createActorSprite = function() {
	var img = ImageManager.loadPicture(Moghunter.result_list[this._actor._actorId])
	this._spriteActor = new Sprite(img);
	this._spriteActor.opacity = 0;
	this._spriteActor.anchor.x = 0.5;
	this.addChild(this._spriteActor);
};

//==============================
// * Create Parameters
//==============================
BattleResult.prototype.createParameters = function() {
	var x = Moghunter.bresult_par1_x;
	var y = Moghunter.bresult_par1_y;
	this._par = new Sprite(new Bitmap(Graphics.boxWidth,Graphics.boxHeight));
	this._par.opacity = 0;
	this._par.bitmap.drawText(this._actopar[0],x,y,100,32);
	this._par.bitmap.drawText(this._actopar[1],x,y + 32 * 1,100,32);
	this._par.bitmap.drawText(this._actopar[2],x,y + 32 * 2,100,32);
	this._par.bitmap.drawText(this._actopar[3],x,y + 32 * 3,100,32);
	this._par.bitmap.drawText(this._actopar[4],x,y + 32 * 4,100,32);	
	this._par.bitmap.drawText(this._actopar[5],x,y + 32 * 5,100,32);
	this._par.bitmap.drawText(this._actopar[6],x,y + 32 * 6,100,32);
	this._par.bitmap.drawText(this._actopar[7],x,y + 32 * 7,100,32);
	this._par.bitmap.drawText(this._actopar[8],x,y + 32 * 8,100,32);
	var x = Moghunter.bresult_par2_x;
	var y = Moghunter.bresult_par2_y;	
	this._par.bitmap.drawText(this._actor._level,x,y,100,32);
	this._par.bitmap.drawText(this._actor.mhp,x,y + 32 * 1,100,32);
	this._par.bitmap.drawText(this._actor.mmp,x,y + 32 * 2,100,32);
	this._par.bitmap.drawText(this._actor.atk,x,y + 32 * 3,100,32);
	this._par.bitmap.drawText(this._actor.def,x,y + 32 * 4,100,32);	
	this._par.bitmap.drawText(this._actor.mat,x,y + 32 * 5,100,32);
	this._par.bitmap.drawText(this._actor.mdf,x,y + 32 * 6,100,32);
	this._par.bitmap.drawText(this._actor.agi,x,y + 32 * 7,100,32);
	this._par.bitmap.drawText(this._actor.luk,x,y + 32 * 8,100,32);	
	this.addChild(this._par);
};

//==============================
// * Refresh New Skill
//==============================
BattleResult.prototype.refreshNewSkill = function() {
	SoundManager.playUseSkill();
    this.removeChild(this._skill);
	this._skill = new Sprite();
	this._skill.x = Moghunter.bresult_skill_x;
	this._skill.y = Moghunter.bresult_skill_y;
	this._skill.opacity = 0;
	this.addChild(this._skill);
    this.addIcon(this._skill,$gameTemp._bResult[4][this._skillIndex]);
	this._skillIndex += 1;
	this._skillAnime = [0,0];
};

//==============================
// * dispose Level
//==============================
BattleResult.prototype.disposeLevel = function() {
	this.removeChild(this._spriteActor);
    this.removeChild(this._par);
	this.removeChild(this._levelLayout);
	this.removeChild(this._name);
	this.removeChild(this._skill);
	this._skill = null;
};

//==============================
// * Update Animation
//==============================
BattleResult.prototype.updateLevelAnimation = function() {
    this.updateLevelPosition();	
    this._spriteActor.opacity += 10;
	this._levelLayout.opacity += 10;
	this._name.opacity  += 10;
	this._par.opacity += 10;
    if (this._skill) {this.updateSkillAnimation()};
	if (this.pressAnyKey()) {
		if (this._skillIndex >= $gameTemp._bResult[4].length) { 
	        this.clearParData();
		} else {
			this.refreshNewSkill();
		};
	};
};

//==============================
// * Update Level Position
//==============================
BattleResult.prototype.updateLevelPosition = function() {
	if (this._phaseAnime[0] === 0) {
		this._phaseAnime[0] = 1;
		this._spriteActor.x = -this._spriteActor.width + Moghunter.bresult_actor_x;
		this._par.x = this._spriteActor.width + Moghunter.bresult_actor_x;
	};
	this._spriteActor.x = this.sprite_move_to(this._spriteActor.x,Moghunter.bresult_actor_x,20);
	this._spriteActor.y = Graphics.boxHeight - this._spriteActor.height + Moghunter.bresult_actor_y;
	if (this._levelLayout.scale.x > 1.00) {
		this._levelLayout.scale.x -= 0.05;
		if (this._levelLayout.scale.x < 1.00) {this._levelLayout.scale.x = 1.00};	
	};
	this._par.x = this.sprite_move_to(this._par.x,Moghunter.bresult_par0_x,20);
	this._par.y = Moghunter.bresult_par0_y;
};

//==============================
// * Update Skill Animation
//==============================
BattleResult.prototype.updateSkillAnimation = function() {
	this._skill.opacity += 10;
	this._skillAnime[0] ++;
	if (this._skillAnime[0] < 20) {
		this._skill.y -= 2;
	} else if (this._skillAnime[0] < 40) {
		this._skill.y += 2;
	};	
};

//==============================
// * Sprite Move To
//==============================
BattleResult.prototype.sprite_move_to = function(value,real_value,speed) {
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
// * clear Par DAta
//==============================
BattleResult.prototype.clearParData = function() {
	this._actor = null;
	this.disposeLevel();
	this._skillIndex = 0;
	$gameTemp._bResult[4] = [];
};

//==============================
// * Gain EXP
//==============================
BattleResult.prototype.gainEXP = function() {
	 var actor = $gameParty.battleMembers()[this._actorIndex];
	 this._actopar = [actor._level,actor.mhp,actor.mmp,actor.atk,actor.def,actor.mat,actor.mdf,actor.agi,actor.luk];
	 var lvOld = actor._level
     actor.gainExp($gameTemp._bResult[1]);
     this._actorIndex += 1;
	 if (actor._level > lvOld) {
		 this._actor = actor;
		 this.createLevelSprites();
		 SoundManager.playCursor();
	 } else {
         this.clearParData();
	 };
};

//==============================
// * Update Fade
//==============================
BattleResult.prototype.updateFade = function() {
	this._layout.opacity -= 10;
	for (var i = 0; i < this._expNumber.length; i++) {
	   this._expNumber[i].opacity = this._layout.opacity;
	};	
	for (var i = 0; i < this._goldNumber.length; i++) {
	   this._goldNumber[i].opacity = this._layout.opacity;
	};
	for (var i = 0; i < this._treasures.length; i++) {
     	this._treasures[i].opacity = this._layout.opacity;
    };
	if (this._phase === 5 && this._layout.opacity <= 0) {
       $gameTemp._bResult = [false,[],0,0,[]];; 
	};
};

//==============================
// * Update End
//==============================
BattleResult.prototype.updateEnd = function() {
	if (this._layout.opacity <= 0) {
       $gameTemp._bResult = [false,[],0,0,[]];; 
	} else {
	   this.updateFade();
	};
};
