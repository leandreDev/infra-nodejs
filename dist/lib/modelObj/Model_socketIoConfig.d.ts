import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  socketIoConfig
*/
export declare class Model_socketIoConfig extends Base implements Interface.IsocketIoConfig {
    /**
      socketIoConfig
    */
    constructor(obj?: any);
    _class: string;
    /**
serverOptionPath
*/
    "serverOptionPath"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_socketIoConfig>;
}
