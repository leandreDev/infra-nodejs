import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_service } from "./service"


/**
  simple remote file system a n utiliser que pour des test
*/
export class Entity_service_dumy_fso extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_dumy_fso' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["fsoBase"] != undefined){
          
           obj["fsoBase"] = obj["fsoBase"].toString() ;
           
        }
        
    
        
        if(obj["url_bd"] != undefined){
          
           obj["url_bd"] = obj["url_bd"].toString() ;
           
        }
        
    
        
        if(obj["url_folder_collection"] != undefined){
          
           obj["url_folder_collection"] = obj["url_folder_collection"].toString() ;
           
        }
        
    
        
        if(obj["url_file_collection"] != undefined){
          
           obj["url_file_collection"] = obj["url_file_collection"].toString() ;
           
        }
        
    
        
        if(obj["url_service"] != undefined){
          
           obj["url_service"] = obj["url_service"].toString() ;
           
        }
        
    
        
        if(obj["root_file_directory"] != undefined){
          
           obj["root_file_directory"] = obj["root_file_directory"].toString() ;
           
        }
        
    
  }


 

public static checkfsoBase(val:any, path:string =null):string[]{
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


       
 

public static checkurl_bd(val:any, path:string =null):string[]{
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


       
 

public static checkurl_folder_collection(val:any, path:string =null):string[]{
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


       
 

public static checkurl_file_collection(val:any, path:string =null):string[]{
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


       
 

public static checkurl_service(val:any, path:string =null):string[]{
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


       
 

public static checkroot_file_directory(val:any, path:string =null):string[]{
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
          
              

              

              if(target.fsoBase != null && target.fsoBase != undefined ){
                
                
                res = Entity_service_dumy_fso.checkfsoBase(target.fsoBase , `${path}.fsoBase`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.url_bd != null && target.url_bd != undefined ){
                
                
                res = Entity_service_dumy_fso.checkurl_bd(target.url_bd , `${path}.url_bd`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.url_folder_collection != null && target.url_folder_collection != undefined ){
                
                
                res = Entity_service_dumy_fso.checkurl_folder_collection(target.url_folder_collection , `${path}.url_folder_collection`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.url_file_collection != null && target.url_file_collection != undefined ){
                
                
                res = Entity_service_dumy_fso.checkurl_file_collection(target.url_file_collection , `${path}.url_file_collection`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.url_service != null && target.url_service != undefined ){
                
                
                res = Entity_service_dumy_fso.checkurl_service(target.url_service , `${path}.url_service`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.root_file_directory != null && target.root_file_directory != undefined ){
                
                
                res = Entity_service_dumy_fso.checkroot_file_directory(target.root_file_directory , `${path}.root_file_directory`) ;
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
          
            case 'fsoBase':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'url_bd':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'url_folder_collection':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'url_file_collection':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'url_service':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'root_file_directory':
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
          
      
      case 'fsoBase':
       
             return null ;
       
        
       
      
      
      case 'url_bd':
       
             return null ;
       
        
       
      
      
      case 'url_folder_collection':
       
             return null ;
       
        
       
      
      
      case 'url_file_collection':
       
             return null ;
       
        
       
      
      
      case 'url_service':
       
             return null ;
       
        
       
      
      
      case 'root_file_directory':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



