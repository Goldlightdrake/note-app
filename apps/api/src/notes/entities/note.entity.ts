import { ApiProperty } from '@nestjs/swagger';
export class Note {
  @ApiProperty({ description: 'The unique identifier of the note.' })
  public id: string;

  @ApiProperty({ description: 'The title of the note.' })
  public title: string;

  @ApiProperty({ description: 'The content of the note.' })
  public content: string;

  @ApiProperty({ description: 'Creation date of note' })
  public createdAt: Date;

  @ApiProperty({ description: 'Last update date of note' })
  public updatedAt: Date;

  constructor(id: string, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
