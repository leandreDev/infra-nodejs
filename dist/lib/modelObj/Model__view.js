"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model__view = void 0;
const _ = require("lodash");
const utils_1 = require("utils");
/**
  créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
*/
class Model__view extends utils_1.Base {
    /**
      créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "_view";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["output"] != undefined) {
            if (_.isString(obj["output"])) {
                this["output"] = obj["output"];
            }
            else if (obj["output"]._id) {
                this["output"] = obj["output"]._id;
            }
        }
        if (obj["model"] != undefined) {
            if (_.isString(obj["model"])) {
                this["model"] = obj["model"];
            }
            else if (obj["model"]._id) {
                this["model"] = obj["model"]._id;
            }
        }
        if (obj["pipeline"] != undefined && obj["pipeline"] != null && _.isArray(obj["pipeline"])) {
            this["pipeline"] = obj["pipeline"].map((value) => {
                return value;
            });
        }
    }
}
exports.Model__view = Model__view;
//# sourceMappingURL=Model__view.js.map