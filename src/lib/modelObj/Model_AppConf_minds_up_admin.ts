import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config de l'app minds up admin
*/
export class Model_AppConf_minds_up_admin extends   Model_application_configuration   implements Interface.IAppConf_minds_up_admin {

/**
  config de l'app minds up admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceMindsUpUrl"] != undefined){
          
           this["serviceMindsUpUrl"] = obj["serviceMindsUpUrl"].toString() ;
           
        }
        
    
        
        if(obj["rgpd"] != undefined){
          
           this["rgpd"] = obj["rgpd"].toString() ;
           
        }
        
    
        
        if(obj["uploadUrl"] != undefined){
          
           this["uploadUrl"] = obj["uploadUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "AppConf_minds_up_admin" ;

        
              /**
        url de l'api
        */
               public "apiUrl":string ;
              
       
              /**
        url du service métier mindsUp
        */
               public "serviceMindsUpUrl":string ;
              
       
              /**
        texte a afficher pour valider la rgpd
        */
               public "rgpd"?:string ;
              
       
              /**
        url de l'api d'upload
        */
               public "uploadUrl":string ;
              
       


       

   }
