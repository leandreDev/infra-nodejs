"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const utils_1 = require("utils");
/**
  socketIoConfig
*/
class Model_socketIoConfig extends utils_1.Base {
    /**
      socketIoConfig
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "socketIoConfig";
        if (obj["serverOptionPath"] != undefined) {
            this["serverOptionPath"] = obj["serverOptionPath"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["serverOptionPath"] != null && target["serverOptionPath"] != undefined) {
                let _serverOptionPath = target["serverOptionPath"];
                if (!_.isString(_serverOptionPath)) {
                    throw new Error(path + "serverOptionPath is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_socketIoConfig.check(target, true, path).then(() => {
            return new Model_socketIoConfig(target);
        });
    }
}
exports.Model_socketIoConfig = Model_socketIoConfig;
//# sourceMappingURL=Model_socketIoConfig.js.map