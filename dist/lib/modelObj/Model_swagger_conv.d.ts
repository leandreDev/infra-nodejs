import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  convertisseur de swagger
*/
export declare class Model_swagger_conv extends Model_service implements Interface.Iswagger_conv {
    /**
      convertisseur de swagger
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd a mettre a jour
*/
    "urlBdd"?: string;
}
