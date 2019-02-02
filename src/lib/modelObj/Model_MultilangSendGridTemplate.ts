import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
export class Model_MultilangSendGridTemplate extends  Base  implements Interface.IMultilangSendGridTemplate {

/**
  décrit un template multi langue d'envoie de mail avec sendGrid
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["sendGridTemplates"] != undefined && obj["sendGridTemplates"] != null && _.isArray(obj["sendGridTemplates"])){
          

            this["sendGridTemplates"] = obj["sendGridTemplates"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["sendGridTemplate"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "MultilangSendGridTemplate" ;

        
              /**
        le nom du template
        */
               public "name":string ;
              
       
              /**
        liste des Template sendgrid
        */
               public "sendGridTemplates"?:Interface.IsendGridTemplate[];
              
       


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
           
              
              if(target["sendGridTemplates"] != null && target["sendGridTemplates"] != undefined ){
              
                  target["sendGridTemplates"].forEach((_sendGridTemplates , index:number)=>{
                  
                  
                    promArr.push( Index["sendGridTemplate"].check(_sendGridTemplates, isCompleteObj , path+"sendGridTemplates.")
                      .catch((err)=>{
                        throw new Error(path+"sendGridTemplates index: "+ index +"is not sendGridTemplate")
                        

                      }) )
                  if(_sendGridTemplates._class != null && _sendGridTemplates._class != undefined){
                    promArr.push( Index[_sendGridTemplates._class].check(_sendGridTemplates, isCompleteObj , path+"sendGridTemplates.")
                      .catch((err)=>{
                        throw new Error(path+"sendGridTemplates index: "+ index +"is not a " + _sendGridTemplates._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_MultilangSendGridTemplate>{
        return Model_MultilangSendGridTemplate.check(target, true, path).then(()=>{
          return new Model_MultilangSendGridTemplate(target) ;
        })
      }

   }
