import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["params"] != null && target["params"] != undefined ){
              
                  target["params"].forEach((_params , index:number)=>{
                  
                  
                    promArr.push( Index["routeParam"].check(_params, isCompleteObj , path+"params.")
                      .catch((err)=>{
                        throw new Error(path+"params index: "+ index +"is not routeParam")
                        

                      }) )
                  if(_params._class != null && _params._class != undefined){
                    promArr.push( Index[_params._class].check(_params, isCompleteObj , path+"params.")
                      .catch((err)=>{
                        throw new Error(path+"params index: "+ index +"is not a " + _params._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["castParams"] != null && target["castParams"] != undefined ){
              
                  target["castParams"].forEach((_castParams , index:number)=>{
                  
                  
                    promArr.push( Index["castParam"].check(_castParams, isCompleteObj , path+"castParams.")
                      .catch((err)=>{
                        throw new Error(path+"castParams index: "+ index +"is not castParam")
                        

                      }) )
                  if(_castParams._class != null && _castParams._class != undefined){
                    promArr.push( Index[_castParams._class].check(_castParams, isCompleteObj , path+"castParams.")
                      .catch((err)=>{
                        throw new Error(path+"castParams index: "+ index +"is not a " + _castParams._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model__view_params>{
        return Model__view_params.check(target, true, path).then(()=>{
          return new Model__view_params(target) ;
        })
      }

   }
