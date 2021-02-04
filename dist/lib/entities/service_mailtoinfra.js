"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_mailtoinfra = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  service qui permet de configurer l'authentification a partir d'un mail
*/
class Entity_service_mailtoinfra extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_mailtoinfra' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["mailsMapping"] != undefined && obj["mailsMapping"] != null && _.isArray(obj["mailsMapping"])) {
            obj["mailsMapping"].forEach((value) => {
                Index.Entity_mail_connexion_conf.cast(value);
            });
        }
    }
    static checkmailsMapping(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_mail_connexion_conf.check(val, false, path);
            //5979bfd206ee6fc48225a476
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (target.mailsMapping != null && target.mailsMapping != undefined) {
            target.mailsMapping.forEach((data, index) => {
                res = Entity_service_mailtoinfra.checkmailsMapping(target.mailsMapping[index], `${path}.mailsMapping.${index}`);
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
            case 'mailsMapping':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_mail_connexion_conf.castQueryParam(subPath, value);
                }
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
            case 'mailsMapping':
                return Index.Entity_mail_connexion_conf.getClassNameOfProp(subPath);
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_mailtoinfra = Entity_service_mailtoinfra;
//# sourceMappingURL=service_mailtoinfra.js.map