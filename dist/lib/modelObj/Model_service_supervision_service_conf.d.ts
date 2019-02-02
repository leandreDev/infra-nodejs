import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  configuration d'un service dans le superviseur
*/
export declare class Model_service_supervision_service_conf extends Base implements Interface.Iservice_supervision_service_conf {
    /**
      configuration d'un service dans le superviseur
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom du service
*/
    "name"?: string;
    /**
le chemin vers le fichier js
*/
    "path"?: string;
    /**
liste des arguments passé au sous processus
*/
    "args"?: string[];
    /**
nodejs sub process options
*/
    "options"?: Interface.Inode_fork_option;
    /**
active le redémarrage automatique
*/
    "restart"?: boolean;
    /**
nombre maximum de redémarrage automatique
*/
    "maxKill"?: number;
    /**
définit le temps maximum qui peut s'écouler entre un démarrage et une fermeture pour considérer que c'est un crache au démarrage
*/
    "minTime"?: number;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_supervision_service_conf>;
}
