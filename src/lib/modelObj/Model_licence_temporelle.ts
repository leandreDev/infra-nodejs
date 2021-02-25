import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_licence } from "./Model_licence"


/**
  c'est une licence qui dure un certain temps
*/
export class Model_licence_temporelle extends   Model_licence   implements Interface.Ilicence_temporelle {

/**
  c'est une licence qui dure un certain temps
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["validityStartDate"] != undefined){
          
            this["validityStartDate"] = new Date(obj["validityStartDate"]) ;
          
        }
        
    
        
        if(obj["validityEndDate"] != undefined){
          
            this["validityEndDate"] = new Date(obj["validityEndDate"]) ;
          
        }
        
    
        
        if(obj["licenceDuration"] != undefined){
          
           this["licenceDuration"] = new Number(obj["licenceDuration"]).valueOf();
          
        }
        
    
        
        if(obj["licenceEndDate"] != undefined){
          
            this["licenceEndDate"] = new Date(obj["licenceEndDate"]) ;
          
        }
        
    
  }
  

    public _class:string  = "licence_temporelle" ;

        
              /**
        c'est la date a partir de la quelle, la licence peut être utilisé
        */
               public "validityStartDate"?:Date ;
              
       
              /**
        c'est la  date de fin de validité de cette licence
        */
               public "validityEndDate"?:Date ;
              
       
              /**
        c'est la durée d’accès au service grâce a cette licence (en seconde)
        */
               public "licenceDuration"?:number ;
              
       
              /**
        c'est la date de fin de licence (si elle n'est pas renseigné, c'est la date de première utilisation + la durée de la licence)
        */
               public "licenceEndDate"?:Date ;
              
       


       

   }
