"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  communication temps réelle multi format
*/
class Model_service_socketIo extends Model_service_1.Model_service {
    /**
      communication temps réelle multi format
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_socketIo";
        if (obj["returnValue"] != undefined) {
            this["returnValue"] = obj["returnValue"].toString();
        }
        if (obj["allowCrossOrigin"] != undefined) {
            this["allowCrossOrigin"] = new Boolean(obj["allowCrossOrigin"]).valueOf();
        }
        if (obj["socketIo"] != undefined) {
            if (obj._class) {
                this["socketIo"] = new Index[obj._class](obj["socketIo"]);
            }
            else {
                this["socketIo"] = new Index["socketIoConfig"](obj["socketIo"]);
            }
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["returnValue"] != null && target["returnValue"] != undefined) {
                let _returnValue = target["returnValue"];
                if (!_.isString(_returnValue)) {
                    throw new Error(path + "returnValue is not a string");
                }
            }
            if (target["allowCrossOrigin"] != null && target["allowCrossOrigin"] != undefined) {
                let _allowCrossOrigin = target["allowCrossOrigin"];
                if (!_.isBoolean(_allowCrossOrigin)) {
                    throw new Error(path + "allowCrossOrigin is not a boolean");
                }
            }
            if (target["socketIo"] != null && target["socketIo"] != undefined) {
                let _socketIo = target["socketIo"];
                promArr.push(Index["socketIoConfig"].check(_socketIo, isCompleteObj, path + "socketIo.")
                    .catch((err) => {
                    throw new Error(path + "socketIo is not ");
                }));
                if (_socketIo._class != null && _socketIo._class != undefined) {
                    promArr.push(Index[_socketIo._class].check(_socketIo, isCompleteObj, path + "socketIo.")
                        .catch((err) => {
                        throw new Error(path + "socketIo is not a " + _socketIo._class);
                    }));
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_socketIo.check(target, true, path).then(() => {
            return new Model_service_socketIo(target);
        });
    }
}
exports.Model_service_socketIo = Model_service_socketIo;
//# sourceMappingURL=Model_service_socketIo.js.map