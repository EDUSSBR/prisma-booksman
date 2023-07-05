import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  return await prisma.books.findMany({});
}

export async function getBook(id: number) {
  return await prisma.books.findFirst({ where: { id } });
}

export async function createBook(book: CreateBook) {
  const { title, author, cover, publisher, purchaseDate } = book;
  return await prisma.books.create({ data: { title, cover, author, publisher, purchaseDate:new Date(purchaseDate) } })
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, read, grade, review } = bookReview;
  return await prisma.books.update({ data: { grade, review, read }, where: { id: bookId } })
}