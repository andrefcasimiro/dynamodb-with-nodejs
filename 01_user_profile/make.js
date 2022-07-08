const AWS = require('aws-sdk')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'eu-west-3',
    credentials: {
        accessKeyId: process.env.KEY,
        secretAccessKey: process.env.SECRET,
    }
})

const make = async () => {
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'user_1234',
            SK: 'profile',
            name: 'Gary',
            address: '1234 Fake Street',
        }
    }

    await dynamoDb.put(params).promise()
}

make()
