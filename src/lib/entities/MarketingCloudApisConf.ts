import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;



/**
  config pour MarketingCloudApis
*/
export class Entity_MarketingCloudApisConf extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'MarketingCloudApisConf' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           obj["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           obj["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           obj["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["account_id"] != undefined){
          
           obj["account_id"] = obj["account_id"].toString() ;
           
        }
        
    
        
        if(obj["subDomain"] != undefined){
          
           obj["subDomain"] = obj["subDomain"].toString() ;
           
        }
        
    
  }


 

public static checkaccessTokenUrl(val:any, path:string =null):string[]{
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


       
 

public static checkclient_id(val:any, path:string =null):string[]{
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


       
 

public static checkclient_secret(val:any, path:string =null):string[]{
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


       
 

public static checkaccount_id(val:any, path:string =null):string[]{
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


       
 

public static checksubDomain(val:any, path:string =null):string[]{
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
        
          
          
              

              

              if(target.accessTokenUrl != null && target.accessTokenUrl != undefined ){
                
                
                res = Entity_MarketingCloudApisConf.checkaccessTokenUrl(target.accessTokenUrl , `${path}.accessTokenUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_id != null && target.client_id != undefined ){
                
                
                res = Entity_MarketingCloudApisConf.checkclient_id(target.client_id , `${path}.client_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.client_secret != null && target.client_secret != undefined ){
                
                
                res = Entity_MarketingCloudApisConf.checkclient_secret(target.client_secret , `${path}.client_secret`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.account_id != null && target.account_id != undefined ){
                
                
                res = Entity_MarketingCloudApisConf.checkaccount_id(target.account_id , `${path}.account_id`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.subDomain != null && target.subDomain != undefined ){
                
                
                res = Entity_MarketingCloudApisConf.checksubDomain(target.subDomain , `${path}.subDomain`) ;
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
          
            case 'accessTokenUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'client_id':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'client_secret':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'account_id':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'subDomain':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
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
          
      
      case 'accessTokenUrl':
       
             return null ;
       
        
       
      
      
      case 'client_id':
       
             return null ;
       
        
       
      
      
      case 'client_secret':
       
             return null ;
       
        
       
      
      
      case 'account_id':
       
             return null ;
       
        
       
      
      
      case 'subDomain':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



