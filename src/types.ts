export type HonourarySigmite = {
  image: string;
  name: string;
  description: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  abridgedContent: string;
  authorName: string;
  date: Date;
  image: string;
};

export type PhilantrophyActivity = {
  image: string;
  name: string;
  description: string;
  link: string;
};

export type Executive = {
  id: number | string;
  name: string;
  post: string;
  image: string;
  space?: string;
};

export type OldSigmite = {
  id: string;
  sigmaYear: string;
  name: string;
};

export type UpcomingEvent = {
  title: string;
  description: string;
  image: string;
  startDate: Date;
  endDate?: Date;
  venue?: string;
  url?: string
}
