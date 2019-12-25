import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  conf de l'app celio 2020
*/
export class Model_application_configuration_celio2020Admin extends   Model_application_configuration   implements Interface.Iapplication_configuration_celio2020Admin {

/**
  conf de l'app celio 2020
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["serviceBddUrl"] != undefined){
          
           this["serviceBddUrl"] = obj["serviceBddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_celio2020Admin" ;

        
              /**
        url du service de bdd
        */
               public "serviceBddUrl"?:string ;
              
       


       

   }
