import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  remote file system
*/
export declare class Model_service_fso extends Model_service implements Interface.Iservice_fso {
    /**
      remote file system
    */
    constructor(obj?: any);
    _class: string;
    /**
local file path
*/
    "filePath": string;
    /**
url du service de bd
*/
    "bddServiceUrl": string;
    /**
la collection des clef url disponible
*/
    "proxy"?: Interface.Iname_value[];
}
