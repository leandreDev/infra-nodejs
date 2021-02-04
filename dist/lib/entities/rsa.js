"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_rsa = void 0;
const Index = require("./Index");
const certificat_1 = require("./certificat");
/**
  certificat RSA
*/
class Entity_rsa extends certificat_1.Entity_certificat {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'rsa' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        certificat_1.Entity_certificat.cast(obj, true);
        if (obj["kty"] != undefined) {
            obj["kty"] = obj["kty"].toString();
        }
        if (obj["use"] != undefined) {
            obj["use"] = obj["use"].toString();
        }
        if (obj["d"] != undefined) {
            obj["d"] = obj["d"].toString();
        }
        if (obj["dp"] != undefined) {
            obj["dp"] = obj["dp"].toString();
        }
        if (obj["dq"] != undefined) {
            obj["dq"] = obj["dq"].toString();
        }
        if (obj["e"] != undefined) {
            obj["e"] = obj["e"].toString();
        }
        if (obj["n"] != undefined) {
            obj["n"] = obj["n"].toString();
        }
        if (obj["p"] != undefined) {
            obj["p"] = obj["p"].toString();
        }
        if (obj["q"] != undefined) {
            obj["q"] = obj["q"].toString();
        }
        if (obj["qi"] != undefined) {
            obj["qi"] = obj["qi"].toString();
        }
    }
    static checkkty(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["RSA"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of RSA`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkuse(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["sig", "enc"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of sig , enc`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkd(val, path = null) {
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
    static checkdp(val, path = null) {
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
    static checkdq(val, path = null) {
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
    static checke(val, path = null) {
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
    static checkn(val, path = null) {
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
    static checkp(val, path = null) {
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
    static checkq(val, path = null) {
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
    static checkqi(val, path = null) {
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
        err = certificat_1.Entity_certificat.check(target, isCompleteObj, path);
        if (target.kty != null && target.kty != undefined) {
            res = Entity_rsa.checkkty(target.kty, `${path}.kty`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.use != null && target.use != undefined) {
            res = Entity_rsa.checkuse(target.use, `${path}.use`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.d != null && target.d != undefined) {
            res = Entity_rsa.checkd(target.d, `${path}.d`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dp != null && target.dp != undefined) {
            res = Entity_rsa.checkdp(target.dp, `${path}.dp`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.dq != null && target.dq != undefined) {
            res = Entity_rsa.checkdq(target.dq, `${path}.dq`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.e != null && target.e != undefined) {
            res = Entity_rsa.checke(target.e, `${path}.e`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.n != null && target.n != undefined) {
            res = Entity_rsa.checkn(target.n, `${path}.n`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.p != null && target.p != undefined) {
            res = Entity_rsa.checkp(target.p, `${path}.p`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.q != null && target.q != undefined) {
            res = Entity_rsa.checkq(target.q, `${path}.q`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.qi != null && target.qi != undefined) {
            res = Entity_rsa.checkqi(target.qi, `${path}.qi`);
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
            case 'kty':
                //string
                return new String(value).valueOf();
                break;
            case 'use':
                //string
                return new String(value).valueOf();
                break;
            case 'd':
                //string
                return new String(value).valueOf();
                break;
            case 'dp':
                //string
                return new String(value).valueOf();
                break;
            case 'dq':
                //string
                return new String(value).valueOf();
                break;
            case 'e':
                //string
                return new String(value).valueOf();
                break;
            case 'n':
                //string
                return new String(value).valueOf();
                break;
            case 'p':
                //string
                return new String(value).valueOf();
                break;
            case 'q':
                //string
                return new String(value).valueOf();
                break;
            case 'qi':
                //string
                return new String(value).valueOf();
                break;
            default:
                return certificat_1.Entity_certificat.castQueryParam(key, value);
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
            case 'kty':
                return null;
            case 'use':
                return null;
            case 'd':
                return null;
            case 'dp':
                return null;
            case 'dq':
                return null;
            case 'e':
                return null;
            case 'n':
                return null;
            case 'p':
                return null;
            case 'q':
                return null;
            case 'qi':
                return null;
            default:
                return certificat_1.Entity_certificat.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_rsa = Entity_rsa;
//# sourceMappingURL=rsa.js.map