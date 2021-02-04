"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_planned_tasks = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  Service de Taches planifiées
*/
class Entity_service_planned_tasks extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_planned_tasks' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["bdd_url"] != undefined) {
            obj["bdd_url"] = obj["bdd_url"].toString();
        }
        if (obj["handlerInterval"] != undefined) {
            obj["handlerInterval"] = new Number(obj["handlerInterval"]).valueOf();
        }
        if (obj["startHandlingOnServiceStart"] != undefined) {
            obj["startHandlingOnServiceStart"] = new Boolean(obj["startHandlingOnServiceStart"]).valueOf();
        }
        if (obj["schedule_url"] != undefined) {
            obj["schedule_url"] = obj["schedule_url"].toString();
        }
        if (obj["task_url"] != undefined) {
            obj["task_url"] = obj["task_url"].toString();
        }
        if (obj["licencesService_url"] != undefined) {
            obj["licencesService_url"] = obj["licencesService_url"].toString();
        }
        if (obj["apiUrl"] != undefined) {
            obj["apiUrl"] = obj["apiUrl"].toString();
        }
    }
    static checkbdd_url(val, path = null) {
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
    static checkhandlerInterval(val, path = null) {
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
    static checkstartHandlingOnServiceStart(val, path = null) {
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
    static checkschedule_url(val, path = null) {
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
    static checktask_url(val, path = null) {
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
    static checklicencesService_url(val, path = null) {
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
    static checkapiUrl(val, path = null) {
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
        if (isCompleteObj && (target.bdd_url == null || target.bdd_url == undefined)) {
            err.push(path + ".bdd_url is required");
        }
        if (target.bdd_url != null && target.bdd_url != undefined) {
            res = Entity_service_planned_tasks.checkbdd_url(target.bdd_url, `${path}.bdd_url`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.handlerInterval != null && target.handlerInterval != undefined) {
            res = Entity_service_planned_tasks.checkhandlerInterval(target.handlerInterval, `${path}.handlerInterval`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.startHandlingOnServiceStart != null && target.startHandlingOnServiceStart != undefined) {
            res = Entity_service_planned_tasks.checkstartHandlingOnServiceStart(target.startHandlingOnServiceStart, `${path}.startHandlingOnServiceStart`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.schedule_url != null && target.schedule_url != undefined) {
            res = Entity_service_planned_tasks.checkschedule_url(target.schedule_url, `${path}.schedule_url`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.task_url != null && target.task_url != undefined) {
            res = Entity_service_planned_tasks.checktask_url(target.task_url, `${path}.task_url`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.licencesService_url != null && target.licencesService_url != undefined) {
            res = Entity_service_planned_tasks.checklicencesService_url(target.licencesService_url, `${path}.licencesService_url`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.apiUrl == null || target.apiUrl == undefined)) {
            err.push(path + ".apiUrl is required");
        }
        if (target.apiUrl != null && target.apiUrl != undefined) {
            res = Entity_service_planned_tasks.checkapiUrl(target.apiUrl, `${path}.apiUrl`);
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
            case 'bdd_url':
                //string
                return new String(value).valueOf();
                break;
            case 'handlerInterval':
                //number
                return new Number(value).valueOf();
                break;
            case 'startHandlingOnServiceStart':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'schedule_url':
                //string
                return new String(value).valueOf();
                break;
            case 'task_url':
                //string
                return new String(value).valueOf();
                break;
            case 'licencesService_url':
                //string
                return new String(value).valueOf();
                break;
            case 'apiUrl':
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
            case 'bdd_url':
                return null;
            case 'handlerInterval':
                return null;
            case 'startHandlingOnServiceStart':
                return null;
            case 'schedule_url':
                return null;
            case 'task_url':
                return null;
            case 'licencesService_url':
                return null;
            case 'apiUrl':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_planned_tasks = Entity_service_planned_tasks;
//# sourceMappingURL=service_planned_tasks.js.map