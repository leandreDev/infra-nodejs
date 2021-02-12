"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_socketIoConfig = void 0;
const utils_1 = require("utils");
/**
  socketIoConfig
*/
class Model_socketIoConfig extends utils_1.Base {
    /**
      socketIoConfig
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "socketIoConfig";
        if (obj["serverOptionPath"] != undefined) {
            this["serverOptionPath"] = obj["serverOptionPath"].toString();
        }
    }
}
exports.Model_socketIoConfig = Model_socketIoConfig;
