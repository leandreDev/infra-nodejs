"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_trainingCoursesService = void 0;
const Model_service_1 = require("./Model_service");
/**
  service de gestion des parcourts de formation
*/
class Model_service_trainingCoursesService extends Model_service_1.Model_service {
    /**
      service de gestion des parcourts de formation
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_trainingCoursesService";
        if (obj["apiSession"] != undefined) {
            this["apiSession"] = obj["apiSession"].toString();
        }
        if (obj["licenceServiceUrl"] != undefined) {
            this["licenceServiceUrl"] = obj["licenceServiceUrl"].toString();
        }
        if (obj["taskServiceUrl"] != undefined) {
            this["taskServiceUrl"] = obj["taskServiceUrl"].toString();
        }
        if (obj["mailServiceUrl"] != undefined) {
            this["mailServiceUrl"] = obj["mailServiceUrl"].toString();
        }
        if (obj["clientInfraUrl"] != undefined) {
            this["clientInfraUrl"] = obj["clientInfraUrl"].toString();
        }
    }
}
exports.Model_service_trainingCoursesService = Model_service_trainingCoursesService;
