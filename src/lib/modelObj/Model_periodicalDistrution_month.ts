import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_periodicalDistrution } from "./Model_periodicalDistrution"


/**
  permet de limiter la distribution chaque jour du mois
*/
export class Model_periodicalDistrution_month extends   Model_periodicalDistrution   implements Interface.IperiodicalDistrution_month {

/**
  permet de limiter la distribution chaque jour du mois
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["startDay"] != undefined){
          
           this["startDay"] = new Number(obj["startDay"]).valueOf();
          
        }
        
    
        
        if(obj["endDay"] != undefined){
          
           this["endDay"] = new Number(obj["endDay"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution_month" ;

        
              /**
        jour de début de distribution
        */
               public "startDay"?:number =1;
              
       
              /**
        jour de fin de distribution
        */
               public "endDay"?:number =31;
              
       


       

   }
