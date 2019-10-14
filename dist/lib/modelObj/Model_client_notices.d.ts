import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  notices for client
*/
export declare class Model_client_notices extends Base implements Interface.Iclient_notices {
    /**
      notices for client
    */
    constructor(obj?: any);
    _class: string;
    /**
client notices values
*/
    "values"?: Interface.Inotice_field[];
}
