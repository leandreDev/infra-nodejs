"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_service_1 = require("./Model_service");
/**
  service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
*/
class Model_service_init extends Model_service_1.Model_service {
    /**
      service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "service_init";
    }
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_service_init.check(target, true, path).then(() => {
            return new Model_service_init(target);
        });
    }
}
exports.Model_service_init = Model_service_init;
//# sourceMappingURL=Model_service_init.js.map