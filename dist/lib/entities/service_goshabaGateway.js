"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_goshabaGateway = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  passerelle pour goshaba
*/
class Entity_service_goshabaGateway extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_goshabaGateway' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["privateKey"] != undefined) {
            obj["privateKey"] = obj["privateKey"].toString();
        }
        if (obj["packUrl"] != undefined) {
            obj["packUrl"] = obj["packUrl"].toString();
        }
    }
    static checkprivateKey(val, path = null) {
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
    static checkpackUrl(val, path = null) {
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
        if (isCompleteObj && (target.privateKey == null || target.privateKey == undefined)) {
            err.push(path + ".privateKey is required");
        }
        if (target.privateKey != null && target.privateKey != undefined) {
            res = Entity_service_goshabaGateway.checkprivateKey(target.privateKey, `${path}.privateKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.packUrl == null || target.packUrl == undefined)) {
            err.push(path + ".packUrl is required");
        }
        if (target.packUrl != null && target.packUrl != undefined) {
            res = Entity_service_goshabaGateway.checkpackUrl(target.packUrl, `${path}.packUrl`);
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
            case 'privateKey':
                //string
                return new String(value).valueOf();
                break;
            case 'packUrl':
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
            case 'privateKey':
                return null;
            case 'packUrl':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_goshabaGateway = Entity_service_goshabaGateway;
//# sourceMappingURL=service_goshabaGateway.js.map