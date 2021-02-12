"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_trainingCoursesService = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  service de gestion des parcourts de formation
*/
class Entity_service_trainingCoursesService extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_trainingCoursesService' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["apiSession"] != undefined) {
            obj["apiSession"] = obj["apiSession"].toString();
        }
        if (obj["licenceServiceUrl"] != undefined) {
            obj["licenceServiceUrl"] = obj["licenceServiceUrl"].toString();
        }
        if (obj["taskServiceUrl"] != undefined) {
            obj["taskServiceUrl"] = obj["taskServiceUrl"].toString();
        }
        if (obj["mailServiceUrl"] != undefined) {
            obj["mailServiceUrl"] = obj["mailServiceUrl"].toString();
        }
        if (obj["clientInfraUrl"] != undefined) {
            obj["clientInfraUrl"] = obj["clientInfraUrl"].toString();
        }
    }
    static checkapiSession(val, path = null) {
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
    static checklicenceServiceUrl(val, path = null) {
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
    static checktaskServiceUrl(val, path = null) {
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
    static checkmailServiceUrl(val, path = null) {
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
    static checkclientInfraUrl(val, path = null) {
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.apiSession == null || target.apiSession == undefined)) {
            err.push(path + ".apiSession is required");
        }
        if (target.apiSession != null && target.apiSession != undefined) {
            res = Entity_service_trainingCoursesService.checkapiSession(target.apiSession, `${path}.apiSession`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.licenceServiceUrl == null || target.licenceServiceUrl == undefined)) {
            err.push(path + ".licenceServiceUrl is required");
        }
        if (target.licenceServiceUrl != null && target.licenceServiceUrl != undefined) {
            res = Entity_service_trainingCoursesService.checklicenceServiceUrl(target.licenceServiceUrl, `${path}.licenceServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.taskServiceUrl == null || target.taskServiceUrl == undefined)) {
            err.push(path + ".taskServiceUrl is required");
        }
        if (target.taskServiceUrl != null && target.taskServiceUrl != undefined) {
            res = Entity_service_trainingCoursesService.checktaskServiceUrl(target.taskServiceUrl, `${path}.taskServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.mailServiceUrl == null || target.mailServiceUrl == undefined)) {
            err.push(path + ".mailServiceUrl is required");
        }
        if (target.mailServiceUrl != null && target.mailServiceUrl != undefined) {
            res = Entity_service_trainingCoursesService.checkmailServiceUrl(target.mailServiceUrl, `${path}.mailServiceUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.clientInfraUrl == null || target.clientInfraUrl == undefined)) {
            err.push(path + ".clientInfraUrl is required");
        }
        if (target.clientInfraUrl != null && target.clientInfraUrl != undefined) {
            res = Entity_service_trainingCoursesService.checkclientInfraUrl(target.clientInfraUrl, `${path}.clientInfraUrl`);
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
            case 'apiSession':
                //string
                return new String(value).valueOf();
                break;
            case 'licenceServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'taskServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'mailServiceUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'clientInfraUrl':
                //string
                return new String(value).valueOf();
                break;
            default:
                return service_1.Entity_service.castQueryParam(key, value);
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
            case 'apiSession':
                return null;
            case 'licenceServiceUrl':
                return null;
            case 'taskServiceUrl':
                return null;
            case 'mailServiceUrl':
                return null;
            case 'clientInfraUrl':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_trainingCoursesService = Entity_service_trainingCoursesService;
