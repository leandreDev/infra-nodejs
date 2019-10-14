"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Index = require("./Index");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  c'est la configuration d'une application Apprenant
*/
class Model_application_configuration_appApprenant extends Model_application_configuration_1.Model_application_configuration {
    /**
      c'est la configuration d'une application Apprenant
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_appApprenant";
        if (obj["forumUrl"] != undefined) {
            this["forumUrl"] = obj["forumUrl"].toString();
        }
        if (obj["fileServiceUrl"] != undefined) {
            this["fileServiceUrl"] = obj["fileServiceUrl"].toString();
        }
        if (obj["URL_FileService"] != undefined) {
            this["URL_FileService"] = obj["URL_FileService"].toString();
        }
        if (obj["configurationUrlDb"] != undefined) {
            this["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["urlBase"] != undefined) {
            this["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["likeServiceUrl"] != undefined) {
            this["likeServiceUrl"] = obj["likeServiceUrl"].toString();
        }
        if (obj["aclTemplate"] != undefined) {
            if (obj._class) {
                this["aclTemplate"] = new Index[obj._class](obj["aclTemplate"]);
            }
            else {
                this["aclTemplate"] = new Index["_acl"](obj["aclTemplate"]);
            }
        }
        if (obj["trainingCourseServiceUrl"] != undefined) {
            this["trainingCourseServiceUrl"] = obj["trainingCourseServiceUrl"].toString();
        }
        if (obj["syncSoketioUrl"] != undefined) {
            this["syncSoketioUrl"] = obj["syncSoketioUrl"].toString();
        }
        if (obj["syncSoketioPath"] != undefined) {
            this["syncSoketioPath"] = obj["syncSoketioPath"].toString();
        }
        if (obj["tutorVideoCallUrl"] != undefined) {
            this["tutorVideoCallUrl"] = obj["tutorVideoCallUrl"].toString();
        }
        if (obj["tutorServiceUrl"] != undefined) {
            this["tutorServiceUrl"] = obj["tutorServiceUrl"].toString();
        }
    }
}
exports.Model_application_configuration_appApprenant = Model_application_configuration_appApprenant;
//# sourceMappingURL=Model_application_configuration_appApprenant.js.map