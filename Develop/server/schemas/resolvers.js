const { User } = require("../models");

const resolvers = {
    Query: {
        users: async () => {
            const users = await User.find();
            return users;
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        addMovie: async (parent, { _id, movie }) => {
            // const user = await User.findById(_id);
            // user.savedMovies.push(movie);
            // await user.save();
            const updatedUser = await User.findByIdAndUpdate(
                { _id: _id },
                { $addToSet: { savedMovies: movie } },
                { new: true }
            );
            return updatedUser;
        },
        deleteMovie: async (parent, { _id, movieId }) => {
            // const user = await User.find(_id);
            // user.savedMovies = user.savedMovies.filter(
            //     (movie) => movie.movieId != movieId
            // );
            // await user.save();
            const updatedUser = await User.findByIdAndUpdate(
                { _id: _id },
                { $pull: { savedMovies: { movieId: movieId } } },
                { new: true }
            );
            return updatedUser;
        },
    },
};

module.exports = resolvers;
