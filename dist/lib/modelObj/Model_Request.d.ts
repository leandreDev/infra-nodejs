import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  description d'une requete avec request
*/
export declare class Model_Request extends Base implements Interface.IRequest {
    /**
      description d'une requete avec request
    */
    constructor(obj?: any);
    _class: string;
    /**
fully qualified uri or a parsed url object from url.parse()
*/
    "url": string;
    /**
http method (default: "GET")
*/
    "method": string;
    /**
http headers
*/
    "headers"?: Interface.Iname_value[];
    /**
entity body for PATCH, POST and PUT requests. Must be a Buffer, String or ReadStream. If json is true, then body must be a JSON-serializable object.
*/
    "body"?: any;
}
