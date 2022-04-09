import connectDB from 'middlewares/db';
import bcrypt from 'bcryptjs';
import {User} from 'models';
import {generateAuthTokens} from 'utils/auth';


/***
 * Login User Account
 * POST '/api/users/login'
*/
const handler = async (req, res) => {
  if (req.method !== 'POST') {
  	res.status(404);
  	throw new Error('not found');
  }

  const { email, password } = req.body;

  // checking required credencials
  if (!(username || email) || !password) {
  	res.status(400);
  	throw new Error('please provide all fields');
  }

  const user = (
    await User.findOne({username}) ||
    await User.findOne({email})
  );

  if (!user || !(await bcrypt.compare(password, user.password))) {
  	res.status(400);
  	throw new Error('invalid credencials');
  }

  // generating Auth Tokens
  const tokens = generateAuthTokens(user);
  res.status(200).json(tokens);

}

export default connectDB(handler);
