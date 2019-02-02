import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  les paramètres d’environnement a passer aux sous-processus
*/
export declare class Model_node_fork_option_env extends Base implements Interface.Inode_fork_option_env {
    /**
      les paramètres d’environnement a passer aux sous-processus
    */
    constructor(obj?: any);
    _class: string;
    /**
l'url du serveur de configuration
*/
    "CONF_URL"?: string;
    /**
configuration du service
*/
    "SRV_ID"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_node_fork_option_env>;
}
