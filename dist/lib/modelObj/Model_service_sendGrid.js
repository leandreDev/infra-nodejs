"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_sendGrid = void 0;
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
                else if (value._bsontype && value._bsontype === 'ObjectID') {
                    return `${value}`;
                }
            });
        }
    }
}
exports.Model_service_sendGrid = Model_service_sendGrid;
