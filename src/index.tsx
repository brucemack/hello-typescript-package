// This is the main file for the package.  This will bring together 
// everything that needs to be exported and will export it in 
// one shot (see export{} at bottom of file).
// 
// Importers will use something like this:
//
// import { Comp, test1 } from "hello-typescript-package";
//
import Comp from "./Comp";

function test1(): string {
    return "Hello world from the module!"
}

export { Comp, test1 };

