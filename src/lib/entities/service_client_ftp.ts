import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_service } from "./service"


/**
  client ftps
*/
export class Entity_service_client_ftp extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_client_ftp' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["host"] != undefined){
          
           obj["host"] = obj["host"].toString() ;
           
        }
        
    
        
        if(obj["ftpPort"] != undefined){
          
           obj["ftpPort"] = new Number(obj["ftpPort"]).valueOf();
          
        }
        
    
        
        if(obj["user"] != undefined){
          
           obj["user"] = obj["user"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           obj["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["downloadPath"] != undefined){
          
           obj["downloadPath"] = obj["downloadPath"].toString() ;
           
        }
        
    
  }


 

public static checkhost(val:any, path:string =null):string[]{
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


       
 

public static checkftpPort(val:any, path:string =null):string[]{
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


       
 

public static checkuser(val:any, path:string =null):string[]{
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


       
 

public static checkdownloadPath(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.host == null || target.host == undefined) ){
                err.push(path + ".host is required") ;
              }
              

              if(target.host != null && target.host != undefined ){
                
                
                res = Entity_service_client_ftp.checkhost(target.host , `${path}.host`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.ftpPort == null || target.ftpPort == undefined) ){
                err.push(path + ".ftpPort is required") ;
              }
              

              if(target.ftpPort != null && target.ftpPort != undefined ){
                
                
                res = Entity_service_client_ftp.checkftpPort(target.ftpPort , `${path}.ftpPort`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.user == null || target.user == undefined) ){
                err.push(path + ".user is required") ;
              }
              

              if(target.user != null && target.user != undefined ){
                
                
                res = Entity_service_client_ftp.checkuser(target.user , `${path}.user`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.password == null || target.password == undefined) ){
                err.push(path + ".password is required") ;
              }
              

              if(target.password != null && target.password != undefined ){
                
                
                res = Entity_service_client_ftp.checkpassword(target.password , `${path}.password`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.downloadPath == null || target.downloadPath == undefined) ){
                err.push(path + ".downloadPath is required") ;
              }
              

              if(target.downloadPath != null && target.downloadPath != undefined ){
                
                
                res = Entity_service_client_ftp.checkdownloadPath(target.downloadPath , `${path}.downloadPath`) ;
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
          
            case 'host':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'ftpPort':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'user':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'password':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'downloadPath':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
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
          
      
      case 'host':
       
             return null ;
       
        
       
      
      
      case 'ftpPort':
       
             return null ;
       
        
       
      
      
      case 'user':
       
             return null ;
       
        
       
      
      
      case 'password':
       
             return null ;
       
        
       
      
      
      case 'downloadPath':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



