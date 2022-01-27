import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    homePage = true;
    aboutPage = false;
    loginPage = false;
    signupPage = false;

    //pages
    goToHomePage(){
        this.homePage = true;
        this.aboutPage = false;
    }
    goToAboutPage(){
        this.homePage = false;
        this.aboutPage = true;
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

}
