import { extendType, makeSchema, objectType } from "nexus";
import path, { join } from "path";

export const graphqlSchema = makeSchema({
  types: [],
  shouldGenerateArtifacts: process.env.NODE_ENV === "development",
  outputs: {
    schema: path.join(process.cwd(), "graphql/generated/schema.gen.graphql"),
    typegen: path.join(process.cwd(), "graphql/generated/nexusTypes.gen.ts"),
  },
  contextType: {
    module: join(process.cwd(), "graphql/context.gql.ts"),
    export: "Context",
    alias: "ctx",
  },
});
