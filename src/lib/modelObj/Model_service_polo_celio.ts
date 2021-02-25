import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service de tirage au sort de polo
*/
export class Model_service_polo_celio extends   Model_service   implements Interface.Iservice_polo_celio {

/**
  service de tirage au sort de polo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bdd_url"] != undefined){
          
           this["bdd_url"] = obj["bdd_url"].toString() ;
           
        }
        
    
        
        if(obj["maxNumberOfWinner"] != undefined){
          
           this["maxNumberOfWinner"] = new Number(obj["maxNumberOfWinner"]).valueOf();
          
        }
        
    
        
        if(obj["drawStat"] != undefined){
          
           this["drawStat"] = new Number(obj["drawStat"]).valueOf();
          
        }
        
    
        
        if(obj["bigDrawStat"] != undefined){
          
           this["bigDrawStat"] = new Number(obj["bigDrawStat"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "service_polo_celio" ;

        
              /**
        url du service de bdd
        */
               public "bdd_url"?:string ;
              
       
              /**
        nombre maximum de gagnan
        */
               public "maxNumberOfWinner":number =500;
              
       
              /**
        stat de tirage
        */
               public "drawStat"?:number ;
              
       
              /**
        stat de tirage du gros lot
        */
               public "bigDrawStat"?:number ;
              
       


       

   }
