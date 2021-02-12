"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_appApprenant = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  c'est la configuration d'une application Apprenant
*/
class Entity_application_configuration_appApprenant extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_appApprenant' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["forumUrl"] != undefined) {
            obj["forumUrl"] = obj["forumUrl"].toString();
        }
        if (obj["fileServiceUrl"] != undefined) {
            obj["fileServiceUrl"] = obj["fileServiceUrl"].toString();
        }
        if (obj["URL_FileService"] != undefined) {
            obj["URL_FileService"] = obj["URL_FileService"].toString();
        }
        if (obj["configurationUrlDb"] != undefined) {
            obj["configurationUrlDb"] = obj["configurationUrlDb"].toString();
        }
        if (obj["urlBase"] != undefined) {
            obj["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["likeServiceUrl"] != undefined) {
            obj["likeServiceUrl"] = obj["likeServiceUrl"].toString();
        }
        if (obj["aclTemplate"] != undefined) {
            Index.Entity__acl.cast(obj["aclTemplate"]);
            //5a3bae759167362268af288b
        }
        if (obj["trainingCourseServiceUrl"] != undefined) {
            obj["trainingCourseServiceUrl"] = obj["trainingCourseServiceUrl"].toString();
        }
        if (obj["syncSoketioUrl"] != undefined) {
            obj["syncSoketioUrl"] = obj["syncSoketioUrl"].toString();
        }
        if (obj["syncSoketioPath"] != undefined) {
            obj["syncSoketioPath"] = obj["syncSoketioPath"].toString();
        }
        if (obj["tutorVideoCallUrl"] != undefined) {
            obj["tutorVideoCallUrl"] = obj["tutorVideoCallUrl"].toString();
        }
        if (obj["tutorServiceUrl"] != undefined) {
            obj["tutorServiceUrl"] = obj["tutorServiceUrl"].toString();
        }
    }
    static checkforumUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkfileServiceUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkURL_FileService(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkconfigurationUrlDb(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkurlBase(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checklikeServiceUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkaclTemplate(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity__acl.check(val, false, path);
            //5a3bae759167362268af288b
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checktrainingCourseServiceUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checksyncSoketioUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checksyncSoketioPath(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checktutorVideoCallUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checktutorServiceUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = application_configuration_1.Entity_application_configuration.check(target, isCompleteObj, path);
        if (target.forumUrl != null && target.forumUrl != undefined) {
            res = Entity_application_configuration_appApprenant.checkforumUrl(target.forumUrl, `${path}.forumUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.fileServiceUrl != null && target.fileServiceUrl != undefined) {
            res = Entity_application_configuration_appApprenant.checkfileServiceUrl(target.fileServiceUrl, `${path}.fileServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.URL_FileService != null && target.URL_FileService != undefined) {
            res = Entity_application_configuration_appApprenant.checkURL_FileService(target.URL_FileService, `${path}.URL_FileService`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.configurationUrlDb == null || target.configurationUrlDb == undefined)) {
            err.push(path + ".configurationUrlDb is required");
        }
        if (target.configurationUrlDb != null && target.configurationUrlDb != undefined) {
            res = Entity_application_configuration_appApprenant.checkconfigurationUrlDb(target.configurationUrlDb, `${path}.configurationUrlDb`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.urlBase == null || target.urlBase == undefined)) {
            err.push(path + ".urlBase is required");
        }
        if (target.urlBase != null && target.urlBase != undefined) {
            res = Entity_application_configuration_appApprenant.checkurlBase(target.urlBase, `${path}.urlBase`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.likeServiceUrl == null || target.likeServiceUrl == undefined)) {
            err.push(path + ".likeServiceUrl is required");
        }
        if (target.likeServiceUrl != null && target.likeServiceUrl != undefined) {
            res = Entity_application_configuration_appApprenant.checklikeServiceUrl(target.likeServiceUrl, `${path}.likeServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.aclTemplate != null && target.aclTemplate != undefined) {
            res = Entity_application_configuration_appApprenant.checkaclTemplate(target.aclTemplate, `${path}.aclTemplate`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.trainingCourseServiceUrl == null || target.trainingCourseServiceUrl == undefined)) {
            err.push(path + ".trainingCourseServiceUrl is required");
        }
        if (target.trainingCourseServiceUrl != null && target.trainingCourseServiceUrl != undefined) {
            res = Entity_application_configuration_appApprenant.checktrainingCourseServiceUrl(target.trainingCourseServiceUrl, `${path}.trainingCourseServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.syncSoketioUrl == null || target.syncSoketioUrl == undefined)) {
            err.push(path + ".syncSoketioUrl is required");
        }
        if (target.syncSoketioUrl != null && target.syncSoketioUrl != undefined) {
            res = Entity_application_configuration_appApprenant.checksyncSoketioUrl(target.syncSoketioUrl, `${path}.syncSoketioUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.syncSoketioPath == null || target.syncSoketioPath == undefined)) {
            err.push(path + ".syncSoketioPath is required");
        }
        if (target.syncSoketioPath != null && target.syncSoketioPath != undefined) {
            res = Entity_application_configuration_appApprenant.checksyncSoketioPath(target.syncSoketioPath, `${path}.syncSoketioPath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.tutorVideoCallUrl == null || target.tutorVideoCallUrl == undefined)) {
            err.push(path + ".tutorVideoCallUrl is required");
        }
        if (target.tutorVideoCallUrl != null && target.tutorVideoCallUrl != undefined) {
            res = Entity_application_configuration_appApprenant.checktutorVideoCallUrl(target.tutorVideoCallUrl, `${path}.tutorVideoCallUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.tutorServiceUrl == null || target.tutorServiceUrl == undefined)) {
            err.push(path + ".tutorServiceUrl is required");
        }
        if (target.tutorServiceUrl != null && target.tutorServiceUrl != undefined) {
            res = Entity_application_configuration_appApprenant.checktutorServiceUrl(target.tutorServiceUrl, `${path}.tutorServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        return err;
    }
    static castQueryParam(path, value) {
        let key = '';
        let subPath = '';
        if (value === null) {
            return null;
        }
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} ${value}`);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path} ${value}`);
        }
        switch (key) {
            case 'forumUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'fileServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'URL_FileService':
                //string
                return new String(value).valueOf();
                break;
            case 'configurationUrlDb':
                //string
                return new String(value).valueOf();
                break;
            case 'urlBase':
                //string
                return new String(value).valueOf();
                break;
            case 'likeServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'aclTemplate':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity__acl.castQueryParam(subPath, value);
                }
                break;
            case 'trainingCourseServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'syncSoketioUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'syncSoketioPath':
                //string
                return new String(value).valueOf();
                break;
            case 'tutorVideoCallUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'tutorServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            default:
                return application_configuration_1.Entity_application_configuration.castQueryParam(key, value);
                break;
        }
    }
    static getClassNameOfProp(path) {
        let key = '';
        let subPath = '';
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} `);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path}`);
        }
        switch (key) {
            case 'forumUrl':
                return null;
            case 'fileServiceUrl':
                return null;
            case 'URL_FileService':
                return null;
            case 'configurationUrlDb':
                return null;
            case 'urlBase':
                return null;
            case 'likeServiceUrl':
                return null;
            case 'aclTemplate':
                return Index.Entity__acl.getClassNameOfProp(subPath);
            case 'trainingCourseServiceUrl':
                return null;
            case 'syncSoketioUrl':
                return null;
            case 'syncSoketioPath':
                return null;
            case 'tutorVideoCallUrl':
                return null;
            case 'tutorServiceUrl':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_appApprenant = Entity_application_configuration_appApprenant;
