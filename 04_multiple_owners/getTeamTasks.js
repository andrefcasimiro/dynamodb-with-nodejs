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

const getTeamTasks = async () => {
    const params = {
        TableName: process.env.TABLE_NAME,
        IndexName: 'GSI1-SK-index',
        KeyConditionExpression: 'GSI1 = :gsi1 AND begins_with(SK, :sk)',
        ExpressionAttributeValues: {
            ':gsi1': 'team_1234',
            ':sk': 'task',
        }
    }

    const result = await dynamoDb.query(params).promise()

    return result.Items
}

getTeamTasks().then(items => {
    console.log(items)
})
