import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;



/**
  configuration pour un service sftp
*/
export class Entity_ftpsConfig extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'ftpsConfig' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["port"] != undefined){
          
           obj["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
        
        if(obj["certPath"] != undefined){
          
           obj["certPath"] = obj["certPath"].toString() ;
           
        }
        
    
        
        if(obj["folderPath"] != undefined){
          
           obj["folderPath"] = obj["folderPath"].toString() ;
           
        }
        
    
        
        if(obj["login"] != undefined){
          
           obj["login"] = obj["login"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           obj["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["newFileHook"] != undefined){
          
           
              Index.Entity_Request.cast(obj["newFileHook"]) ;
              //5b3385537d3287479c96dc37
            
          
        }
        
    
  }


 

public static checkport(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
          }
        
         
        

        

        

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkcertPath(val:any, path:string =null):string[]{
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


       
 

public static checkfolderPath(val:any, path:string =null):string[]{
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


       
 

public static checklogin(val:any, path:string =null):string[]{
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


       
 

public static checkpassword(val:any, path:string =null):string[]{
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


       
 

public static checknewFileHook(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_Request.check(val , false , path  ) ;
            //5b3385537d3287479c96dc37

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
        
          
          
              

              
              if( isCompleteObj && (target.port == null || target.port == undefined) ){
                err.push(path + ".port is required") ;
              }
              

              if(target.port != null && target.port != undefined ){
                
                
                res = Entity_ftpsConfig.checkport(target.port , `${path}.port`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.certPath == null || target.certPath == undefined) ){
                err.push(path + ".certPath is required") ;
              }
              

              if(target.certPath != null && target.certPath != undefined ){
                
                
                res = Entity_ftpsConfig.checkcertPath(target.certPath , `${path}.certPath`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.folderPath == null || target.folderPath == undefined) ){
                err.push(path + ".folderPath is required") ;
              }
              

              if(target.folderPath != null && target.folderPath != undefined ){
                
                
                res = Entity_ftpsConfig.checkfolderPath(target.folderPath , `${path}.folderPath`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.login == null || target.login == undefined) ){
                err.push(path + ".login is required") ;
              }
              

              if(target.login != null && target.login != undefined ){
                
                
                res = Entity_ftpsConfig.checklogin(target.login , `${path}.login`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.password != null && target.password != undefined ){
                
                
                res = Entity_ftpsConfig.checkpassword(target.password , `${path}.password`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.newFileHook != null && target.newFileHook != undefined ){
                
                
                res = Entity_ftpsConfig.checknewFileHook(target.newFileHook , `${path}.newFileHook`) ;
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
          
            case 'port':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'certPath':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'folderPath':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'login':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'password':
              //password
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'newFileHook':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_Request.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
         
          default:
            return Entity.castQueryParam(key, value) ;
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
          
      
      case 'port':
       
             return null ;
       
        
       
      
      
      case 'certPath':
       
             return null ;
       
        
       
      
      
      case 'folderPath':
       
             return null ;
       
        
       
      
      
      case 'login':
       
             return null ;
       
        
       
      
      
      case 'password':
       
             return null ;
       
        
       
      
      
      case 'newFileHook':
       
        
              
             return Index.Entity_Request.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



