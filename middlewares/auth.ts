import connectDB from './db';
import jwt from 'jsonwebtoken';
import {User} from 'models';

const authProvider = (handler) => connectDB(async (req, res) => {
  const {authorization: auth} = req.headers;
  let token;

  if (auth && auth?.startsWith('Bearer')) {
    try {
      token = auth.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      req.user = await User.findById(decoded?.id);
      if (!req.user) throw new Error('');

    } catch (err) {
      res.status(401);
      throw new Error('unauthorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('unauthorized');
  }

  return await handler(req, res);

});

export {
  authProvider,
}
