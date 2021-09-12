import { Schema, model } from 'mongoose';

import {
  DateOfBirth,
  Register,
  Name,
  Login,
  Picture,
  Location,
  ID,
} from '@modules/users/types';

enum Status {
  draft = 'draft',
  trash = 'trash',
  published = 'published',
}

interface IUser {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: DateOfBirth;
  registered: Register;
  phone: string;
  cell: string;
  external_id: ID;
  picture: Picture;
  nat: string;
  login: Login;
  imported_at: Date;
  status: Status;
}

const UserSchema = new Schema<IUser>({
  cell: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  nat: { type: String, required: true },
  phone: { type: String, required: true },
  name: {
    title: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  location: {
    street: {
      number: { type: Number, required: true },
      name: { type: String, required: true },
    },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postcode: { type: String, required: true },
    coordinates: {
      latitude: { type: String, required: true },
      longitude: { type: String, required: true },
    },
    timezone: {
      offset: { type: String, required: true },
      description: { type: String, required: true },
    },
  },
  dob: {
    date: { type: Date, required: true },
    age: { type: Number, required: true },
  },
  external_id: {
    name: { type: String },
    value: { type: String },
  },
  picture: {
    large: { type: String, required: true },
    medium: { type: String, required: true },
    thumbnail: { type: String, required: true },
  },
  registered: {
    date: { type: Date, required: true },
    age: { type: Number, required: true },
  },
  login: {
    uuid: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    md5: { type: String, required: true },
    sha1: { type: String, required: true },
    sha256: { type: String, required: true },
  },
  imported_at: { type: Date, default: new Date() },
  status: {
    type: String,
    enum: ['draft', 'published', 'trash'],
    required: true,
  },
});

const User = model('User', UserSchema);

export default User;
