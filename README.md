### Project ; Mini Social Network

Julie Kwok, 20200526-28

* * *
#### Page behaviours

**for visitor (not logged-in yet)**
Nav: three choices, home, sign-up, sign-in
Home: displays a list of post, with no author and no like
Sign-in: can sign in and gets directed to profile
Sign-up: can sign up and gets directed to profile

**for logged-in user**
Nav: three choices, home, profile, signout
Home: displays a list of page, with author and like
Profile: can see profile or modify, sees update info right away


* * *
#### TODO
1. sign in : what happens if the logins are not good ?
2. private routes
3. for profile update, if one case is empty, don't send this case

#### refacto
1. token and current user ID in cookie, no redux
2. maybe delete the loading etc stuff ??