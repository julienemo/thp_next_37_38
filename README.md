### Project ; Mini Social Network

Julie Kwok, 20200526-28

Luca Montaigut (@LazyRabbit)[https://github.com/luca-montaigut] provided great help in understanding when to use Redux and generously share his propositions.

Many thanks to Matthieu and Mathis, who have eagle eyes.

demo (here)[https://juliet-social.now.sh/]

Disclosure:

usernames are not sluggified and I don't plan to.
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
- List on Home or any Profile: click on author name to see profile

**for "ME"**
- post: can delete own, page doesn't reload
- profile: can update own, page doesn't reload

---

#### What's in redux

1. user authentication info: jwt, user ID, whether there is one present
2. list of post, in Home, in Profile, in profile of any user

---

#### Discoveries

1. I used to use `window.location.href="/"` to redirect pages. Now I know there is `useHistory()`
2. `useAnything()` can work and only work when it's in the root of a functional component
3. in a `fetch`, you put the headers in `headerS` instead of `header`
4. Redux is only good if there is a high-level "state/context" that needs to be accessible anywhere. If a state is local, forget redux.
5. its worth considering the structure of an API before hand (do I want to use the name as a slug? What kind of error do I want)
6. Spelling is so, so important