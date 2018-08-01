const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const userSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true
  },
  local: {
    username: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    }
  },
  google: {
    id: String,
    username: String,
    email: String
  }
});

//BCRYPT PASSWORD

userSchema.pre('save', async function(next) {
  try {
      if (this.method !== 'local') {
          next();
      }
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Generate a password hash (salt + hash)
      const passwordHash = await bcrypt.hash(this.local.password, salt);
      // Re-assign hashed version over original, plain text password
      this.local.password = passwordHash;
      //console.log('exited');
      next();
  } catch (error) {
      next(error);
  }
});

//METHOD CHECKED PASSWORD CORRECT
userSchema.methods.isValidPassword = async function(newPassword) {
    try {

      return await bcrypt.compare(newPassword, this.local.password);
      //console.log(result);
      //return await bcrypt.compare(newPassword, this.local.password);
    } catch(error) {
      throw new Error(error);
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User;