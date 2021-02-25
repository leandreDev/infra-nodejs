import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_periodicalDistrution } from "./periodicalDistrution"


/**
  permet de créer une plage de date de distribution
*/
export class Entity_periodicalDistrution_periode extends   Entity_periodicalDistrution    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'periodicalDistrution_periode' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_periodicalDistrution.cast(obj , true)
    
    
        
        if(obj["startDate"] != undefined){
          
            obj["startDate"] = new Date(obj["startDate"]) ;
          
        }
        
    
        
        if(obj["endDate"] != undefined){
          
            obj["endDate"] = new Date(obj["endDate"]) ;
          
        }
        
    
  }


 

public static checkstartDate(val:any, path:string =null):string[]{
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


       
 

public static checkendDate(val:any, path:string =null):string[]{
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
        
          err = Entity_periodicalDistrution.check(target, isCompleteObj , path) ;
          
              

              

              if(target.startDate != null && target.startDate != undefined ){
                
                
                res = Entity_periodicalDistrution_periode.checkstartDate(target.startDate , `${path}.startDate`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.endDate != null && target.endDate != undefined ){
                
                
                res = Entity_periodicalDistrution_periode.checkendDate(target.endDate , `${path}.endDate`) ;
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
          
            case 'startDate':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
            case 'endDate':
              //date
              
              
              
              
              return new Date(value) ;
              
              
              
              
            break;
          
         
          default:
            return Entity_periodicalDistrution  .castQueryParam(key, value) ;
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
          
      
      case 'startDate':
       
             return null ;
       
        
       
      
      
      case 'endDate':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_periodicalDistrution  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



