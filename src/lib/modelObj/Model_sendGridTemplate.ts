import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  template send grid
*/
export class Model_sendGridTemplate extends  Base  implements Interface.IsendGridTemplate {

/**
  template send grid
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lang"] != undefined){
          
           this["lang"] = obj["lang"].toString() ;
           
        }
        
    
        
        if(obj["templateId"] != undefined){
          
           this["templateId"] = obj["templateId"].toString() ;
           
        }
        
    
        
        if(obj["parametre"] != undefined && obj["parametre"] != null && _.isArray(obj["parametre"])){
          

            this["parametre"] = obj["parametre"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_value"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "sendGridTemplate" ;

        
              /**
        langue du template
        */
               public "lang":string ;
              
       
              /**
        id du template de mail chez sendGrid
        */
               public "templateId":string ;
              
       
              /**
        liste des substitutions a réaliser sur le template
        */
               public "parametre"?:Interface.Iname_value[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["lang"] == null || target["lang"] == undefined) ){
                  throw new Error(path + "lang is required") ;
              }
              
              if(target["lang"] != null && target["lang"] != undefined ){
              
                let _lang  = target["lang"] ;
                

                 if(! _.isString(_lang)){
                    throw new Error(path+"lang is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["templateId"] == null || target["templateId"] == undefined) ){
                  throw new Error(path + "templateId is required") ;
              }
              
              if(target["templateId"] != null && target["templateId"] != undefined ){
              
                let _templateId  = target["templateId"] ;
                

                 if(! _.isString(_templateId)){
                    throw new Error(path+"templateId is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["parametre"] != null && target["parametre"] != undefined ){
              
                  target["parametre"].forEach((_parametre , index:number)=>{
                  
                  
                    promArr.push( Index["name_value"].check(_parametre, isCompleteObj , path+"parametre.")
                      .catch((err)=>{
                        throw new Error(path+"parametre index: "+ index +"is not name_value")
                        

                      }) )
                  if(_parametre._class != null && _parametre._class != undefined){
                    promArr.push( Index[_parametre._class].check(_parametre, isCompleteObj , path+"parametre.")
                      .catch((err)=>{
                        throw new Error(path+"parametre index: "+ index +"is not a " + _parametre._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_sendGridTemplate>{
        return Model_sendGridTemplate.check(target, true, path).then(()=>{
          return new Model_sendGridTemplate(target) ;
        })
      }

   }
