"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_socketIo = void 0;
const Index = require("./Index");
const Model_service_1 = require("./Model_service");
/**
  communication temps réelle multi format
*/
class Model_service_socketIo extends Model_service_1.Model_service {
    /**
      communication temps réelle multi format
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_socketIo";
        if (obj["returnValue"] != undefined) {
            this["returnValue"] = obj["returnValue"].toString();
        }
        if (obj["allowCrossOrigin"] != undefined) {
            this["allowCrossOrigin"] = new Boolean(obj["allowCrossOrigin"]).valueOf();
        }
        if (obj["socketIo"] != undefined) {
            if (obj["socketIo"]._class) {
                this["socketIo"] = new Index[obj["socketIo"]._class](obj["socketIo"]);
            }
            else {
                this["socketIo"] = new Index["socketIoConfig"](obj["socketIo"]);
            }
        }
    }
}
exports.Model_service_socketIo = Model_service_socketIo;
//# sourceMappingURL=Model_service_socketIo.js.map