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
    const task1 = {
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'user_1234',
            SK: 'task_1234',
            name: 'Task 1',
            description: 'Plan Meeting',
        }
    }
    await dynamoDb.put(task1).promise()

    const task2 = {
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'user_1234',
            SK: 'task_1235',
            name: 'Task 2',
            description: 'Have Meeting',
        }
    }
    await dynamoDb.put(task2).promise()

    const task3 = {
        TableName: process.env.TABLE_NAME,
        Item: {
            PK: 'user_1235',
            SK: 'task_1236',
            name: 'Task 3',
            description: 'Attend Meeting',
        }
    }
    await dynamoDb.put(task3).promise()
}

make()
