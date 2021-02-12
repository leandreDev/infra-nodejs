"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_ftpConf = void 0;
const utils_1 = require("@hfdev/utils");
/**
  configuration ftp
*/
class Model_ftpConf extends utils_1.Base {
    /**
      configuration ftp
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ftpConf";
        /**
  port
  */
        this["port"] = 2121;
        if (obj["host"] != undefined) {
            this["host"] = obj["host"].toString();
        }
        if (obj["port"] != undefined) {
            this["port"] = new Number(obj["port"]).valueOf();
        }
        if (obj["username"] != undefined) {
            this["username"] = obj["username"].toString();
        }
        if (obj["password"] != undefined) {
            this["password"] = obj["password"].toString();
        }
    }
}
exports.Model_ftpConf = Model_ftpConf;
