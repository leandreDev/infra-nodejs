import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  configuration pour un service sftp
*/
export declare class Model_ftpsConfig extends Base implements Interface.IftpsConfig {
    /**
      configuration pour un service sftp
    */
    constructor(obj?: any);
    _class: string;
    /**
port sftp
*/
    "port": number;
    /**
private certifaicate cert
*/
    "certPath": string;
    /**
file folder path
*/
    "folderPath": string;
    /**
login for ftp
*/
    "login": string;
    /**
hash of password
*/
    "password"?: string;
    /**
hook when new file create
*/
    "newFileHook"?: Interface.IRequest;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_ftpsConfig>;
}