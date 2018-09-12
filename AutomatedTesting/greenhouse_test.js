
Feature('Application Form');

Scenario('Test Case ID 1.1.1', (I) => {
  I.amOnPage('/login');
  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.closeOtherTabs();
  I.wait();
  I.fillField('email', 'rikkisalo@yahoo.co.id');
  I.fillField('pass', 'kurtu24rw4n4');
  I.wait(5);
  I.click('Log In')
  I.amOnPage('https://kumparan.com/');
 
});

Scenario('Test Case ID 1.1.2', (I) => {
  I.amOnPage('/login');
  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('email', '');
  I.fillField('pass', '');
  I.wait(5);
  I.click('Log In')
  
});

Scenario('Test Case ID 1.1.3', (I) => {
  I.amOnPage('/login');
  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('email', '');
  I.fillField('pass', 'kurtu24rw4n4');
  I.wait(5);
  I.click('Log In')

});

Scenario('Test Case ID 1.1.4', (I) => {
  I.amOnPage('/login');
  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('email', 'rikkisalo@yahoo.co.id');
  I.fillField('pass', '');
  I.wait(5);
  I.click('Log In')
 
});

Scenario('Test Case ID 1.1.5->Wrong Email-PhoneNumber', (I) => {
  I.amOnPage('/login');
  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('email', 'salo@');
  I.fillField('pass', 'kurtu24rw4n4');
  I.wait(5);
  I.click('Log In')

});

Scenario('Test Case ID 1.1.5->Wrong Password', (I) => {
  I.amOnPage('/login');
  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('email', 'rikkisalo@yahoo.co.id');
  I.fillField('pass', 'kurtu24efd');
  I.wait(5);
  I.click('Log In')
 
});


Scenario('Test Case ID 1.1.6', (I) => {
  I.amOnPage('/login');
  I.click('Login with Google +');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth/identifier?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=x-lk3XC5dLCXCo_ulOGzWA&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChQ2ZTFsS2tyNWdvaExpZXdwbkhmSxIfWV9JS0pmNTItb3dYVU9xWmlfQjdtUjlVR29GdktSWQ%E2%88%99AB8iHBUAAAAAWse13vUF4iDsRtnx5PZ5olr4bBqIlNd9&xsrfsig=AHgIfE-9p3Gkuqk5dFj45PgNOPIhV8E9lQ&flowName=GeneralOAuthFlow');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('identifier', 'rikky02061996@gmail.com');
  I.click('//*[@id="identifierNext"]/content/span');
  I.wait(5);
  I.fillField('password', 'kurtu24rw4n4');
  I.wait(5);
  I.click('//*[@id="passwordNext"]/content/span');
  I.amOnPage('https://kumparan.com/');
 

});

Scenario('Test Case ID 1.1.7', (I) => {
  I.amOnPage('/login');
  I.click('Login with Google +');
  I.closeOtherTabs();
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth/identifier?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=x-lk3XC5dLCXCo_ulOGzWA&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChQ2ZTFsS2tyNWdvaExpZXdwbkhmSxIfWV9JS0pmNTItb3dYVU9xWmlfQjdtUjlVR29GdktSWQ%E2%88%99AB8iHBUAAAAAWse13vUF4iDsRtnx5PZ5olr4bBqIlNd9&xsrfsig=AHgIfE-9p3Gkuqk5dFj45PgNOPIhV8E9lQ&flowName=GeneralOAuthFlow');
  I.wait(5);
  I.fillField('identifier', '');
  I.click('//*[@id="identifierNext"]/content/span');

});

Scenario('Test Case ID 1.1.8', (I) => {
  I.amOnPage('/login');
  I.click('Login with Google +');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth/identifier?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=x-lk3XC5dLCXCo_ulOGzWA&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChQ2ZTFsS2tyNWdvaExpZXdwbkhmSxIfWV9JS0pmNTItb3dYVU9xWmlfQjdtUjlVR29GdktSWQ%E2%88%99AB8iHBUAAAAAWse13vUF4iDsRtnx5PZ5olr4bBqIlNd9&xsrfsig=AHgIfE-9p3Gkuqk5dFj45PgNOPIhV8E9lQ&flowName=GeneralOAuthFlow');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('identifier', 'rikky02061996@gmail.com');
  I.click('//*[@id="identifierNext"]/content/span');
  I.wait(5);
  I.fillField('password', '');
  I.wait(5);
  I.click('//*[@id="passwordNext"]/content/span');

});



Scenario('Test Case ID 1.1.9->Wrong Email-PhoneNumber', (I) => {
  I.amOnPage('/login');
  I.click('Login with Google +');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth/identifier?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=x-lk3XC5dLCXCo_ulOGzWA&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChQ2ZTFsS2tyNWdvaExpZXdwbkhmSxIfWV9JS0pmNTItb3dYVU9xWmlfQjdtUjlVR29GdktSWQ%E2%88%99AB8iHBUAAAAAWse13vUF4iDsRtnx5PZ5olr4bBqIlNd9&xsrfsig=AHgIfE-9p3Gkuqk5dFj45PgNOPIhV8E9lQ&flowName=GeneralOAuthFlow');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('identifier', 'asdf');
  I.click('//*[@id="identifierNext"]/content/span');

});

