import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
*/
export declare class Model_licence extends Base implements Interface.Ilicence {
    /**
      représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
    */
    constructor(obj?: any);
    _class: string;
    /**
le end_client qui a distribué la licence
*/
    "end_client"?: string;
    /**
l'utilisateur bénéficiant de la licence
*/
    "user"?: string;
    /**
l'instance de l'application qui est sous licence
*/
    "application_instance"?: string[];
    /**
les ressources externes
*/
    "ressource"?: string[];
    /**
référence du licence store qui a émis cette licence
*/
    "licenceStoreRef"?: string;
    /**
date de création
*/
    "creationDate": Date;
    /**
date de la première utilisation
*/
    "usingDate"?: Date;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_licence>;
}
