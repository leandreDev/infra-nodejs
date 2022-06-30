"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_application_configuration_boisdor_admin_seller = void 0;
const Index = require("./Index");
const application_configuration_1 = require("./application_configuration");
/**
  config boisdor admin
*/
class Entity_application_configuration_boisdor_admin_seller extends application_configuration_1.Entity_application_configuration {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'application_configuration_boisdor_admin_seller' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_configuration_1.Entity_application_configuration.cast(obj, true);
        if (obj["boisdorSellerApi"] != undefined) {
            obj["boisdorSellerApi"] = obj["boisdorSellerApi"].toString();
        }
        if (obj["boisdorBddUrl"] != undefined) {
            obj["boisdorBddUrl"] = obj["boisdorBddUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            obj["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["apiPublicUrl"] != undefined) {
            obj["apiPublicUrl"] = obj["apiPublicUrl"].toString();
        }
        if (obj["boisdorMailService"] != undefined) {
            obj["boisdorMailService"] = obj["boisdorMailService"].toString();
        }
    }
    static checkboisdorSellerApi(val, path = null) {
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
    static checkboisdorBddUrl(val, path = null) {
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
    static checkapiPublicUrl(val, path = null) {
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
    static checkboisdorMailService(val, path = null) {
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
        if (target.boisdorSellerApi != null && target.boisdorSellerApi != undefined) {
            res = Entity_application_configuration_boisdor_admin_seller.checkboisdorSellerApi(target.boisdorSellerApi, `${path}.boisdorSellerApi`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdorBddUrl != null && target.boisdorBddUrl != undefined) {
            res = Entity_application_configuration_boisdor_admin_seller.checkboisdorBddUrl(target.boisdorBddUrl, `${path}.boisdorBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.fsoUrl != null && target.fsoUrl != undefined) {
            res = Entity_application_configuration_boisdor_admin_seller.checkfsoUrl(target.fsoUrl, `${path}.fsoUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.apiPublicUrl != null && target.apiPublicUrl != undefined) {
            res = Entity_application_configuration_boisdor_admin_seller.checkapiPublicUrl(target.apiPublicUrl, `${path}.apiPublicUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.boisdorMailService != null && target.boisdorMailService != undefined) {
            res = Entity_application_configuration_boisdor_admin_seller.checkboisdorMailService(target.boisdorMailService, `${path}.boisdorMailService`);
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
            case 'boisdorSellerApi':
                //string
                return new String(value).valueOf();
                break;
            case 'boisdorBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'fsoUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'apiPublicUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'boisdorMailService':
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
            case 'boisdorSellerApi':
                return null;
            case 'boisdorBddUrl':
                return null;
            case 'fsoUrl':
                return null;
            case 'apiPublicUrl':
                return null;
            case 'boisdorMailService':
                return null;
            default:
                return application_configuration_1.Entity_application_configuration.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_application_configuration_boisdor_admin_seller = Entity_application_configuration_boisdor_admin_seller;
