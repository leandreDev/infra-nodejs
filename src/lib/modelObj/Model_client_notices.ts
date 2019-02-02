import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  notices for client
*/
export class Model_client_notices extends  Base  implements Interface.Iclient_notices {

/**
  notices for client
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["values"] != undefined && obj["values"] != null && _.isArray(obj["values"])){
          

            this["values"] = obj["values"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["notice_field"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "client_notices" ;

        
              /**
        client notices values
        */
               public "values"?:Interface.Inotice_field[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["values"] != null && target["values"] != undefined ){
              
                  target["values"].forEach((_values , index:number)=>{
                  
                  
                    promArr.push( Index["notice_field"].check(_values, isCompleteObj , path+"values.")
                      .catch((err)=>{
                        throw new Error(path+"values index: "+ index +"is not notice_field")
                        

                      }) )
                  if(_values._class != null && _values._class != undefined){
                    promArr.push( Index[_values._class].check(_values, isCompleteObj , path+"values.")
                      .catch((err)=>{
                        throw new Error(path+"values index: "+ index +"is not a " + _values._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_client_notices>{
        return Model_client_notices.check(target, true, path).then(()=>{
          return new Model_client_notices(target) ;
        })
      }

   }
