"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_push_notification = void 0;
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
}
exports.Model_service_push_notification = Model_service_push_notification;
