import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  période de distribution
*/
export class Model_periodicalDistrution extends  Base  implements Interface.IperiodicalDistrution {

/**
  période de distribution
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["nbMax"] != undefined){
          
           this["nbMax"] = new Number(obj["nbMax"]).valueOf();
          
        }
        
    
        
        if(obj["currentNb"] != undefined){
          
           this["currentNb"] = new Number(obj["currentNb"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution" ;

        
              /**
        nombre maximum de distribution sur cette periode
        */
               public "nbMax"?:number ;
              
       
              /**
        nombre de licence disponible sur la période actuelle
        */
               public "currentNb"?:number ;
              
       


       

   }
