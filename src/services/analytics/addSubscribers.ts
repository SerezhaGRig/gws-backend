import {
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
} from "@aws-sdk/client-dynamodb";

export const buildAddSubscriber =
  (ddb: DynamoDBClient, table: string) =>
  async (itemId: string, email: string) => {
    const updateCommandInput: PutItemCommandInput = {
      TableName: table,
      Item: {
        itemId: { S: itemId },
        email: { S: email },
      },
    };

    const putCommand = new PutItemCommand(updateCommandInput);
    await ddb.send(putCommand);
  };
