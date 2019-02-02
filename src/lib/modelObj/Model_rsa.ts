import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_certificat } from "./Model_certificat"


/**
  certificat RSA
*/
export class Model_rsa extends   Model_certificat   implements Interface.Irsa {

/**
  certificat RSA
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["kty"] != undefined){
          
           this["kty"] = obj["kty"].toString() ;
           
        }
        
    
        
        if(obj["use"] != undefined){
          
           this["use"] = obj["use"].toString() ;
           
        }
        
    
        
        if(obj["d"] != undefined){
          
           this["d"] = obj["d"].toString() ;
           
        }
        
    
        
        if(obj["dp"] != undefined){
          
           this["dp"] = obj["dp"].toString() ;
           
        }
        
    
        
        if(obj["dq"] != undefined){
          
           this["dq"] = obj["dq"].toString() ;
           
        }
        
    
        
        if(obj["e"] != undefined){
          
           this["e"] = obj["e"].toString() ;
           
        }
        
    
        
        if(obj["n"] != undefined){
          
           this["n"] = obj["n"].toString() ;
           
        }
        
    
        
        if(obj["p"] != undefined){
          
           this["p"] = obj["p"].toString() ;
           
        }
        
    
        
        if(obj["q"] != undefined){
          
           this["q"] = obj["q"].toString() ;
           
        }
        
    
        
        if(obj["qi"] != undefined){
          
           this["qi"] = obj["qi"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "rsa" ;

        
              /**
        kty
        */
               public "kty"?:string ;
              
       
              /**
        usage
        */
               public "use"?:string ;
              
       
              /**
        d
        */
               public "d"?:string ;
              
       
              /**
        dp
        */
               public "dp"?:string ;
              
       
              /**
        dq
        */
               public "dq"?:string ;
              
       
              /**
        e
        */
               public "e"?:string ;
              
       
              /**
        n
        */
               public "n"?:string ;
              
       
              /**
        p
        */
               public "p"?:string ;
              
       
              /**
        q
        */
               public "q"?:string ;
              
       
              /**
        qi
        */
               public "qi"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["kty"] != null && target["kty"] != undefined ){
              
                let _kty  = target["kty"] ;
                

                 if(! _.isString(_kty)){
                    throw new Error(path+"kty is not a string") ;
                    
                  }
                  
                  
                    let _enum_kty:string[] = ["RSA"] ;
                    if(_enum_kty.indexOf(_kty)==-1){
                        throw new Error(path+"kty dont match one of RSA" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["use"] != null && target["use"] != undefined ){
              
                let _use  = target["use"] ;
                

                 if(! _.isString(_use)){
                    throw new Error(path+"use is not a string") ;
                    
                  }
                  
                  
                    let _enum_use:string[] = ["sig","enc"] ;
                    if(_enum_use.indexOf(_use)==-1){
                        throw new Error(path+"use dont match one of sig , enc" ) ;
                        
                    }
                  
                 
              
              
           }
           
              
              if(target["d"] != null && target["d"] != undefined ){
              
                let _d  = target["d"] ;
                

                 if(! _.isString(_d)){
                    throw new Error(path+"d is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["dp"] != null && target["dp"] != undefined ){
              
                let _dp  = target["dp"] ;
                

                 if(! _.isString(_dp)){
                    throw new Error(path+"dp is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["dq"] != null && target["dq"] != undefined ){
              
                let _dq  = target["dq"] ;
                

                 if(! _.isString(_dq)){
                    throw new Error(path+"dq is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["e"] != null && target["e"] != undefined ){
              
                let _e  = target["e"] ;
                

                 if(! _.isString(_e)){
                    throw new Error(path+"e is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["n"] != null && target["n"] != undefined ){
              
                let _n  = target["n"] ;
                

                 if(! _.isString(_n)){
                    throw new Error(path+"n is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["p"] != null && target["p"] != undefined ){
              
                let _p  = target["p"] ;
                

                 if(! _.isString(_p)){
                    throw new Error(path+"p is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["q"] != null && target["q"] != undefined ){
              
                let _q  = target["q"] ;
                

                 if(! _.isString(_q)){
                    throw new Error(path+"q is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["qi"] != null && target["qi"] != undefined ){
              
                let _qi  = target["qi"] ;
                

                 if(! _.isString(_qi)){
                    throw new Error(path+"qi is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_rsa>{
        return Model_rsa.check(target, true, path).then(()=>{
          return new Model_rsa(target) ;
        })
      }

   }
