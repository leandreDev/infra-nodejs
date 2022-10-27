import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


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
        
    
        
        if(obj["proxy"] != undefined && obj["proxy"] != null && _.isArray(obj["proxy"])){
          

            this["proxy"] = obj["proxy"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_value"](value) ;
              }
            })
            
          
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
              
       
              /**
        la collection des clef url disponible
        */
               public "proxy"?:Interface.Iname_value[];
              
       


       

   }
