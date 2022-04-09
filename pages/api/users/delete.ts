import connectDB from 'middlewares/db';
import {User} from 'models';


/***
 * Delete User Account
 * DELETE '/api/users/delete'
 * Auth requred
*/
const handler = async (req, res) => {
  if (req.method !== 'DELETE') {
  	res.status(404);
  	throw new Error('not found');
  }

  await User.findByIdAndDelete(req.user.id);

  res.status(200).json({
  	message: 'success',
  });

}

export default connectDB(handler);
