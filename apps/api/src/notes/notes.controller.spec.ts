import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';

const MOCK_NOTE: Note = {
  id: 1,
  title: 'Test Note',
  content: 'This is a test note',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('NotesController', () => {
  let controller: NotesController;
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    controller = module.get<NotesController>(NotesController);
    service = module.get<NotesService>(NotesService);
  });

  describe('create', () => {
    it('should create a note', async () => {
      const { title, content } = MOCK_NOTE;
      jest.spyOn(service, 'create').mockReturnValueOnce(MOCK_NOTE);

      const result = controller.create({ title, content });

      expect(result).toBe(MOCK_NOTE);
    });
  });

  describe('findAll', () => {
    it('should return an array of notes', async () => {
      const notes: Note[] = [MOCK_NOTE, MOCK_NOTE, MOCK_NOTE];
      jest.spyOn(service, 'findAll').mockReturnValueOnce(notes);

      const result = controller.findAll();

      expect(result).toBe(notes);
    });
  });

  describe('findOne', () => {
    it('should return a note by id', async () => {
      const { id } = MOCK_NOTE;
      jest.spyOn(service, 'findOne').mockReturnValueOnce(MOCK_NOTE);

      const result = controller.findOne(id);

      expect(result).toBe(MOCK_NOTE);
    });
  });

  describe('update', () => {
    it('should update a note by id', async () => {
      const id = 1;
      const title = 'Updated Note';
      const content = 'This is an updated note';
      const updatedNote = {
        ...MOCK_NOTE,
        id,
        title,
        content,
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'update').mockReturnValueOnce(updatedNote);

      const result = controller.update(id, { title, content });

      expect(result).toBe(updatedNote);
    });
  });

  describe('remove', () => {
    it('should remove a note by id', async () => {
      const id = 1;
      jest.spyOn(service, 'remove').mockReturnValueOnce(MOCK_NOTE);

      const result = controller.remove(id);

      expect(result).toBe(MOCK_NOTE);
    });
  });
});
