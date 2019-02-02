import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service d'orchestration
*/
export declare class Model_service_orchestrator extends Model_service implements Interface.Iservice_orchestrator {
    /**
      service d'orchestration
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la configuration de l'orchestrateur
*/
    "apiUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_orchestrator>;
}
