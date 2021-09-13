import { Request, Response } from 'express';

import User from '@modules/users/models/User';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response
      .status(200)
      .send('REST Back-end Challenge 20201209 Running');
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const {
      cell,
      email,
      gender,
      nat,
      phone,
      name,
      location,
      dob,
      id,
      picture,
      registered,
      login,
    } = request.body;

    const userUpdated = await User.findOneAndUpdate(
      { 'login.uuid': userId },
      {
        $set: {
          cell,
          email,
          gender,
          nat,
          phone,
          name,
          location,
          dob,
          id,
          picture,
          registered,
          login,
        },
      }
    );

    if (!userUpdated) {
      return response
        .status(404)
        .json({ message: 'User with given ID not found' });
    }

    return response.status(200).json(userUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    await User.deleteOne({ 'login.uuid': userId });

    return response.status(204).json({ message: 'User deleted successfully' });
  }

  public async findById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { userId } = request.params;

    const userFound = await User.findOne({ 'login.uuid': userId });

    if (!userFound) {
      return response
        .status(404)
        .json({ message: 'User with given ID not found' });
    }

    return response.status(200).json(userFound);
  }

  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { page, limit } = request.query;

    const usersPaginated = await User.paginate({}, { page, limit });

    return response.status(200).json(usersPaginated);
  }
}
