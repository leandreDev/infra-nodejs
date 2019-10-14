import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_field } from "./Model_field"


/**
  string est un type de base qui permet de représenter les champ de type string
*/
export class Model_string extends   Model_field   implements Interface.Istring {

/**
  string est un type de base qui permet de représenter les champ de type string
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
          
           this["default"] = obj["default"].toString() ;
           
        }
        
    
        
        if(obj["lowercase"] != undefined){
          
           this["lowercase"] = new Boolean(obj["lowercase"]).valueOf() ;
          
        }
        
    
        
        if(obj["uppercase"] != undefined){
          
           this["uppercase"] = new Boolean(obj["uppercase"]).valueOf() ;
          
        }
        
    
        
        if(obj["trim"] != undefined){
          
           this["trim"] = new Boolean(obj["trim"]).valueOf() ;
          
        }
        
    
        
        if(obj["match"] != undefined){
          
           this["match"] = obj["match"].toString() ;
           
        }
        
    
        
        if(obj["enum"] != undefined && obj["enum"] != null && _.isArray(obj["enum"])){
          
           this["enum"] = obj["enum"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "string" ;

        
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
               public "default"?:string ;
              
       
              /**
        convertie la donnée en minuscule
        */
               public "lowercase"?:boolean ;
              
       
              /**
        convertie la donnée en majuscule
        */
               public "uppercase"?:boolean ;
              
       
              /**
        élimine les espaces au début et a la fin de la valeur
        */
               public "trim"?:boolean ;
              
       
              /**
        ne pas utiliser pour l'instant ce doit être une expression regulière
        */
               public "match"?:string ;
              
       
              /**
        liste des valeur possible du champ
        */
               public "enum"?:string[];
              
       


       

   }
