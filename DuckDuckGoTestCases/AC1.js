import { Selector } from 'testcafe';

fixture `AC1 Fixture`
    .page `https://start.duckduckgo.com` 
    .beforeEach(async t =>{
        await t;
        console.log('Inside of Before each block');
    })
    .afterEach(async t =>{
        console.log('Inside of After each block')
    });

    test('AC1- Check DuckDuck logo exists or not', async t =>{
       
        const LogoElement = Selector('a#logo_homepage_link').exists;
        await t
            .wait(2000)
            .maximizeWindow()
            .takeScreenshot('AC1Screenshot.png')
            .expect(LogoElement).ok();
        console.log('DuckDuck Logo exists');
        
    });

    test('AC11- Check DuckDuck logo exists or not', async t =>{
       
        const LogoElement = Selector('a#logo_homepage_link').exists;
        await t
            .wait(2000)
            .maximizeWindow()
            .takeScreenshot('AC1Screenshot.png')
            .expect(LogoElement).ok();
        console.log('DuckDuck Logo exists');
        
    });
    test('AC11- Check DuckDuck logo exists or not', async t =>{
       
        const LogoElement = Selector('a#logo_homepage_link').exists;
        await t
            .wait(2000)
            .maximizeWindow()
            .takeScreenshot('AC1Screenshot.png')
            .expect(LogoElement).ok();
        console.log('DuckDuck Logo exists');
        
    });
    test('AC11- Check DuckDuck logo exists or not', async t =>{
       
        const LogoElement = Selector('a#logo_homepage_link').exists;
        await t
            .wait(2000)
            .maximizeWindow()
            .takeScreenshot('AC1Screenshot.png')
            .expect(LogoElement).ok();
        console.log('DuckDuck Logo exists');
        
    });
