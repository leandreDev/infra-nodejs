import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
*/
export declare class Model_service_serviceOrchestrator extends Base implements Interface.Iservice_serviceOrchestrator {
    /**
      service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_serviceOrchestrator>;
}
