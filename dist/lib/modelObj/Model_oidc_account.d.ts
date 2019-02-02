import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  compte de l'utilisateur
*/
export declare class Model_oidc_account extends Base implements Interface.Ioidc_account {
    /**
      compte de l'utilisateur
    */
    constructor(obj?: any);
    _class: string;
    /**
id du compte
*/
    "account_id": string;
    /**
birthdate
*/
    "birthdate"?: Date;
    /**
email
*/
    "email": string;
    /**
email_verified
*/
    "email_verified"?: boolean;
    /**
family_name
*/
    "family_name"?: string;
    /**
gender
*/
    "gender"?: string;
    /**
given_name
*/
    "given_name"?: string;
    /**
locale
*/
    "locale"?: string;
    /**
middle_name
*/
    "middle_name"?: string;
    /**
name
*/
    "name"?: string;
    /**
nickname
*/
    "nickname"?: string;
    /**
phone_number
*/
    "phone_number"?: string;
    /**
phone_number_verified
*/
    "phone_number_verified"?: boolean;
    /**
l’empreinte du mot de passe
*/
    "password"?: string;
    /**
url de l'avatar
*/
    "picture"?: string;
    /**
profile sociaux
*/
    "connector"?: Interface.Isocial_data[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_oidc_account>;
}
