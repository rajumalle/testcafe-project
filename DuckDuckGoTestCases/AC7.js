import { Selector } from 'testcafe';

fixture `AC7 Fixture`
    .page `https://start.duckduckgo.com/traffic` ;
  
    test('AC7- Check 2018 Traffic Section', async t =>{
       
        const TrafficLink2018 =Selector('h2').withText('2018 Traffic');
        const YearExpanded = Selector('div').withAttribute('class','traffic__year expanded').exists;
       // var Months=YearExpanded.child(Selector('div').withAttribute('class','traffic__month collapsed'));
        await t
            .wait(2000)
            .maximizeWindow()
            .click(TrafficLink2018)
            .wait(2000)
            .takeScreenshot('AC7Screenshot.png')
            .expect(YearExpanded).ok();

        var Months=Selector('div').withAttribute('class','traffic__year expanded')
            .child(Selector('div').withAttribute('class','traffic__month collapsed'))
            .child(Selector('div').withAttribute('class','wrap'))
            .child('h3');
        for(var i=0;i<12;i++){
            var MonthName=await Months[i].innerText;
            console.log("Month Name->"+MonthName)
        }
        console.log("TrafficLink 2018 Details opened")

    });