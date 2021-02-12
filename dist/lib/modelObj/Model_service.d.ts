import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
/**
  identification du service
*/
export declare class Model_service extends Base implements Interface.Iservice {
    /**
      identification du service
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom du service
*/
    "name"?: string;
    /**
l'url racine du service
*/
    "urlBase"?: string;
    /**
le port de publication
*/
    "port"?: number;
    /**
active le debug
*/
    "debug"?: boolean;
    /**
licence_well-known
*/
    "licence_well-known"?: string;
    /**
clef secrète de signature inter service
*/
    "secretKey"?: string;
    /**
paramétrage des accès public
*/
    "publicAccess"?: Interface.Iurl_role;
    /**
ip to bind
*/
    "bindIp"?: string;
    /**
liste des headers à ajouter dans les requêtes
*/
    "headers"?: Interface.Iname_value[];
    /**
liste des domaines autorisé
*/
    "accessControlAllowOrigin"?: string[];
    /**
url du serveur de configuration
*/
    "confServiceUrl"?: string;
}
