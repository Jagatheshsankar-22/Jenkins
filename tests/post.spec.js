
test("POST", async({request})=>{

    const response=await request.post("https://api.github.com/user/repos",{
        data:{
            "name": "Hello-World",
            "description": "This is your first repo!",
           "homepage": "https://github.com",
            "private": false,
            "is_template": true
        },
        headers:{
            Authorization: 'Bearer $
            {process.env.API_Token}'
        }

    })

    expect(response.status()).toBe(201)
    console.log("STATUS:", response.status());

    const body=await response.json()
    console.log(body);
    
})