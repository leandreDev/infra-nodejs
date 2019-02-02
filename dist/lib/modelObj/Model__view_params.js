"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model__view_1 = require("./Model__view");
/**
  view avec des params
*/
class Model__view_params extends Model__view_1.Model__view {
    /**
      view avec des params
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "_view_params";
        if (obj["params"] != undefined && obj["params"] != null && _.isArray(obj["params"])) {
            this["params"] = obj["params"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["routeParam"](value);
                }
            });
        }
        if (obj["castParams"] != undefined && obj["castParams"] != null && _.isArray(obj["castParams"])) {
            this["castParams"] = obj["castParams"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["castParam"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["params"] != null && target["params"] != undefined) {
                target["params"].forEach((_params, index) => {
                    promArr.push(Index["routeParam"].check(_params, isCompleteObj, path + "params.")
                        .catch((err) => {
                        throw new Error(path + "params index: " + index + "is not routeParam");
                    }));
                    if (_params._class != null && _params._class != undefined) {
                        promArr.push(Index[_params._class].check(_params, isCompleteObj, path + "params.")
                            .catch((err) => {
                            throw new Error(path + "params index: " + index + "is not a " + _params._class);
                        }));
                    }
                });
            }
            if (target["castParams"] != null && target["castParams"] != undefined) {
                target["castParams"].forEach((_castParams, index) => {
                    promArr.push(Index["castParam"].check(_castParams, isCompleteObj, path + "castParams.")
                        .catch((err) => {
                        throw new Error(path + "castParams index: " + index + "is not castParam");
                    }));
                    if (_castParams._class != null && _castParams._class != undefined) {
                        promArr.push(Index[_castParams._class].check(_castParams, isCompleteObj, path + "castParams.")
                            .catch((err) => {
                            throw new Error(path + "castParams index: " + index + "is not a " + _castParams._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model__view_params.check(target, true, path).then(() => {
            return new Model__view_params(target);
        });
    }
}
exports.Model__view_params = Model__view_params;
//# sourceMappingURL=Model__view_params.js.map