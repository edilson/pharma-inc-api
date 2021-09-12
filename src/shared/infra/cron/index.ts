import { CronJob } from 'cron';

import { importAndSaveUsers } from '@modules/users/helpers';

export default function startCron(): void {
  const importUsersFromApi = new CronJob(
    '00 30 12 * * *',
    () => {
      importAndSaveUsers();
    },
    null,
    false,
    'America/Sao_Paulo'
  );

  importUsersFromApi.start();
}
