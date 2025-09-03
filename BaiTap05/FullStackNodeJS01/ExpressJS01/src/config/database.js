require('dotenv').config();
const mongoose = require('mongoose');

const dbState = [{
    value: 0,
    name: 'Disconnected'
},
{
    value: 1,
    name: 'Connected'
},
{
    value: 2,
    name: 'Connecting'
},
{
    value: 3,
    name: 'Disconnecting'
}];

const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value === state).label, "to database");
}
module.exports = connection ;