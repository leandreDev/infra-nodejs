import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  c'est le service de distribution des configurations des services
*/
export declare class Model_service_configuration extends Model_service implements Interface.Iservice_configuration {
    /**
      c'est le service de distribution des configurations des services
    */
    constructor(obj?: any);
    _class: string;
    /**
l'url du service de base de donnée de l'infra
*/
    "srvUrl"?: string;
    /**
le nom de la collection des services
*/
    "serviceCollectionName"?: string;
    /**
les configurations de service des applications
*/
    "serviceConfigCollectionName"?: string;
}
