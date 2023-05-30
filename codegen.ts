
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-eu-west-2.hygraph.com/v2/clams6lml3ck701ujfteletgl/master",
  documents: ["src/services/graphql/queries/*.graphql", "src/services/graphql/mutations/*.graphql"],
  generates: {
    "generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      config: {
        avoidOptionals: true,
        onlyOperationTypes: true,
        preResolveTypes: true

      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
