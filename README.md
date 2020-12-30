# Levels Trading App

## What is it

Trading platform that lets you track a stock portfolio and its returns over periods of time. Easily search for stocks by ticker or company name, utilize in-app charting tool and buy/sell at real time prices. The custom strategy generator lets you set some variables and generate an automated investment strategy. The trading bot option allows for setting rules for executing trades and execute in your brokerage account.

## What is it built with

MERN: Node/Express backend with React frontend and MongoDB. Redux used in React for JWT auth. Python scripts are used to generate trading strategies and the automated trading execution. Pandas dataframes used for statistical analysis. Redis in-memory database is used for caching search results to enhance loading times. D3.js with Nivo used for data visualization. Lodash for data parsing in JS. React-Bootstrap + custom CSS for styling. Deployed on Heroku with Heroku-Redis.

## Loose ends

Refactored JWT auth with redux states, not finished. Only have 1 strategy generator working, no variable selector implemented. Trading bot not finished. Want to implement portfolio classes with sunburst visualization. Want to use AWS for deployment and use Docker.
Styling and UX is sloppy. Want to try sockets.io to create live streams of data (trading).

## Challenges

Challenging to work with real time stock data. Challenging to present portfolio values when incrementally buying/selling stocks based on cost base. Complicated API responses, lots of time spent parsing data and integrating Python-JS.

## New technologies used?

Redis
Python with pandas
Redux
D3.js
lodash
several external API's

## Live link

https://levelstradingapp.herokuapp.com
