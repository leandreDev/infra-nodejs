"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["name"] == null || target["name"] == undefined)) {
                throw new Error(path + "name is required");
            }
            if (target["name"] != null && target["name"] != undefined) {
                let _name = target["name"];
                if (!_.isString(_name)) {
                    throw new Error(path + "name is not a string");
                }
            }
            if (isCompleteObj && (target["description"] == null || target["description"] == undefined)) {
                throw new Error(path + "description is required");
            }
            if (target["description"] != null && target["description"] != undefined) {
                let _description = target["description"];
                if (!_.isString(_description)) {
                    throw new Error(path + "description is not a string");
                }
            }
            if (isCompleteObj && (target["output"] == null || target["output"] == undefined)) {
                throw new Error(path + "output is required");
            }
            if (target["output"] != null && target["output"] != undefined) {
                let _output = target["output"];
                if (!_.isString(_output)) {
                    if (!_.isString(_output)) {
                        throw new Error(path + "output is not a string");
                    }
                }
            }
            if (isCompleteObj && (target["model"] == null || target["model"] == undefined)) {
                throw new Error(path + "model is required");
            }
            if (target["model"] != null && target["model"] != undefined) {
                let _model = target["model"];
                if (!_.isString(_model)) {
                    if (!_.isString(_model)) {
                        throw new Error(path + "model is not a string");
                    }
                }
            }
            if (target["pipeline"] != null && target["pipeline"] != undefined) {
                // public "pipeline":Iobject;
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model__view.check(target, true, path).then(() => {
            return new Model__view(target);
        });
    }
}
exports.Model__view = Model__view;
//# sourceMappingURL=Model__view.js.map