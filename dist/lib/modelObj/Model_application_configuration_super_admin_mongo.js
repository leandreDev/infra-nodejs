"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Index = require("./Index");
const Model_application_configuration_1 = require("./Model_application_configuration");
/**
  configuration de l'application superAdminMongo
*/
class Model_application_configuration_super_admin_mongo extends Model_application_configuration_1.Model_application_configuration {
    /**
      configuration de l'application superAdminMongo
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "application_configuration_super_admin_mongo";
        if (obj["servicesUrl"] != undefined && obj["servicesUrl"] != null && _.isArray(obj["servicesUrl"])) {
            this["servicesUrl"] = obj["servicesUrl"].map((value) => {
                return value.toString();
            });
        }
        if (obj["forumUrl"] != undefined) {
            this["forumUrl"] = obj["forumUrl"].toString();
        }
        if (obj["fileServiceUrl"] != undefined) {
            this["fileServiceUrl"] = obj["fileServiceUrl"].toString();
        }
        if (obj["URL_FileService"] != undefined) {
            this["URL_FileService"] = obj["URL_FileService"].toString();
        }
        if (obj["nginx"] != undefined && obj["nginx"] != null && _.isArray(obj["nginx"])) {
            this["nginx"] = obj["nginx"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_url"](value);
                }
            });
        }
        if (obj["supervisor"] != undefined && obj["supervisor"] != null && _.isArray(obj["supervisor"])) {
            this["supervisor"] = obj["supervisor"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_url"](value);
                }
            });
        }
        if (obj["menu"] != undefined && obj["menu"] != null && _.isArray(obj["menu"])) {
            this["menu"] = obj["menu"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["ui_menu_mongo_editor"](value);
                }
            });
        }
        if (obj["entityUrl"] != undefined && obj["entityUrl"] != null && _.isArray(obj["entityUrl"])) {
            this["entityUrl"] = obj["entityUrl"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["entity_source"](value);
                }
            });
        }
        if (obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])) {
            this["entityName"] = obj["entityName"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["schema_name"](value);
                }
            });
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["servicesUrl"] != null && target["servicesUrl"] != undefined) {
                target["servicesUrl"].forEach((_servicesUrl, index) => {
                    if (!_.isString(_servicesUrl)) {
                        throw new Error(path + "servicesUrl index: " + index + "is not a string");
                    }
                });
            }
            if (target["forumUrl"] != null && target["forumUrl"] != undefined) {
                let _forumUrl = target["forumUrl"];
                if (!_.isString(_forumUrl)) {
                    throw new Error(path + "forumUrl is not a string");
                }
            }
            if (target["fileServiceUrl"] != null && target["fileServiceUrl"] != undefined) {
                let _fileServiceUrl = target["fileServiceUrl"];
                if (!_.isString(_fileServiceUrl)) {
                    throw new Error(path + "fileServiceUrl is not a string");
                }
            }
            if (target["URL_FileService"] != null && target["URL_FileService"] != undefined) {
                let _URL_FileService = target["URL_FileService"];
                if (!_.isString(_URL_FileService)) {
                    throw new Error(path + "URL_FileService is not a string");
                }
            }
            if (target["nginx"] != null && target["nginx"] != undefined) {
                target["nginx"].forEach((_nginx, index) => {
                    promArr.push(Index["name_url"].check(_nginx, isCompleteObj, path + "nginx.")
                        .catch((err) => {
                        throw new Error(path + "nginx index: " + index + "is not name_url");
                    }));
                    if (_nginx._class != null && _nginx._class != undefined) {
                        promArr.push(Index[_nginx._class].check(_nginx, isCompleteObj, path + "nginx.")
                            .catch((err) => {
                            throw new Error(path + "nginx index: " + index + "is not a " + _nginx._class);
                        }));
                    }
                });
            }
            if (target["supervisor"] != null && target["supervisor"] != undefined) {
                target["supervisor"].forEach((_supervisor, index) => {
                    promArr.push(Index["name_url"].check(_supervisor, isCompleteObj, path + "supervisor.")
                        .catch((err) => {
                        throw new Error(path + "supervisor index: " + index + "is not name_url");
                    }));
                    if (_supervisor._class != null && _supervisor._class != undefined) {
                        promArr.push(Index[_supervisor._class].check(_supervisor, isCompleteObj, path + "supervisor.")
                            .catch((err) => {
                            throw new Error(path + "supervisor index: " + index + "is not a " + _supervisor._class);
                        }));
                    }
                });
            }
            if (target["menu"] != null && target["menu"] != undefined) {
                target["menu"].forEach((_menu, index) => {
                    promArr.push(Index["ui_menu_mongo_editor"].check(_menu, isCompleteObj, path + "menu.")
                        .catch((err) => {
                        throw new Error(path + "menu index: " + index + "is not ui_menu_mongo_editor");
                    }));
                    if (_menu._class != null && _menu._class != undefined) {
                        promArr.push(Index[_menu._class].check(_menu, isCompleteObj, path + "menu.")
                            .catch((err) => {
                            throw new Error(path + "menu index: " + index + "is not a " + _menu._class);
                        }));
                    }
                });
            }
            if (target["entityUrl"] != null && target["entityUrl"] != undefined) {
                target["entityUrl"].forEach((_entityUrl, index) => {
                    promArr.push(Index["entity_source"].check(_entityUrl, isCompleteObj, path + "entityUrl.")
                        .catch((err) => {
                        throw new Error(path + "entityUrl index: " + index + "is not entity_source");
                    }));
                    if (_entityUrl._class != null && _entityUrl._class != undefined) {
                        promArr.push(Index[_entityUrl._class].check(_entityUrl, isCompleteObj, path + "entityUrl.")
                            .catch((err) => {
                            throw new Error(path + "entityUrl index: " + index + "is not a " + _entityUrl._class);
                        }));
                    }
                });
            }
            if (target["entityName"] != null && target["entityName"] != undefined) {
                target["entityName"].forEach((_entityName, index) => {
                    promArr.push(Index["schema_name"].check(_entityName, isCompleteObj, path + "entityName.")
                        .catch((err) => {
                        throw new Error(path + "entityName index: " + index + "is not schema_name");
                    }));
                    if (_entityName._class != null && _entityName._class != undefined) {
                        promArr.push(Index[_entityName._class].check(_entityName, isCompleteObj, path + "entityName.")
                            .catch((err) => {
                            throw new Error(path + "entityName index: " + index + "is not a " + _entityName._class);
                        }));
                    }
                });
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_application_configuration_super_admin_mongo.check(target, true, path).then(() => {
            return new Model_application_configuration_super_admin_mongo(target);
        });
    }
}
exports.Model_application_configuration_super_admin_mongo = Model_application_configuration_super_admin_mongo;
//# sourceMappingURL=Model_application_configuration_super_admin_mongo.js.map