import Base from "@core/base/ReportBase";
import "./index.css";
import locale from "./locale.json";
import { classifyingOrgSelected } from "./p2ild/common/request/utils";
export { classifyingOrgSelected, locale };

class Config extends Base {
  // default dashboard report id for landing page
  defaultDashboardId = "bzTX9jvywsh"
  // Server configuration
  // BASE_URL = "https://dev.tkyt.vn/bc23";
  BASE_URL = "https://baocao.tkyt.vn";

  init = async () => {
    // getPickerStateByPath("actions.setAllowPeriodTypes")([PERIOD_TYPE.month]);
  };

  listFolder = {
    core: {
      key: "core",
      label: "Báo cáo theo thông tư 23",
    },
    A6: {
      key: "a6",
      label: "Sổ tử vong A6",
    },
  };

  programs = [
    {
      key: "bzTX9jvywsh",
      folder: [this.listFolder.A6],
      displayName: "a6 metadata-only",
      getReportInstance: async () => await import("./p2ild/a6_meta"),
    },
    {
      key: "a6_original",
      folder: [this.listFolder.A6],
      displayName: "a6 original",
      getReportInstance: async () => await import("./p2ild/a6"),
    }
  ];
}

export default new Config();
