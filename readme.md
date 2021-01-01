<h1 align="center">
  <br>
  <a href="https://yolotours.herokuapp.com/"><img src="https://github.com/atharv6f/YoloTours/blob/master/public/img/YoloTousLogo2.png" alt="YoloTours" width="200"></a>
  <br>
  YoloTours
  <br>
</h1>

<h4 align="center">A web application built upon <a href="https://nodejs.org/en/" target="_blank">Node.js, Express and MongoDB</a></h4>
 <p align="center">
 <a href="#Deployed Website">Demo</a> •
  <a href="#Key Features">Key Features</a> •
  <a href="#API Usage ">Demonstration</a> •
  <a href="#For developers">How To Use</a> •
  <a href="#Deployment">API Usage</a> •
  <a href="#Built with">Deployment</a> •
  <a href="# Additional API's used">Build With</a> •
  <a href="#To-do">To-do</a> •
  <a href="#installation">Installation</a> • 
  <a href="#known-bugs">Known Bugs</a> • 
  <a href="#future-updates">Future Updates</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>


## Deployed Website 
Active Deployment 👉: https://yolotours.herokuapp.com/

## Key Features
- [x] REST API design
- [x] Authentication and Autherization
- [x] Mapbox integration
- [x] Stripe integration
- [x] Sendgrid integration
- [x] Favourite tours
- [x] My tour bookings
- [x] Role based access
- [x] Alias url's
- [x] User Profile
- [ ] Advanced Admin Features
- [ ] Refresh Tokens 
- [ ] Recently visited tours
- [ ] Two Factor authentication

## API Usage 
The documentation for using the YoloTours API can be found 👉:https://documenter.getpostman.com/view/12415161/TVt2biYm

## For developers
Clone the source locally:

```sh
$ git clone https://github.com/atharv6f/YoloTours.git
$ cd YoloTours
```
If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
```

Install project dependencies:

```sh
$ npm install
$ npm run build:js
```

## Deployment
Follow these steps to deploy the app to heroku:👇 
```
$ git init
$ git add -A
$ git commit -m "Initial commit"
$ heroku login
$ heroku create
* Set your environment variables on the heroku platform
$ git push heroku master
$ heroku open
```
The name of the app can be changed using the CLI by running the following :👇 
```
heroku apps:rename <APP_NAME>
heroku open
```
## Built with
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/2)

## Additional API's used
- [Stripe](https://nodejs.org)
- [Mapbox](https://expressjs.com/)
- [Sendgrid](https://www.mongodb.com/2)
- [Mailtrap](https://www.mongodb.com/2)


## To-do
- Advanced admin features
- Two factor authentication
- Refresh Tokens
- Billing Section
- Recently visited tours
