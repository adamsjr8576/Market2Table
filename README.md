# Market2Table - Binary Challenge Turing Mod 3 Solo Final Project

## Abstract

the overarching goal of this project was to choose and work with an API of our personal choosing. Within this choice we had to create a customer profile to cater the theme of the app to. The purpose of this was to practice the creation of an app from the ground up without any provided visual comp or project iterations. This involved a higher level of planning, wireframing, and propblem solving than any project before. 

I chose an API managed by the USDA - National Farmers Market Directory API. This API contains information on over 6,0000 farmers markets across the US. The API initially pinged via a fetch request containing the user's inputted zip code. The API returns the closest 20 markets to the center point of that zip code. Each market has a unique ID associated with it, which can be used to make another fetch request to get all of that market's information. This app, Market2Table, is an app that enables individuals to easily find and receive information on Farmers Markets within a specified area. With a shift in people being more conscious of where and how the foods and goods they purchase and consume are made - there are very few resources out there that help to make this shift easy. One of the major barriers in attempting to purchase locally and support local businesses is due to a lack of accessibility of information - I want to shop at a farmers market but I do not know my options or how to find my options! This app will help to collect this information in one place that can be easily accessed within anywhere in the US via the users desired zip code.

In order to make this location more accessible I implemented the Google Maps API combined with the npm plugin google-map-react. This makes it so that the markets listed within that area are displayed on a map that can be interacted with. The user also has the ability to favorite markets that persist via the implementation of localStorage - so regardless of which zip code search you are in the favorites from all searches can still be accessed and managed.


## Set Up

### Clone Down & Run Locally:

1. Fork repo and clone down or just clone down
2. cd into directory and run ```npm install``` to install library dependencies
3. In terminal run ```npm start``` to create locally hosted served to run app
4. You will see a bunch of code - find `http://localhost:3000/` and copy into your web browser

## Goals

1. Use the technology we’ve been working with over the course of the module to demonstrate mastery of the following:
  - React
  - Redux
  - Router
  - Asynchronous JavaScript
2. Work within constraints to deliver a unique product for your audience which helps them in some way. Your project must utilize your assigned API and technology, and must be built for your assigned audience.
3. To create a fluid and accessible ux/ui from the ground up and using Adobe XD as a tool to create a visual comp.
4. Implement Google Maps API
5. Include micro-interactions to ux/ui to enhance user experience and create a seamless feel to moving through the app.

## Overview of Technologies

 - HTML5 - CSS3 - SASS/Scss - React.js - Redux - React Router - Fetch API - Jest/Enzyme - Javascript ES6 - Node.js

## UI/UX Flow

Login: 
<img width="1440" alt="Login" src="https://user-images.githubusercontent.com/49846853/72300464-19a0a300-3621-11ea-8409-a46ed4aa9b99.png">

Markets:
<img width="1440" alt="markets" src="https://user-images.githubusercontent.com/49846853/72300484-2e7d3680-3621-11ea-84aa-8c323d833212.png">

Market: 
<img width="1440" alt="market" src="https://user-images.githubusercontent.com/49846853/72300520-405ed980-3621-11ea-921d-ee1f2a6e1e27.png">

Favorite:
<img width="1440" alt="favorites" src="https://user-images.githubusercontent.com/49846853/72300559-54a2d680-3621-11ea-984d-b4406451d893.png">

New Zip Code:
<img width="1440" alt="newZipCode" src="https://user-images.githubusercontent.com/49846853/72300581-64bab600-3621-11ea-9c74-a69ce626a4b0.png">
