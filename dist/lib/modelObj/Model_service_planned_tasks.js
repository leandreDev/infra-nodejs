"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_planned_tasks = void 0;
const Model_service_1 = require("./Model_service");
/**
  Service de Taches planifiées
*/
class Model_service_planned_tasks extends Model_service_1.Model_service {
    /**
      Service de Taches planifiées
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_planned_tasks";
        /**
  temps en ms entre deux getions des taches.
  */
        this["handlerInterval"] = 60000;
        if (obj["bdd_url"] != undefined) {
            this["bdd_url"] = obj["bdd_url"].toString();
        }
        if (obj["handlerInterval"] != undefined) {
            this["handlerInterval"] = new Number(obj["handlerInterval"]).valueOf();
        }
        if (obj["startHandlingOnServiceStart"] != undefined) {
            this["startHandlingOnServiceStart"] = new Boolean(obj["startHandlingOnServiceStart"]).valueOf();
        }
        if (obj["schedule_url"] != undefined) {
            this["schedule_url"] = obj["schedule_url"].toString();
        }
        if (obj["task_url"] != undefined) {
            this["task_url"] = obj["task_url"].toString();
        }
        if (obj["licencesService_url"] != undefined) {
            this["licencesService_url"] = obj["licencesService_url"].toString();
        }
        if (obj["apiUrl"] != undefined) {
            this["apiUrl"] = obj["apiUrl"].toString();
        }
    }
}
exports.Model_service_planned_tasks = Model_service_planned_tasks;
