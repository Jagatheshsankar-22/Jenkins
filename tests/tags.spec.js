import {test, expect} from "@playwright/test"


test ("one @reg", async()=>{
   console.log("test one in excecuted succesfully");
})
test ("two @reg ", async()=>{
   console.log("test two in excecuted succesfully");
})

test ("three @reg @smoke", async()=>{
   console.log("test three in excecuted succesfully");
})

test ("four @smoke", async()=>{
   console.log("test four in excecuted succesfully");
})


test ("five @smoke @sanity", async()=>{
   console.log("test five in excecuted succesfully");
})

test ("six @sanity", async()=>{
   console.log("test six in excecuted succesfully");
})

test ("seven @smoke", async()=>{
   console.log("test seven in excecuted succesfully");
})

test ("eight @reg", async()=>{
   console.log("test eight in excecuted succesfully");
})
