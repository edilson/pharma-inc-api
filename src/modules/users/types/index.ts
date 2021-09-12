export interface Name {
  title: string;
  first: string;
  last: string;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Street {
  number: number;
  name: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface DateOfBirth {
  date: Date;
  age: number;
}

export interface Register {
  date: Date;
  age: number;
}

export interface ID {
  name?: string;
  value?: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
