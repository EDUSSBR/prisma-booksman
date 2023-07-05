export type Review = {
  id: number;
  bookId: number;
  review: string;
  grade: number;
  read: boolean;
};

export type CreateReview = Omit<Review, "id">;