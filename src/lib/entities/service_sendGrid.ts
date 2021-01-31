import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_service } from "./service"


/**
  permet d'envoyer des mail via l'api send grid v3
*/
export class Entity_service_sendGrid extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_sendGrid' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["sendGridApiKey"] != undefined){
          
           obj["sendGridApiKey"] = obj["sendGridApiKey"].toString() ;
           
        }
        
    
        
        if(obj["messageUrl"] != undefined){
          
           obj["messageUrl"] = obj["messageUrl"].toString() ;
           
        }
        
    
        
        if(obj["userUrl"] != undefined){
          
           obj["userUrl"] = obj["userUrl"].toString() ;
           
        }
        
    
        
        if(obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])){
          
          obj["templates"] = obj["templates"].map((value)=>{
            if(_.isString(value)){
              return new mongo.ObjectId(value)  ;
            }else if(value._id){
              return new mongo.ObjectId(value._id)   ;
            }
          })
          
        }
        
    
  }


 

public static checksendGridApiKey(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmessageUrl(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkuserUrl(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checktemplates(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.sendGridApiKey == null || target.sendGridApiKey == undefined) ){
                err.push(path + ".sendGridApiKey is required") ;
              }
              

              if(target.sendGridApiKey != null && target.sendGridApiKey != undefined ){
                
                
                res = Entity_service_sendGrid.checksendGridApiKey(target.sendGridApiKey , `${path}.sendGridApiKey`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.messageUrl == null || target.messageUrl == undefined) ){
                err.push(path + ".messageUrl is required") ;
              }
              

              if(target.messageUrl != null && target.messageUrl != undefined ){
                
                
                res = Entity_service_sendGrid.checkmessageUrl(target.messageUrl , `${path}.messageUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.userUrl == null || target.userUrl == undefined) ){
                err.push(path + ".userUrl is required") ;
              }
              

              if(target.userUrl != null && target.userUrl != undefined ){
                
                
                res = Entity_service_sendGrid.checkuserUrl(target.userUrl , `${path}.userUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.templates != null && target.templates != undefined ){
                
                
                target.templates.forEach((data, index)=>{
                  res = Entity_service_sendGrid.checktemplates(target.templates[index] , `${path}.templates.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
           

        return err ;
      }
   
public static castQueryParam(path: string, value: any): any {
        let key:string = '' ;
        let subPath:string = '' ;

        if(value === null){
          return null ;
        }
        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} ${value}`)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path} ${value}`)
        }
        switch (key) {
          
            case 'sendGridApiKey':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'messageUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'userUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'templates':
              //objectid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
         
          default:
            return Entity_service  .castQueryParam(key, value) ;
            break;
        }
      }

public static getClassNameOfProp(path:string):string{
        let key:string = '' ;
        let subPath:string = '' ;

        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} `)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path}`)
        }
        switch (key) {
          
      
      case 'sendGridApiKey':
       
             return null ;
       
        
       
      
      
      case 'messageUrl':
       
             return null ;
       
        
       
      
      
      case 'userUrl':
       
             return null ;
       
        
       
      
      
      case 'templates':
       
        
       
              return 'MultilangSendGridTemplate' ;
              
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



