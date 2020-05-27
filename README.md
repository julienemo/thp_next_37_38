### Project ; Mini Social Network

Julie Kwok, 20200526-28

---

#### Page behaviours

**for visitor (not logged-in yet)**
Nav: three choices, home, sign-up, sign-in
Home: displays a list of post, with no author and no like
Sign-in: can sign in and gets directed to profile
Sign-up: can sign up and gets directed to profile

**for logged-in user**
Nav: three choices, home, profile, signout
Home: displays a list of page, with author and like, input available for new post
Profile: can see profile or modify, sees update info right away
Logout: logs out and redirects to sign in page

---

#### TODO

1. private routes
2. for profile update, if one case is empty, don't send this case
3. after post deletion, view need to update

#### refacto

1. token and current user ID in cookie, no redux
2. maybe delete the loading etc stuff ??

#### Difficulties

1. on home, my profile, and profile of any user, there is a list of post, (general list of a list with certain author). They share a reducer also, to get their list of post. I don't know where to fetch => I can't just fetch out of the blue in the component coz I'll be in a infinite loop. I would put it into a useEffect but then I'd need to
