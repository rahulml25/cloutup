import jwt from 'jsonwebtokens';

const generateAuthTokens = (user) => {
  const { id, email } = user,
  secretKey = process.env.SECRET_KEY;

  const authTokens = {
    access: jwt.sign({id, email}, secretKey, {
      expiresIn: '15d', // '1s',
    }),
    refresh: jwt.sign({id}, secretKey, {
      expiresIn: '90d',
    }),
  };

  return authTokens;
};
