import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;



/**
  période de distribution
*/
export class Entity_periodicalDistrution extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'periodicalDistrution' && ['periodicalDistrution_month','periodicalDistrution_day','periodicalDistrution_periode',].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["nbMax"] != undefined){
          
           obj["nbMax"] = new Number(obj["nbMax"]).valueOf();
          
        }
        
    
        
        if(obj["currentNb"] != undefined){
          
           obj["currentNb"] = new Number(obj["currentNb"]).valueOf();
          
        }
        
    
  }


 

public static checknbMax(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
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


       
 

public static checkcurrentNb(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         
          if( ! _.isNumber(val)){
            res.push(`${path} is not a number`) ; 
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
        
          
          
              

              

              if(target.nbMax != null && target.nbMax != undefined ){
                
                
                res = Entity_periodicalDistrution.checknbMax(target.nbMax , `${path}.nbMax`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.currentNb != null && target.currentNb != undefined ){
                
                
                res = Entity_periodicalDistrution.checkcurrentNb(target.currentNb , `${path}.currentNb`) ;
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
          
            case 'nbMax':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'currentNb':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
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
          
      
      case 'nbMax':
       
             return null ;
       
        
       
      
      
      case 'currentNb':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



