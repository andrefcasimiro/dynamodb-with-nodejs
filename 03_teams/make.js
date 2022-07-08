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
    await dynamoDb.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'team_1234',
            SK: 'teamMember_1234',
            GSI1: 'user_1234',
            role: 'supervisor',
        }
    }).promise()

    await dynamoDb.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'team_1235',
            SK: 'teamMember_1235',
            GSI1: 'user_1234',
            role: 'role',
        }
    }).promise()

    await dynamoDb.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'team_1235',
            SK: 'teamMember_1236',
            GSI1: 'user_1235',
            role: 'supervisor',
        }
    }).promise()

    await dynamoDb.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'team_1234',
            SK: 'meta',
            name: 'Team Blue',
        }
    }).promise()
    
    await dynamoDb.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'team_1235',
            SK: 'meta',
            name: 'Team Green',
        }
    }).promise()

}

make()
