import { createConnection } from 'typeorm';
import { User } from '../users/user.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true
      })
        .then(connection => {
          let user = new User();
          user.userName = 'Admin';
          user.firstName = 'Super';
          user.lastName = 'Admin';
          user.age = 25;

          return connection.manager.save(user).then (user => {
            console.log('User initialized', user.id, user.userName);
          });
        })
        .catch(error => console.log(error))
  }
];
