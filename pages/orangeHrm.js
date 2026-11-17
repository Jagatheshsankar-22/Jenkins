// class Orange{

//     constructor(page){
//         this.page=page
//         this.username=page.locator('//input[@name="username"]')
//         this.password=page.locator('//input[@name="password"]')
//         this.submit=page.locator('//button[@type="submit"]')
//     }

// async navigation(){
//     await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// }

// async login(uname,pword){
//     await this.username.fill(uname)
//     await this.password.fill(pword)
//     await this.submit.click()
// }



// }
//  export default Orange



//  class StudentDetails{

//     name="jagathesh"
//     std="X"
//     section="B"
//     marks=485
//     percentage="97%"

//     detailOne(){
//         console.log("student name is", this.name);
//         console.log("student std is", this.std);
//         console.log("student section is",this.section);
//     }

//     detailTwo(){
//         console.log("student marks and percentage is", this.marks, "and", this.percentage);
//     }

// }


// const one=new StudentDetails()

// one.detailOne()
// one.detailTwo()





class Orange{


    constructor(page){
        this.page=page
        this.user=page.locator('//input[@placeholder="Username"]')
        this.pass=page.locator('//input[@type="password"]')
        this.button=page.locator('//button[text()=" Login "]')
    }


    async login(uname,pwod){
        await this.user.fill(uname)
        await this.pass.fill(pwod)
        await this.button.click()
    }
}

export default Orange