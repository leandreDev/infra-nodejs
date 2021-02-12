import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
/**
  Acl d'un enregistrement
*/
export declare class Model__acl extends Base implements Interface.I_acl {
    /**
      Acl d'un enregistrement
    */
    constructor(obj?: any);
    _class: string;
    /**
id du createur
*/
    "creator"?: string;
    /**
liste des ayant droit en lecture
*/
    "readers"?: Interface.IaclIdentity[];
    /**
liste des ayants droit d'  criture
*/
    "writers"?: Interface.IaclIdentity[];
    /**
liste des ayants doit de modification
*/
    "admins"?: Interface.IaclIdentity[];
}
