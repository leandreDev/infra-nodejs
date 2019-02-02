import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  configuration de l'application superAdminMongo
*/
export declare class Model_application_configuration_super_admin_mongo extends Model_application_configuration implements Interface.Iapplication_configuration_super_admin_mongo {
    /**
      configuration de l'application superAdminMongo
    */
    constructor(obj?: any);
    _class: string;
    /**
liste des url des services de base mongo
*/
    "servicesUrl"?: string[];
    /**
l'url du forum
*/
    "forumUrl"?: string;
    /**
l'url du remote fso
*/
    "fileServiceUrl"?: string;
    /**
url du file service
*/
    "URL_FileService"?: string;
    /**
nginx
*/
    "nginx"?: Interface.Iname_url[];
    /**
liste des service de supervision
*/
    "supervisor"?: Interface.Iname_url[];
    /**
menu de l'appli
*/
    "menu"?: Interface.Iui_menu_mongo_editor[];
    /**
entityUrl
*/
    "entityUrl"?: Interface.Ientity_source[];
    /**
permet de paramétrer le rendu des schemas
*/
    "entityName"?: Interface.Ischema_name[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_super_admin_mongo>;
}
