import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  passerelle pour goshaba
*/
export declare class Model_service_goshabaGateway extends Model_service implements Interface.Iservice_goshabaGateway {
    /**
      passerelle pour goshaba
    */
    constructor(obj?: any);
    _class: string;
    /**
clef privée d'echange entre les serveurs
*/
    "privateKey": string;
    /**
url de la collection de pack de carte
*/
    "packUrl": string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_goshabaGateway>;
}
