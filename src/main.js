import "../node_modules/uikit/src/less/uikit.less";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.notification({
  message: "Javascript is enabled!",
  status: "success",
  pos: "top-right",
  timeout: 5000
});

