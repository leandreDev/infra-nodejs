"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_node_fork_option_env = void 0;
const _ = require("lodash");
const utils_1 = require("@leandredev/utils");
/**
  les paramètres d’environnement a passer aux sous-processus
*/
class Model_node_fork_option_env extends utils_1.Base {
    /**
      les paramètres d’environnement a passer aux sous-processus
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "node_fork_option_env";
        if (obj["CONF_URL"] != undefined) {
            this["CONF_URL"] = obj["CONF_URL"].toString();
        }
        if (obj["SRV_ID"] != undefined) {
            if (_.isString(obj["SRV_ID"])) {
                this["SRV_ID"] = obj["SRV_ID"];
            }
            else if (obj["SRV_ID"]._id) {
                this["SRV_ID"] = obj["SRV_ID"]._id;
            }
        }
    }
}
exports.Model_node_fork_option_env = Model_node_fork_option_env;
