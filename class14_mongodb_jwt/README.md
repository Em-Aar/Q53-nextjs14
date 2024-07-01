# MongoDb integration and Authentication with jwt

## Tools/Libraries

### For Database

1. MongoDb Atlas (Cloud Distribution of MongoDb)
    * [Signup on MongoDb Atlas](https://www.mongodb.com/cloud/atlas)
2. mongoose: ODM for MongoDb

    * `npm install mongoose`

### For Authentication & Authorization

1. bcryptjs: for hashing password

    * `npm install bcryptjs`
2. Jason Web Token `jose`

    * `npm install jose`

**Note:** *Make sure to add your own connection string for MongoDb in `.env` file .**