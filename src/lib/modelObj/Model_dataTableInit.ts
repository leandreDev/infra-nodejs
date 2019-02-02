import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  initalisation des listes
*/
export class Model_dataTableInit extends  Base  implements Interface.IdataTableInit {

/**
  initalisation des listes
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])){
          
           this["fieldsNames"] = obj["fieldsNames"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["sortField"] != undefined){
          
           this["sortField"] = obj["sortField"].toString() ;
           
        }
        
    
        
        if(obj["direction"] != undefined){
          
           this["direction"] = obj["direction"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "dataTableInit" ;

        
              /**
        liste des champs a afficher 
        */
               public "fieldsNames"?:string[];
              
       
              /**
        champ a trier 
        */
               public "sortField"?:string ;
              
       
              /**
        direction du tri
        */
               public "direction"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["fieldsNames"] != null && target["fieldsNames"] != undefined ){
              
                target["fieldsNames"].forEach((_fieldsNames , index:number)=>{
                

                 if(! _.isString(_fieldsNames)){
                    throw new Error(path+"fieldsNames index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
              
              if(target["sortField"] != null && target["sortField"] != undefined ){
              
                let _sortField  = target["sortField"] ;
                

                 if(! _.isString(_sortField)){
                    throw new Error(path+"sortField is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["direction"] != null && target["direction"] != undefined ){
              
                let _direction  = target["direction"] ;
                

                 if(! _.isString(_direction)){
                    throw new Error(path+"direction is not a string") ;
                    
                  }
                  
                  
                    let _enum_direction:string[] = ["asc","desc"] ;
                    if(_enum_direction.indexOf(_direction)==-1){
                        throw new Error(path+"direction dont match one of asc , desc" ) ;
                        
                    }
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_dataTableInit>{
        return Model_dataTableInit.check(target, true, path).then(()=>{
          return new Model_dataTableInit(target) ;
        })
      }

   }
