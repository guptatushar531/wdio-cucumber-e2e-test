import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^Google page is opened$/,function(){
    console.log('Before opening browser...');
    browser.url("https://www.google.com")
    //browser.debug() //or bowser.pause(7000) i.e wait for 7 second
    console.log('Afer opening browser...');
})