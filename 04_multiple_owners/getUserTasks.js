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

const getUserTasks = async () => {
    const params = {
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
            ':pk': 'user_1234',
            ':sk': 'task',
        }
    }

    const result = await dynamoDb.query(params).promise()

    return result.Items
}

getUserTasks().then(items => {
    console.log(items)
})
