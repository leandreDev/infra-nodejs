import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  configuration ftp
*/
export declare class Model_ftpConf extends Base implements Interface.IftpConf {
    /**
      configuration ftp
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
username
*/
    "username": string;
    /**
password
*/
    "password"?: string;
}
