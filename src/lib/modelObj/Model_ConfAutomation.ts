import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  Configuration pour les automation des services qbp
*/
export class Model_ConfAutomation extends  Base  implements Interface.IConfAutomation {

/**
  Configuration pour les automation des services qbp
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["datesForGeneratePayout"] != undefined && obj["datesForGeneratePayout"] != null && _.isArray(obj["datesForGeneratePayout"])){
          

           this["datesForGeneratePayout"] = obj["datesForGeneratePayout"].map((value)=>{
              return new Number(value).valueOf();
            })
          
        }
        
    
        
        if(obj["datesForGenerateInvoice"] != undefined && obj["datesForGenerateInvoice"] != null && _.isArray(obj["datesForGenerateInvoice"])){
          

           this["datesForGenerateInvoice"] = obj["datesForGenerateInvoice"].map((value)=>{
              return new Number(value).valueOf();
            })
          
        }
        
    
  }
  

    public _class:string  = "ConfAutomation" ;

        
              /**
        Date auquel les payouts doivent etre effectuer
        */
               public "datesForGeneratePayout"?:number[];
              
       
              /**
        Dates de generation des factures
        */
               public "datesForGenerateInvoice"?:number[];
              
       


       

   }
