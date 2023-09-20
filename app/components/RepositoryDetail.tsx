import { GitHubRepository } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { AiOutlineStar } from "react-icons/ai";
import formatDate from "../helpers/formatDate";
import { getCircleColor } from "../helpers/getCircleColor";
import Languages from "./Languages";

interface RepositoryDetailProps extends GitHubRepository {
  ghlink?: boolean;
}

const RepositoryDetail: React.FC<RepositoryDetailProps> = ({
  id,
  full_name,
  owner,
  stargazers_count,
  description,
  clone_url,
  updated_at,
  language,
  languages_url,
  ghlink,
}) => {
  const renderBottomPanel = () => (
    <div className="flex gap-2">
      {language && (
        <div className="flex gap-2 items-center text-[#656d76] text-sm">
          <span
            className={`w-2 h-2 rounded-full ${getCircleColor(language)}`}
          ></span>
          {language}
        </div>
      )}
      {stargazers_count > 0 && (
        <>
          <span>·</span>
          <div className="flex gap-2 items-center text-[#656d76] text-sm">
            <AiOutlineStar size={18} className="text-[#656d76]" />
            {stargazers_count}
          </div>
        </>
      )}
      <span>·</span>
      <div className="flex gap-2 items-center text-[#656d76] text-sm">
        Updated on {formatDate(updated_at)}
      </div>
    </div>
  );

  return (
    <div className="p-4 rounded border border-[#d0d7de] flex flex-col gap-2 w-full">
      <div className="flex items-center flex-wrap">
        <div className="rounded-md overflow-hidden mr-2">
          <Image src={owner.avatar_url} alt="avatar" width={20} height={20} />
        </div>
        {ghlink ? (
          <a
            href={clone_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969da] hover:underline underline-offset-2 font-medium md:text-xl whitespace-nowrap text-ellipsis overflow-hidden"
          >
            {full_name}
          </a>
        ) : (
          <Link
            href={`/repo/${id}`}
            className="text-[#0969da] hover:underline underline-offset-2 font-medium md:text-xl whitespace-nowrap text-ellipsis overflow-hidden"
          >
            {full_name}
          </Link>
        )}
        <button className="ml-auto bg-[#f6f8fa] hover:bg-[#eeeff1] flex items-center border border-[rgba(31, 35, 40, 0.15)] gap-2 px-3 py-1 rounded-lg transition-colors duration-200">
          <AiOutlineStar size={18} className="text-[#656d76]" />
          <span className="text-xs text-[#24292f] font-medium">Star</span>
        </button>
      </div>
      <p>{description}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Languages languages_url={languages_url} />
      </Suspense>
      {renderBottomPanel()}
    </div>
  );
};

export default RepositoryDetail;
