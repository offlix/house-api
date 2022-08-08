import morgan, { StreamOptions } from 'morgan';

import Logger from '../utils/logger';

//override the stream method
//morgan to use our custom logger instead of console.log

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

//skip all morgan http log if the application is not running
//in development mode.
const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

//build morgan middleware
const morganMiddleWare = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

export default morganMiddleWare;
