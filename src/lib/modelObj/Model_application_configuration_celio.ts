import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  configuration générale application celio
*/
export class Model_application_configuration_celio extends   Model_application_configuration   implements Interface.Iapplication_configuration_celio {

/**
  configuration générale application celio
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["fidServiceUrl"] != undefined){
          
           this["fidServiceUrl"] = obj["fidServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["qcmServiceUrl"] != undefined){
          
           this["qcmServiceUrl"] = obj["qcmServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["FidBDDUrl"] != undefined){
          
           this["FidBDDUrl"] = obj["FidBDDUrl"].toString() ;
           
        }
        
    
        
        if(obj["QcmBDDUrl"] != undefined){
          
           this["QcmBDDUrl"] = obj["QcmBDDUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_celio" ;

        
              /**
        url des services de fid
        */
               public "fidServiceUrl":string ;
              
       
              /**
        url du service de QCM
        */
               public "qcmServiceUrl"?:string ;
              
       
              /**
        url de la bdd fid
        */
               public "FidBDDUrl"?:string ;
              
       
              /**
        url de la BDD qcm
        */
               public "QcmBDDUrl"?:string ;
              
       


       

   }
