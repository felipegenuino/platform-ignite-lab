import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4wrkyze07or01ta0e4j7as8/master',
    cache: new InMemoryCache(), 
});
