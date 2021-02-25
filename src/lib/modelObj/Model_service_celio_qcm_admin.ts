import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service celio qcm admin
*/
export class Model_service_celio_qcm_admin extends   Model_service   implements Interface.Iservice_celio_qcm_admin {

/**
  service celio qcm admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceFidUrl"] != undefined){
          
           this["serviceFidUrl"] = obj["serviceFidUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_celio_qcm_admin" ;

        
              /**
        url du service de bdd
        */
               public "bddUrl":string ;
              
       
              /**
        url du service fid
        */
               public "serviceFidUrl":string ;
              
       


       

   }
