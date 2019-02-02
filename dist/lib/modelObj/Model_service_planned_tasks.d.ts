import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service de Taches planifiées
*/
export declare class Model_service_planned_tasks extends Model_service implements Interface.Iservice_planned_tasks {
    /**
      Service de Taches planifiées
    */
    constructor(obj?: any);
    _class: string;
    /**
Url de la bdd
*/
    "bdd_url": string;
    /**
temps en ms entre deux getions des taches.
*/
    "handlerInterval"?: number;
    /**
si la gestion des tache doit étre lancer au demarage du service
*/
    "startHandlingOnServiceStart"?: boolean;
    /**
schedule_url
*/
    "schedule_url"?: string;
    /**
task_url
*/
    "task_url"?: string;
    /**
licencesService_url
*/
    "licencesService_url"?: string;
    /**
url de la base de donnée
*/
    "apiUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_planned_tasks>;
}
