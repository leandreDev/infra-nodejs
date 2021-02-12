import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service permettant de liker un objet de la base
*/
export class Model_service_like extends   Model_service   implements Interface.Iservice_like {

/**
  service permettant de liker un objet de la base
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["likeCollection"] != undefined){
          
           this["likeCollection"] = obj["likeCollection"].toString() ;
           
        }
        
    
        
        if(obj["noteCollection"] != undefined){
          
           this["noteCollection"] = obj["noteCollection"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_like" ;

        
              /**
        url de la collection des like
        */
               public "likeCollection":string ;
              
       
              /**
        url de la collection de notes
        */
               public "noteCollection":string ;
              
       


       

   }
