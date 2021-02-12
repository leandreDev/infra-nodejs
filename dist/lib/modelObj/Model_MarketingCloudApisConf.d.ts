import * as Interface from "./Interfaces";
import { Base } from "@hfdev/utils";
/**
  config pour MarketingCloudApis
*/
export declare class Model_MarketingCloudApisConf extends Base implements Interface.IMarketingCloudApisConf {
    /**
      config pour MarketingCloudApis
    */
    constructor(obj?: any);
    _class: string;
    /**
accessTokenUrl
*/
    "accessTokenUrl"?: string;
    /**
client_id
*/
    "client_id"?: string;
    /**
client_secret
*/
    "client_secret"?: string;
    /**
account_id
*/
    "account_id"?: string;
    /**
subDomain
*/
    "subDomain"?: string;
}
