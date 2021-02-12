"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_sso = void 0;
const Model_service_1 = require("./Model_service");
/**
  c'est un sso
*/
class Model_service_sso extends Model_service_1.Model_service {
    /**
      c'est un sso
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_sso";
    }
}
exports.Model_service_sso = Model_service_sso;
