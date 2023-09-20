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

// Explicitly define the type for the fetchRepoById function

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

// export async function generateStaticParams() {
//   const postsData: Promise<fetchResponse> = fetchAllRepos("vanyadev");
//   const posts = await postsData;
//   if (!posts.data) return;
//   return posts.data.map((post) => ({
//     id: post.id.toString(),
//   }));
// }
