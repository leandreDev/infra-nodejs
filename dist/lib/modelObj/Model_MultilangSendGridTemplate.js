"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_MultilangSendGridTemplate = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
class Model_MultilangSendGridTemplate extends utils_1.Base {
    /**
      décrit un template multi langue d'envoie de mail avec sendGrid
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "MultilangSendGridTemplate";
        if (obj["name"] != undefined) {
            this["name"] = obj["name"].toString();
        }
        if (obj["sendGridTemplates"] != undefined && obj["sendGridTemplates"] != null && _.isArray(obj["sendGridTemplates"])) {
            this["sendGridTemplates"] = obj["sendGridTemplates"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["sendGridTemplate"](value);
                }
            });
        }
    }
}
exports.Model_MultilangSendGridTemplate = Model_MultilangSendGridTemplate;
