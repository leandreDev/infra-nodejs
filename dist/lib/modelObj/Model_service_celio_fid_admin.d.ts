import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service celio fid admin
*/
export declare class Model_service_celio_fid_admin extends Model_service implements Interface.Iservice_celio_fid_admin {
    /**
      service celio fid admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bdd de la fid
*/
    "fiBddUrl": string;
    /**
url de la bdd des qcm
*/
    "qcmBddUrl": string;
    /**
url du point d'acces des token
*/
    "accessTokenUrl": string;
    /**
validateTokenUrl
*/
    "validateTokenUrl": string;
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
conversion des euros en point lors d'un earn
*/
    "earnEuroToPoint": number;
    /**
conversion des euro en point lors d'un burn
*/
    "burnEuroToPoint": number;
    /**
url du server apm
*/
    "serverUrl"?: string;
    /**
secretToken apm
*/
    "secretToken"?: string;
    /**
baseSiteId celio
*/
    "basSiteId"?: string;
    /**
certifPath
*/
    "certifPath"?: string;
    /**
chemin vers le certificat de la bdd, si il est renseigné, il active la connexion en ssl
*/
    "caPath"?: string;
    /**
configuration de la connection au sftp
*/
    "sftp": Interface.IftpConf;
    /**
chemin d’accès au répertoire ftp source des tickets ex: /tickets/out/SERVICES/FID/RECEIPTS/
*/
    "sftpTicketSrcPath"?: string;
    /**
chemin d'accès au répertoire de destination des ticket traité ex: /tickets/out/SERVICES/FID/RECEIPTS/BACKUP/
*/
    "sftpTicketDestPath"?: string;
    /**
url du service fid admin a appeller depuis un noeud du service fid admin (il se peut que l'url interne vers le loadbalanceur ne soit pas la même que l'externe)
*/
    "cbFidAdminUrl": string;
    /**
liste des centres de coût exclue de la gestion de la fid
*/
    "ticket_costCenterExcluded"?: string[];
    /**
taille des pages scan earn
*/
    "scanOrderEarnPageSize"?: number;
    /**
taille des pages scan eaBurn
*/
    "scanOrderEaBurnPageSize"?: number;
}
