import { connect } from 'mongoose';

const connection = () => {
  connect(process.env.MONGO_URL as string);
};

export default connection;
