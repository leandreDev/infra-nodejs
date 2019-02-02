import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
*/
export declare class Model_service_init extends Model_service implements Interface.Iservice_init {
    /**
      service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_init>;
}
