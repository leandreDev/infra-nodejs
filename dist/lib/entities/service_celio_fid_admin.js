"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_celio_fid_admin = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  service celio fid admin
*/
class Entity_service_celio_fid_admin extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_celio_fid_admin' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["fiBddUrl"] != undefined) {
            obj["fiBddUrl"] = obj["fiBddUrl"].toString();
        }
        if (obj["qcmBddUrl"] != undefined) {
            obj["qcmBddUrl"] = obj["qcmBddUrl"].toString();
        }
        if (obj["accessTokenUrl"] != undefined) {
            obj["accessTokenUrl"] = obj["accessTokenUrl"].toString();
        }
        if (obj["validateTokenUrl"] != undefined) {
            obj["validateTokenUrl"] = obj["validateTokenUrl"].toString();
        }
        if (obj["client_id"] != undefined) {
            obj["client_id"] = obj["client_id"].toString();
        }
        if (obj["client_secret"] != undefined) {
            obj["client_secret"] = obj["client_secret"].toString();
        }
        if (obj["hybrisUrl"] != undefined) {
            obj["hybrisUrl"] = obj["hybrisUrl"].toString();
        }
        if (obj["earnEuroToPoint"] != undefined) {
            obj["earnEuroToPoint"] = new Number(obj["earnEuroToPoint"]).valueOf();
        }
        if (obj["burnEuroToPoint"] != undefined) {
            obj["burnEuroToPoint"] = new Number(obj["burnEuroToPoint"]).valueOf();
        }
        if (obj["serverUrl"] != undefined) {
            obj["serverUrl"] = obj["serverUrl"].toString();
        }
        if (obj["secretToken"] != undefined) {
            obj["secretToken"] = obj["secretToken"].toString();
        }
        if (obj["basSiteId"] != undefined) {
            obj["basSiteId"] = obj["basSiteId"].toString();
        }
        if (obj["certifPath"] != undefined) {
            obj["certifPath"] = obj["certifPath"].toString();
        }
        if (obj["caPath"] != undefined) {
            obj["caPath"] = obj["caPath"].toString();
        }
        if (obj["sftp"] != undefined) {
            Index.Entity_ftpConf.cast(obj["sftp"]);
            //5f646c881d0d10a02389ba8f
        }
        if (obj["sftpTicketSrcPath"] != undefined) {
            obj["sftpTicketSrcPath"] = obj["sftpTicketSrcPath"].toString();
        }
        if (obj["sftpTicketDestPath"] != undefined) {
            obj["sftpTicketDestPath"] = obj["sftpTicketDestPath"].toString();
        }
        if (obj["cbFidAdminUrl"] != undefined) {
            obj["cbFidAdminUrl"] = obj["cbFidAdminUrl"].toString();
        }
        if (obj["ticket_costCenterExcluded"] != undefined && obj["ticket_costCenterExcluded"] != null && _.isArray(obj["ticket_costCenterExcluded"])) {
            obj["ticket_costCenterExcluded"] = obj["ticket_costCenterExcluded"].map((value) => {
                return value.toString();
            });
        }
        if (obj["scanOrderEarnPageSize"] != undefined) {
            obj["scanOrderEarnPageSize"] = new Number(obj["scanOrderEarnPageSize"]).valueOf();
        }
        if (obj["scanOrderEaBurnPageSize"] != undefined) {
            obj["scanOrderEaBurnPageSize"] = new Number(obj["scanOrderEaBurnPageSize"]).valueOf();
        }
        if (obj["cashRegisterCapingFidPt"] != undefined) {
            obj["cashRegisterCapingFidPt"] = new Number(obj["cashRegisterCapingFidPt"]).valueOf();
        }
        if (obj["cashRegisterApiKey"] != undefined) {
            obj["cashRegisterApiKey"] = obj["cashRegisterApiKey"].toString();
        }
        if (obj["customerPrefix"] != undefined) {
            obj["customerPrefix"] = obj["customerPrefix"].toString();
        }
        if (obj["globalCappingFidPoint"] != undefined) {
            obj["globalCappingFidPoint"] = new Number(obj["globalCappingFidPoint"]).valueOf();
        }
        if (obj["disableEmbasment"] != undefined) {
            obj["disableEmbasment"] = new Boolean(obj["disableEmbasment"]).valueOf();
        }
    }
    static checkfiBddUrl(val, path = null) {
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
    static checkqcmBddUrl(val, path = null) {
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
    static checkaccessTokenUrl(val, path = null) {
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
    static checkvalidateTokenUrl(val, path = null) {
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
    static checkhybrisUrl(val, path = null) {
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
    static checkearnEuroToPoint(val, path = null) {
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
    static checkburnEuroToPoint(val, path = null) {
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
    static checkserverUrl(val, path = null) {
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
    static checksecretToken(val, path = null) {
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
    static checkbasSiteId(val, path = null) {
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
    static checkcertifPath(val, path = null) {
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
    static checkcaPath(val, path = null) {
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
    static checksftp(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_ftpConf.check(val, false, path);
            //5f646c881d0d10a02389ba8f
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checksftpTicketSrcPath(val, path = null) {
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
    static checksftpTicketDestPath(val, path = null) {
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
    static checkcbFidAdminUrl(val, path = null) {
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
    static checkticket_costCenterExcluded(val, path = null) {
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
    static checkscanOrderEarnPageSize(val, path = null) {
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
    static checkscanOrderEaBurnPageSize(val, path = null) {
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
    static checkcashRegisterCapingFidPt(val, path = null) {
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
    static checkcashRegisterApiKey(val, path = null) {
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
    static checkcustomerPrefix(val, path = null) {
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
    static checkglobalCappingFidPoint(val, path = null) {
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
    static checkdisableEmbasment(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.fiBddUrl == null || target.fiBddUrl == undefined)) {
            err.push(path + ".fiBddUrl is required");
        }
        if (target.fiBddUrl != null && target.fiBddUrl != undefined) {
            res = Entity_service_celio_fid_admin.checkfiBddUrl(target.fiBddUrl, `${path}.fiBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.qcmBddUrl == null || target.qcmBddUrl == undefined)) {
            err.push(path + ".qcmBddUrl is required");
        }
        if (target.qcmBddUrl != null && target.qcmBddUrl != undefined) {
            res = Entity_service_celio_fid_admin.checkqcmBddUrl(target.qcmBddUrl, `${path}.qcmBddUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.accessTokenUrl == null || target.accessTokenUrl == undefined)) {
            err.push(path + ".accessTokenUrl is required");
        }
        if (target.accessTokenUrl != null && target.accessTokenUrl != undefined) {
            res = Entity_service_celio_fid_admin.checkaccessTokenUrl(target.accessTokenUrl, `${path}.accessTokenUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.validateTokenUrl == null || target.validateTokenUrl == undefined)) {
            err.push(path + ".validateTokenUrl is required");
        }
        if (target.validateTokenUrl != null && target.validateTokenUrl != undefined) {
            res = Entity_service_celio_fid_admin.checkvalidateTokenUrl(target.validateTokenUrl, `${path}.validateTokenUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.client_id == null || target.client_id == undefined)) {
            err.push(path + ".client_id is required");
        }
        if (target.client_id != null && target.client_id != undefined) {
            res = Entity_service_celio_fid_admin.checkclient_id(target.client_id, `${path}.client_id`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.client_secret != null && target.client_secret != undefined) {
            res = Entity_service_celio_fid_admin.checkclient_secret(target.client_secret, `${path}.client_secret`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.hybrisUrl == null || target.hybrisUrl == undefined)) {
            err.push(path + ".hybrisUrl is required");
        }
        if (target.hybrisUrl != null && target.hybrisUrl != undefined) {
            res = Entity_service_celio_fid_admin.checkhybrisUrl(target.hybrisUrl, `${path}.hybrisUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.earnEuroToPoint == null || target.earnEuroToPoint == undefined)) {
            err.push(path + ".earnEuroToPoint is required");
        }
        if (target.earnEuroToPoint != null && target.earnEuroToPoint != undefined) {
            res = Entity_service_celio_fid_admin.checkearnEuroToPoint(target.earnEuroToPoint, `${path}.earnEuroToPoint`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.burnEuroToPoint == null || target.burnEuroToPoint == undefined)) {
            err.push(path + ".burnEuroToPoint is required");
        }
        if (target.burnEuroToPoint != null && target.burnEuroToPoint != undefined) {
            res = Entity_service_celio_fid_admin.checkburnEuroToPoint(target.burnEuroToPoint, `${path}.burnEuroToPoint`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.serverUrl != null && target.serverUrl != undefined) {
            res = Entity_service_celio_fid_admin.checkserverUrl(target.serverUrl, `${path}.serverUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.secretToken != null && target.secretToken != undefined) {
            res = Entity_service_celio_fid_admin.checksecretToken(target.secretToken, `${path}.secretToken`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.basSiteId != null && target.basSiteId != undefined) {
            res = Entity_service_celio_fid_admin.checkbasSiteId(target.basSiteId, `${path}.basSiteId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.certifPath != null && target.certifPath != undefined) {
            res = Entity_service_celio_fid_admin.checkcertifPath(target.certifPath, `${path}.certifPath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.caPath != null && target.caPath != undefined) {
            res = Entity_service_celio_fid_admin.checkcaPath(target.caPath, `${path}.caPath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.sftp == null || target.sftp == undefined)) {
            err.push(path + ".sftp is required");
        }
        if (target.sftp != null && target.sftp != undefined) {
            res = Entity_service_celio_fid_admin.checksftp(target.sftp, `${path}.sftp`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sftpTicketSrcPath != null && target.sftpTicketSrcPath != undefined) {
            res = Entity_service_celio_fid_admin.checksftpTicketSrcPath(target.sftpTicketSrcPath, `${path}.sftpTicketSrcPath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.sftpTicketDestPath != null && target.sftpTicketDestPath != undefined) {
            res = Entity_service_celio_fid_admin.checksftpTicketDestPath(target.sftpTicketDestPath, `${path}.sftpTicketDestPath`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.cbFidAdminUrl == null || target.cbFidAdminUrl == undefined)) {
            err.push(path + ".cbFidAdminUrl is required");
        }
        if (target.cbFidAdminUrl != null && target.cbFidAdminUrl != undefined) {
            res = Entity_service_celio_fid_admin.checkcbFidAdminUrl(target.cbFidAdminUrl, `${path}.cbFidAdminUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.ticket_costCenterExcluded != null && target.ticket_costCenterExcluded != undefined) {
            target.ticket_costCenterExcluded.forEach((data, index) => {
                res = Entity_service_celio_fid_admin.checkticket_costCenterExcluded(target.ticket_costCenterExcluded[index], `${path}.ticket_costCenterExcluded.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.scanOrderEarnPageSize != null && target.scanOrderEarnPageSize != undefined) {
            res = Entity_service_celio_fid_admin.checkscanOrderEarnPageSize(target.scanOrderEarnPageSize, `${path}.scanOrderEarnPageSize`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.scanOrderEaBurnPageSize != null && target.scanOrderEaBurnPageSize != undefined) {
            res = Entity_service_celio_fid_admin.checkscanOrderEaBurnPageSize(target.scanOrderEaBurnPageSize, `${path}.scanOrderEaBurnPageSize`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.cashRegisterCapingFidPt != null && target.cashRegisterCapingFidPt != undefined) {
            res = Entity_service_celio_fid_admin.checkcashRegisterCapingFidPt(target.cashRegisterCapingFidPt, `${path}.cashRegisterCapingFidPt`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.cashRegisterApiKey != null && target.cashRegisterApiKey != undefined) {
            res = Entity_service_celio_fid_admin.checkcashRegisterApiKey(target.cashRegisterApiKey, `${path}.cashRegisterApiKey`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.customerPrefix != null && target.customerPrefix != undefined) {
            res = Entity_service_celio_fid_admin.checkcustomerPrefix(target.customerPrefix, `${path}.customerPrefix`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.globalCappingFidPoint != null && target.globalCappingFidPoint != undefined) {
            res = Entity_service_celio_fid_admin.checkglobalCappingFidPoint(target.globalCappingFidPoint, `${path}.globalCappingFidPoint`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.disableEmbasment != null && target.disableEmbasment != undefined) {
            res = Entity_service_celio_fid_admin.checkdisableEmbasment(target.disableEmbasment, `${path}.disableEmbasment`);
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
            case 'fiBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'qcmBddUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'accessTokenUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'validateTokenUrl':
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
            case 'hybrisUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'earnEuroToPoint':
                //number
                return new Number(value).valueOf();
                break;
            case 'burnEuroToPoint':
                //number
                return new Number(value).valueOf();
                break;
            case 'serverUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'secretToken':
                //string
                return new String(value).valueOf();
                break;
            case 'basSiteId':
                //string
                return new String(value).valueOf();
                break;
            case 'certifPath':
                //string
                return new String(value).valueOf();
                break;
            case 'caPath':
                //string
                return new String(value).valueOf();
                break;
            case 'sftp':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_ftpConf.castQueryParam(subPath, value);
                }
                break;
            case 'sftpTicketSrcPath':
                //string
                return new String(value).valueOf();
                break;
            case 'sftpTicketDestPath':
                //string
                return new String(value).valueOf();
                break;
            case 'cbFidAdminUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'ticket_costCenterExcluded':
                //string
                return new String(value).valueOf();
                break;
            case 'scanOrderEarnPageSize':
                //number
                return new Number(value).valueOf();
                break;
            case 'scanOrderEaBurnPageSize':
                //number
                return new Number(value).valueOf();
                break;
            case 'cashRegisterCapingFidPt':
                //number
                return new Number(value).valueOf();
                break;
            case 'cashRegisterApiKey':
                //string
                return new String(value).valueOf();
                break;
            case 'customerPrefix':
                //string
                return new String(value).valueOf();
                break;
            case 'globalCappingFidPoint':
                //number
                return new Number(value).valueOf();
                break;
            case 'disableEmbasment':
                //boolean
                return new Boolean(value).valueOf();
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
            case 'fiBddUrl':
                return null;
            case 'qcmBddUrl':
                return null;
            case 'accessTokenUrl':
                return null;
            case 'validateTokenUrl':
                return null;
            case 'client_id':
                return null;
            case 'client_secret':
                return null;
            case 'hybrisUrl':
                return null;
            case 'earnEuroToPoint':
                return null;
            case 'burnEuroToPoint':
                return null;
            case 'serverUrl':
                return null;
            case 'secretToken':
                return null;
            case 'basSiteId':
                return null;
            case 'certifPath':
                return null;
            case 'caPath':
                return null;
            case 'sftp':
                return Index.Entity_ftpConf.getClassNameOfProp(subPath);
            case 'sftpTicketSrcPath':
                return null;
            case 'sftpTicketDestPath':
                return null;
            case 'cbFidAdminUrl':
                return null;
            case 'ticket_costCenterExcluded':
                return null;
            case 'scanOrderEarnPageSize':
                return null;
            case 'scanOrderEaBurnPageSize':
                return null;
            case 'cashRegisterCapingFidPt':
                return null;
            case 'cashRegisterApiKey':
                return null;
            case 'customerPrefix':
                return null;
            case 'globalCappingFidPoint':
                return null;
            case 'disableEmbasment':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_celio_fid_admin = Entity_service_celio_fid_admin;
