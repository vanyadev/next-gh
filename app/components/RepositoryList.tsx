import { GitHubRepository } from "@/types";
import React from "react";
import RepositoryDetail from "./RepositoryDetail";
import Pagination from "./Pagination";
import { BiErrorAlt } from "react-icons/bi";

interface IRepoList {
  repos: GitHubRepository[] | null;
  error: string | null;
  total: number;
}

const RepositoryList = ({ repos, error, total }: IRepoList) => {
  return (
    <section className="flex flex-col gap-2 w-full px-8 py-3">
      <h3 className="pb-4 font-semibold">{total} results</h3>
      {error && (
        <p className="flex gap-2 items-center">
          <BiErrorAlt className="text-red-500" size={24} /> {error}
        </p>
      )}
      {repos?.map((repo) => (
        <RepositoryDetail key={repo.id} {...repo} />
      ))}
      {repos && <Pagination total={total} />}
    </section>
  );
};

export default RepositoryList;
