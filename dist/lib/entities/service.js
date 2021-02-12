"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@hfdev/utils");
/**
  identification du service
*/
class Entity_service extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service' && ['service_sso', 'service_init', 'service_mailtoinfra', 'service_licence_token', 'service_goshabaGateway', 'service_socketIo', 'service_supervision', 'service_configuration', 'service_nginxConfigurator', 'service_push_notification', 'service_like', 'service_dumy_fso', 'service_sendGrid', 'service_trainingCoursesService', 'service_orchestrator', 'service_socket_io', 'service_tutor', 'service_init_js', 'service_infra_admin', 'mailtoinfra2', 'service_planned_tasks', 'Service_scorm_gateway', 'service_nginxMultiConfigurator', 'service_client_ftp', 'service_polo_celio', 'service_fso', 'service_pdfrip', 'service_signin', 'service_mindsUp', 'service_webAppConf', 'swagger_conv', 'service_mongo', 'service_celio_qcm_admin', 'service_ferrand', 'service_petit_moulin', 'service_celio_fid', 'service_celio_qcm', 'service_comptoireOr', 'service_celio_back_task', 'service_celio_fid_admin', 'service_airport', 'QBP_service',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["urlBase"] != undefined) {
            obj["urlBase"] = obj["urlBase"].toString();
        }
        if (obj["port"] != undefined) {
            obj["port"] = new Number(obj["port"]).valueOf();
        }
        if (obj["debug"] != undefined) {
            obj["debug"] = new Boolean(obj["debug"]).valueOf();
        }
        if (obj["licence_well-known"] != undefined) {
            obj["licence_well-known"] = obj["licence_well-known"].toString();
        }
        if (obj["secretKey"] != undefined) {
            obj["secretKey"] = obj["secretKey"].toString();
        }
        if (obj["publicAccess"] != undefined) {
            Index.Entity_url_role.cast(obj["publicAccess"]);
            //597781fdc184153c2ede4d9f
        }
        if (obj["bindIp"] != undefined) {
            obj["bindIp"] = obj["bindIp"].toString();
        }
        if (obj["headers"] != undefined && obj["headers"] != null && _.isArray(obj["headers"])) {
            obj["headers"].forEach((value) => {
                Index.Entity_name_value.cast(value);
            });
        }
        if (obj["accessControlAllowOrigin"] != undefined && obj["accessControlAllowOrigin"] != null && _.isArray(obj["accessControlAllowOrigin"])) {
            obj["accessControlAllowOrigin"] = obj["accessControlAllowOrigin"].map((value) => {
                return value.toString();
            });
        }
        if (obj["confServiceUrl"] != undefined) {
            obj["confServiceUrl"] = obj["confServiceUrl"].toString();
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
    static checkport(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkdebug(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isBoolean(val)) {
            res.push(`${path}  is not a boolean`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checksecretKey(val, path = null) {
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
    static checkpublicAccess(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_url_role.check(val, false, path);
            //597781fdc184153c2ede4d9f
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkbindIp(val, path = null) {
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
    static checkheaders(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_name_value.check(val, false, path);
            //59c62581c3c9d3a0f9e88616
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkaccessControlAllowOrigin(val, path = null) {
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
    static checkconfServiceUrl(val, path = null) {
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
            res = Entity_service.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.urlBase != null && target.urlBase != undefined) {
            res = Entity_service.checkurlBase(target.urlBase, `${path}.urlBase`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.port != null && target.port != undefined) {
            res = Entity_service.checkport(target.port, `${path}.port`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.debug != null && target.debug != undefined) {
            res = Entity_service.checkdebug(target.debug, `${path}.debug`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.secretKey != null && target.secretKey != undefined) {
            res = Entity_service.checksecretKey(target.secretKey, `${path}.secretKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.publicAccess != null && target.publicAccess != undefined) {
            res = Entity_service.checkpublicAccess(target.publicAccess, `${path}.publicAccess`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.bindIp != null && target.bindIp != undefined) {
            res = Entity_service.checkbindIp(target.bindIp, `${path}.bindIp`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.headers != null && target.headers != undefined) {
            target.headers.forEach((data, index) => {
                res = Entity_service.checkheaders(target.headers[index], `${path}.headers.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.accessControlAllowOrigin != null && target.accessControlAllowOrigin != undefined) {
            target.accessControlAllowOrigin.forEach((data, index) => {
                res = Entity_service.checkaccessControlAllowOrigin(target.accessControlAllowOrigin[index], `${path}.accessControlAllowOrigin.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.confServiceUrl != null && target.confServiceUrl != undefined) {
            res = Entity_service.checkconfServiceUrl(target.confServiceUrl, `${path}.confServiceUrl`);
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
            case 'urlBase':
                //string
                return new String(value).valueOf();
                break;
            case 'port':
                //number
                return new Number(value).valueOf();
                break;
            case 'debug':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'licence_well-known':
                //string
                return new String(value).valueOf();
                break;
            case 'secretKey':
                //string
                return new String(value).valueOf();
                break;
            case 'publicAccess':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_url_role.castQueryParam(subPath, value);
                }
                break;
            case 'bindIp':
                //string
                return new String(value).valueOf();
                break;
            case 'headers':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_value.castQueryParam(subPath, value);
                }
                break;
            case 'accessControlAllowOrigin':
                //string
                return new String(value).valueOf();
                break;
            case 'confServiceUrl':
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
            case 'urlBase':
                return null;
            case 'port':
                return null;
            case 'debug':
                return null;
            case 'licence_well-known':
                return null;
            case 'secretKey':
                return null;
            case 'publicAccess':
                return Index.Entity_url_role.getClassNameOfProp(subPath);
            case 'bindIp':
                return null;
            case 'headers':
                return Index.Entity_name_value.getClassNameOfProp(subPath);
            case 'accessControlAllowOrigin':
                return null;
            case 'confServiceUrl':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service = Entity_service;
