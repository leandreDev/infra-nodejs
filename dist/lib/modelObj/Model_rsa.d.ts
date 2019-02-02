import * as Interface from "./Interfaces";
import { Model_certificat } from "./Model_certificat";
/**
  certificat RSA
*/
export declare class Model_rsa extends Model_certificat implements Interface.Irsa {
    /**
      certificat RSA
    */
    constructor(obj?: any);
    _class: string;
    /**
kty
*/
    "kty"?: string;
    /**
usage
*/
    "use"?: string;
    /**
d
*/
    "d"?: string;
    /**
dp
*/
    "dp"?: string;
    /**
dq
*/
    "dq"?: string;
    /**
e
*/
    "e"?: string;
    /**
n
*/
    "n"?: string;
    /**
p
*/
    "p"?: string;
    /**
q
*/
    "q"?: string;
    /**
qi
*/
    "qi"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_rsa>;
}
