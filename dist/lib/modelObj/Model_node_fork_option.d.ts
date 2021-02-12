import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
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
}
