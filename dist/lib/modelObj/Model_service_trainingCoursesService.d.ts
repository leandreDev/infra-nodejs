import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service de gestion des parcourts de formation
*/
export declare class Model_service_trainingCoursesService extends Model_service implements Interface.Iservice_trainingCoursesService {
    /**
      service de gestion des parcourts de formation
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd des sessions
*/
    "apiSession": string;
    /**
url du licence service
*/
    "licenceServiceUrl": string;
    /**
url du service de gestion des tache planifier
*/
    "taskServiceUrl": string;
    /**
url du service d'envoie de mail
*/
    "mailServiceUrl": string;
    /**
l'url de la bd d'infra
*/
    "clientInfraUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_trainingCoursesService>;
}
