import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config boisdor admin
*/
export class Model_application_configuration_boisdor_admin extends   Model_application_configuration   implements Interface.Iapplication_configuration_boisdor_admin {

/**
  config boisdor admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["boisdorBddUrl"] != undefined){
          
           this["boisdorBddUrl"] = obj["boisdorBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["boisdorAdminService"] != undefined){
          
           this["boisdorAdminService"] = obj["boisdorAdminService"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["boisdorMailService"] != undefined){
          
           this["boisdorMailService"] = obj["boisdorMailService"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_boisdor_admin" ;

        
              /**
        url de la bdd
        */
               public "boisdorBddUrl"?:string ;
              
       
              /**
        url du service boisdor
        */
               public "boisdorAdminService"?:string ;
              
       
              /**
        url du service fso
        */
               public "fsoUrl"?:string ;
              
       
              /**
        boisdorMailService
        */
               public "boisdorMailService"?:string ;
              
       


       

   }
