import lodash from "lodash";
import { versionInfo, refer_Artifacts_Desc} from "./help.js";
import { refer_Artifacts } from "./refer_Artifacts.js";
import { material_chart, primogems_expect, pool_interval } from "./materials.js";
import { updateMiaoPlugin  }from "./admin.js";
export {
  refer_Artifacts,
  versionInfo,
  updateMiaoPlugin,
  refer_Artifacts_Desc,
  material_chart,
  primogems_expect,
  pool_interval,
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
      reg: "^#*原石(预估|预期)+$",
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
  },
  pool_interval: {
    reg: "^#*未复刻(角色|统计)*$",
    describe: "角色未复刻间隔"
  }

};

lodash.forEach(rule, (r) => {
	r.priority = r.priority || 50;
	r.prehash = true;
	r.hashMark = true;
});

export {
   rule 
};
