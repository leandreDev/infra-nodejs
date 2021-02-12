"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity__view = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
*/
class Entity__view extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != '_view' && ['_view_params',].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            obj["description"] = obj["description"].toString();
        }
        if (obj["output"] != undefined) {
            if (_.isString(obj["output"])) {
                obj["output"] = new utils_1.mongo.ObjectId(obj["output"]);
            }
            else if (obj["output"]._id) {
                obj["output"] = new utils_1.mongo.ObjectId(obj["output"]._id);
            }
        }
        if (obj["model"] != undefined) {
            if (_.isString(obj["model"])) {
                obj["model"] = new utils_1.mongo.ObjectId(obj["model"]);
            }
            else if (obj["model"]._id) {
                obj["model"] = new utils_1.mongo.ObjectId(obj["model"]._id);
            }
        }
        if (obj["pipeline"] != undefined && obj["pipeline"] != null && _.isArray(obj["pipeline"])) {
            obj["pipeline"] = obj["pipeline"].map((value) => {
                return value;
            });
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
    static checkdescription(val, path = null) {
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
    static checkoutput(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkmodel(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkpipeline(val, path = null) {
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
        if (isCompleteObj && (target.name == null || target.name == undefined)) {
            err.push(path + ".name is required");
        }
        if (target.name != null && target.name != undefined) {
            res = Entity__view.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.description == null || target.description == undefined)) {
            err.push(path + ".description is required");
        }
        if (target.description != null && target.description != undefined) {
            res = Entity__view.checkdescription(target.description, `${path}.description`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.output == null || target.output == undefined)) {
            err.push(path + ".output is required");
        }
        if (target.output != null && target.output != undefined) {
            res = Entity__view.checkoutput(target.output, `${path}.output`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.model == null || target.model == undefined)) {
            err.push(path + ".model is required");
        }
        if (target.model != null && target.model != undefined) {
            res = Entity__view.checkmodel(target.model, `${path}.model`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.pipeline != null && target.pipeline != undefined) {
            target.pipeline.forEach((data, index) => {
                res = Entity__view.checkpipeline(target.pipeline[index], `${path}.pipeline.${index}`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'description':
                //string
                return new String(value).valueOf();
                break;
            case 'output':
                //modelid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'model':
                //modelid
                return new utils_1.mongo.ObjectId(value);
                break;
            case 'pipeline':
                //object
                return value;
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
            case 'description':
                return null;
            case 'output':
                return 'protoschema';
            case 'model':
                return 'protoschema';
            case 'pipeline':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity__view = Entity__view;
