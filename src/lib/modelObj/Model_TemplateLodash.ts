import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  template lodash + nom
*/
export class Model_TemplateLodash extends  Base  implements Interface.ITemplateLodash {

/**
  template lodash + nom
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["template"] != undefined){
          
           this["template"] = obj["template"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "TemplateLodash" ;

        
              /**
        nom du template
        */
               public "name":string ;
              
       
              /**
        contenu du template
        */
               public "template":string ;
              
       


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
           
              
              if( isCompleteObj && (target["template"] == null || target["template"] == undefined) ){
                  throw new Error(path + "template is required") ;
              }
              
              if(target["template"] != null && target["template"] != undefined ){
              
                let _template  = target["template"] ;
                

                 if(! _.isString(_template)){
                    throw new Error(path+"template is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_TemplateLodash>{
        return Model_TemplateLodash.check(target, true, path).then(()=>{
          return new Model_TemplateLodash(target) ;
        })
      }

   }
