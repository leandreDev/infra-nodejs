import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config boisdor admin
*/
export class Model_application_configuration_boisdor_admin_seller extends   Model_application_configuration   implements Interface.Iapplication_configuration_boisdor_admin_seller {

/**
  config boisdor admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["boisdorSellerApi"] != undefined){
          
           this["boisdorSellerApi"] = obj["boisdorSellerApi"].toString() ;
           
        }
        
    
        
        if(obj["boisdorBddUrl"] != undefined){
          
           this["boisdorBddUrl"] = obj["boisdorBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["apiPublicUrl"] != undefined){
          
           this["apiPublicUrl"] = obj["apiPublicUrl"].toString() ;
           
        }
        
    
        
        if(obj["boisdorMailService"] != undefined){
          
           this["boisdorMailService"] = obj["boisdorMailService"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_boisdor_admin_seller" ;

        
              /**
        url du service seller
        */
               public "boisdorSellerApi"?:string ;
              
       
              /**
        boisdorBddUrl
        */
               public "boisdorBddUrl"?:string ;
              
       
              /**
        url du service de fso
        */
               public "fsoUrl"?:string ;
              
       
              /**
        url api public
        */
               public "apiPublicUrl"?:string ;
              
       
              /**
        url du service d'envoie de mail
        */
               public "boisdorMailService"?:string ;
              
       


       

   }
