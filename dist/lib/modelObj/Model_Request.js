"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_Request = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  description d'une requete avec request
*/
class Model_Request extends utils_1.Base {
    /**
      description d'une requete avec request
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "Request";
        /**
   fully qualified uri or a parsed url object from url.parse()
  */
        this["url"] = "https://";
        /**
  http method (default: "GET")
  */
        this["method"] = "GET";
        if (obj["url"] != undefined) {
            this["url"] = obj["url"].toString();
        }
        if (obj["method"] != undefined) {
            this["method"] = obj["method"].toString();
        }
        if (obj["headers"] != undefined && obj["headers"] != null && _.isArray(obj["headers"])) {
            this["headers"] = obj["headers"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["name_value"](value);
                }
            });
        }
        if (obj["body"] != undefined) {
            this["body"] = obj["body"];
        }
    }
}
exports.Model_Request = Model_Request;
//# sourceMappingURL=Model_Request.js.map