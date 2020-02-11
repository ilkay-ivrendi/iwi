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
        sync: configService.get('TYPEORM_SYNCHRONIZE'),
        logging: configService.get('TYPEORM_LOGGING')
      });
      sequelize.addModels([Users]);
      await sequelize.sync();
      try {
        await sequelize.authenticate();
        const jane =  Users.create({ firstName: "Jane", lastName: "Doe" });
        console.log('Connection has been established successfully.');
        console.log("Jane's auto-generated ID:", jane.get('id'));
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      return sequelize;
    },
    inject: [ConfigService]
  }
];
