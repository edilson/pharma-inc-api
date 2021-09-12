import { request } from 'undici';

import User from '@modules/users/models/User';

export async function importAndSaveUsers(): Promise<void> {
  const MAX_PAGES = 20;
  const MAX_RECORD_NUMBER_IMPORT_PER_PAGE = 100;

  for (let page = 1; page <= MAX_PAGES; page++) {
    const { body } = await request(
      `https://randomuser.me/api/?page=${page}&results=${MAX_RECORD_NUMBER_IMPORT_PER_PAGE}`
    );

    const parsedBody = await body.json();

    parsedBody.results.map(
      async (result: Record<string, any>) =>
        await User.create({
          cell: result.cell,
          email: result.email,
          gender: result.gender,
          nat: result.nat,
          phone: result.phone,
          name: result.name,
          location: result.location,
          dob: result.dob,
          external_id: result.id,
          picture: result.picture,
          registered: result.registered,
          login: result.login,
          status: 'draft',
        })
    );
  }
}
