import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
*/
export class Model__view extends  Base  implements Interface.I_view {

/**
  créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           this["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["output"] != undefined){
          
           if(_.isString(obj["output"])){
              this["output"] = obj["output"] ;
            }else if(obj["output"]._id){
              this["output"] = obj["output"]._id ;
            }
          
        }
        
    
        
        if(obj["model"] != undefined){
          
           if(_.isString(obj["model"])){
              this["model"] = obj["model"] ;
            }else if(obj["model"]._id){
              this["model"] = obj["model"]._id ;
            }
          
        }
        
    
        
        if(obj["pipeline"] != undefined && obj["pipeline"] != null && _.isArray(obj["pipeline"])){
          
           this["pipeline"] = obj["pipeline"].map((value)=>{
              return value;
            })
          
        }
        
    
  }
  

    public _class:string  = "_view" ;

        
              /**
        nom de la route d'accés
        */
               public "name":string ;
              
       
              /**
        la description qui apparaîtra dans la doc
        */
               public "description":string ;
              
       
              /**
        le format attendu en sortie
        */
               public "output":string ;
              
       
              /**
        model sur le quelle on opère l'agrégation
        */
               public "model":string ;
              
       
              /**
        liste des operation du pipeline
        */
               public "pipeline"?:any[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["description"] == null || target["description"] == undefined) ){
                  throw new Error(path + "description is required") ;
              }
              
              if(target["description"] != null && target["description"] != undefined ){
              
                let _description  = target["description"] ;
                

                 if(! _.isString(_description)){
                    throw new Error(path+"description is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["output"] == null || target["output"] == undefined) ){
                  throw new Error(path + "output is required") ;
              }
              
              if(target["output"] != null && target["output"] != undefined ){
              
                  let _output  = target["output"] ;
                  
                  if( ! _.isString(_output)){
                      if( ! _.isString(_output)){
                       throw new Error(path + "output is not a string") ;
                      }
                  }
                  
               
              
              
           }
           
              
              if( isCompleteObj && (target["model"] == null || target["model"] == undefined) ){
                  throw new Error(path + "model is required") ;
              }
              
              if(target["model"] != null && target["model"] != undefined ){
              
                  let _model  = target["model"] ;
                  
                  if( ! _.isString(_model)){
                      if( ! _.isString(_model)){
                       throw new Error(path + "model is not a string") ;
                      }
                  }
                  
               
              
              
           }
           
              
              if(target["pipeline"] != null && target["pipeline"] != undefined ){
              
               // public "pipeline":Iobject;
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model__view>{
        return Model__view.check(target, true, path).then(()=>{
          return new Model__view(target) ;
        })
      }

   }
