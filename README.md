# testcafe-project
1. This code base has 7 TestCafe test scenarios of DuckDuckGo Application.
  -You can find testcases in package-'DuckDuckGoTestCase'
  -These are main 7 testcases to test the Acceptance Criteria

2. This code also has sample TestCafe & Cucumber Integrations test scenarios.
  -You can find test-scenarios in feature file at-'BDDTestCases/TestScenarios.feature'
  -you can find Stepdefinitions at location- 'BDDTestCases/DuckDuckGoStepdef.js'
    -This is partially implemented

3. Prerequisites for set up
    - Visual Studio Code -Version -1.47.3
    - TestCafe -version-1.10.1
    -plugin required in VS code
        ->Cucumber (Gherkin) Full Support plugin
        ->npm commands for VSCode 
        ->npm support for VS Code 
        ->npm Intellisense plugin


4. Installation Process:
   4.1. create new folder using '$Mkdir Testcafe-project' from terminal 
   4.2. Open above created folder in VS code
   4.3 Open Terminal in VS code
   4.4. Create package .json using '$npm init' command from terminal
        -Enter all appropriate details in terminal
            - for example:
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
            }
 
    4.5. Install Testcafe using below command from terminal
        -'$npm install -g testcafe '
    4.6. Once the Installation successful, 
        -create sampleTest.js in project folder
        -Paste below sample code:
            import { Selector } from 'testcafe';
            fixture `Getting Started`
                .page `https://start.duckduckgo.com` ;

                test('My First Test', async t =>{
                    await t
                    .wait(3000)
                });

    4.7. To run the above sampleTest.js use below command from terminal
        $testcafe chrome sampleTest.js
        --> To Testcase in project use below-
                $testcafe chrome DuckDuckGoTestCases/AC7.js

5. Pull the code from Git And Running the test cases:
    --Git url:https://github.com/rajumalle/testcafe-project.git

    5.1. Commands for pulling the code to local from Git hub
        -$ cd /Users/user/TestCafe_Project
        -$ git init
        -$git remote add origin https://github.com/rajumalle/testcafe-project.git
        -$git pull origin main
        //if any changes to code
        -$ git add .
        -$git commit -m "commit message"
        -$git push origin main


    5.2. open the pulled code-base in VS code,
        5.2.1. Actual Test case are inside of package 'DuckDuckGoTestCase',
            - Test cases are named as Ac1, AC2 etc.
        5.2.2. To Run test cases, use below commnad,
           -$ testcafe chrome DuckDuckGoTestCases/AC1.js 
           -$ testcafe chrome DuckDuckGoTestCases/AC2.js 
           -$ testcafe chrome DuckDuckGoTestCases/AC3.js 
           -$ testcafe chrome DuckDuckGoTestCases/AC4.js 
        
