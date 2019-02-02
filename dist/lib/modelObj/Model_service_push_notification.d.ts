import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  Service pour gérer les notifications push des applications
*/
export declare class Model_service_push_notification extends Model_service implements Interface.Iservice_push_notification {
    /**
      Service pour gérer les notifications push des applications
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_push_notification>;
}
