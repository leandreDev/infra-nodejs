import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  configure un service mongo
*/
export declare class Model_service_mongo extends Model_service implements Interface.Iservice_mongo {
    /**
      configure un service mongo
    */
    constructor(obj?: any);
    _class: string;
    /**
l'url de connection a mongodb
*/
    "mongoosePath"?: string;
    /**
le nom de la base sur laquelle la connexion doit s'établir. Cela permet de pouvoir créer des bases automatiquements
*/
    "mongoAuthSource"?: string;
    /**
clef secrète de communication interne a l'infra
*/
    "secretKey"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_mongo>;
}
