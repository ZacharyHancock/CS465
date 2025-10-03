// Bring in the DB connection and Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from JSON file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

//delete any existing records, then insert the seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

//close the DB connection
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});