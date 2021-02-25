import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service ferrand
*/
export class Model_service_ferrand extends   Model_service   implements Interface.Iservice_ferrand {

/**
  service ferrand
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_ferrand" ;

        
              /**
        url du service de bdd
        */
               public "bddUrl":string ;
              
       


       

   }
