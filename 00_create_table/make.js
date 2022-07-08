const AWS = require('aws-sdk')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const dynamoDb = new AWS.DynamoDB({
    region: 'eu-west-3',
    credentials: {
        accessKeyId: process.env.KEY,
        secretAccessKey: process.env.SECRET,
    }
})

const make = async (callback) => {
    var params = {
        TableName : process.env.TABLE_NAME,
        KeySchema: [       
            { AttributeName: "PK", KeyType: "HASH"},
            { AttributeName: "SK", KeyType: "RANGE"}
        ],
        AttributeDefinitions: [       
            { AttributeName: "PK", AttributeType: "S" },
            { AttributeName: "SK", AttributeType: "S" }
        ],
        ProvisionedThroughput: {       
            ReadCapacityUnits: 5, 
            WriteCapacityUnits: 5
        }
    };

    
    dynamoDb.createTable(params, (err, data) => {
        if (err) {
            throw new Error(err)
        }

        console.log(`Table ${process.env.TABLE_NAME} created succesfully.`)
    });
}

make()
