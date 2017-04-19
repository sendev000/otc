import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVars } from './globalvars';
import { Loading } from 'ionic-angular';
 
export class User {
  user_id: string;
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  public getEmail(){
    return this.email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  mainPage: any;
  transitionPage: any;
  loginPage: any;
  loading: Loading;
  constructor(public http: Http) {
    console.log('Hello UsuarioService Provider');
    this.mainPage = null;
    this.currentUser = null;
    this.transitionPage = null;
    this.loginPage = null;
    this.loading = null;
  }
  private removeSpecialChars(data){
    let obj = {};
    for (var prop in data) {
        if(!data.hasOwnProperty(prop)) continue;
        obj[prop] = encodeURIComponent(data[prop]);
    }
    return obj;
  }
  private loginCheck(credentials){
    if (credentials.email === null || credentials.password === null)
      return false;
    else
      return true;
  }
  public login(credentials) {
    if (this.loginCheck(credentials))
    {
      let cre = this.removeSpecialChars(credentials);
      let loginApiUrl = GlobalVars.getApiURL() + "email=" + cre['email'] + "&password=" + cre['password'] + "&ppp=login";
      this.showLoading();
      this.http.get(loginApiUrl).map(response => response.json()).subscribe(data => {
          setTimeout(() => {
            this.loading.dismiss().catch(() => {});
            if (data.res == 'success')
            {
              this.currentUser = data.user;
              this.movePage();
            }
            else
            {
              this.showToast(data.msg);
            }
          });
        }),
        err => {
          setTimeout(() => {
              this.loading.dismiss().catch(() => {});
              this.showToast("Access denied");
              // this.showToast("Your email or password doesn't match");
          });
        }
    }
    else
    {
      console.log("You didn't input the required data");
      this.showToast("Please input the email and password");
    }
  }
  private validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  private registerCheck(credentials){
    if (credentials.email === null || credentials.password === null || credentials.confirm === null 
      || credentials.gender === null || credentials.name === null){
      this.showToast("Please fill the required fields");
      return false;
    }
    else if (!this.validateEmail(credentials.email)){
      this.showToast("Please input valid email");
      return false;
    }
    else if (credentials.password != credentials.confirm){
      this.showToast("The confirm password doesn't match with the password");
      return false;
    }
    else
      return true;
  }
  public register(credentials) {
    if (this.registerCheck(credentials))
    {
      let cre = this.removeSpecialChars(credentials);
      let registerApiUrl = GlobalVars.getApiURL() + "email=" + cre['email'] + "&password=" + cre['password']
             + "&name=" + cre['name'] + "&gender=" + cre['gender'] + "&city=" + cre['city'] + "&newsletter=" + cre['newsletter'] + "&ppp=register";
      this.showLoading();
      this.http.get(registerApiUrl).map(response => response.json()).subscribe(data => {
          setTimeout(() => {
            this.loading.dismiss().catch(() => {});
            if (data.res == 'success')
            {
              // this.currentUser = data.user;
              this.moveLoginPage();
            }
            else
            {
              this.showToast(data.msg);
            }
          });
        }),
        err => {
          setTimeout(() => {
              this.loading.dismiss().catch(() => {});
              this.showToast("Access denied");
          });
        }
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
  public logout() {
    this.currentUser = null;
    this.moveLoginPage();
  }
  public setMainPage(main: any) {
    this.mainPage = main;
  }
  public setLoginPage(login: any){
    this.loginPage = login;
  }
  public setTransitionPage(tran: any) {
    this.transitionPage = tran;
  }
  private showLoading() {
    this.loading = this.mainPage.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  private showToast(message: string) {
    if (this.loading != null) {
      this.loading.dismiss().catch(() => {});
    }
    
    let toast = this.mainPage.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  private movePage() {
    this.mainPage.navCtrl.push(this.transitionPage);
  }
  private moveLoginPage() {
    this.mainPage.navCtrl.push(this.loginPage);
  }
}