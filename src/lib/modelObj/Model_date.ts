import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les dates
*/
export class Model_date extends   Model_field   implements Interface.Idate {

/**
  ce champ représente les dates
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           this["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["isArrayOf"] != undefined){
          
           this["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf() ;
          
        }
        
    
        
        if(obj["required"] != undefined){
          
           this["required"] = new Boolean(obj["required"]).valueOf() ;
          
        }
        
    
        
        if(obj["unique"] != undefined){
          
           this["unique"] = new Boolean(obj["unique"]).valueOf() ;
          
        }
        
    
        
        if(obj["index"] != undefined){
          
           this["index"] = new Boolean(obj["index"]).valueOf() ;
          
        }
        
    
        
        if(obj["default"] != undefined){
          
            this["default"] = new Date(obj["default"]) ;
          
        }
        
    
        
        if(obj["min"] != undefined){
          
            this["min"] = new Date(obj["min"]) ;
          
        }
        
    
        
        if(obj["max"] != undefined){
          
            this["max"] = new Date(obj["max"]) ;
          
        }
        
    
  }
  

    public _class:string  = "date" ;

        
              /**
        représente le nom du champ
        */
               public "name":string ;
              
       
              /**
        c'est la description du champ. il permet de générer l'aide ou la documentation
        */
               public "description":string ;
              
       
              /**
        permet d'indiquer que le champ est un tableau
        */
               public "isArrayOf"?:boolean ;
              
       
              /**
        si le champ est obligatoire
        */
               public "required"?:boolean ;
              
       
              /**
        indique que la valeur du champ doit être unique
        */
               public "unique"?:boolean ;
              
       
              /**
        ????? je suis plus sure
        */
               public "index"?:boolean ;
              
       
              /**
        valeur par défaut
        */
               public "default"?:Date ;
              
       
              /**
        valeur minimum accepté
        */
               public "min"?:Date ;
              
       
              /**
        valeur maximum accepté
        */
               public "max"?:Date ;
              
       


       

   }
