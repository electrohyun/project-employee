import { BoardsPage } from "@/pages/boards";

interface BoardPageProps {
  params: Promise<{ board: string }>;
  searchParams: Promise<{ post?: string }>;
}

export default async function BoardPage({ params, searchParams }: BoardPageProps) {
  const { board } = await params;
  const { post } = await searchParams;

  return <BoardsPage board={board} post={post} />;
}
