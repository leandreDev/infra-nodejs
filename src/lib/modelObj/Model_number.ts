import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les valeurs numériques
*/
export class Model_number extends   Model_field   implements Interface.Inumber {

/**
  ce champ représente les valeurs numériques
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
          
           this["default"] = new Number(obj["default"]).valueOf();
          
        }
        
    
        
        if(obj["min"] != undefined){
          
           this["min"] = new Number(obj["min"]).valueOf();
          
        }
        
    
        
        if(obj["max"] != undefined){
          
           this["max"] = new Number(obj["max"]).valueOf();
          
        }
        
    
        
        if(obj["step"] != undefined){
          
           this["step"] = new Number(obj["step"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "number" ;

        
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
        valeur par defaut
        */
               public "default"?:number ;
              
       
              /**
        valeur minimum acceptée
        */
               public "min"?:number ;
              
       
              /**
        valeur maximum acceptée
        */
               public "max"?:number ;
              
       
              /**
        le pas d'incrément
        */
               public "step"?:number ;
              
       


       

   }
