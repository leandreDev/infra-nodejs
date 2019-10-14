import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  administration de l'infra
*/
export class Model_service_infra_admin extends   Model_service   implements Interface.Iservice_infra_admin {

/**
  administration de l'infra
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["ssoBdUrl"] != undefined){
          
           this["ssoBdUrl"] = obj["ssoBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBdUrl"] != undefined){
          
           this["infraBdUrl"] = obj["infraBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["platformBdUrl"] != undefined){
          
           this["platformBdUrl"] = obj["platformBdUrl"].toString() ;
           
        }
        
    
        
        if(obj["service_nginxMultiConfiguratorId"] != undefined){
          
          if(_.isString(obj["service_nginxMultiConfiguratorId"])){
            this["service_nginxMultiConfiguratorId"] = obj["service_nginxMultiConfiguratorId"];
          }else if(obj["service_nginxMultiConfiguratorId"]._id){
            this["service_nginxMultiConfiguratorId"] = obj["service_nginxMultiConfiguratorId"]._id ;
          }
          
        }
        
    
        
        if(obj["nginxApplicationSuffix"] != undefined){
          
           this["nginxApplicationSuffix"] = obj["nginxApplicationSuffix"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_infra_admin" ;

        
              /**
        url du service de bd du sso
        */
               public "ssoBdUrl":string ;
              
       
              /**
        url du service de bd de l'infra
        */
               public "infraBdUrl":string ;
              
       
              /**
        url de la bd de la plateform
        */
               public "platformBdUrl"?:string ;
              
       
              /**
        id du service service_nginxMultiConfigurator
        */
               public "service_nginxMultiConfiguratorId":string ;
              
       
              /**
        nginxApplicationSuffix
        */
               public "nginxApplicationSuffix"?:string ;
              
       


       

   }
