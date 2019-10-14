import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  remote file system
*/
export class Model_service_fso extends   Model_service   implements Interface.Iservice_fso {

/**
  remote file system
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["filePath"] != undefined){
          
           this["filePath"] = obj["filePath"].toString() ;
           
        }
        
    
        
        if(obj["bddServiceUrl"] != undefined){
          
           this["bddServiceUrl"] = obj["bddServiceUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_fso" ;

        
              /**
        local file path
        */
               public "filePath":string ;
              
       
              /**
        url du service de bd
        */
               public "bddServiceUrl":string ;
              
       


       

   }
