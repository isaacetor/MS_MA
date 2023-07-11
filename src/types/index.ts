export type searchData = {
  placeholder: string;
  icons?: any;
};

export type cardData = {
  cover: any;
  authorCover: any;
  authorName: string;
  place: string;
  rating: number;
  amount: number;
  date: string;
  route: string;
};

export type HeaderData = {
  width: string;
  sticky?: string;
};

export type imageData = {
  cover: any;
  authorCover: any;
};

export type textData = {
  authorName: string;
  place: string;
  rating: number;
  amount: number;
  date: string;
};

export type iHead = {
  name: string;
  rating: string;
  reviews: string;
  place: string;
};

export type iEntire = {
  host: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

export type buttonData = {
  text: string;
};
