import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  liste de functionalites pouvant etre actives ou desactives
*/
export class Model_QbpFeaturesConfiguration extends  Base  implements Interface.IQbpFeaturesConfiguration {

/**
  liste de functionalites pouvant etre actives ou desactives
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bankWire"] != undefined){
          
           this["bankWire"] = new Boolean(obj["bankWire"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "QbpFeaturesConfiguration" ;

        
              /**
        determine se le payement par virement bancaire est active ou non
        */
               public "bankWire"?:boolean =false;
              
       


       

   }
