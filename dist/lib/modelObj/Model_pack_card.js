"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_application_1 = require("./Model_application");
/**
  c'est un paquet de carte
*/
class Model_pack_card extends Model_application_1.Model_application {
    /**
      c'est un paquet de carte
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "pack_card";
        if (obj["imageUrl"] != undefined) {
            this["imageUrl"] = obj["imageUrl"].toString();
        }
        if (obj["companyName"] != undefined) {
            this["companyName"] = obj["companyName"].toString();
        }
        if (obj["companyId"] != undefined) {
            this["companyId"] = obj["companyId"].toString();
        }
    }
}
exports.Model_pack_card = Model_pack_card;
//# sourceMappingURL=Model_pack_card.js.map