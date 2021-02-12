import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


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
              
       


       

   }
