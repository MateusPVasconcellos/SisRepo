import GitHubImage from "../../../public/GitHub-Mark-Light-32px.png";
import Image from "next/image";
import Link from "next/link";
import { imageType } from "../../lib/imageType";
import { Pagination } from "../../components/Pagination";
import { ListHeader } from "../../components/ListHeader";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import Custom404 from "../404.js";

interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface User {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface UserDataProps {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  key: number;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  updatedAt: string;
  language: string;
}

export default function List() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itensPerPage] = useState<number>(5);
  const { userData } = useSearch();

  const indexOfLastItem = currentPage * itensPerPage;
  const indexOfFirstItem = indexOfLastItem - itensPerPage;
  const currentItens = userData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (!userData.length) return <Custom404 />;

  return (
    userData.length && (
      <div className="mx-auto max-w-[80%] text-white">
        <ListHeader user={userData[1]} />
        <div className="flex justify-center">
          <h1 className="mt-5 text-2xl md:text-3xl">Repositórios</h1>
        </div>

        <div className="mx-auto flex justify-center">
          <main className="mt-4 box-border w-full rounded-lg border-2 border-gray-600 bg-gray-900 px-3 pb-3">
            <ul>
              {currentItens.map((el: UserDataProps) => (
                <li
                  key={el.key}
                  className="my-2 flex rounded-lg rounded-l-2xl bg-gray-800 md:my-3"
                >
                  <Image
                    className="w-14 rounded-xl border-2 border-blue-200 md:w-16"
                    src={imageType(el.language)}
                    alt="language type"
                    quality={100}
                    width={0}
                    height={0}
                  />
                  <div className="flex flex-grow items-center justify-between py-3 px-4 md:py-5 md:text-xl">
                    <div>
                      <p>{el.repoName}</p>
                    </div>
                    <div className="flex items-center md:mr-3">
                      <Link target="_blank" href={el.repoUrl}>
                        <Image
                          className="w-6"
                          quality={100}
                          alt="github"
                          src={GitHubImage}
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Pagination
              paginate={paginate}
              itensPerPage={itensPerPage}
              totalItens={userData.length}
              currentPage={currentPage}
            />
          </main>
        </div>
      </div>
    )
  );
}
