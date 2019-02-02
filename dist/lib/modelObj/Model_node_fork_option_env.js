"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["CONF_URL"] != null && target["CONF_URL"] != undefined) {
                let _CONF_URL = target["CONF_URL"];
                if (!_.isString(_CONF_URL)) {
                    throw new Error(path + "CONF_URL is not a string");
                }
            }
            if (target["SRV_ID"] != null && target["SRV_ID"] != undefined) {
                let _SRV_ID = target["SRV_ID"];
                if (!_.isString(_SRV_ID)) {
                    throw new Error(path + "SRV_ID is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_node_fork_option_env.check(target, true, path).then(() => {
            return new Model_node_fork_option_env(target);
        });
    }
}
exports.Model_node_fork_option_env = Model_node_fork_option_env;
//# sourceMappingURL=Model_node_fork_option_env.js.map