1. This code base has 7 testcafe test scanarions  of DuckDuckGo Application
-You can find testcases in package-'DuckDuckGoTestCase'

2. This code also has sample TestCafe & Cucumber integrations test scenarion
-You can find testsceanrios in feature file at-'BDDTestCases/TestScenarios.feature'
-you can find Stepdefinitions at location- 'BDDTestCases/DuckDuckGoStepdef.js'

3. Prerequisites for set up
    - Visual Studion code -Version -1.47.3
    - TestCafe -version-1.10.1
    - Cucumber (Gherkin) Full Support

4. Installtion Process:
    4.1. create new folder using '$Mkdir Testcafe-project' from terminal 
    4.2. Open above created folder in VS code
    4.3 Open Terminal in VS code
    4.4. Create package .json using '$npm init' command from terminal
        -Enter all appropriate details in terminal
            - for eample:
            {
                "name": "automationqa",
                "version": "1.0.0",
                "description": "testing",
                "author": "rajumalle",
                "license": "ISC",
                "repository": {
                    "type": "git",
                    "url": "https://github.com/rajumalle/testcafe-project"
            }
 
    4.5. Install Testcafe using below command from terminal
        -'$npm install -g testcafe '
    4.6. Once the Installtion successfull, 
        -create sampleTest.js in project folder
        -Paste below sample code:
            import { Selector } from 'testcafe';
            fixture `Getting Started`
                .page `https://start.duckduckgo.com` ;

                test('My First Test', async t =>{
                    await t
                    .wait(3000)
                });

    4.7 To run the above sampleTest.js use below command from termional
        $testcafe chrome sampleTest.js

5. Pull the code from Git And Running the test cases:
    --Git url:https://github.com/rajumalle/testcafe-project.git

    5.1. Commnads for pulling the code to local from Git hub
        -$ cd /Users/user/TestCafe_Project
        -$ git init
        -$git remote add origin https://github.com/rajumalle/testcafe-project.git
        -$git pull 
        //if any changes to code
        -$ git add .
        -$git commit -m "commit message"
        -$git push 
        


