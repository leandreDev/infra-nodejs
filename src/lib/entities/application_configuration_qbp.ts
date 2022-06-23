import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_application_configuration } from "./application_configuration"


/**
  config qbp
*/
export class Entity_application_configuration_qbp extends   Entity_application_configuration    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'application_configuration_qbp' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_application_configuration.cast(obj , true)
    
    
        
        if(obj["qbpCustomerApi"] != undefined){
          
           obj["qbpCustomerApi"] = obj["qbpCustomerApi"].toString() ;
           
        }
        
    
        
        if(obj["qbpBddUrl"] != undefined){
          
           obj["qbpBddUrl"] = obj["qbpBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           obj["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["mangoConf"] != undefined){
          
           
              Index.Entity_MangoConf.cast(obj["mangoConf"]) ;
              //602e35837d6c5b63b790117e
            
          
        }
        
    
        
        if(obj["assUrl"] != undefined){
          
           obj["assUrl"] = obj["assUrl"].toString() ;
           
        }
        
    
        
        if(obj["featuresConf"] != undefined){
          
           
              Index.Entity_QbpFeaturesConfiguration.cast(obj["featuresConf"]) ;
              //62330e74ea547cc9374f149c
            
          
        }
        
    
  }


 

public static checkqbpCustomerApi(val:any, path:string =null):string[]{
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


       
 

public static checkqbpBddUrl(val:any, path:string =null):string[]{
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


       
 

public static checkfsoUrl(val:any, path:string =null):string[]{
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


       
 

public static checkmangoConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_MangoConf.check(val , false , path  ) ;
            //602e35837d6c5b63b790117e

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkassUrl(val:any, path:string =null):string[]{
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


       
 

public static checkfeaturesConf(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity_QbpFeaturesConfiguration.check(val , false , path  ) ;
            //62330e74ea547cc9374f149c

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
        
          err = Entity_application_configuration.check(target, isCompleteObj , path) ;
          
              

              

              if(target.qbpCustomerApi != null && target.qbpCustomerApi != undefined ){
                
                
                res = Entity_application_configuration_qbp.checkqbpCustomerApi(target.qbpCustomerApi , `${path}.qbpCustomerApi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qbpBddUrl != null && target.qbpBddUrl != undefined ){
                
                
                res = Entity_application_configuration_qbp.checkqbpBddUrl(target.qbpBddUrl , `${path}.qbpBddUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.fsoUrl != null && target.fsoUrl != undefined ){
                
                
                res = Entity_application_configuration_qbp.checkfsoUrl(target.fsoUrl , `${path}.fsoUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mangoConf != null && target.mangoConf != undefined ){
                
                
                res = Entity_application_configuration_qbp.checkmangoConf(target.mangoConf , `${path}.mangoConf`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.assUrl == null || target.assUrl == undefined) ){
                err.push(path + ".assUrl is required") ;
              }
              

              if(target.assUrl != null && target.assUrl != undefined ){
                
                
                res = Entity_application_configuration_qbp.checkassUrl(target.assUrl , `${path}.assUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.featuresConf != null && target.featuresConf != undefined ){
                
                
                res = Entity_application_configuration_qbp.checkfeaturesConf(target.featuresConf , `${path}.featuresConf`) ;
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
          
            case 'qbpCustomerApi':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qbpBddUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'fsoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'mangoConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_MangoConf.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
            case 'assUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'featuresConf':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity_QbpFeaturesConfiguration.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
         
          default:
            return Entity_application_configuration  .castQueryParam(key, value) ;
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
          
      
      case 'qbpCustomerApi':
       
             return null ;
       
        
       
      
      
      case 'qbpBddUrl':
       
             return null ;
       
        
       
      
      
      case 'fsoUrl':
       
             return null ;
       
        
       
      
      
      case 'mangoConf':
       
        
              
             return Index.Entity_MangoConf.getClassNameOfProp(subPath) ;
              
       
       
      
      
      case 'assUrl':
       
             return null ;
       
        
       
      
      
      case 'featuresConf':
       
        
              
             return Index.Entity_QbpFeaturesConfiguration.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



