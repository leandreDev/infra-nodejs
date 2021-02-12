import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_application_configuration } from "./application_configuration"


/**
  configuration générale application celio
*/
export class Entity_application_configuration_celio extends   Entity_application_configuration    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'application_configuration_celio' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_application_configuration.cast(obj , true)
    
    
        
        if(obj["fidServiceUrl"] != undefined){
          
           obj["fidServiceUrl"] = obj["fidServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["qcmServiceUrl"] != undefined){
          
           obj["qcmServiceUrl"] = obj["qcmServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["FidBDDUrl"] != undefined){
          
           obj["FidBDDUrl"] = obj["FidBDDUrl"].toString() ;
           
        }
        
    
        
        if(obj["QcmBDDUrl"] != undefined){
          
           obj["QcmBDDUrl"] = obj["QcmBDDUrl"].toString() ;
           
        }
        
    
  }


 

public static checkfidServiceUrl(val:any, path:string =null):string[]{
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


       
 

public static checkqcmServiceUrl(val:any, path:string =null):string[]{
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


       
 

public static checkFidBDDUrl(val:any, path:string =null):string[]{
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


       
 

public static checkQcmBDDUrl(val:any, path:string =null):string[]{
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
          
              

              
              if( isCompleteObj && (target.fidServiceUrl == null || target.fidServiceUrl == undefined) ){
                err.push(path + ".fidServiceUrl is required") ;
              }
              

              if(target.fidServiceUrl != null && target.fidServiceUrl != undefined ){
                
                
                res = Entity_application_configuration_celio.checkfidServiceUrl(target.fidServiceUrl , `${path}.fidServiceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.qcmServiceUrl != null && target.qcmServiceUrl != undefined ){
                
                
                res = Entity_application_configuration_celio.checkqcmServiceUrl(target.qcmServiceUrl , `${path}.qcmServiceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.FidBDDUrl != null && target.FidBDDUrl != undefined ){
                
                
                res = Entity_application_configuration_celio.checkFidBDDUrl(target.FidBDDUrl , `${path}.FidBDDUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.QcmBDDUrl != null && target.QcmBDDUrl != undefined ){
                
                
                res = Entity_application_configuration_celio.checkQcmBDDUrl(target.QcmBDDUrl , `${path}.QcmBDDUrl`) ;
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
          
            case 'fidServiceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'qcmServiceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'FidBDDUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'QcmBDDUrl':
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
          
      
      case 'fidServiceUrl':
       
             return null ;
       
        
       
      
      
      case 'qcmServiceUrl':
       
             return null ;
       
        
       
      
      
      case 'FidBDDUrl':
       
             return null ;
       
        
       
      
      
      case 'QcmBDDUrl':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



