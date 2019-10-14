"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Model_field_1 = require("./Model_field");
/**
  ce champ permet d'insérer un document dans un autre
*/
class Model_subdoc extends Model_field_1.Model_field {
    /**
      ce champ permet d'insérer un document dans un autre
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "subdoc";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            this["description"] = obj["description"].toString();
        }
        if (obj["isArrayOf"] != undefined) {
            this["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf();
        }
        if (obj["required"] != undefined) {
            this["required"] = new Boolean(obj["required"]).valueOf();
        }
        if (obj["unique"] != undefined) {
            this["unique"] = new Boolean(obj["unique"]).valueOf();
        }
        if (obj["index"] != undefined) {
            this["index"] = new Boolean(obj["index"]).valueOf();
        }
        if (obj["protoSchemaId"] != undefined) {
            if (_.isString(obj["protoSchemaId"])) {
                this["protoSchemaId"] = obj["protoSchemaId"];
            }
            else if (obj["protoSchemaId"]._id) {
                this["protoSchemaId"] = obj["protoSchemaId"]._id;
            }
        }
    }
}
exports.Model_subdoc = Model_subdoc;
//# sourceMappingURL=Model_subdoc.js.map