import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service permettant de liker un objet de la base
*/
export declare class Model_service_like extends Model_service implements Interface.Iservice_like {
    /**
      service permettant de liker un objet de la base
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la collection des like
*/
    "likeCollection": string;
    /**
url de la collection de notes
*/
    "noteCollection": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_like>;
}
