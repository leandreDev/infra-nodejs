import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "utils" ;



/**
  créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
*/
export class Entity__view extends  Entity   {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != '_view' && ['_view_params',].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity.cast(obj, true) 
    
    
        
        if(obj["name"] != undefined){
          
           obj["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           obj["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["output"] != undefined){
          
          if(_.isString(obj["output"])){
            obj["output"] = new mongo.ObjectId(obj["output"]);
          }else if(obj["output"]._id){
            obj["output"] = new mongo.ObjectId(obj["output"]._id) ;
          }
          
        }
        
    
        
        if(obj["model"] != undefined){
          
          if(_.isString(obj["model"])){
            obj["model"] = new mongo.ObjectId(obj["model"]);
          }else if(obj["model"]._id){
            obj["model"] = new mongo.ObjectId(obj["model"]._id) ;
          }
          
        }
        
    
        
        if(obj["pipeline"] != undefined && obj["pipeline"] != null && _.isArray(obj["pipeline"])){
          
           obj["pipeline"] = obj["pipeline"].map((value)=>{
              return value;
            })
          
        }
        
    
  }


 

public static checkname(val:any, path:string =null):string[]{
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


       
 

public static checkdescription(val:any, path:string =null):string[]{
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


       
 

public static checkoutput(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkmodel(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
          if( ! mongo.ObjectId.isValid(val)){
            res.push(`${path}  is not an ObjectId`) ;     
          }
         
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkpipeline(val:any, path:string =null):string[]{
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
        
          
          
              

              
              if( isCompleteObj && (target.name == null || target.name == undefined) ){
                err.push(path + ".name is required") ;
              }
              

              if(target.name != null && target.name != undefined ){
                
                
                res = Entity__view.checkname(target.name , `${path}.name`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.description == null || target.description == undefined) ){
                err.push(path + ".description is required") ;
              }
              

              if(target.description != null && target.description != undefined ){
                
                
                res = Entity__view.checkdescription(target.description , `${path}.description`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.output == null || target.output == undefined) ){
                err.push(path + ".output is required") ;
              }
              

              if(target.output != null && target.output != undefined ){
                
                
                res = Entity__view.checkoutput(target.output , `${path}.output`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.model == null || target.model == undefined) ){
                err.push(path + ".model is required") ;
              }
              

              if(target.model != null && target.model != undefined ){
                
                
                res = Entity__view.checkmodel(target.model , `${path}.model`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.pipeline != null && target.pipeline != undefined ){
                
                
                target.pipeline.forEach((data, index)=>{
                  res = Entity__view.checkpipeline(target.pipeline[index] , `${path}.pipeline.${index}` ) ;
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
          
            case 'name':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'description':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'output':
              //modelid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'model':
              //modelid
              
              
              
              
              
              
              return new mongo.ObjectId(value) ;
              
              
            break;
          
            case 'pipeline':
              //object
              
              
              
              
              
              return value ;
              
              
              
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
          
      
      case 'name':
       
             return null ;
       
        
       
      
      
      case 'description':
       
             return null ;
       
        
       
      
      
      case 'output':
       
        
       
      
              return 'protoschema' ;
              
      
      case 'model':
       
        
       
      
              return 'protoschema' ;
              
      
      case 'pipeline':
       
             return null ;
       
        
       
      
      
        default:
            return Entity.getClassNameOfProp(key) ;
            break;
        }
       
}


   }



