import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_string } from "./Model_string"


/**
  champ pour le html
*/
export class Model_htmltexte extends   Model_string   implements Interface.Ihtmltexte {

/**
  champ pour le html
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           this["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["isArrayOf"] != undefined){
          
           this["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf() ;
          
        }
        
    
        
        if(obj["required"] != undefined){
          
           this["required"] = new Boolean(obj["required"]).valueOf() ;
          
        }
        
    
        
        if(obj["unique"] != undefined){
          
           this["unique"] = new Boolean(obj["unique"]).valueOf() ;
          
        }
        
    
        
        if(obj["index"] != undefined){
          
           this["index"] = new Boolean(obj["index"]).valueOf() ;
          
        }
        
    
        
        if(obj["default"] != undefined){
          
           this["default"] = obj["default"].toString() ;
           
        }
        
    
        
        if(obj["lowercase"] != undefined){
          
           this["lowercase"] = new Boolean(obj["lowercase"]).valueOf() ;
          
        }
        
    
        
        if(obj["uppercase"] != undefined){
          
           this["uppercase"] = new Boolean(obj["uppercase"]).valueOf() ;
          
        }
        
    
        
        if(obj["trim"] != undefined){
          
           this["trim"] = new Boolean(obj["trim"]).valueOf() ;
          
        }
        
    
        
        if(obj["match"] != undefined){
          
           this["match"] = obj["match"].toString() ;
           
        }
        
    
        
        if(obj["enum"] != undefined && obj["enum"] != null && _.isArray(obj["enum"])){
          
           this["enum"] = obj["enum"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "htmltexte" ;

        
              /**
        représente le nom du champ
        */
               public "name":string ;
              
       
              /**
        c'est la description du champ. il permet de générer l'aide ou la documentation
        */
               public "description":string ;
              
       
              /**
        permet d'indiquer que le champ est un tableau
        */
               public "isArrayOf"?:boolean ;
              
       
              /**
        si le champ est obligatoire
        */
               public "required"?:boolean ;
              
       
              /**
        indique que la valeur du champ doit être unique
        */
               public "unique"?:boolean ;
              
       
              /**
        ????? je suis plus sure
        */
               public "index"?:boolean ;
              
       
              /**
        valeur par defaut
        */
               public "default"?:string ;
              
       
              /**
        convertie la donnée en minuscule
        */
               public "lowercase"?:boolean ;
              
       
              /**
        convertie la donnée en majuscule
        */
               public "uppercase"?:boolean ;
              
       
              /**
        élimine les espaces au début et a la fin de la valeur
        */
               public "trim"?:boolean ;
              
       
              /**
        ne pas utiliser pour l'instant ce doit être une expression regulière
        */
               public "match"?:string ;
              
       
              /**
        liste des valeur possible du champ
        */
               public "enum"?:string[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["name"] == null || target["name"] == undefined) ){
                  throw new Error(path + "name is required") ;
              }
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["description"] == null || target["description"] == undefined) ){
                  throw new Error(path + "description is required") ;
              }
              
              if(target["description"] != null && target["description"] != undefined ){
              
                let _description  = target["description"] ;
                

                 if(! _.isString(_description)){
                    throw new Error(path+"description is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["isArrayOf"] != null && target["isArrayOf"] != undefined ){
              
                let _isArrayOf  = target["isArrayOf"] ;
                
                  if(! _.isBoolean(_isArrayOf)){
                    throw new Error(path+"isArrayOf is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["required"] != null && target["required"] != undefined ){
              
                let _required  = target["required"] ;
                
                  if(! _.isBoolean(_required)){
                    throw new Error(path+"required is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["unique"] != null && target["unique"] != undefined ){
              
                let _unique  = target["unique"] ;
                
                  if(! _.isBoolean(_unique)){
                    throw new Error(path+"unique is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["index"] != null && target["index"] != undefined ){
              
                let _index  = target["index"] ;
                
                  if(! _.isBoolean(_index)){
                    throw new Error(path+"index is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["default"] != null && target["default"] != undefined ){
              
                let _default  = target["default"] ;
                

                 if(! _.isString(_default)){
                    throw new Error(path+"default is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["lowercase"] != null && target["lowercase"] != undefined ){
              
                let _lowercase  = target["lowercase"] ;
                
                  if(! _.isBoolean(_lowercase)){
                    throw new Error(path+"lowercase is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["uppercase"] != null && target["uppercase"] != undefined ){
              
                let _uppercase  = target["uppercase"] ;
                
                  if(! _.isBoolean(_uppercase)){
                    throw new Error(path+"uppercase is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["trim"] != null && target["trim"] != undefined ){
              
                let _trim  = target["trim"] ;
                
                  if(! _.isBoolean(_trim)){
                    throw new Error(path+"trim is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["match"] != null && target["match"] != undefined ){
              
                let _match  = target["match"] ;
                

                 if(! _.isString(_match)){
                    throw new Error(path+"match is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["enum"] != null && target["enum"] != undefined ){
              
                target["enum"].forEach((_enum , index:number)=>{
                

                 if(! _.isString(_enum)){
                    throw new Error(path+"enum index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_htmltexte>{
        return Model_htmltexte.check(target, true, path).then(()=>{
          return new Model_htmltexte(target) ;
        })
      }

   }
