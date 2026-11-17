import {test,expect} from "@playwright/test"

test("GET",async({request})=>{
    const response=await request.get("https://api.github.com/user/repos",{
              headers:{
            Authorization: 'Bearer  $
            {process.env.GITHUB_TOKEN}'
        }
       })
        expect(response.status()).toBe(200)
        console.log("STATUS:", response.status());

        const body=await response.json()

        console.log(body);
})




test("POST", async({request})=>{

    const response=await request.post("https://api.github.com/user/repos",{
        data:{
            "name": "Post-testing",
            "description": "This is your first repo!",
            "homepage": "https://github.com",
            "private": false,
            "is_template": true
        },
         headers:{
            Authorization: 'Bearer  $
            {process.env.GITHUB_TOKEN}'
        }

    })

    expect(response.status()).toBe(201)
    console.log("STATUS:", response.status());

    const body=await response.json()
    console.log(body);
    
})

test("PATCH", async({request})=>{
    const response=await request.patch("https://api.github.com/repos/Jagatheshsankar-22/Hello-world",{
        data:{
            "name": "Patch-testing",
            "description": "This is your first repository",
            "homepage": "https://github.com",
            "private": true,
            "has_issues": true,
            "has_projects": true,
            "has_wiki": true
        },

         headers:{
            Authorization: 'Bearer  $
            {process.env.GITHUB_TOKEN}'
        }
    })

    expect(response.status()).toBe(200)
    console.log("STATUS:", response.status());

    const body=await response.json()
    console.log(body)
})

test("PUT", async({request})=>{
    const response=await request.put("https://api.github.com/repos/Jagatheshsankar-22/Hello-world/topics",{
        data:{
            "names": [
            "octocat",
            "atom",
            "electron",
            "api"
        ]
        },
        headers:{
            Authorization: 'Bearer  $
            {process.env.GITHUB_TOKEN}'
        }
    })

    expect(response.status()).toBe(200)
    console.log("STATUS:",response.status());

    const body=await response.json()
    console.log(body);
})


test("DELETE",async({request})=>{
    const response=await request.delete("https://api.github.com/repos/Jagatheshsankar-22/Post-testing",{
         headers:{
            Authorization: 'Bearer  $
            {process.env.GITHUB_TOKEN}'
        }
    })
   
    expect(response.status()).toBe(204)
    console.log("STATUS:", response.status());
     
    // const body=await response.json()
    // console.log(body);
})