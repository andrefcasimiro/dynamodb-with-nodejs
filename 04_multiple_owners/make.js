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
            PK: 'user_1234',
            SK: 'task_1234',
            GSI1: 'team_1234',
            name: 'Task 1',
            description: 'Plan meeting',
        }
    }).promise()

    await dynamoDb.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'user_1234',
            SK: 'task_1235',
            GSI1: 'team_1235',
            name: 'Task 2',
            description: 'Have meeting',
        }
    }).promise()

    await dynamoDb.put({
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'user_1235',
            SK: 'task_1236',
            GSI1: 'team_1234',
            name: 'Task 1',
            description: 'Attend meeting',
        }
    }).promise()

}

make()
