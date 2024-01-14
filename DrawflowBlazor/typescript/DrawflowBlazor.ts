import Drawflow from "drawflow";
import * as eventsz from './DrawflowBlazorEvents'

let GlobalDrawflowObj: Drawflow | undefined = undefined;
export let x = 1;
export let y = 2;

export function CreateDrawflow()
{
    if(GlobalDrawflowObj != undefined) throw Error("Drawflow have already been created");
    
}

// delete it later
export function SayHello()
{
    console.log("Hello from DrawflowBlazor.js!");
    eventsz.PrintX();

}