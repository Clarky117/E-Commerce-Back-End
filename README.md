# E-Commerce Back End

![None](https://img.shields.io/badge/license-None-blue)
  
## Table of Contents
1. [Description](#description)
2. [Skills Used](#skills-used)
3. [Installation](#installation)
4. [Readme Visual](#visuals)
5. [Repository and Youtube Video](#links-to-repository-and-deployed-video)
  
## Description

Built the back end for an e-commerce website.

E-Commerce in 2019 alone is estimated to be worth around $29 trillion, and with sites such as Shopify and WooCommerce provide businesses of all sizes with a suite of services.

As a full stack developer it is beneficial to understand the fundamental architecture of these platforms.

## Skills Used

After running npm i to download all dependancies, we create our sensitive environment variables in a .env file to hide them securely.

As the framework it provided, it is about following the acceptance criteria and identifying what files we need to add code to.

Under models, all files need to be updated, and tables created using the sequelise syntax. Under Category, Product, ProductTag, and Tag, we create the tables matching the mock up provided, and then state all relationships between the tables in our index.js file.

Given that the tables are created correctly, we should be able to seed the dummy data by running the command we were given in our package.json file.

With the tables created and data seeded, the final thing to do under routes/api is to finish of the Get, Post, Put, and Delete requests/end points.

Using Insomnia we are able to test each end point, which at times is much easier than the using your browser.

# Installation

- Clone the repository
- Open terminal at root level, run 'npm i'
- Create a .env file on the root level and enter;
    - DB_HOST=localhost
    - DB_USER='your mysql username'
    - DB_PASSWORD='your mysql password'
- Right click on db file and open integrated terminal or run 'cd db' on the already open terminal
- Now that terminal is on db, run 'mysql -u root -p', if your username is something other than root, substitute it there, enter password when prompted
- You should now be logged into MySQL, run 'source schema.sql'
- Now that the tables are created, run 'exit'
- Run 'cd ..'
- Run 'npm run seed' to fill tables with dummy data
- Run 'npm run watch' to run your server
- Open Insomnia at localhost:3001 and test each end point

## Visuals

Sample Code
![Sample Code](/assets/images/code-sample.png)

Insomnia
![Insomnia](/assets/images/insomnia.png)

## Links to Repository and Deployed Video

- Repository - [Clarky's Repo](https://github.com/Clarky117/E-Commerce-Back-End)
- Live Video - [E Commerce Back End](https://www.youtube.com/watch?v=FhVX_gJWQi0)
