"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_like = void 0;
const Model_service_1 = require("./Model_service");
/**
  service permettant de liker un objet de la base
*/
class Model_service_like extends Model_service_1.Model_service {
    /**
      service permettant de liker un objet de la base
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_like";
        if (obj["likeCollection"] != undefined) {
            this["likeCollection"] = obj["likeCollection"].toString();
        }
        if (obj["noteCollection"] != undefined) {
            this["noteCollection"] = obj["noteCollection"].toString();
        }
    }
}
exports.Model_service_like = Model_service_like;
