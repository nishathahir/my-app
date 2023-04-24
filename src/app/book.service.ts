import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description:
        'A story about the decline of the American dream in the 1920s.',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description:
        'A novel about racial inequality in the South during the 1930s.',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A classic romance novel set in 19th century England.',
    },
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
