import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service_supervision
*/
export class Model_service_supervision extends   Model_service   implements Interface.Iservice_supervision {

/**
  service_supervision
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mongoosePath"] != undefined){
          
           this["mongoosePath"] = obj["mongoosePath"].toString() ;
           
        }
        
    
        
        if(obj["mongoAuthSource"] != undefined){
          
           this["mongoAuthSource"] = obj["mongoAuthSource"].toString() ;
           
        }
        
    
        
        if(obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])){
          

            this["services"] = obj["services"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["service_supervision_service_conf"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "service_supervision" ;

        
              /**
        mongoosePath vers les log
        */
               public "mongoosePath"?:string ;
              
       
              /**
        base sur laquelle la connexion s'etabli
        */
               public "mongoAuthSource"?:string ;
              
       
              /**
        configuration de démarrages des services
        */
               public "services"?:Interface.Iservice_supervision_service_conf[];
              
       


       

   }
