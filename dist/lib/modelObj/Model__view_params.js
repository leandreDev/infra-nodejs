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
}
exports.Model__view_params = Model__view_params;
//# sourceMappingURL=Model__view_params.js.map