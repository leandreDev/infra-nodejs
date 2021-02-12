import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



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
              
       


       

   }
