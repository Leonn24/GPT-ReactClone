const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const secret = process.env.SECRET
const expiration = '2h';