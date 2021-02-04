import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service celio qcm
*/
export declare class Model_service_celio_qcm extends Model_service implements Interface.Iservice_celio_qcm {
    /**
      service celio qcm
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bdd
*/
    "bddUrl": string;
    /**
url du service fid
*/
    "serviceFidUrl": string;
    /**
secretToken apm
*/
    "secretToken"?: string;
    /**
serverUrl apm
*/
    "serverUrl"?: string;
    /**
chemin du certificat, si il est renseigné il active la connexion a la bd en ssl
*/
    "caPath"?: string;
}
