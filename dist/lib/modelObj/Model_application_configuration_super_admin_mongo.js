"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  configuration de l'application superAdminMongo
*/
class Model_application_configuration_super_admin_mongo extends Model_application_configuration_1.Model_application_configuration {
    /**
      configuration de l'application superAdminMongo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_super_admin_mongo";
        if (obj["servicesUrl"] != undefined && obj["servicesUrl"] != null && _.isArray(obj["servicesUrl"])) {
            this["servicesUrl"] = obj["servicesUrl"].map((value) => {
                return value.toString();
            });
        }
        if (obj["forumUrl"] != undefined) {
            this["forumUrl"] = obj["forumUrl"].toString();
        }
        if (obj["fileServiceUrl"] != undefined) {
            this["fileServiceUrl"] = obj["fileServiceUrl"].toString();
        }
        if (obj["URL_FileService"] != undefined) {
            this["URL_FileService"] = obj["URL_FileService"].toString();
        }
        if (obj["nginx"] != undefined && obj["nginx"] != null && _.isArray(obj["nginx"])) {
            this["nginx"] = obj["nginx"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_url"](value);
                }
            });
        }
        if (obj["supervisor"] != undefined && obj["supervisor"] != null && _.isArray(obj["supervisor"])) {
            this["supervisor"] = obj["supervisor"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_url"](value);
                }
            });
        }
        if (obj["menu"] != undefined && obj["menu"] != null && _.isArray(obj["menu"])) {
            this["menu"] = obj["menu"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["ui_menu_mongo_editor"](value);
                }
            });
        }
        if (obj["entityUrl"] != undefined && obj["entityUrl"] != null && _.isArray(obj["entityUrl"])) {
            this["entityUrl"] = obj["entityUrl"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["entity_source"](value);
                }
            });
        }
        if (obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])) {
            this["entityName"] = obj["entityName"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["schema_name"](value);
                }
            });
        }
    }
}
exports.Model_application_configuration_super_admin_mongo = Model_application_configuration_super_admin_mongo;
//# sourceMappingURL=Model_application_configuration_super_admin_mongo.js.map