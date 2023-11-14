import { ApiProperty } from '@nestjs/swagger';
import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
export class Note {
  @ApiProperty({ description: 'The unique identifier of the note.' })
  public id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The title of the note.', example: 'Note Title' })
  public title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The content of the note.',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non turpis molestie, egestas urna ornare, ornare metus. Ut ultricies sodales metus in efficitur.',
  })
  public content: string;

  @ApiProperty({ description: 'Creation date of note' })
  public createdAt: Date;

  @ApiProperty({ description: 'Last update date of note' })
  public updatedAt: Date;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export class NoteRequestBody extends PickType(Note, [
  'title',
  'content',
] as const) {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The title of the note.', example: 'Note Title' })
  public title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The content of the note.',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non turpis molestie, egestas urna ornare, ornare metus. Ut ultricies sodales metus in efficitur.',
  })
  public content: string;
}
