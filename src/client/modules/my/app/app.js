import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    homePage = true;
    aboutPage = false;
    contactPage = false;
    storePage = false;

    loginPage = false;
    signupPage = false;

    //pages
    goToHomePage(){
        this.homePage = true;
        this.aboutPage = false;
        this.contactPage = false;
        this.storePage = false;
    }
    goToAboutPage(){
        this.homePage = false;
        this.aboutPage = true;
        this.contactPage = false;
        this.storePage = false;
    }
    goToContactPage(){
        this.homePage = false;
        this.aboutPage= false;
        this.contactPage = true;
        this.storePage = false;
    }
    goToStorePage(){
        this.homePage = false;
        this.aboutPage= false;
        this.contactPage = false;
        this.storePage = true;
    }

    //login and signups
    login(){
        this.loginPage = true;
    }
    closeLogin(){
        this.loginPage = false;
    }
    signup(){
        this.signupPage = true;
    }
    closeSignup(){
        this.signupPage = false;
    }


    username = "";
    isLoggedIn = false;

    loggedOn(){
        this.isLoggedIn = !this.isLoggedIn;
        this.loginPage = false;
    }
    logout(){
        this.isLoggedIn = false;
    }

    handleInputChange(e) {
        this.username = e.target.value;
    }


/*
    @track pages = {
        homePage : true,
        aboutPage : false,
        loginPage : false,
        signupPage : false,
    }
    handleTabChange(e){
        if(e.detail == "Home"){
            this.pages.homePage = true;
            this.pages.aboutPage = false;
        }
        else if (e.detail == "About")
        {
            this.pages.homePage = false;
            this.pages.aboutPage = true;
        }
        else{
            console.log("error");
        }

    }
*/
    //handleTabChange2(){
    //     this.pages.homePage = false;
    //     this.pages.aboutPage = true;
    // }


}
