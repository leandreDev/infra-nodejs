import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  config pour MarketingCloudApis
*/
export class Model_MarketingCloudApisConf extends  Base  implements Interface.IMarketingCloudApisConf {

/**
  config pour MarketingCloudApis
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           this["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["account_id"] != undefined){
          
           this["account_id"] = obj["account_id"].toString() ;
           
        }
        
    
        
        if(obj["subDomain"] != undefined){
          
           this["subDomain"] = obj["subDomain"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "MarketingCloudApisConf" ;

        
              /**
        accessTokenUrl
        */
               public "accessTokenUrl"?:string ;
              
       
              /**
        client_id
        */
               public "client_id"?:string ;
              
       
              /**
        client_secret
        */
               public "client_secret"?:string ;
              
       
              /**
        account_id
        */
               public "account_id"?:string ;
              
       
              /**
        subDomain
        */
               public "subDomain"?:string ;
              
       


       

   }
