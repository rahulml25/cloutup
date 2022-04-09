import connectDB from 'middlewares/db';
import bcrypt from 'bcryptjs';
import {User} from 'models';
import {generateAuthTokens} from 'utils/auth';


/***
 * Create a new User Account
 * POST '/api/users/signup'
*/
const handler = async (req, res) => {
  if (req.method !== 'POST') {
  	res.status(404);
  	throw new Error('not found');
  }

  const { username, firstname, lastname, email, password } = req.body;

  // checking required fields
  if (!username || !firstname || !lastname || !email || !password) {
  	res.status(400);
  	throw new Error('please provide all fields');
  }

  // checking if User already exists
  const userExists = await User.findOne({username});
  if (userExists) {
  	res.status(400);
  	throw new Error('invalid credencials');
  }

  // adding Salt & Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
  	username, firstname, lastname,
  	email, password: hashedPassword,
  });

  // checking if user creation successfull
  if (!user) {
  	res.status(400);
  	throw new Error('invalid credencials');
  }

  // generating Auth Tokens
  const tokens = generateAuthTokens(user);
  res.status(200).json(tokens)

}

export default connectDB(handler);
