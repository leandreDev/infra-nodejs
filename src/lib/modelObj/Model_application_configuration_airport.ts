import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config airport
*/
export class Model_application_configuration_airport extends   Model_application_configuration   implements Interface.Iapplication_configuration_airport {

/**
  config airport
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["airportApi"] != undefined){
          
           this["airportApi"] = obj["airportApi"].toString() ;
           
        }
        
    
        
        if(obj["airportBddUrl"] != undefined){
          
           this["airportBddUrl"] = obj["airportBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_airport" ;

        
              /**
        url des api airport
        */
               public "airportApi"?:string ;
              
       
              /**
        url de lapi de bdd airport
        */
               public "airportBddUrl"?:string ;
              
       
              /**
        url du service fso airport
        */
               public "fsoUrl"?:string ;
              
       


       

   }
