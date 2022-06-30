import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  configuration du déploiement de partenaire
*/
export declare class Model_ParnerDeployConf extends Base implements Interface.IParnerDeployConf {
    /**
      configuration du déploiement de partenaire
    */
    constructor(obj?: any);
    _class: string;
    /**
paterne de creation d'url d admin @name@ remplace le nom du partenaire
*/
    "adminUrl"?: string;
    /**
paterne de création de l 'url du site client d un partenaire @name@ remplace le nom du partenaire
*/
    "landingPageUrl"?: string;
    /**
id du template de l appinstance du client
*/
    "appClientTemplateId"?: string;
    /**
id du template de l app instance de l admin d un client
*/
    "appAdminTemplateId"?: string;
    /**
id du template de endClient pour un partnaire
*/
    "endClientTemplateId"?: string;
    /**
id du template de l'oidc_client pour un partnaire
*/
    "oidcTemplateId"?: string;
}
