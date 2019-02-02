import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  option d'un sous processus node
*/
export declare class Model_node_fork_option extends Base implements Interface.Inode_fork_option {
    /**
      option d'un sous processus node
    */
    constructor(obj?: any);
    _class: string;
    /**
Current working directory of the child process
*/
    "cwd"?: string;
    /**
Environment key-value pairs
*/
    "env"?: Interface.Inode_fork_option_env;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_node_fork_option>;
}
