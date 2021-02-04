"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_application_configuration_appClient = void 0;
const Index = require("./Index");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  c'est la configuration d'une application Client
*/
class Model_application_configuration_appClient extends Model_application_configuration_1.Model_application_configuration {
    /**
      c'est la configuration d'une application Client
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_appClient";
        if (obj["configurationUrlDb"] != undefined) {
            this["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["urlBase"] != undefined) {
            this["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["signinUrl"] != undefined) {
            this["signinUrl"] = obj["signinUrl"].toString();
        }
        if (obj["serviceSessionUrl"] != undefined) {
            this["serviceSessionUrl"] = obj["serviceSessionUrl"].toString();
        }
        if (obj["clientServiceUrl"] != undefined) {
            this["clientServiceUrl"] = obj["clientServiceUrl"].toString();
        }
        if (obj["aclTemplate"] != undefined) {
            if (obj["aclTemplate"]._class) {
                this["aclTemplate"] = new Index[obj["aclTemplate"]._class](obj["aclTemplate"]);
            }
            else {
                this["aclTemplate"] = new Index["_acl"](obj["aclTemplate"]);
            }
        }
    }
}
exports.Model_application_configuration_appClient = Model_application_configuration_appClient;
//# sourceMappingURL=Model_application_configuration_appClient.js.map