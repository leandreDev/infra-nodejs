import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service_comptoireOr
*/
export class Model_service_comptoireOr extends   Model_service   implements Interface.Iservice_comptoireOr {

/**
  service_comptoireOr
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddApiUrl"] != undefined){
          
           this["bddApiUrl"] = obj["bddApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["confId"] != undefined){
          
          if(_.isString(obj["confId"])){
            this["confId"] = obj["confId"];
          }else if(obj["confId"]._id){
            this["confId"] = obj["confId"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "service_comptoireOr" ;

        
              /**
        bddApiUrl
        */
               public "bddApiUrl"?:string ;
              
       
              /**
        confId
        */
               public "confId"?:string ;
              
       


       

   }
