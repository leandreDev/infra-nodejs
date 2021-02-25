import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_periodicalDistrution } from "./Model_periodicalDistrution"


/**
  permet de créer une plage de date de distribution
*/
export class Model_periodicalDistrution_periode extends   Model_periodicalDistrution   implements Interface.IperiodicalDistrution_periode {

/**
  permet de créer une plage de date de distribution
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["startDate"] != undefined){
          
            this["startDate"] = new Date(obj["startDate"]) ;
          
        }
        
    
        
        if(obj["endDate"] != undefined){
          
            this["endDate"] = new Date(obj["endDate"]) ;
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution_periode" ;

        
              /**
        date de début de distribution
        */
               public "startDate"?:Date ;
              
       
              /**
        date de fin de distribution
        */
               public "endDate"?:Date ;
              
       


       

   }
