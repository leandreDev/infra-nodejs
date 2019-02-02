import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  communication temps réelle multi format
*/
export declare class Model_service_socketIo extends Model_service implements Interface.Iservice_socketIo {
    /**
      communication temps réelle multi format
    */
    constructor(obj?: any);
    _class: string;
    /**
la valeur a retourner
*/
    "returnValue"?: string;
    /**
allowCrossOrigin
*/
    "allowCrossOrigin"?: boolean;
    /**
socketIo configuration
*/
    "socketIo"?: Interface.IsocketIoConfig;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_socketIo>;
}
