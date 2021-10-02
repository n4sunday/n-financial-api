import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pet } from './pets/pet.entity';
import { PetsController } from './pets/pets.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://root:hardc0deX@finxcluster.epdly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      database: 'finxCluster',
      entities: [Pet],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      logging: true,
      j: true,
    }),
    TypeOrmModule.forFeature([Pet]),
  ],
  controllers: [AppController, PetsController],
  providers: [AppService],
})
export class AppModule {}
