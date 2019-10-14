import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_periodicalDistrution } from "./Model_periodicalDistrution"


/**
  journée autorisé
*/
export class Model_periodicalDistrution_day extends   Model_periodicalDistrution   implements Interface.IperiodicalDistrution_day {

/**
  journée autorisé
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["lundi"] != undefined){
          
           this["lundi"] = new Boolean(obj["lundi"]).valueOf() ;
          
        }
        
    
        
        if(obj["mardi"] != undefined){
          
           this["mardi"] = new Boolean(obj["mardi"]).valueOf() ;
          
        }
        
    
        
        if(obj["mercredi"] != undefined){
          
           this["mercredi"] = new Boolean(obj["mercredi"]).valueOf() ;
          
        }
        
    
        
        if(obj["jeudi"] != undefined){
          
           this["jeudi"] = new Boolean(obj["jeudi"]).valueOf() ;
          
        }
        
    
        
        if(obj["vendredi"] != undefined){
          
           this["vendredi"] = new Boolean(obj["vendredi"]).valueOf() ;
          
        }
        
    
        
        if(obj["samedi"] != undefined){
          
           this["samedi"] = new Boolean(obj["samedi"]).valueOf() ;
          
        }
        
    
        
        if(obj["dimanche"] != undefined){
          
           this["dimanche"] = new Boolean(obj["dimanche"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "periodicalDistrution_day" ;

        
              /**
        distribution autorisé le lundi
        */
               public "lundi"?:boolean ;
              
       
              /**
        distribution autorisé le mardi
        */
               public "mardi"?:boolean ;
              
       
              /**
        distribution autorisé le  mercredi
        */
               public "mercredi"?:boolean ;
              
       
              /**
        distribution autorisé le jeudi
        */
               public "jeudi"?:boolean ;
              
       
              /**
        distribution autorisé le vendredi
        */
               public "vendredi"?:boolean ;
              
       
              /**
        distribution autorisé le samedi
        */
               public "samedi"?:boolean ;
              
       
              /**
        distribution autorisé le dimanche
        */
               public "dimanche"?:boolean ;
              
       


       

   }
