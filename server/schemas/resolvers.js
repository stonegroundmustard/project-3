const { User } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            const users = await User.find();
            return users;
        },
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        addMovie: async (parent, { _id, movie }, context) => {
            // const user = await User.findById(_id);
            // user.savedMovies.push(movie);
            // await user.save();
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedMovies: movie } },
                { new: true }
            );
            return updatedUser;
        },
        deleteMovie: async (parent, { _id, movieId }, context) => {
            // const user = await User.find(_id);
            // user.savedMovies = user.savedMovies.filter(
            //     (movie) => movie.movieId != movieId
            // );
            // await user.save();
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { savedMovies: { movieId: movieId } } },
                { new: true }
            );
            return updatedUser;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
    },
};

module.exports = resolvers;
