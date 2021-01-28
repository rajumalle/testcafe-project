import { Selector } from 'testcafe';


fixture `AC7 Fixture`
    .page `https://start.duckduckgo.com/traffic` ;
  
    test('AC7- Check 2018 Traffic Section', async t =>{
       
        const TrafficLink2018 =Selector('h2').withText('2018 Traffic');
        const YearExpanded = Selector('div').withAttribute('class','traffic__year expanded').exists;
        
        var MonthsList=Selector('div').withAttribute('class','traffic__year expanded')
            .child(Selector('div').withAttribute('class','traffic__month collapsed'))
            .child(Selector('div').withAttribute('class','wrap'))
            .child('h3');

        await t
            .wait(2000)
            .maximizeWindow()
            .hover(TrafficLink2018)
            .click(TrafficLink2018)
            .wait(2000)
            .takeScreenshot('AC7Screenshot.png')
            .expect(YearExpanded).ok();
        console.log("Traffic Link 2018 Details opened")

        //To print the list of months
        for(var i=0;i<12;i++){
            var monthName=await MonthsList[i].innerText;
            console.log("Month Name->"+monthName)
        }
    

        //To check the Total Query Details
        const TotalQueryDetailsElement=Selector('.traffic__year__right')
            .parent('.wrap')
            .parent('.traffic__year expanded')
            .child('h2');

        var TotalQueryDetails = await TotalQueryDetailsElement.innerText;
       

    });