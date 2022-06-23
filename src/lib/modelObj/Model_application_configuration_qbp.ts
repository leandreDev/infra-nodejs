import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config qbp
*/
export class Model_application_configuration_qbp extends   Model_application_configuration   implements Interface.Iapplication_configuration_qbp {

/**
  config qbp
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["qbpCustomerApi"] != undefined){
          
           this["qbpCustomerApi"] = obj["qbpCustomerApi"].toString() ;
           
        }
        
    
        
        if(obj["qbpBddUrl"] != undefined){
          
           this["qbpBddUrl"] = obj["qbpBddUrl"].toString() ;
           
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
        
    
        
        if(obj["assUrl"] != undefined){
          
           this["assUrl"] = obj["assUrl"].toString() ;
           
        }
        
    
        
        if(obj["featuresConf"] != undefined){
          
            if(obj["featuresConf"]._class){
              this["featuresConf"] =  new Index[obj["featuresConf"]._class](obj["featuresConf"]) ;
            }else{
              this["featuresConf"] =  new Index["QbpFeaturesConfiguration"](obj["featuresConf"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_qbp" ;

        
              /**
        url du service client de qbp
        */
               public "qbpCustomerApi"?:string ;
              
       
              /**
        url de lapi de bdd qbp
        */
               public "qbpBddUrl"?:string ;
              
       
              /**
        url du service fso qbp
        */
               public "fsoUrl"?:string ;
              
       
              /**
        données de l'api mangopay
        */
               public "mangoConf"?:Interface.IMangoConf;
              
       
              /**
        url de base de redirection vers le site des assureurs
        */
               public "assUrl":string ;
              
       
              /**
        liste de functionalites a activer uo pas dans le site quelbon plan , exemple {bankWire: false | true}
        */
               public "featuresConf"?:Interface.IQbpFeaturesConfiguration;
              
       


       

   }
