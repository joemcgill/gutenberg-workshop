# Gutenberg Workshop

This is project is a demo WordPress plugin for learning the basics of building a Gutenberg block. 

## Workshop Instructions

Participants of the workshop can optionally choose to follow along with the development of a basic Gutenberg Block in their own local development environment. To prepare your computer for the Gutenberg Workshop, you should set up the following:

- A local development server running WordPress 4.9.7 (Need a local environment? [Try Chassis](https://github.com/Chassis/Chassis)).
- The latest version of the [Gutenberg plugin](https://wordpress.org/plugins/gutenberg/) installed and activated.
- [Node 8+ and npm 5.3+ installed](https://www.npmjs.com/get-npm) (or you can use [Yarn](https://yarnpkg.com/lang/en/docs/install/), if that's your bag).
- Clone this plugin into your plugins directory: `git clone git@github.com:joemcgill/gutenberg-workshop.git`.

## Project Props

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.
