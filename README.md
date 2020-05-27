### Project ; Mini Social Network

Julie Kwok, 20200526-28

---

#### Testing accounts

- email: encore400@gmail.com/ password: encore400

- email: desparate@gmail.com/ password: desparate

---

#### Page behaviours

**for anyone**
- Nav: three links, click on page name goes back to home
- Any list view: limited to 20 posts, classed from latest to earliest

**for unlogged user**

- Nav: three choices, home, sign-up, sign-in
- Home: displays a list of post, with no author and no like
- Sign-in: can sign in and gets directed to profile
- Sign-up: can sign up and gets directed to profile
- Profile/ user/id: will redirect to sign-in

**for logged user**

- Nav: three choices, home, profile, sign-out
- Home: displays a list of page, with author and like, input available for new post
- Profile: can see profile or modify, sees update info right away
- Logout: logs out and redirects to sign-in page
- SignIn/SignUp: will redirect to profile

**for "ME"**
- post: can delete own
- profile: can update own

---

#### TODO

1. create post list component and pass to prop onClicks (create and delete)
2. get post list out of redux
3. correct the link doesn't work issue

---

#### Discoveries

1. I used to use `window.location.href="/"` to redirect pages. Now I know there is `useHistory()`
2. `useAnything()` can work and only work when it's in the root of a functional component
3. in a `fetch`, you put the headers in `headerS` instead of `header`
4. Redux is only good if there is a high-level "state/context" that needs to be accessible anywhere. If a state is local, forget redux.