import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from "apollo-upload-client";


let token;
// let apolloClient;

const httpLink = createUploadLink({
    uri: 'http://localhost:1337/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    if (typeof window !== 'undefined') {
        token = localStorage.getItem('tokenKey');
    }
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({

    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;