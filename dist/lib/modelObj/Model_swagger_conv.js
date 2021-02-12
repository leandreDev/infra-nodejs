"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_swagger_conv = void 0;
const Model_service_1 = require("./Model_service");
/**
  convertisseur de swagger
*/
class Model_swagger_conv extends Model_service_1.Model_service {
    /**
      convertisseur de swagger
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "swagger_conv";
        if (obj["urlBdd"] != undefined) {
            this["urlBdd"] = obj["urlBdd"].toString();
        }
    }
}
exports.Model_swagger_conv = Model_swagger_conv;
