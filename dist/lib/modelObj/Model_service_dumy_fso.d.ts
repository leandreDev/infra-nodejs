import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  simple remote file system a n utiliser que pour des test
*/
export declare class Model_service_dumy_fso extends Model_service implements Interface.Iservice_dumy_fso {
    /**
      simple remote file system a n utiliser que pour des test
    */
    constructor(obj?: any);
    _class: string;
    /**
le chemin du repertoire de base de stockage
*/
    "fsoBase"?: string;
    /**
Url de la basse de donnée
*/
    "url_bd"?: string;
    /**
url de la colection des "directories"
*/
    "url_folder_collection"?: string;
    /**
URL de la colletion "files"
*/
    "url_file_collection"?: string;
    /**
URL du service
*/
    "url_service"?: string;
    /**
Repertoire ou seront sauvegardé les fichiers
*/
    "root_file_directory"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_dumy_fso>;
}
