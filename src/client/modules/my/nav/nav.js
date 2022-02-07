import { LightningElement, api, track } from 'lwc';

export default class nav extends LightningElement {

//     @api homePage = false;
//    @api aboutPage = false;
   loginPage = false;
   signupPage = false;

    // pages = {
    //     homePage : true,
    //     aboutPage : false,
    //     loginPage : false,
    //     signupPage : false,
    // }

    //pages
         goToHomePage(e){
        this.dispatchEvent(new CustomEvent('navchange', {detail: e.target.title} ));
        console.log(e.target);
    }

         goToAboutPage(e){
        this.dispatchEvent(new CustomEvent('navchange', {detail: e.target.title}));
    }

    //  goToHomePage(){
    //     this.pages.homePage = true;
    //     this.pages.aboutPage = false;
    //     console.log(this.pages.homePage);
    // }
    //  goToAboutPage(){
    //     this.pages.homePage = false;
    //     this.pages.aboutPage = true;
    // }

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