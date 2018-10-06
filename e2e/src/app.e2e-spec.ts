import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    //page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
    browser.get("http://localhost:4200/login")
  });

  it('logged in username and password is correct',()=>{

    element(by.id("inputEmail")).sendKeys("Arvind");
    element(by.id("inputPassword")).sendKeys("qwerty");
    element(by.id("loginSubmit")).sendKeys("submit")
    browser.waitForAngular();

    //expect(element(by.id("inputEmail")).getText()).toEqual("Arvind");
  });
});
