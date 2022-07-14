import { ApolloServer } from "apollo-server-micro";
import { graphqlSchema } from "@gql/schema.gql";
import { createContext } from "@gql/context.gql";
import microCors from "micro-cors";

const cors = microCors();

const apolloServer = new ApolloServer({
  context: createContext,
  schema: graphqlSchema,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
