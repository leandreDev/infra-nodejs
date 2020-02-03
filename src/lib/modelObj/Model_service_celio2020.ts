import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service celio 2020
*/
export class Model_service_celio2020 extends   Model_service   implements Interface.Iservice_celio2020 {

/**
  service celio 2020
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_celio2020" ;

        
              /**
        url du service de bdd
        */
               public "bddUrl"?:string ;
              
       


       

   }
