import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les booléains
*/
export class Model_boolean extends   Model_field   implements Interface.Iboolean {

/**
  ce champ représente les booléains
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
          
           this["default"] = new Boolean(obj["default"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "boolean" ;

        
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
               public "default"?:boolean ;
              
       


       

   }
