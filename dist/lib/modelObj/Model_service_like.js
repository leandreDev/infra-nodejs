"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service permettant de liker un objet de la base
*/
class Model_service_like extends Model_service_1.Model_service {
    /**
      service permettant de liker un objet de la base
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_like";
        if (obj["likeCollection"] != undefined) {
            this["likeCollection"] = obj["likeCollection"].toString();
        }
        if (obj["noteCollection"] != undefined) {
            this["noteCollection"] = obj["noteCollection"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["likeCollection"] == null || target["likeCollection"] == undefined)) {
                throw new Error(path + "likeCollection is required");
            }
            if (target["likeCollection"] != null && target["likeCollection"] != undefined) {
                let _likeCollection = target["likeCollection"];
                if (!_.isString(_likeCollection)) {
                    throw new Error(path + "likeCollection is not a string");
                }
            }
            if (isCompleteObj && (target["noteCollection"] == null || target["noteCollection"] == undefined)) {
                throw new Error(path + "noteCollection is required");
            }
            if (target["noteCollection"] != null && target["noteCollection"] != undefined) {
                let _noteCollection = target["noteCollection"];
                if (!_.isString(_noteCollection)) {
                    throw new Error(path + "noteCollection is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_like.check(target, true, path).then(() => {
            return new Model_service_like(target);
        });
    }
}
exports.Model_service_like = Model_service_like;
//# sourceMappingURL=Model_service_like.js.map