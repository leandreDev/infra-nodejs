"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_super_admin_mongo = void 0;
const _ = require("lodash");
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  configuration de l'application superAdminMongo
*/
class Entity_application_configuration_super_admin_mongo extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_super_admin_mongo' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["servicesUrl"] != undefined && obj["servicesUrl"] != null && _.isArray(obj["servicesUrl"])) {
            obj["servicesUrl"] = obj["servicesUrl"].map((value) => {
                return value.toString();
            });
        }
        if (obj["forumUrl"] != undefined) {
            obj["forumUrl"] = obj["forumUrl"].toString();
        }
        if (obj["fileServiceUrl"] != undefined) {
            obj["fileServiceUrl"] = obj["fileServiceUrl"].toString();
        }
        if (obj["URL_FileService"] != undefined) {
            obj["URL_FileService"] = obj["URL_FileService"].toString();
        }
        if (obj["nginx"] != undefined && obj["nginx"] != null && _.isArray(obj["nginx"])) {
            obj["nginx"].forEach((value) => {
                Index.Entity_name_url.cast(value);
            });
        }
        if (obj["supervisor"] != undefined && obj["supervisor"] != null && _.isArray(obj["supervisor"])) {
            obj["supervisor"].forEach((value) => {
                Index.Entity_name_url.cast(value);
            });
        }
        if (obj["menu"] != undefined && obj["menu"] != null && _.isArray(obj["menu"])) {
            obj["menu"].forEach((value) => {
                Index.Entity_ui_menu_mongo_editor.cast(value);
            });
        }
        if (obj["entityUrl"] != undefined && obj["entityUrl"] != null && _.isArray(obj["entityUrl"])) {
            obj["entityUrl"].forEach((value) => {
                Index.Entity_entity_source.cast(value);
            });
        }
        if (obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])) {
            obj["entityName"].forEach((value) => {
                Index.Entity_schema_name.cast(value);
            });
        }
    }
    static checkservicesUrl(val, path = null) {
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
    static checknginx(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_name_url.check(val, false, path);
            //59b003c57823f5dadc157aeb
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checksupervisor(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_name_url.check(val, false, path);
            //59b003c57823f5dadc157aeb
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkmenu(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_ui_menu_mongo_editor.check(val, false, path);
            //5921e0482486c0d57b0d663e
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkentityUrl(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_entity_source.check(val, false, path);
            //59511e75c3b82c3913652e8a
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkentityName(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_schema_name.check(val, false, path);
            //59b91ccf3e230a16bee0f325
        }
        res = [...res, ...result];
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
        if (target.servicesUrl != null && target.servicesUrl != undefined) {
            target.servicesUrl.forEach((data, index) => {
                res = Entity_application_configuration_super_admin_mongo.checkservicesUrl(target.servicesUrl[index], `${path}.servicesUrl.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.forumUrl != null && target.forumUrl != undefined) {
            res = Entity_application_configuration_super_admin_mongo.checkforumUrl(target.forumUrl, `${path}.forumUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.fileServiceUrl != null && target.fileServiceUrl != undefined) {
            res = Entity_application_configuration_super_admin_mongo.checkfileServiceUrl(target.fileServiceUrl, `${path}.fileServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.URL_FileService != null && target.URL_FileService != undefined) {
            res = Entity_application_configuration_super_admin_mongo.checkURL_FileService(target.URL_FileService, `${path}.URL_FileService`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.nginx != null && target.nginx != undefined) {
            target.nginx.forEach((data, index) => {
                res = Entity_application_configuration_super_admin_mongo.checknginx(target.nginx[index], `${path}.nginx.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.supervisor != null && target.supervisor != undefined) {
            target.supervisor.forEach((data, index) => {
                res = Entity_application_configuration_super_admin_mongo.checksupervisor(target.supervisor[index], `${path}.supervisor.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.menu != null && target.menu != undefined) {
            target.menu.forEach((data, index) => {
                res = Entity_application_configuration_super_admin_mongo.checkmenu(target.menu[index], `${path}.menu.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.entityUrl != null && target.entityUrl != undefined) {
            target.entityUrl.forEach((data, index) => {
                res = Entity_application_configuration_super_admin_mongo.checkentityUrl(target.entityUrl[index], `${path}.entityUrl.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.entityName != null && target.entityName != undefined) {
            target.entityName.forEach((data, index) => {
                res = Entity_application_configuration_super_admin_mongo.checkentityName(target.entityName[index], `${path}.entityName.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
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
            case 'servicesUrl':
                //string
                return new String(value).valueOf();
                break;
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
            case 'nginx':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_url.castQueryParam(subPath, value);
                }
                break;
            case 'supervisor':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_url.castQueryParam(subPath, value);
                }
                break;
            case 'menu':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_ui_menu_mongo_editor.castQueryParam(subPath, value);
                }
                break;
            case 'entityUrl':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_entity_source.castQueryParam(subPath, value);
                }
                break;
            case 'entityName':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_schema_name.castQueryParam(subPath, value);
                }
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
            case 'servicesUrl':
                return null;
            case 'forumUrl':
                return null;
            case 'fileServiceUrl':
                return null;
            case 'URL_FileService':
                return null;
            case 'nginx':
                return Index.Entity_name_url.getClassNameOfProp(subPath);
            case 'supervisor':
                return Index.Entity_name_url.getClassNameOfProp(subPath);
            case 'menu':
                return Index.Entity_ui_menu_mongo_editor.getClassNameOfProp(subPath);
            case 'entityUrl':
                return Index.Entity_entity_source.getClassNameOfProp(subPath);
            case 'entityName':
                return Index.Entity_schema_name.getClassNameOfProp(subPath);
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_super_admin_mongo = Entity_application_configuration_super_admin_mongo;
