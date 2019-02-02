import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  notice field
*/
export declare class Model_notice_field extends Base implements Interface.Inotice_field {
    /**
      notice field
    */
    constructor(obj?: any);
    _class: string;
    /**
name of notices
*/
    "name"?: string;
    /**
content
*/
    "content"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_notice_field>;
}
