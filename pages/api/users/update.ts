import connectDB from 'middlewares/db';
import {User} from 'models';


/***
 * Update User data
 * PUT '/api/users/update'
 * Auth requred
*/
const handler = async (req, res) => {
  if (req.method !== 'PUT') {
  	res.status(404);
  	throw new Error('not found');
  }

  if (!req.body) {
  	res.status(400);
  	throw new Error('please add at least one field')
  }

  const {
    username, email,
    firstname, lastname,
    ...rest
  } = req.body;

  if (!username || !email || !firstname || !lastname) {
  	res.status(400);
  	throw new Error('please add all fields');
  }

  // updating specific fields
  await User.findByIdAndUpdate({
    username, email,
    firstname, lastname,
  });

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
