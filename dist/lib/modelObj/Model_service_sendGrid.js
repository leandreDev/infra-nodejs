"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  permet d'envoyer des mail via l'api send grid v3
*/
class Model_service_sendGrid extends Model_service_1.Model_service {
    /**
      permet d'envoyer des mail via l'api send grid v3
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_sendGrid";
        if (obj["sendGridApiKey"] != undefined) {
            this["sendGridApiKey"] = obj["sendGridApiKey"].toString();
        }
        if (obj["messageUrl"] != undefined) {
            this["messageUrl"] = obj["messageUrl"].toString();
        }
        if (obj["userUrl"] != undefined) {
            this["userUrl"] = obj["userUrl"].toString();
        }
        if (obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])) {
            this["templates"] = obj["templates"].map((value) => {
                if (_.isString(value)) {
                    return value;
                }
                else if (value._id) {
                    return value._id;
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (isCompleteObj && (target["sendGridApiKey"] == null || target["sendGridApiKey"] == undefined)) {
                throw new Error(path + "sendGridApiKey is required");
            }
            if (target["sendGridApiKey"] != null && target["sendGridApiKey"] != undefined) {
                let _sendGridApiKey = target["sendGridApiKey"];
                if (!_.isString(_sendGridApiKey)) {
                    throw new Error(path + "sendGridApiKey is not a string");
                }
            }
            if (isCompleteObj && (target["messageUrl"] == null || target["messageUrl"] == undefined)) {
                throw new Error(path + "messageUrl is required");
            }
            if (target["messageUrl"] != null && target["messageUrl"] != undefined) {
                let _messageUrl = target["messageUrl"];
                if (!_.isString(_messageUrl)) {
                    throw new Error(path + "messageUrl is not a string");
                }
            }
            if (isCompleteObj && (target["userUrl"] == null || target["userUrl"] == undefined)) {
                throw new Error(path + "userUrl is required");
            }
            if (target["userUrl"] != null && target["userUrl"] != undefined) {
                let _userUrl = target["userUrl"];
                if (!_.isString(_userUrl)) {
                    throw new Error(path + "userUrl is not a string");
                }
            }
            if (target["templates"] != null && target["templates"] != undefined) {
                target["templates"].forEach((_templates, index) => {
                    if (!_.isString(_templates)) {
                        throw new Error(path + "templates is not a string");
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_sendGrid.check(target, true, path).then(() => {
            return new Model_service_sendGrid(target);
        });
    }
}
exports.Model_service_sendGrid = Model_service_sendGrid;
//# sourceMappingURL=Model_service_sendGrid.js.map