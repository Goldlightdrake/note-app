import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('NotesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/notes (POST)', () => {
    return request(app.getHttpServer())
      .post('/notes')
      .send({ title: 'Test Note', content: 'This is a test note.' })
      .expect(201);
  });

  it('/notes (GET)', () => {
    return request(app.getHttpServer()).get('/notes').expect(200);
  });

  it('/notes/:id (GET)', async () => {
    const response = await request(app.getHttpServer())
      .post('/notes')
      .send({ title: 'Test Note', content: 'This is a test note.' })
      .expect(201);

    const noteId = response.body.id;

    return request(app.getHttpServer()).get(`/notes/${noteId}`).expect(200);
  });

  it('/notes/:id (PATCH)', async () => {
    const response = await request(app.getHttpServer())
      .post('/notes')
      .send({ title: 'Test Note', content: 'This is a test note.' })
      .expect(201);

    const noteId = response.body.id;
    return request(app.getHttpServer())
      .patch(`/notes/${noteId}`)
      .send({
        title: 'Updated Test Note',
        content: 'This is an updated test note.',
      })
      .expect(200);
  });

  it('/notes/:id (DELETE)', async () => {
    const response = await request(app.getHttpServer())
      .post('/notes')
      .send({ title: 'Test Note', content: 'This is a test note.' })
      .expect(201);

    const noteId = response.body.id;
    return request(app.getHttpServer()).delete(`/notes/${noteId}`).expect(204);
  });
});
