import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


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
        
    
        
        if(obj["qbpFsoUrl"] != undefined){
          
           obj["qbpFsoUrl"] = obj["qbpFsoUrl"].toString() ;
           
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


       
 

public static checkqbpFsoUrl(val:any, path:string =null):string[]{
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

              
              
           
              

              

              if(target.qbpFsoUrl != null && target.qbpFsoUrl != undefined ){
                
                
                res = Entity_application_configuration_qbp.checkqbpFsoUrl(target.qbpFsoUrl , `${path}.qbpFsoUrl`) ;
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
          
            case 'qbpFsoUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
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
       
        
       
      
      
      case 'qbpFsoUrl':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



