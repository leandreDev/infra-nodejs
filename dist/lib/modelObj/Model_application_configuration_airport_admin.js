"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_airport_admin = void 0;
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  config airport
*/
class Model_application_configuration_airport_admin extends Model_application_configuration_1.Model_application_configuration {
    /**
      config airport
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_airport_admin";
        if (obj["airportApi"] != undefined) {
            this["airportApi"] = obj["airportApi"].toString();
        }
        if (obj["airportBddUrl"] != undefined) {
            this["airportBddUrl"] = obj["airportBddUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            this["fsoUrl"] = obj["fsoUrl"].toString();
        }
    }
}
exports.Model_application_configuration_airport_admin = Model_application_configuration_airport_admin;
