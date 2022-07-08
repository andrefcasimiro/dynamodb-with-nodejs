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

const get = async () => {
    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            PK: 'user_1234',
            SK: 'profile',
        }
    }

    const result = await dynamoDb.get(params).promise()

    return result.Item
}

get().then(item => {
    console.log(items)
})
