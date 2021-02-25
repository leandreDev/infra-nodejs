import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;


import {Entity_periodicalDistrution } from "./periodicalDistrution"


/**
  permet de limiter la distribution chaque jour du mois
*/
export class Entity_periodicalDistrution_month extends   Entity_periodicalDistrution    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'periodicalDistrution_month' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_periodicalDistrution.cast(obj , true)
    
    
        
        if(obj["startDay"] != undefined){
          
           obj["startDay"] = new Number(obj["startDay"]).valueOf();
          
        }
        
    
        
        if(obj["endDay"] != undefined){
          
           obj["endDay"] = new Number(obj["endDay"]).valueOf();
          
        }
        
    
  }


 

public static checkstartDay(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
          }
        
         
          if(val > 1){
            res.push(`${path} must be greater than  1`) ;
          }
        
        
          if(val < 31){
            res.push(`${path} must be less than 31`) ;
          }
        

        
          if(val % 1 !== 0){
            res.push(`${path} must be % 1`) ;
          }
        

        

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkendDay(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
          }
        
         
          if(val > 1){
            res.push(`${path} must be greater than  1`) ;
          }
        
        
          if(val < 31){
            res.push(`${path} must be less than 31`) ;
          }
        

        
          if(val % 1 !== 0){
            res.push(`${path} must be % 1`) ;
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
          
              

              

              if(target.startDay != null && target.startDay != undefined ){
                
                
                res = Entity_periodicalDistrution_month.checkstartDay(target.startDay , `${path}.startDay`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.endDay != null && target.endDay != undefined ){
                
                
                res = Entity_periodicalDistrution_month.checkendDay(target.endDay , `${path}.endDay`) ;
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
          
            case 'startDay':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'endDay':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
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
          
      
      case 'startDay':
       
             return null ;
       
        
       
      
      
      case 'endDay':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_periodicalDistrution  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



