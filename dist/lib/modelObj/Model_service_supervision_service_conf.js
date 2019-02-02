"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  configuration d'un service dans le superviseur
*/
class Model_service_supervision_service_conf extends utils_1.Base {
    /**
      configuration d'un service dans le superviseur
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_supervision_service_conf";
        /**
  nombre maximum de redémarrage automatique
  */
        this["maxKill"] = 3;
        /**
  définit le temps maximum qui peut s'écouler entre un démarrage et une fermeture pour considérer que c'est un crache au démarrage
  */
        this["minTime"] = 1000;
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["path"] != undefined) {
            this["path"] = obj["path"].toString();
        }
        if (obj["args"] != undefined && obj["args"] != null && _.isArray(obj["args"])) {
            this["args"] = obj["args"].map((value) => {
                return value.toString();
            });
        }
        if (obj["options"] != undefined) {
            if (obj._class) {
                this["options"] = new Index[obj._class](obj["options"]);
            }
            else {
                this["options"] = new Index["node_fork_option"](obj["options"]);
            }
        }
        if (obj["restart"] != undefined) {
            this["restart"] = new Boolean(obj["restart"]).valueOf();
        }
        if (obj["maxKill"] != undefined) {
            this["maxKill"] = new Number(obj["maxKill"]).valueOf();
        }
        if (obj["minTime"] != undefined) {
            this["minTime"] = new Number(obj["minTime"]).valueOf();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (target["path"] != null && target["path"] != undefined) {
                let _path = target["path"];
                if (!_.isString(_path)) {
                    throw new Error(path + "path is not a string");
                }
            }
            if (target["args"] != null && target["args"] != undefined) {
                target["args"].forEach((_args, index) => {
                    if (!_.isString(_args)) {
                        throw new Error(path + "args index: " + index + "is not a string");
                    }
                });
            }
            if (target["options"] != null && target["options"] != undefined) {
                let _options = target["options"];
                promArr.push(Index["node_fork_option"].check(_options, isCompleteObj, path + "options.")
                    .catch((err) => {
                    throw new Error(path + "options is not ");
                }));
                if (_options._class != null && _options._class != undefined) {
                    promArr.push(Index[_options._class].check(_options, isCompleteObj, path + "options.")
                        .catch((err) => {
                        throw new Error(path + "options is not a " + _options._class);
                    }));
                }
            }
            if (target["restart"] != null && target["restart"] != undefined) {
                let _restart = target["restart"];
                if (!_.isBoolean(_restart)) {
                    throw new Error(path + "restart is not a boolean");
                }
            }
            if (target["maxKill"] != null && target["maxKill"] != undefined) {
                let _maxKill = target["maxKill"];
                if (!_.isNumber(_maxKill)) {
                    throw new Error(path + "maxKill is not a number");
                }
            }
            if (target["minTime"] != null && target["minTime"] != undefined) {
                let _minTime = target["minTime"];
                if (!_.isNumber(_minTime)) {
                    throw new Error(path + "minTime is not a number");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_supervision_service_conf.check(target, true, path).then(() => {
            return new Model_service_supervision_service_conf(target);
        });
    }
}
exports.Model_service_supervision_service_conf = Model_service_supervision_service_conf;
//# sourceMappingURL=Model_service_supervision_service_conf.js.map