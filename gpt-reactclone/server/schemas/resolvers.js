const User = require('../models/user');
const History = require('../models/history');
const jwt = require('jsonwebtoken');
const OpenAI = require('openai');
const { AuthenticationError } = require('apollo-server');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const JWT_SECRET = process.env.JWT_SECRET;

const resolvers = {
    Query: {
        user: async (_, __, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }
            throw new AuthenticationError('User not authenticated');
        }
    },
    Mutation: {
        register: async (_, { username, email, password }) => {
            // const hashedPassword = await User.generateHash(password);
            const user = await User.create({ username, email, password });
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
            return { token, user };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User not found');
            }
            const isValidPassword = await user.matchPassword(password);
            if (!isValidPassword) {
                throw new AuthenticationError('Invalid password');
            }
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
            return { token, user };
        },
        generateResponse: async (_, { inputText }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Authentication required');
            }
            const option = {
                model: "gpt-3.5-turbo-instruct",
                prompt: inputText,
                temperature: 1,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            };
            const response = await openai.completions.create(option);
            if (response.choices.length) {
                const answer = response.choices[0].text;
                const user = await User.findOne({ _id: context.user.userId })
                const historyEntry = await History.create({ question: inputText, answer});
                user.history.push(historyEntry._id);
                await user.save();
                return { inputText, answer };
            } else {
                throw new Error("Failed to generate response");
            }
        },
    },
};

module.exports = resolvers;

