"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_qbp_admin_seller = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  config qbp admin
*/
class Entity_application_configuration_qbp_admin_seller extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_qbp_admin_seller' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["qbpSellerApi"] != undefined) {
            obj["qbpSellerApi"] = obj["qbpSellerApi"].toString();
        }
        if (obj["qbpBddUrl"] != undefined) {
            obj["qbpBddUrl"] = obj["qbpBddUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            obj["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["mangoConf"] != undefined) {
            Index.Entity_MangoConf.cast(obj["mangoConf"]);
            //602e35837d6c5b63b790117e
        }
        if (obj["orderService"] != undefined) {
            obj["orderService"] = obj["orderService"].toString();
        }
        if (obj["ticketService"] != undefined) {
            obj["ticketService"] = obj["ticketService"].toString();
        }
        if (obj["savService"] != undefined) {
            obj["savService"] = obj["savService"].toString();
        }
    }
    static checkqbpSellerApi(val, path = null) {
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
    static checkqbpBddUrl(val, path = null) {
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
    static checkfsoUrl(val, path = null) {
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
    static checkmangoConf(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_MangoConf.check(val, false, path);
            //602e35837d6c5b63b790117e
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkorderService(val, path = null) {
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
    static checkticketService(val, path = null) {
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
    static checksavService(val, path = null) {
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
        if (target.qbpSellerApi != null && target.qbpSellerApi != undefined) {
            res = Entity_application_configuration_qbp_admin_seller.checkqbpSellerApi(target.qbpSellerApi, `${path}.qbpSellerApi`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.qbpBddUrl != null && target.qbpBddUrl != undefined) {
            res = Entity_application_configuration_qbp_admin_seller.checkqbpBddUrl(target.qbpBddUrl, `${path}.qbpBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.fsoUrl != null && target.fsoUrl != undefined) {
            res = Entity_application_configuration_qbp_admin_seller.checkfsoUrl(target.fsoUrl, `${path}.fsoUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.mangoConf != null && target.mangoConf != undefined) {
            res = Entity_application_configuration_qbp_admin_seller.checkmangoConf(target.mangoConf, `${path}.mangoConf`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.orderService != null && target.orderService != undefined) {
            res = Entity_application_configuration_qbp_admin_seller.checkorderService(target.orderService, `${path}.orderService`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.ticketService != null && target.ticketService != undefined) {
            res = Entity_application_configuration_qbp_admin_seller.checkticketService(target.ticketService, `${path}.ticketService`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.savService != null && target.savService != undefined) {
            res = Entity_application_configuration_qbp_admin_seller.checksavService(target.savService, `${path}.savService`);
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
            case 'qbpSellerApi':
                //string
                return new String(value).valueOf();
                break;
            case 'qbpBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'fsoUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'mangoConf':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_MangoConf.castQueryParam(subPath, value);
                }
                break;
            case 'orderService':
                //string
                return new String(value).valueOf();
                break;
            case 'ticketService':
                //string
                return new String(value).valueOf();
                break;
            case 'savService':
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
            case 'qbpSellerApi':
                return null;
            case 'qbpBddUrl':
                return null;
            case 'fsoUrl':
                return null;
            case 'mangoConf':
                return Index.Entity_MangoConf.getClassNameOfProp(subPath);
            case 'orderService':
                return null;
            case 'ticketService':
                return null;
            case 'savService':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_qbp_admin_seller = Entity_application_configuration_qbp_admin_seller;
