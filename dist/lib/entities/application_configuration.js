"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  c'est la configuration d'une application
*/
class Entity_application_configuration extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration' && ['application_configuration_phoneCard', 'application_configuration_appCoach', 'application_configuration_super_admin_mongo', 'application_configuration_antico', 'application_configuration_appClient', 'application_configuration_appApprenant', 'AppConf_minds_up_admin', 'application_configuration_reportApp', 'application_configuration_celio2020Admin', 'application_configuration_manu_admin', 'application_configuration_comptoire_or_admin', 'application_configuration_celiofront', 'application_configuration_celioback', 'application_configuration_celioadmin', 'application_configuration_ferrand', 'application_configuration_celio', 'AppConf_minds_up', 'application_configuration_petit_moulin', 'application_configuration_petit_moulin_admin', 'application_configuration_airport_admin', 'application_configuration_airport', 'application_configuration_boisdor', 'application_configuration_r3', 'application_configuration_boisdor_admin_seller', 'application_configuration_qbp_admin', 'application_configuration_qbp_admin_seller', 'application_configuration_boisdor_admin', 'application_configuration_qbp', 'application_configuration_r3_admin_seller', 'application_configuration_dcbm_static', 'application_configuration_dcbm', 'application_configuration_dcbm_admin', 'application_configuration_r3_admin',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])) {
            obj["services"] = obj["services"].map((value) => {
                if (_.isString(value)) {
                    return new utils_1.mongo.ObjectId(value);
                }
                else if (value._id) {
                    return new utils_1.mongo.ObjectId(value._id);
                }
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return value;
                }
            });
        }
        if (obj["appName"] != undefined) {
            obj["appName"] = obj["appName"].toString();
        }
    }
    static checkname(val, path = null) {
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
    static checkservices(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkappName(val, path = null) {
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
        if (target.name != null && target.name != undefined) {
            res = Entity_application_configuration.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.services != null && target.services != undefined) {
            target.services.forEach((data, index) => {
                res = Entity_application_configuration.checkservices(target.services[index], `${path}.services.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.appName != null && target.appName != undefined) {
            res = Entity_application_configuration.checkappName(target.appName, `${path}.appName`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'services':
                //objectid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'appName':
                //string
                return new String(value).valueOf();
                break;
            default:
                return utils_1.Entity.castQueryParam(key, value);
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
            case 'name':
                return null;
            case 'services':
                return 'service_access';
            case 'appName':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration = Entity_application_configuration;
