import Image from "next/image";
import Header from "./components/Header";
import { GitHubRepository, fetchResponse } from "@/types";
import { fetchAllRepos } from "./helpers/fetchAllRepos";
import RepositoryList from "./components/RepositoryList";
import Sidebar from "./components/Sidebar";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = searchParams?.q;
  const currPage = Array.isArray(searchParams?.page)
    ? searchParams?.page.join()
    : searchParams?.page || "1";
  const reposData: Promise<fetchResponse> = fetchAllRepos(
    `${searchQuery || "vanyadev"}`,
    currPage
  );
  const repos = await reposData;

  return (
    <>
      <RepositoryList
        repos={repos.data}
        error={repos.error}
        total={repos.total_data}
      />
    </>
  );
}
