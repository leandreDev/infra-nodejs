import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service messagerie de soket.io
*/
export declare class Model_service_socket_io extends Model_service implements Interface.Iservice_socket_io {
    /**
      service messagerie de soket.io
    */
    constructor(obj?: any);
    _class: string;
    /**
liste des namespace a créer sur le serveur
*/
    "namespaces"?: string[];
}
