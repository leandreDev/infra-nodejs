import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_licence } from "./licence"


/**
  c'est une licence qui dure un certain temps
*/
export class Entity_licence_temporelle extends   Entity_licence    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'licence_temporelle' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_licence.cast(obj , true)
    
    
        
        if(obj["validityStartDate"] != undefined){
          
            obj["validityStartDate"] = new Date(obj["validityStartDate"]) ;
          
        }
        
    
        
        if(obj["validityEndDate"] != undefined){
          
            obj["validityEndDate"] = new Date(obj["validityEndDate"]) ;
          
        }
        
    
        
        if(obj["licenceDuration"] != undefined){
          
           obj["licenceDuration"] = new Number(obj["licenceDuration"]).valueOf();
          
        }
        
    
        
        if(obj["licenceEndDate"] != undefined){
          
            obj["licenceEndDate"] = new Date(obj["licenceEndDate"]) ;
          
        }
        
    
  }


 

public static checkvalidityStartDate(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
          }
          
          
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkvalidityEndDate(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
          }
          
          
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checklicenceDuration(val:any, path:string =null):string[]{
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


       
 

public static checklicenceEndDate(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         
          if( ! _.isDate(val)){
            res.push(`${path}  is not a Date`) ;
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
        
          err = Entity_licence.check(target, isCompleteObj , path) ;
          
              

              

              if(target.validityStartDate != null && target.validityStartDate != undefined ){
                
                
                res = Entity_licence_temporelle.checkvalidityStartDate(target.validityStartDate , `${path}.validityStartDate`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.validityEndDate != null && target.validityEndDate != undefined ){
                
                
                res = Entity_licence_temporelle.checkvalidityEndDate(target.validityEndDate , `${path}.validityEndDate`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.licenceDuration != null && target.licenceDuration != undefined ){
                
                
                res = Entity_licence_temporelle.checklicenceDuration(target.licenceDuration , `${path}.licenceDuration`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.licenceEndDate != null && target.licenceEndDate != undefined ){
                
                
                res = Entity_licence_temporelle.checklicenceEndDate(target.licenceEndDate , `${path}.licenceEndDate`) ;
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
          
            case 'validityStartDate':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
            case 'validityEndDate':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
            case 'licenceDuration':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'licenceEndDate':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
         
          default:
            return Entity_licence  .castQueryParam(key, value) ;
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
          
      
      case 'validityStartDate':
       
             return null ;
       
        
       
      
      
      case 'validityEndDate':
       
             return null ;
       
        
       
      
      
      case 'licenceDuration':
       
             return null ;
       
        
       
      
      
      case 'licenceEndDate':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_licence  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



