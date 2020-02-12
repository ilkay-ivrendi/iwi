import { Sequelize } from 'sequelize-typescript';
import { Users } from '../users/user.entity';
import { ConfigService, ConfigModule } from '@nestjs/config';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: configService.get('TYPEORM_CONNECTION'),
        host: configService.get('TYPEORM_HOST'),
        port: configService.get('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        sync: configService.get('TYPEORM_SYNCHRONIZE')
      });
      sequelize.addModels([Users]);
      await sequelize.sync({ force: true });
      try {
        await sequelize.authenticate();
        const jane =  Users.create({ firstName: "Jane", lastName: "Doe" });
        const john =  Users.create({ firstName: "John", lastName: "Doew" });
        console.log((await john).id, (await jane).id);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      return sequelize;
    },
    inject: [ConfigService]
  }
];
