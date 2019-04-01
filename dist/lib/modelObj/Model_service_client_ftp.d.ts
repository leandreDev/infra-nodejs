import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  client ftps
*/
export declare class Model_service_client_ftp extends Model_service implements Interface.Iservice_client_ftp {
    /**
      client ftps
    */
    constructor(obj?: any);
    _class: string;
    /**
host
*/
    "host": string;
    /**
port
*/
    "port": number;
    /**
user
*/
    "user": string;
    /**
password
*/
    "password": string;
    /**
downloadPath
*/
    "downloadPath": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_client_ftp>;
}
