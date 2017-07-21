# WorkMarket Front End Coding Challenge

Hi 👋! If you're reading this, that means you've been asked to complete a coding assessment as a part of WorkMarket's interview process. Nice one!

<div align="center">
<img src="https://d1qpyd3pu6qx6u.cloudfront.net/5a25905de1c91d5eadca0f68471faf55%2F565x0xwidth%2F75%2Fhttp%2Flarkable.com%2Fuloop%2Fr%3D305%2Fgif%2Fwp-content%2Fuploads%2F2014%2F01%2Fstep_brothers-70150.jpg" width="250" />
</div>


This challenge will test your skills with JS fundamentals, React (&, optionally, Redux), as well as your ability to efficiently interact with APIs.

Here's what you'll be doing:

1. Given a Github organization (e.g. [Facebook](https://github.com/facebook/)), use Github's API to retrieve their public repos. You only need to worry about displaying the first page of results, so ignore pagination.
  - If a network error occurs, display an error message
  - While network request is in progress, display a simple "Loading" message
2. For each repo, display a card. Contents of the card are:
  - **Top Left**: The name of the repo as a link to the repo itself.
  - **Top Right**: The time of last update to the repo, in a nice and readable format (e.g. `2 hours ago`).
  - **Bottom Left**: The number of forks created for that repo.
  - **Bottom Right**: The number of stars for that repo.
3. Within the center of each card, display the repo's contributors.
  - Contributors for each repo has to be fetched separately (see `contributors_url` property in the response for each repo).
  - Again, do not worry about pagination. Just display the first page returned.
4. Make this thing responsive! Use float, flexbox, grid, whatever you want, but have the cards collapse down to a single one for smaller screen sizes. Exact pixel widths / breakpoints don't really matter, just make sure it doesn't look janky!

Sound good? Cool. **Here's what we'll be looking for**:

- Efficient data fetching from Github API
- Efficient state management
- React data flow
- React component organization
- Understanding of React lifecycle methods
- Performant React rendering
- Code quality, readability, and DRY-ness


**Here's what we don't care too much about**:

- Pixel perfect UI
- Pagination (as stated above)

**Some other notes**:

- We've set up a nice little playground for you to get you started. It comes with some dependencies (`yarn install`), but feel free to add, remove, or change those. Also feel free to completely change directory structure if you have a different style for project scaffolding.
- React hot reloading has been set up for both UI and reducers. Don't worry about doing an actual build, we'll just run the playground with `yarn watch` once you've submitted.
- Don't want to use Redux for state management? No worries! Go crazy with whatever package you want. Don't want to use anything for state management at all? Fine with us!
- We've already configured webpack for you (just run `yarn watch`). We've also already configured babel for you if you want to use the latest and greatest ES7/8/whatever. The config is in `.babelrc`, feel free to modify it.
- There's a `.eslintrc` file includes. Ignore if you want. We're sticklers for code styling, but you don't have to be.

**How to Submit**

You can get started by forking the repo and making code changes in your fork.

All done? 🔥! You can submit your work by opening a pull request against our upstream repository.
