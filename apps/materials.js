import { segment } from "oicq";
import fs from "fs";

//项目路径
const _path = process.cwd ();

//简单应用示例

//1.定义命令规则
export const rule = {
    material_chart: {
        reg: "^#*(天赋|武器|周本)+素材+$",  //匹配消息正则，命令正则
        priority: 1, //优先级，越小优先度越高
        describe: "素材表" //【命令】功能说明
    }
};

//2.编写功能方法
//方法名字与rule中的sample保持一致
//测试命令 npm test 示例
export function material_chart (e) {
    let msg = e.msg.replace(/#|＃|素材|/g, "");
    console.log (msg);
    let name;
    name = msg
    let path = `${_path}/plugins/howe-plugin/resources/materials/${name}素材.png`;
    console.log (path);
    if (fs.existsSync (path)) {
        //最后回复消息
        let msg = [
            segment.image (path),
        ];
        //发送消息
        e.reply (msg);
    } else {
        e.reply ("查询失败~>_<");
    }
    return true;//返回true 阻挡消息不再往下
}
