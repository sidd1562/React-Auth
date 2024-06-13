import { Client, Account } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '666983cd002ef80d3ab7'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);

export default client;