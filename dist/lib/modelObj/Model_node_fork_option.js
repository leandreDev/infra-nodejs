"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  option d'un sous processus node
*/
class Model_node_fork_option extends utils_1.Base {
    /**
      option d'un sous processus node
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "node_fork_option";
        if (obj["cwd"] != undefined) {
            this["cwd"] = obj["cwd"].toString();
        }
        if (obj["env"] != undefined) {
            if (obj._class) {
                this["env"] = new Index[obj._class](obj["env"]);
            }
            else {
                this["env"] = new Index["node_fork_option_env"](obj["env"]);
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["cwd"] != null && target["cwd"] != undefined) {
                let _cwd = target["cwd"];
                if (!_.isString(_cwd)) {
                    throw new Error(path + "cwd is not a string");
                }
            }
            if (target["env"] != null && target["env"] != undefined) {
                let _env = target["env"];
                promArr.push(Index["node_fork_option_env"].check(_env, isCompleteObj, path + "env.")
                    .catch((err) => {
                    throw new Error(path + "env is not ");
                }));
                if (_env._class != null && _env._class != undefined) {
                    promArr.push(Index[_env._class].check(_env, isCompleteObj, path + "env.")
                        .catch((err) => {
                        throw new Error(path + "env is not a " + _env._class);
                    }));
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_node_fork_option.check(target, true, path).then(() => {
            return new Model_node_fork_option(target);
        });
    }
}
exports.Model_node_fork_option = Model_node_fork_option;
//# sourceMappingURL=Model_node_fork_option.js.map