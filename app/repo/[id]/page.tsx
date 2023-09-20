import RepositoryDetail from "@/app/components/RepositoryDetail";
import { fetchAllRepos } from "@/app/helpers/fetchAllRepos";
import fetchRepoById from "@/app/helpers/fetchRepoById";
import { GitHubRepository, fetchResponse } from "@/types";
import React, { Suspense } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const RepoPage = async ({ params: { id } }: PageProps) => {
  const repoData: Promise<GitHubRepository> = fetchRepoById(id);
  const repo = await repoData;
  return (
    <div className="px-8 w-full py-4">
      <Suspense fallback={<p>Loading...</p>}>
        {repo ? <RepositoryDetail {...repo} ghlink /> : <p>Loading...</p>}
      </Suspense>
    </div>
  );
};

export default RepoPage;
