import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service celio qcm
*/
export class Model_service_celio_qcm extends   Model_service   implements Interface.Iservice_celio_qcm {

/**
  service celio qcm
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceFidUrl"] != undefined){
          
           this["serviceFidUrl"] = obj["serviceFidUrl"].toString() ;
           
        }
        
    
        
        if(obj["secretToken"] != undefined){
          
           this["secretToken"] = obj["secretToken"].toString() ;
           
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           this["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["caPath"] != undefined){
          
           this["caPath"] = obj["caPath"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_celio_qcm" ;

        
              /**
        url du service de bdd
        */
               public "bddUrl":string ;
              
       
              /**
        url du service fid
        */
               public "serviceFidUrl":string ;
              
       
              /**
        secretToken apm
        */
               public "secretToken"?:string ;
              
       
              /**
        serverUrl apm
        */
               public "serverUrl"?:string ;
              
       
              /**
        chemin du certificat, si il est renseigné il active la connexion a la bd en ssl
        */
               public "caPath"?:string ;
              
       


       

   }