Scenario('Test Case ID 1.1.9->Wrong Password', (I) => {
  I.amOnPage('/login');
  I.click('Login with Google +');
  I.wait(5);
  I.amOnPage('https://accounts.google.com/signin/oauth/identifier?client_id=203797405389-ebvfbi965n9kis0qeg8h8mgq40fr5i7k.apps.googleusercontent.com&as=x-lk3XC5dLCXCo_ulOGzWA&destination=https%3A%2F%2Fkumparan.com&approval_state=!ChQ2ZTFsS2tyNWdvaExpZXdwbkhmSxIfWV9JS0pmNTItb3dYVU9xWmlfQjdtUjlVR29GdktSWQ%E2%88%99AB8iHBUAAAAAWse13vUF4iDsRtnx5PZ5olr4bBqIlNd9&xsrfsig=AHgIfE-9p3Gkuqk5dFj45PgNOPIhV8E9lQ&flowName=GeneralOAuthFlow');
  I.closeOtherTabs();
  I.wait(5);
  I.fillField('identifier', 'rikky02061996@gmail.com');
  I.click('//*[@id="identifierNext"]/content/span');
  I.wait(5);
  I.fillField('password', 'qwe213');
  I.wait(5);
  I.click('//*[@id="passwordNext"]/content/span');

});


// Scenario('Login with Facebook - Wrong Email-PhoneNumber & Wrong Password', (I) => {
//   I.amOnPage('/login');
//   I.click('Login with Facebook');
//   I.wait(5);
//   I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
//   I.closeOtherTabs();
//   I.wait(5);
//   I.fillField('email', 'salo@');
//   I.fillField('pass', '132rew');
//   I.wait(5);
//   I.click('Log In')

// });


Scenario('Test Case ID 3.1.1', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('Komentar');
  I.wait(5);
  I.amOnPage('@kumparanoto/response/motor-matik-premium-honda-asapi-bmw-1536719531019740964');
  I.wait(5);
  I.fillField('Tulis Komentarmu', 'beritanya bagus');
  I.wait(5);
  I.click('Post')
  I.wait(5);

  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.wait(5);
  I.closeOtherTabs();
  I.fillField('email', 'rikkisalo@yahoo.co.id');
  I.fillField('pass', 'kurtu24rw4n4');
  I.wait(5);
  I.click('Log In')
  I.amOnPage('https://kumparan.com/');
  
});

Scenario('Test Case ID 3.1.2', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('Komentar');
  I.wait(5);
  I.amOnPage('@kumparannews/response/pengacara-soal-putusan-sidang-pak-ahok-ingin-dapat-hak-asuh-anak');
  I.wait(5);
  I.fillField('Tulis Komentarmu', 'beritanya bagus');
  I.attachFile('//*[@id="content"]/div/div/div/div/div/div/div/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div[1]/div/input', 'F:/Internship Test/Kumparan/ChatBot Testing/ChatBot Testing/signature.jpg')
  I.wait(5);
  I.click('Post')
  I.wait(5);

  I.click('Login with Facebook');
  I.wait(5);
  I.amOnPage('https://www.facebook.com/login.php?skip_api_login=1&api_key=261539327577949&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.7%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Df1499b32a1c4e8%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252FFdM1l_dpErI.js%253Fversion%253D42%2523cb%253Dfbad1600c4953e%2526domain%253Dkumparan.com%2526origin%253Dhttps%25253A%25252F%25252Fkumparan.com%25252Ff139b3fd63246%2526relation%253Dopener%2526frame%253Df508abf643afac%26display%3Dpopup%26scope%3Demail%252Cpublic_profile%252Cuser_friends%252Cuser_actions.books%252Cuser_birthday%26response_type%3Dtoken%252Csigned_request%26domain%3Dkumparan.com%26origin%3D1%26client_id%3D261539327577949%26ret%3Dlogin%26sdk%3Djoey%26logger_id%3D81c01b98-cc32-8bb1-449f-a71e3557da83&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FFdM1l_dpErI.js%3Fversion%3D42%23cb%3Dfbad1600c4953e%26domain%3Dkumparan.com%26origin%3Dhttps%253A%252F%252Fkumparan.com%252Ff139b3fd63246%26relation%3Dopener%26frame%3Df508abf643afac%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_GB&logger_id=81c01b98-cc32-8bb1-449f-a71e3557da83');
  I.wait(5);
  I.closeOtherTabs();
  I.fillField('email', 'rikkisalo@yahoo.co.id');
  I.fillField('pass', 'kurtu24rw4n4');
  I.wait(5);
  I.click('Log In')
  I.amOnPage('https://kumparan.com/');
  
});


Scenario('Test Case ID 3.1.5', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('Komentar');
  I.wait(5);
  I.amOnPage('@kumparannews/response/pengacara-soal-putusan-sidang-pak-ahok-ingin-dapat-hak-asuh-anak');
  I.wait(5);
  I.fillField('Tulis Komentarmu', 'beritanya bagus');
  I.wait(5);
  I.click('Post')

});

Scenario('Test Case ID 4.1.1', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/ul/li[2]/a');
  I.wait(5);

});

Scenario('Test Case ID 4.1.2', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/ul/li[4]/a');
  I.wait(5);  

});

Scenario('Test Case ID 4.1.3', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/ul/li[5]/a');
  I.wait(5);  

});

Scenario('Test Case ID 4.1.4', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/ul/li[6]/a');
  I.wait(5);  

});

Scenario('Test Case ID 4.1.5', (I) => {
  I.amOnPage('https://kumparan.com/');
  I.click('//*[@id="content"]/div/div/div/nav/div/div/ul/li[7]/a');
  I.wait(5);  

});


Feature('Stop me', {timeout:5000});
