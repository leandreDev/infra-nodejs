"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.Model_node_fork_option = Model_node_fork_option;
//# sourceMappingURL=Model_node_fork_option.js.map