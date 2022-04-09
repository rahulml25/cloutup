import {authProvider} from 'middlewares/auth';
import jwt from 'jsonwebtoken';
import {User} from 'models';
import {generateAuthTokens} from 'utils/auth';


/***
 * Get new Auth Tokens
 * POST '/api/users/refresh-tokens'
 * Auth required
*/
const handler = async (req, res) => {
  if (req.method !== 'POST') {
  	res.status(404);
  	throw new Error('not found');
  }

  const {refreshToken} = req.body;

  if (refreshToken) {
  	res.status(400);
  	throw new Error('invalid token')
  }

  // verifing Refresh Token
  const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);
  if (
    !decoded?.id ||
    decoded?.type !== 'refresh' ||
    decoded.id !== req.user.id
  ) {
    res.status(400); 
    throw new Error('invalid refresh-token');
  }

  // generating Auth Tokens
  const tokens = generateAuthTokens(req.user);
  res.status(200).json(tokens);

}

export default authProvider(handler);
