import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  mapping de schema et de nom
*/
export class Model_schema_name extends  Base  implements Interface.Ischema_name {

/**
  mapping de schema et de nom
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["entity"] != undefined){
          
           this["entity"] = obj["entity"].toString() ;
           
        }
        
    
        
        if(obj["singular"] != undefined){
          
           this["singular"] = obj["singular"].toString() ;
           
        }
        
    
        
        if(obj["plural"] != undefined){
          
           this["plural"] = obj["plural"].toString() ;
           
        }
        
    
        
        if(obj["fieldName"] != undefined){
          
           this["fieldName"] = obj["fieldName"].toString() ;
           
        }
        
    
        
        if(obj["unvisibleFields"] != undefined && obj["unvisibleFields"] != null && _.isArray(obj["unvisibleFields"])){
          
           this["unvisibleFields"] = obj["unvisibleFields"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])){
          

            this["fieldsNames"] = obj["fieldsNames"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_value"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["listParameter"] != undefined){
          
            if(obj["listParameter"]._class){
              this["listParameter"] =  new Index[obj["listParameter"]._class](obj["listParameter"]) ;
            }else{
              this["listParameter"] =  new Index["dataTableInit"](obj["listParameter"]) ;
            }
          
        }
        
    
        
        if(obj["create"] != undefined){
          
           this["create"] = new Boolean(obj["create"]).valueOf() ;
          
        }
        
    
        
        if(obj["delete"] != undefined){
          
           this["delete"] = new Boolean(obj["delete"]).valueOf() ;
          
        }
        
    
        
        if(obj["clone"] != undefined){
          
           this["clone"] = new Boolean(obj["clone"]).valueOf() ;
          
        }
        
    
        
        if(obj["update"] != undefined){
          
           this["update"] = new Boolean(obj["update"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "schema_name" ;

        
              /**
        nom du schema
        */
               public "entity"?:string ;
              
       
              /**
        le nom humain au singulier
        */
               public "singular"?:string ;
              
       
              /**
        le nom humain au pluriel
        */
               public "plural"?:string ;
              
       
              /**
        permet d'indiquer le champ qui sert de nom dans le fil d'ariane
        */
               public "fieldName"?:string ;
              
       
              /**
        liste des champs à masquer à l'utilisateur
        */
               public "unvisibleFields"?:string[];
              
       
              /**
        mappage des nom de champ avec les nom utilisateurs
        */
               public "fieldsNames"?:Interface.Iname_value[];
              
       
              /**
        prametre d'initalisation des listes
        */
               public "listParameter"?:Interface.IdataTableInit;
              
       
              /**
        activer le bouton nouveau
        */
               public "create"?:boolean ;
              
       
              /**
        active le bouton delete
        */
               public "delete"?:boolean ;
              
       
              /**
        active le bouton clone
        */
               public "clone"?:boolean ;
              
       
              /**
        active le bouton enregistrer
        */
               public "update"?:boolean ;
              
       


       

   }
