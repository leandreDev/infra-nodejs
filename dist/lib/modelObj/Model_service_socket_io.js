"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_service_socket_io = void 0;
const _ = require("lodash");
const Model_service_1 = require("./Model_service");
/**
  service messagerie de soket.io
*/
class Model_service_socket_io extends Model_service_1.Model_service {
    /**
      service messagerie de soket.io
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_socket_io";
        if (obj["namespaces"] != undefined && obj["namespaces"] != null && _.isArray(obj["namespaces"])) {
            this["namespaces"] = obj["namespaces"].map((value) => {
                return value.toString();
            });
        }
    }
}
exports.Model_service_socket_io = Model_service_socket_io;
