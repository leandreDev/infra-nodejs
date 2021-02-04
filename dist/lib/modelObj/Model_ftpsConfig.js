"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_ftpsConfig = void 0;
const Index = require("./Index");
const utils_1 = require("utils");
/**
  configuration pour un service sftp
*/
class Model_ftpsConfig extends utils_1.Base {
    /**
      configuration pour un service sftp
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ftpsConfig";
        if (obj["port"] != undefined) {
            this["port"] = new Number(obj["port"]).valueOf();
        }
        if (obj["certPath"] != undefined) {
            this["certPath"] = obj["certPath"].toString();
        }
        if (obj["folderPath"] != undefined) {
            this["folderPath"] = obj["folderPath"].toString();
        }
        if (obj["login"] != undefined) {
            this["login"] = obj["login"].toString();
        }
        if (obj["password"] != undefined) {
            this["password"] = obj["password"].toString();
        }
        if (obj["newFileHook"] != undefined) {
            if (obj["newFileHook"]._class) {
                this["newFileHook"] = new Index[obj["newFileHook"]._class](obj["newFileHook"]);
            }
            else {
                this["newFileHook"] = new Index["Request"](obj["newFileHook"]);
            }
        }
    }
}
exports.Model_ftpsConfig = Model_ftpsConfig;
//# sourceMappingURL=Model_ftpsConfig.js.map