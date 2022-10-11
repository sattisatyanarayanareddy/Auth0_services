const express=require('express')
const app=express()


const { auth } = require('express-openid-connect');

const { requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret:'gsdahggchsgzjfchkgsdhchgdshghszgcjhdbhsbjfchdsjfhbhdsgjchbdhsgjcbhdschdg',
  baseURL:'http://localhost:3000',
  clientID:'96HGrvLcPyvZbx7cklE7KHllxoZCUVmv',
  issuerBaseURL:'https://dev-9ffccer9.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

const port = 3000

app.listen(3000,()=>{
    console.log("Running")
})