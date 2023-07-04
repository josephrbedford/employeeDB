const mysql = require('mysql2');

class Database {
    constructor (options) { 
        this.options = options 
        this.db = null
    }    


    validate () {

        const {host, user, password, database } = this.options; 
        if (!host || !user || !password || !database)
             throw new Error('Database configuration is invalid.');

    return;
}

connect () {


// Validate configuration 
    this.validate();

// Destructure configuration
    const { host, user, password, database } = this.options;

// Connect to database
    this.db = mysql.createConnection(
{
        host: host,
        user: user,
        password: password,
        database: database
},
    console.log(`Connected to the Employee database.`)
    );
}
disconnect () {
    this.db.disconnect();
    }
}

module.exports = Database;
