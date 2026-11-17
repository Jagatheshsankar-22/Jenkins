import {test, expect} from "@playwright/test"

test.describe("personal", async()=>{
    test ("aadhar", async()=>{
    console.log("aadhar details");
})
    test ("pan", async()=>{
    console.log("pan details");
})
})


test.describe("work", async()=>{
    test ("education", async()=>{
    console.log("education details");
})

    test ("experience", async()=>{
    console.log("experience details");
})
    test ("project", async()=>{
    console.log("project details");
})

    test ("TC", async()=>{
    console.log("terms and condition");
})
})
