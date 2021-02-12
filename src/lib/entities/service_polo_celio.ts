import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_service } from "./service"


/**
  service de tirage au sort de polo
*/
export class Entity_service_polo_celio extends   Entity_service    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'service_polo_celio' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_service.cast(obj , true)
    
    
        
        if(obj["bdd_url"] != undefined){
          
           obj["bdd_url"] = obj["bdd_url"].toString() ;
           
        }
        
    
        
        if(obj["maxNumberOfWinner"] != undefined){
          
           obj["maxNumberOfWinner"] = new Number(obj["maxNumberOfWinner"]).valueOf();
          
        }
        
    
        
        if(obj["drawStat"] != undefined){
          
           obj["drawStat"] = new Number(obj["drawStat"]).valueOf();
          
        }
        
    
        
        if(obj["bigDrawStat"] != undefined){
          
           obj["bigDrawStat"] = new Number(obj["bigDrawStat"]).valueOf();
          
        }
        
    
  }


 

public static checkbdd_url(val:any, path:string =null):string[]{
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


       
 

public static checkmaxNumberOfWinner(val:any, path:string =null):string[]{
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


       
 

public static checkdrawStat(val:any, path:string =null):string[]{
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


       
 

public static checkbigDrawStat(val:any, path:string =null):string[]{
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


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_service.check(target, isCompleteObj , path) ;
          
              

              

              if(target.bdd_url != null && target.bdd_url != undefined ){
                
                
                res = Entity_service_polo_celio.checkbdd_url(target.bdd_url , `${path}.bdd_url`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.maxNumberOfWinner == null || target.maxNumberOfWinner == undefined) ){
                err.push(path + ".maxNumberOfWinner is required") ;
              }
              

              if(target.maxNumberOfWinner != null && target.maxNumberOfWinner != undefined ){
                
                
                res = Entity_service_polo_celio.checkmaxNumberOfWinner(target.maxNumberOfWinner , `${path}.maxNumberOfWinner`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.drawStat != null && target.drawStat != undefined ){
                
                
                res = Entity_service_polo_celio.checkdrawStat(target.drawStat , `${path}.drawStat`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.bigDrawStat != null && target.bigDrawStat != undefined ){
                
                
                res = Entity_service_polo_celio.checkbigDrawStat(target.bigDrawStat , `${path}.bigDrawStat`) ;
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
          
            case 'bdd_url':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'maxNumberOfWinner':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'drawStat':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'bigDrawStat':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
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
          
      
      case 'bdd_url':
       
             return null ;
       
        
       
      
      
      case 'maxNumberOfWinner':
       
             return null ;
       
        
       
      
      
      case 'drawStat':
       
             return null ;
       
        
       
      
      
      case 'bigDrawStat':
       
             return null ;
       
        
       
      
      
        default:
            return Entity_service  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



