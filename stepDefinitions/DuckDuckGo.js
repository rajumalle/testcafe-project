const {Given, When, Then, And} = require('cucumber');
const Selector=require('testcafe').Selector;

Given('I am on the homepage', async function(){
    
    await testController
    .navigateTo('https://start.duckduckgo.com')
    .wait(3000);

}); 

When('I look at the page', async function(){
    console.log('We are in Home page')
});

Then ('I expect to see the duckduckgo logo on the page', async function(){
    
    const logoObject=Selector('id#logo_homepage_link').with({boundTestRun: testController});

    await testController
    .expect(logoObject.innerText).contains('About DuckDuckGo')

});