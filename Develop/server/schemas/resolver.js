const { User } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
    const user = await User.find({})
      return user;
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    savedMovies: async (parent, { _id, movie}) => {
        const user = await User.findById(_id)
        user.savedMovies.push(movie)
        user.save();
        return user;
    },
    deleteMovie: async (parent, {_id, movieId})=>{
        const user = await User.findById(_id)
       user.savedMovies = user.savedMovies.filter(movie=> movie!=movieId)
       user.save();
       return user;
    }

      
    },
  };

module.exports = resolvers;