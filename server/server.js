// Import required libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;

// Create a new Express app
const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/antique-games-server', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Defining and establishing the mongoose connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

// Define Mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    }, { collection: 'Contact' }
);

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    }, { collection: 'Feedback' }
);

const loginSchema = new mongoose.Schema({
    email: String,
    message: String,
    password: String,
  }, { collection: 'Login' }
);

const signupSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
  }, { collection: 'SignUp' }
);

const subscribeSchema = new mongoose.Schema({
  email: String,
}, { collection: 'Subscription' }
);

const authorContactSchema = new mongoose.Schema({
  name: String,
  topic: String,
  message: String,
}, { collection: 'Author-Conatct' }
);

// Define Mongoose models
const Contact = mongoose.model('Contact', contactSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);
const Login = mongoose.model('Login', loginSchema);
const Signup = mongoose.model('SignUp', signupSchema);
const Subscription = mongoose.model('Subscription', subscribeSchema);
const Author_Contact = mongoose.model('Author-Contact', authorContactSchema);

// Define routes
app.post('/contact-us', async (req, res) => {
  const contact = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

    if (!contact) {
      console.log(err);
      res.status(500).json({ error: err});
    } else {
      res.status(200).json(contact);
    }
});

app.post('/feedback',  async(req, res) => {
  const feedback = await Feedback.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

    if (!feedback) {
      console.log(err);
      res.sendStatus(500).json({ error: err });;
    } else {
      res.sendStatus(200).json(feedback);;
    }
});

app.post('/auth/login', async (req, res) => {
    const login = await Login.create({
      email: req.body.email,
      password: req.body.password,
    });
  
    if (!login) {
        console.log(err);
        res.status(500).json({ error: err});
    } else {
        res.status(200).json(login);
    }
});

app.post('/auth/signup', async (req, res) => {
    const signup = await Signup.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
  
    if (!signup) {
        console.log(err);
        res.status(500).json({ error: err});
    } else {
        res.status(200).json(signup);
    }
});

app.post('/newsletter', async (req, res) => {
  const subscribe = await Subscription.create({
    email: req.body.email,
  });

  if (!subscribe) {
      console.log(err);
      res.status(500).json({ error: err});
  } else {
      res.status(200).json(subscribe);
  }
});

app.post('/author/contact', async (req, res) => {
  const authorContact = await Author_Contact.create({
    name: req.body.name,
    topic: req.body.topic,
    message: req.body.message,
  });

  if (!authorContact) {
      console.log(err);
      res.status(500).json({ error: err});
  } else {
      res.status(200).json(authorContact);
  }
});


// https://cdn.htmlgames.com/5Dice/index.html?npa=1
// https://www.retrogames.cz/play_022-NES.php#
// https://www.cartoonnetworkhq.com/games/bmx-champions/play
// https://www.cbc.ca/kids/games/play/checkers
// https://classicreload.com/bomberman.html
// https://supermarioplay.com/

app.get("/games", async (req, res) => {
  try {
    // Fetch the game URL from the remote server
    const response = await fetch('https://www.crazygames.com/embed/crazy-roll-3d', {
      mode: 'no-cors',
      method: 'GET',
    });
    
    // Set the response headers to allow CORS
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    
    // Send the game URL to the client-side application
    const data = await response.text();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Loading...');
  }
});

// Start the server
app.listen(`${port}`, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;