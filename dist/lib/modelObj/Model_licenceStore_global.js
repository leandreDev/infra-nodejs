"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_licenceStore_global = void 0;
const Model_licenceStore_1 = require("./Model_licenceStore");
/**
  licence store dont les applications sont le catalogue du client
*/
class Model_licenceStore_global extends Model_licenceStore_1.Model_licenceStore {
    /**
      licence store dont les applications sont le catalogue du client
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "licenceStore_global";
    }
}
exports.Model_licenceStore_global = Model_licenceStore_global;
//# sourceMappingURL=Model_licenceStore_global.js.map