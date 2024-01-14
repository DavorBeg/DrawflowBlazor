"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayHello = exports.CreateDrawflow = exports.y = exports.x = void 0;
const eventsz = __importStar(require("./DrawflowBlazorEvents"));
let GlobalDrawflowObj = undefined;
exports.x = 1;
exports.y = 2;
function CreateDrawflow() {
    if (GlobalDrawflowObj != undefined)
        throw Error("Drawflow have already been created");
}
exports.CreateDrawflow = CreateDrawflow;
// delete it later
function SayHello() {
    console.log("Hello from DrawflowBlazor.js!");
    eventsz.PrintX();
}
exports.SayHello = SayHello;
