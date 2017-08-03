# WorkMarket Front End Coding Challenge

**Notes**:
I ran up against a self imposed time limit, here are some decisions I made to help me complete the assignment on time:
- Omitted unit tests as there was no test runner setup (loved the rest of the webpack/babel/package.json setup though, thanks!). Honestly would not have wanted that many as I am not in the habit of writing tests for my react components (using something like Enzyme). Wanted to add tests for my the util function and for the redux reducers.
- Was interested to see the /models setup provided for the immutable data structures and state. I currently use Nuclear.js at work, which comes with Immutable.js built-in for the flux store, and love it. I didn't invest the time up front to setup the immutable store, and ran out of time to do that refactor.
- I also chose to do the contributors_list API call in componentDidMount() for each repo card instance. The list of contributors per repo could easily have been added to the Redux store, but thought I would demonstrate an alternative architecture. I usually do not put 100% of my app state into Redux, only state that belongs to, or needs to be shared, across multiple components. This app/assignment is simplified, so also wasn't worried about the components mounting/unmounting frequently and sending too frequent API calls.

Those were some tradeoffs I made, otherwise:
- Added (S)CSS modules for styling components. This is currently my preferred method for styling with React; it prevents working in the global scope (the biggest problem with CSS). I am interested in using some css-in-js approach (JS being much better to work with than CSS), but I feel like none of the current solutions are quite there, so I'm holding off for now.
- Added Moment.js dependency for formatting the dates to be human readable. This is my preferred way to work with Dates in javascript, and although the inclusion of that dependency for one util function is overkill, in any significantly sized project it is well worth the dependency.
- I left a few commented out lines of code in the two fetch() calls, where you can place an API token for GitHub to be included in the request to https://api.github.com. Normally I would not leave useless comments like this, but just did it for convenience sake when you want to run the project, as the rate limiting for GitHub without token authentication is pretty severe. (I also expired my personal token in the git commit history).


If you're not happy with any of the tradeoffs/simplifications I made, just let me know and I will gladly spend the time to augment the assignment. Thanks!
