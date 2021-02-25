import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config qbp admin
*/
export class Model_application_configuration_qbp_admin extends   Model_application_configuration   implements Interface.Iapplication_configuration_qbp_admin {

/**
  config qbp admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["qbpBddUrl"] != undefined){
          
           this["qbpBddUrl"] = obj["qbpBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["qbpAdminService"] != undefined){
          
           this["qbpAdminService"] = obj["qbpAdminService"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["mangoConf"] != undefined){
          
            if(obj["mangoConf"]._class){
              this["mangoConf"] =  new Index[obj["mangoConf"]._class](obj["mangoConf"]) ;
            }else{
              this["mangoConf"] =  new Index["MangoConf"](obj["mangoConf"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_qbp_admin" ;

        
              /**
        url de la bdd
        */
               public "qbpBddUrl"?:string ;
              
       
              /**
        url du service qbp
        */
               public "qbpAdminService"?:string ;
              
       
              /**
        url du service fso
        */
               public "fsoUrl"?:string ;
              
       
              /**
        données de configuration de mangopay
        */
               public "mangoConf"?:Interface.IMangoConf;
              
       


       

   }
