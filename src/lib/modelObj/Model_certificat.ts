import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  certificat
*/
export class Model_certificat extends  Base  implements Interface.Icertificat {

/**
  certificat
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "certificat" ;

        
              /**
        nom du certificat
        */
               public "name"?:string ;
              
       


       

   }
