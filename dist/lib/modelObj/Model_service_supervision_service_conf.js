"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_supervision_service_conf = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
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
            if (obj["options"]._class) {
                this["options"] = new Index[obj["options"]._class](obj["options"]);
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
}
exports.Model_service_supervision_service_conf = Model_service_supervision_service_conf;
