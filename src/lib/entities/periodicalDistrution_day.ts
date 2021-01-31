import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;


import {Entity_periodicalDistrution } from "./periodicalDistrution"


/**
  journée autorisé
*/
export class Entity_periodicalDistrution_day extends   Entity_periodicalDistrution    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'periodicalDistrution_day' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_periodicalDistrution.cast(obj , true)
    
    
        
        if(obj["lundi"] != undefined){
          
           obj["lundi"] = new Boolean(obj["lundi"]).valueOf() ;
          
        }
        
    
        
        if(obj["mardi"] != undefined){
          
           obj["mardi"] = new Boolean(obj["mardi"]).valueOf() ;
          
        }
        
    
        
        if(obj["mercredi"] != undefined){
          
           obj["mercredi"] = new Boolean(obj["mercredi"]).valueOf() ;
          
        }
        
    
        
        if(obj["jeudi"] != undefined){
          
           obj["jeudi"] = new Boolean(obj["jeudi"]).valueOf() ;
          
        }
        
    
        
        if(obj["vendredi"] != undefined){
          
           obj["vendredi"] = new Boolean(obj["vendredi"]).valueOf() ;
          
        }
        
    
        
        if(obj["samedi"] != undefined){
          
           obj["samedi"] = new Boolean(obj["samedi"]).valueOf() ;
          
        }
        
    
        
        if(obj["dimanche"] != undefined){
          
           obj["dimanche"] = new Boolean(obj["dimanche"]).valueOf() ;
          
        }
        
    
  }


 

public static checklundi(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmardi(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmercredi(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkjeudi(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkvendredi(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksamedi(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
          }
        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkdimanche(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
          if( ! _.isBoolean(val)){
            res.push(`${path}  is not a boolean`) ;   
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
          
              

              

              if(target.lundi != null && target.lundi != undefined ){
                
                
                res = Entity_periodicalDistrution_day.checklundi(target.lundi , `${path}.lundi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mardi != null && target.mardi != undefined ){
                
                
                res = Entity_periodicalDistrution_day.checkmardi(target.mardi , `${path}.mardi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.mercredi != null && target.mercredi != undefined ){
                
                
                res = Entity_periodicalDistrution_day.checkmercredi(target.mercredi , `${path}.mercredi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.jeudi != null && target.jeudi != undefined ){
                
                
                res = Entity_periodicalDistrution_day.checkjeudi(target.jeudi , `${path}.jeudi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.vendredi != null && target.vendredi != undefined ){
                
                
                res = Entity_periodicalDistrution_day.checkvendredi(target.vendredi , `${path}.vendredi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.samedi != null && target.samedi != undefined ){
                
                
                res = Entity_periodicalDistrution_day.checksamedi(target.samedi , `${path}.samedi`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.dimanche != null && target.dimanche != undefined ){
                
                
                res = Entity_periodicalDistrution_day.checkdimanche(target.dimanche , `${path}.dimanche`) ;
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
          
            case 'lundi':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'mardi':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'mercredi':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'jeudi':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'vendredi':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'samedi':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
            break;
          
            case 'dimanche':
              //boolean
              
              
              
              return new Boolean(value).valueOf() ;
              
              
              
              
              
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
          
      
      case 'lundi':
       
             return null ;
       
        
       
      
      
      case 'mardi':
       
             return null ;
       
        
       
      
      
      case 'mercredi':
       
             return null ;
       
        
       
      
      
      case 'jeudi':
       
             return null ;
       
        
       
      
      
      case 'vendredi':
       
             return null ;
       
        
       
      
      
      case 'samedi':
       
             return null ;
       
        
       
      
      
      case 'dimanche':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_periodicalDistrution  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



