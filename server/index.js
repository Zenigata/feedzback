import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from './src/graphql/typeDefs.js';
import {resolvers} from './src/graphql/resolvers.js';
import cors from 'cors';

// sgMail.setApiKey(process.env.API_KEY);
const server = new ApolloServer({typeDefs, resolvers, introspection: true,
  playground: true});
const app = express();

const data = {
  email: 'hawler',
  
}
const params = new URLSearchParams(data).toString();
const url = 'http://localhost:4200/formulaire/';
console.log(url+params);

app.use("*",cors());
const PORT = parseInt(process.env.PORT) || 4000;
server.start().then(()=>{
  server.applyMiddleware({app}),
  app.listen({
    port: PORT},
  ()=> {
    console.log('Now browse to http://localhost:4000' + server.graphqlPath);
  },
  );
});

