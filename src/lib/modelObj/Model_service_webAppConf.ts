import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
export class Model_service_webAppConf extends   Model_service   implements Interface.Iservice_webAppConf {

/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["infraBddUrl"] != undefined){
          
           this["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           this["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_webAppConf" ;

        
              /**
        url de la bdd de l'infra
        */
               public "infraBddUrl":string ;
              
       
              /**
        url de la bdd du sso
        */
               public "ssoBddUrl":string ;
              
       


       

   }
