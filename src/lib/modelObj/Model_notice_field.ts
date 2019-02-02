import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  notice field
*/
export class Model_notice_field extends  Base  implements Interface.Inotice_field {

/**
  notice field
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["content"] != undefined){
          
           this["content"] = obj["content"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "notice_field" ;

        
              /**
        name of notices
        */
               public "name"?:string ;
              
       
              /**
        content
        */
               public "content"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["content"] != null && target["content"] != undefined ){
              
                let _content  = target["content"] ;
                

                 if(! _.isString(_content)){
                    throw new Error(path+"content is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_notice_field>{
        return Model_notice_field.check(target, true, path).then(()=>{
          return new Model_notice_field(target) ;
        })
      }

   }
