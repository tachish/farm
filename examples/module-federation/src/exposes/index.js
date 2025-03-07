import { Button } from "./button.js";
const asyncModule = await import("./async-module.js");

const res = {
    Button,
    asyncModule
}
console.log('res is: ', res);
export default res;