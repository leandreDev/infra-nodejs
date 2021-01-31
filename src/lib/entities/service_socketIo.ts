import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_service } from "./service"


/**
  communication temps réelle multi format
*/
export class Entity_service_socketIo extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_socketIo' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["returnValue"] != undefined){
          
           obj["returnValue"] = obj["returnValue"].toString() ;
           
        }
        
    
        
        if(obj["allowCrossOrigin"] != undefined){
          
           obj["allowCrossOrigin"] = new Boolean(obj["allowCrossOrigin"]).valueOf() ;
          
        }
        
    
        
        if(obj["socketIo"] != undefined){
          
           
              Index.Entity_socketIoConfig.cast(obj["socketIo"]) ;
              //59e9f53e6f57db7c2c87710f
            
          
        }
        
    
  }


 

public static checkreturnValue(val:any, path:string =null):string[]{
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


       
 

public static checkallowCrossOrigin(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksocketIo(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_socketIoConfig.check(val , false , path  ) ;
            //59e9f53e6f57db7c2c87710f

          }
          res = [...res , ...result] ;
        
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
          
              

              

              if(target.returnValue != null && target.returnValue != undefined ){
                
                
                res = Entity_service_socketIo.checkreturnValue(target.returnValue , `${path}.returnValue`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.allowCrossOrigin != null && target.allowCrossOrigin != undefined ){
                
                
                res = Entity_service_socketIo.checkallowCrossOrigin(target.allowCrossOrigin , `${path}.allowCrossOrigin`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.socketIo != null && target.socketIo != undefined ){
                
                
                res = Entity_service_socketIo.checksocketIo(target.socketIo , `${path}.socketIo`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
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
          
            case 'returnValue':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'allowCrossOrigin':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'socketIo':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_socketIoConfig.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
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
          
      
      case 'returnValue':
       
             return null ;
       
        
       
      
      
      case 'allowCrossOrigin':
       
             return null ;
       
        
       
      
      
      case 'socketIo':
       
        
              
             return Index.Entity_socketIoConfig.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



