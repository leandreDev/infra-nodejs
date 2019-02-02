"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
/**
  collection de mail
*/
class Model_mail extends utils_1.Base {
    /**
      collection de mail
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "mail";
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_mail.check(target, true, path).then(() => {
            return new Model_mail(target);
        });
    }
}
exports.Model_mail = Model_mail;
//# sourceMappingURL=Model_mail.js.map