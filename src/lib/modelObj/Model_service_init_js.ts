import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service qui retourne un init.js
*/
export class Model_service_init_js extends   Model_service   implements Interface.Iservice_init_js {

/**
  service qui retourne un init.js
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])){
          

            this["templates"] = obj["templates"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["TemplateLodash"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "service_init_js" ;

        
              /**
        liste des templates disponnibles
        */
               public "templates":Interface.ITemplateLodash[];
              
       


       

   }
