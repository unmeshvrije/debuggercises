# _Exercise Topic_

> describe the focus of these exercises

## Index

- [Learning Objectives](#learning-objectives)
- [Helpful Hints](#helpful-hints)
- [Study Links](#study-links)
- [How to Study](#how-to-study)
  - [`npm run start`](#npm-run-start)
  - ['localhost:3000`](#localhost3000)
- [How to Review](#how-to-review)
  - [`npm run review`](#npm-run-review)
  - [REVIEW.md](#reviewmd)

---

## Learning Objectives

> the main learning objectives for this set of exercises

[TOP](#index)

---

## Helpful Hints

> any extra tips for studying these exercises

[TOP](#index)

---

## Study Links

- helpful links for these exercises
- [study.hackyourfuture.be](https://study.hackyourfuture.be)


[TOP](#index)

---

## How to Study

All of the exercises & examples in `/exercises` are plain JS files that will run anywhere modern JavaScript will run.  The simplest way to get started is to open this repo in VSCode and the files directly in VSCode using JS the built-in debugger.

To take your studying to the next level, practice stepping through the exercises in your browser's debugger and in JS Tutor.  To do this you will need to ...

### `npm run start`

This repository comes with all the code you need to study these exercises with different web-based debugging tools.  All you need to do is:

1. Open this repository in your terminal
1. Run `npm run start`
1. And navigate to `localhost:3000` in your browser

### `localhost:3000`

When you navigate to `localhost:3000` in your browser a web page will open up that follows the same structure as `/exercises` in this repository.  There will be a drop-down for each folder in `/exercises` and two buttons for each .js file, each button will load the most recent version of that file and prepare it for study in a different debugging environment:

- `DevTools`: this button will inject a `debugger` statement at the top of the script and run it in your browser's DevTools. Be sure to open your DevTools or nothing will happen
- `JS Tutor`: this button generates a JS Tutor URL with your code and opens the URL in a new tab.

[TOP](#index)

---

## How to Review

This repository comes with a built-in script that will help you review your work, help you and your classmates support each other, and help your coaches give you feedback on your work.

It's not enough to pass the tests once and move on!  Be sure to discuss your work with classmates, and to review your exercises over the coming months to keep your JS skills sharp.

### `npm run review`

When you run`$ npm run review` from the top level of this folder, the script will evaluate each .js file in this repo and report the results in a new markdown file for easy studying.

You should run this script before pushing your code so you and your coaches can easily discuss your work directly from GitHub.  But you may also find it helpful to run the script at the end of each study session to have an overview of your progress for that day.

### `REVIEW.md`

> [./exercises/REVIEW.md](./exercises/REVIEW.md)

In each folder of `/exercises`, the review script will generate a new `REVIEW.md` file.  This file will contain:

- The name of the directory
- The date and time of the last evaluation
- Links to all js files & sub-directories in that folder
  - Files that threw an error will be labeled _error_
  - Files with `console.assert`s (and no errors!) will be labeled as _pass_ or _fail_
  - Files with no errors or `console.assert`s will not be labeled
- A section for each .js file including
  - the name of the file
  - the status of the file (_pass_, _fail_, _error_, or nothing)
  - a link to the most recent source code
  - any assertions, logs or errors from that file
  - a copy of the code that was evaluated

[TOP](#index)
