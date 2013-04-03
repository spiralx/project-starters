
A general scratch-pad for stuff to do with this project, or that's the plan.

_Last update: Thu 28 March 2013, 03:51 PM_


---
### Prologue: What the hell is this thing?

Good question I'm still thinking about. The initial idea of building from nothing all the way up to Infinity And Beyond! is good, but what is it I'm building? I can envisage a whole development suite and environment devoted to displaying "Hello World!" on a page. Actually, that's not bad to start with :)

Some ideas for later projects:

- colour scheme generator (just need front-end)
- drag and drop slideshow
- image de-duplicator front-end
- porn database

---

### Part One: The best damn Hello World website in the world

### What's still to do?
At the moment, here's the vaguest of vague roadmap/list of things to cover:

##### use modular code, and require.js for loading
- Refactor app code into modules - make sure I have `"use strict"` set in them now while it's easier!
- Configure `app\js\main.js` as require's entry point.
- Add require.js component, add it to `index.html` and remove other script tags.
  
```js
define(
  ["mymod"],
  return function(mymod) {
    // ...
  })
);
```

##### set up a build system for our app
As we have more technologies we'll need all kinds of automated shenanigans. I'll probably use Grunt as it's everywhere... This means we'll have to have things set up for `npm` first though!

- create `package.json` with our app's details, add development dependency on Grunt.
- initialise `npm` in our project and install Grunt in local `node_modules` dir.
- create our Gruntfile to configure our build system, probably just the default webapp file will do for now.


##### become a real piece of software
With a build system there's no excuses 

 
organise code as modules, 
- AMD: require.js and having code in modules
- using one of LESS/SASS to write the stylesheets in, and convert them to CSS for the browser
- having a build system for the project - probably using Grunt, as it's very popular - and having source and dist directories
- include linting of code/stylesheets as part of a pre-test build
- 
- build tools for compiling LESS/SASS, 




----------
### Part Two: A Distant Milestone in an Era Far, Far Away

It's just to have hope of getting this far! I'm already further than I usually am, so maybe this will be like the epic projects I've managed in the past. Although I didn't ever finish those come to think of it...

