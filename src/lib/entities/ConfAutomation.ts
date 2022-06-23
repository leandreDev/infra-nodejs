import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@leandredev/utils" ;



/**
  Configuration pour les automation des services qbp
*/
export class Entity_ConfAutomation extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'ConfAutomation' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["datesForGeneratePayout"] != undefined && obj["datesForGeneratePayout"] != null && _.isArray(obj["datesForGeneratePayout"])){
          

           obj["datesForGeneratePayout"] = obj["datesForGeneratePayout"].map((value)=>{
              return new Number(value).valueOf();
            })
          
        }
        
    
        
        if(obj["datesForGenerateInvoice"] != undefined && obj["datesForGenerateInvoice"] != null && _.isArray(obj["datesForGenerateInvoice"])){
          

           obj["datesForGenerateInvoice"] = obj["datesForGenerateInvoice"].map((value)=>{
              return new Number(value).valueOf();
            })
          
        }
        
    
  }


 

public static checkdatesForGeneratePayout(val:any, path:string =null):string[]{
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


       
 

public static checkdatesForGenerateInvoice(val:any, path:string =null):string[]{
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
        
          
          
              

              

              if(target.datesForGeneratePayout != null && target.datesForGeneratePayout != undefined ){
                
                
                target.datesForGeneratePayout.forEach((data, index)=>{
                  res = Entity_ConfAutomation.checkdatesForGeneratePayout(target.datesForGeneratePayout[index] , `${path}.datesForGeneratePayout.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
              }

              
              
           
              

              

              if(target.datesForGenerateInvoice != null && target.datesForGenerateInvoice != undefined ){
                
                
                target.datesForGenerateInvoice.forEach((data, index)=>{
                  res = Entity_ConfAutomation.checkdatesForGenerateInvoice(target.datesForGenerateInvoice[index] , `${path}.datesForGenerateInvoice.${index}` ) ;
                  if(res && res.length > 0){
                    err = [...err , ...res] ;
                  }
                })
                
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
          
            case 'datesForGeneratePayout':
              //number
              
              
              return new Number(value).valueOf() ;
              
              
              
              
              
              
            break;
          
            case 'datesForGenerateInvoice':
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
          
      
      case 'datesForGeneratePayout':
       
             return null ;
       
        
       
      
      
      case 'datesForGenerateInvoice':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



