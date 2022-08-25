import { versionInfo ,refer_Artifacts_Desc} from "./apps/help.js";
import { version } from "./components/Changelog.js";
import { refer_Artifacts } from "./apps/refer_Artifacts.js";
import { material_chart, primogems_expect } from "./apps/materials.js";
import common from "../../lib/common.js";
import { updateMiaoPlugin  }from "./apps/admin.js";
export {
  refer_Artifacts,
  versionInfo,
  updateMiaoPlugin,
  refer_Artifacts_Desc,
  material_chart,
  primogems_expect,
};


let rule = {
  refer_Artifacts: {
    reg: "^#*[^-~]+参考面板+$",
    describe: "参考面板",
  },
  material_chart: {
    reg: "^#*(天赋|武器|周本)+素材+$",
    describe: "素材表",
  },
  primogems_expect: {
      reg: "^#原石(预估|预期)+$",
      describe: "原石预估"
  },
  versionInfo: {
    reg: "^#?参考面板版本$",
    describe: "版本",
  },
  updateMiaoPlugin: {
    hashMark: true,
    reg: "^#参考面板(强制)?更新",
    describe: "【#管理】参考面板更新",
  },
  refer_Artifacts_Desc:{
    reg: "^#?参考面板说明$",
    priority: 100,
    describe: "参考面板说明",
  }

};

export { rule };

console.log(`参考面板插件${version}初始化~`);

setTimeout(async function () {
  let msgStr = await redis.get("howe:restart-msg");
  if (msgStr) {
    let msg = JSON.parse(msgStr);
    await common.relpyPrivate(msg.qq, msg.msg);
    await redis.del("howe:restart-msg");
    let msgs = [`当前参考面板插件版本: ${version}`, `您可使用 #参考面板版本 命令查看更新信息`];
    await common.relpyPrivate(msg.qq, msgs.join("\n"));
  }
}, 1000);