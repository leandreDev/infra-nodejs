import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  description d'une requete avec request
*/
export class Model_Request extends  Base  implements Interface.IRequest {

/**
  description d'une requete avec request
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["url"] != undefined){
          
           this["url"] = obj["url"].toString() ;
           
        }
        
    
        
        if(obj["method"] != undefined){
          
           this["method"] = obj["method"].toString() ;
           
        }
        
    
        
        if(obj["headers"] != undefined && obj["headers"] != null && _.isArray(obj["headers"])){
          

            this["headers"] = obj["headers"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_value"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["body"] != undefined){
          
           this["body"] = obj["body"] ;
          
        }
        
    
  }
  

    public _class:string  = "Request" ;

        
              /**
         fully qualified uri or a parsed url object from url.parse()
        */
               public "url":string ="https://";
              
       
              /**
        http method (default: "GET")
        */
               public "method":string ="GET";
              
       
              /**
        http headers 
        */
               public "headers"?:Interface.Iname_value[];
              
       
              /**
        entity body for PATCH, POST and PUT requests. Must be a Buffer, String or ReadStream. If json is true, then body must be a JSON-serializable object.
        */
               public "body"?:any ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["url"] == null || target["url"] == undefined) ){
                  throw new Error(path + "url is required") ;
              }
              
              if(target["url"] != null && target["url"] != undefined ){
              
                let _url  = target["url"] ;
                

                 if(! _.isString(_url)){
                    throw new Error(path+"url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["method"] == null || target["method"] == undefined) ){
                  throw new Error(path + "method is required") ;
              }
              
              if(target["method"] != null && target["method"] != undefined ){
              
                let _method  = target["method"] ;
                

                 if(! _.isString(_method)){
                    throw new Error(path+"method is not a string") ;
                    
                  }
                  
                  
                    let _enum_method:string[] = ["GET","POST","PUT","PATCH","DELETE"] ;
                    if(_enum_method.indexOf(_method)==-1){
                        throw new Error(path+"method dont match one of GET , POST , PUT , PATCH , DELETE" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["headers"] != null && target["headers"] != undefined ){
              
                  target["headers"].forEach((_headers , index:number)=>{
                  
                  
                    promArr.push( Index["name_value"].check(_headers, isCompleteObj , path+"headers.")
                      .catch((err)=>{
                        throw new Error(path+"headers index: "+ index +"is not name_value")
                        

                      }) )
                  if(_headers._class != null && _headers._class != undefined){
                    promArr.push( Index[_headers._class].check(_headers, isCompleteObj , path+"headers.")
                      .catch((err)=>{
                        throw new Error(path+"headers index: "+ index +"is not a " + _headers._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["body"] != null && target["body"] != undefined ){
              
               // public "body":Iobject;
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_Request>{
        return Model_Request.check(target, true, path).then(()=>{
          return new Model_Request(target) ;
        })
      }

   }
