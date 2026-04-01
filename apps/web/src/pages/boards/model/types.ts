export interface BoardPost {
  slug: string;
  title: string;
  department: string;
  timestamp: string;
  body: string;
}

export interface BoardDirectoryItem {
  label: string;
  description: string;
  posts: readonly BoardPost[];
}

export interface BoardsPageProps {
  board: string;
  post?: string;
}
