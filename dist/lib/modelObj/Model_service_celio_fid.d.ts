import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service celio fid
*/
export declare class Model_service_celio_fid extends Model_service implements Interface.Iservice_celio_fid {
    /**
      service celio fid
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bdd
*/
    "bddUrl"?: string;
    /**
url du point d'acces des token
*/
    "accessTokenUrl": string;
    /**
client_id celio
*/
    "client_id": string;
    /**
client_secret celio
*/
    "client_secret"?: string;
    /**
url de l'api hybris
*/
    "hybrisUrl": string;
    /**
baseSiteId des api celio
*/
    "baseSiteId"?: string;
    /**
secretToken apm
*/
    "secretToken"?: string;
    /**
serverUrl apm
*/
    "serverUrl"?: string;
    /**
url du certificat de bdd si il est renseigné, la connection passe en ssl
*/
    "caPath"?: string;
    /**
nombre de points qu'un sponsor peut gagner par parrainage
*/
    "sponsorPoints"?: number;
    /**
points gagnés par un filleul
*/
    "childPoints"?: number;
    /**
seuil pour activation du capping
*/
    "cappingThreshold"?: string;
    /**
Frequence de rafraîchissement des droits de parainage
*/
    "sponsorshipFrequencyUnit"?: number;
    /**
nombre de parainages autorisés par fréquence
*/
    "sponsorshipMaxCount"?: number;
    /**
unité de fréquence de répétition du earn fixe (semaine, mois, etc.)
*/
    "fixedEarnFrequencyUnit"?: number;
    /**
Nombre de points gagnés par EarnFixe
*/
    "fixedEarnValue"?: number;
    /**
nombre de earn fixes autorisés par période
*/
    "fixedEarnMaxCount"?: number;
}
