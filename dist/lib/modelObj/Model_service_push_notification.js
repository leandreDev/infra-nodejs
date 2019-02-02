"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  Service pour gérer les notifications push des applications
*/
class Model_service_push_notification extends Model_service_1.Model_service {
    /**
      Service pour gérer les notifications push des applications
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_push_notification";
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
        return Model_service_push_notification.check(target, true, path).then(() => {
            return new Model_service_push_notification(target);
        });
    }
}
exports.Model_service_push_notification = Model_service_push_notification;
//# sourceMappingURL=Model_service_push_notification.js.map