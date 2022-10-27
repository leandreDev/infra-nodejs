"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_dcbm_service = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  service métier de DCBM
*/
class Entity_dcbm_service extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'dcbm_service' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["bddUrl"] != undefined) {
            obj["bddUrl"] = obj["bddUrl"].toString();
        }
        if (obj["ssoBddUrl"] != undefined) {
            obj["ssoBddUrl"] = obj["ssoBddUrl"].toString();
        }
        if (obj["infraBddUrl"] != undefined) {
            obj["infraBddUrl"] = obj["infraBddUrl"].toString();
        }
        if (obj["ssoApiUrl"] != undefined) {
            obj["ssoApiUrl"] = obj["ssoApiUrl"].toString();
        }
        if (obj["licenceApiUrl"] != undefined) {
            obj["licenceApiUrl"] = obj["licenceApiUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            obj["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            obj["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["SendGridConf"] != undefined) {
            Index.Entity_DCBMMailer.cast(obj["SendGridConf"]);
            //6335dac7a886fa5a32f84f8a
        }
        if (obj["pdfRipUrl"] != undefined) {
            obj["pdfRipUrl"] = obj["pdfRipUrl"].toString();
        }
        if (obj["pdfAppUrl"] != undefined) {
            obj["pdfAppUrl"] = obj["pdfAppUrl"].toString();
        }
        if (obj["fsoUrl"] != undefined) {
            obj["fsoUrl"] = obj["fsoUrl"].toString();
        }
        if (obj["authorizedDomaine"] != undefined && obj["authorizedDomaine"] != null && _.isArray(obj["authorizedDomaine"])) {
            obj["authorizedDomaine"] = obj["authorizedDomaine"].map((value) => {
                return value.toString();
            });
        }
        if (obj["adminSiteUrl"] != undefined) {
            obj["adminSiteUrl"] = obj["adminSiteUrl"].toString();
        }
    }
    static checkbddUrl(val, path = null) {
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
    static checkssoBddUrl(val, path = null) {
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
    static checkinfraBddUrl(val, path = null) {
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
    static checkssoApiUrl(val, path = null) {
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
    static checklicenceApiUrl(val, path = null) {
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
    static checkclient_id(val, path = null) {
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
    static checkclient_secret(val, path = null) {
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
    static checkSendGridConf(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_DCBMMailer.check(val, false, path);
            //6335dac7a886fa5a32f84f8a
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkpdfRipUrl(val, path = null) {
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
    static checkpdfAppUrl(val, path = null) {
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
    static checkauthorizedDomaine(val, path = null) {
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
    static checkadminSiteUrl(val, path = null) {
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
        if (isCompleteObj && (target.bddUrl == null || target.bddUrl == undefined)) {
            err.push(path + ".bddUrl is required");
        }
        if (target.bddUrl != null && target.bddUrl != undefined) {
            res = Entity_dcbm_service.checkbddUrl(target.bddUrl, `${path}.bddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.ssoBddUrl == null || target.ssoBddUrl == undefined)) {
            err.push(path + ".ssoBddUrl is required");
        }
        if (target.ssoBddUrl != null && target.ssoBddUrl != undefined) {
            res = Entity_dcbm_service.checkssoBddUrl(target.ssoBddUrl, `${path}.ssoBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.infraBddUrl == null || target.infraBddUrl == undefined)) {
            err.push(path + ".infraBddUrl is required");
        }
        if (target.infraBddUrl != null && target.infraBddUrl != undefined) {
            res = Entity_dcbm_service.checkinfraBddUrl(target.infraBddUrl, `${path}.infraBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.ssoApiUrl == null || target.ssoApiUrl == undefined)) {
            err.push(path + ".ssoApiUrl is required");
        }
        if (target.ssoApiUrl != null && target.ssoApiUrl != undefined) {
            res = Entity_dcbm_service.checkssoApiUrl(target.ssoApiUrl, `${path}.ssoApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.licenceApiUrl == null || target.licenceApiUrl == undefined)) {
            err.push(path + ".licenceApiUrl is required");
        }
        if (target.licenceApiUrl != null && target.licenceApiUrl != undefined) {
            res = Entity_dcbm_service.checklicenceApiUrl(target.licenceApiUrl, `${path}.licenceApiUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.client_id == null || target.client_id == undefined)) {
            err.push(path + ".client_id is required");
        }
        if (target.client_id != null && target.client_id != undefined) {
            res = Entity_dcbm_service.checkclient_id(target.client_id, `${path}.client_id`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.client_secret == null || target.client_secret == undefined)) {
            err.push(path + ".client_secret is required");
        }
        if (target.client_secret != null && target.client_secret != undefined) {
            res = Entity_dcbm_service.checkclient_secret(target.client_secret, `${path}.client_secret`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.SendGridConf == null || target.SendGridConf == undefined)) {
            err.push(path + ".SendGridConf is required");
        }
        if (target.SendGridConf != null && target.SendGridConf != undefined) {
            res = Entity_dcbm_service.checkSendGridConf(target.SendGridConf, `${path}.SendGridConf`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.pdfRipUrl == null || target.pdfRipUrl == undefined)) {
            err.push(path + ".pdfRipUrl is required");
        }
        if (target.pdfRipUrl != null && target.pdfRipUrl != undefined) {
            res = Entity_dcbm_service.checkpdfRipUrl(target.pdfRipUrl, `${path}.pdfRipUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.pdfAppUrl == null || target.pdfAppUrl == undefined)) {
            err.push(path + ".pdfAppUrl is required");
        }
        if (target.pdfAppUrl != null && target.pdfAppUrl != undefined) {
            res = Entity_dcbm_service.checkpdfAppUrl(target.pdfAppUrl, `${path}.pdfAppUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.fsoUrl == null || target.fsoUrl == undefined)) {
            err.push(path + ".fsoUrl is required");
        }
        if (target.fsoUrl != null && target.fsoUrl != undefined) {
            res = Entity_dcbm_service.checkfsoUrl(target.fsoUrl, `${path}.fsoUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.authorizedDomaine == null || target.authorizedDomaine == undefined)) {
            err.push(path + ".authorizedDomaine is required");
        }
        if (target.authorizedDomaine != null && target.authorizedDomaine != undefined) {
            target.authorizedDomaine.forEach((data, index) => {
                res = Entity_dcbm_service.checkauthorizedDomaine(target.authorizedDomaine[index], `${path}.authorizedDomaine.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (isCompleteObj && (target.adminSiteUrl == null || target.adminSiteUrl == undefined)) {
            err.push(path + ".adminSiteUrl is required");
        }
        if (target.adminSiteUrl != null && target.adminSiteUrl != undefined) {
            res = Entity_dcbm_service.checkadminSiteUrl(target.adminSiteUrl, `${path}.adminSiteUrl`);
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
            case 'bddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'ssoBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'infraBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'ssoApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'licenceApiUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'client_id':
                //string
                return new String(value).valueOf();
                break;
            case 'client_secret':
                //string
                return new String(value).valueOf();
                break;
            case 'SendGridConf':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_DCBMMailer.castQueryParam(subPath, value);
                }
                break;
            case 'pdfRipUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'pdfAppUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'fsoUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'authorizedDomaine':
                //string
                return new String(value).valueOf();
                break;
            case 'adminSiteUrl':
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
            case 'bddUrl':
                return null;
            case 'ssoBddUrl':
                return null;
            case 'infraBddUrl':
                return null;
            case 'ssoApiUrl':
                return null;
            case 'licenceApiUrl':
                return null;
            case 'client_id':
                return null;
            case 'client_secret':
                return null;
            case 'SendGridConf':
                return Index.Entity_DCBMMailer.getClassNameOfProp(subPath);
            case 'pdfRipUrl':
                return null;
            case 'pdfAppUrl':
                return null;
            case 'fsoUrl':
                return null;
            case 'authorizedDomaine':
                return null;
            case 'adminSiteUrl':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_dcbm_service = Entity_dcbm_service;
