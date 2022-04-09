import connectDB from 'middlewares/db';
import {User} from 'models';


/***
 * Get User data
 * GET '/api/users/me'
 * Auth requred
*/
const handler = async (req, res) => {
  if (req.method !== 'GET') {
  	res.status(404);
  	throw new Error('not found');
  }

  // fetching User data
  const user = await User.findById(req.user.id, {
  	_id: 0, __v: 0,
  	lastlogin: 0,
  	password: 0,
  });

  res.status(200).json({
  	id: user.id,
  	...(user._doc),
  });

}

export default connectDB(handler);
