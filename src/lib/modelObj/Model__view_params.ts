import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model__view } from "./Model__view"


/**
  view avec des params
*/
export class Model__view_params extends   Model__view   implements Interface.I_view_params {

/**
  view avec des params
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["params"] != undefined && obj["params"] != null && _.isArray(obj["params"])){
          

            this["params"] = obj["params"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["routeParam"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["castParams"] != undefined && obj["castParams"] != null && _.isArray(obj["castParams"])){
          

            this["castParams"] = obj["castParams"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["castParam"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "_view_params" ;

        
              /**
        liste des paramètres de la route
        */
               public "params"?:Interface.IrouteParam[];
              
       
              /**
        parametre a caster
        */
               public "castParams"?:Interface.IcastParam[];
              
       


       

   }
