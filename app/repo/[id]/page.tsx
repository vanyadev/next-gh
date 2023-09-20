import RepositoryDetail from "@/app/components/RepositoryDetail";
import { fetchRepoById } from "@/app/helpers/fetchRepoById";
import { GitHubRepository } from "@/types";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params: { id } }: PageProps) => {
  const repoData: Promise<GitHubRepository> = fetchRepoById(id);
  const repo = await repoData;
  return (
    <div className="px-8 w-full py-4">
      {repo ? <RepositoryDetail {...repo} ghlink /> : <p>Loading...</p>}
    </div>
  );
};

export default page;
