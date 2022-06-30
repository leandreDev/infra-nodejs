"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_dpd_dervice = void 0;
const Model_service_1 = require("./Model_service");
/**
  Proxy pou rles service c'evoi de colis de DPD
*/
class Model_dpd_dervice extends Model_service_1.Model_service {
    /**
      Proxy pou rles service c'evoi de colis de DPD
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "dpd_dervice";
    }
}
exports.Model_dpd_dervice = Model_dpd_dervice;
