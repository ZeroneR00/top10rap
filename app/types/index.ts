export interface Rapper {
    id: string;
    slug: string;
    name: string;
    realName?: string;
    image: string;
    rank: number;
    tags?: string[];
    bio?: string;
    // more if need
  }