"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_application_1 = require("./Model_application");
/**
  c'est un paquet de carte
*/
class Model_pack_card extends Model_application_1.Model_application {
    /**
      c'est un paquet de carte
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "pack_card";
        if (obj["imageUrl"] != undefined) {
            this["imageUrl"] = obj["imageUrl"].toString();
        }
        if (obj["companyName"] != undefined) {
            this["companyName"] = obj["companyName"].toString();
        }
        if (obj["companyId"] != undefined) {
            this["companyId"] = obj["companyId"].toString();
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["imageUrl"] != null && target["imageUrl"] != undefined) {
                let _imageUrl = target["imageUrl"];
                if (!_.isString(_imageUrl)) {
                    throw new Error(path + "imageUrl is not a string");
                }
            }
            if (target["companyName"] != null && target["companyName"] != undefined) {
                let _companyName = target["companyName"];
                if (!_.isString(_companyName)) {
                    throw new Error(path + "companyName is not a string");
                }
            }
            if (target["companyId"] != null && target["companyId"] != undefined) {
                let _companyId = target["companyId"];
                if (!_.isString(_companyId)) {
                    throw new Error(path + "companyId is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_pack_card.check(target, true, path).then(() => {
            return new Model_pack_card(target);
        });
    }
}
exports.Model_pack_card = Model_pack_card;
//# sourceMappingURL=Model_pack_card.js.map