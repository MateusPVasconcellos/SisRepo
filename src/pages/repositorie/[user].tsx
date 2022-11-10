import { GetServerSideProps, GetServerSidePropsContext } from "next";

import GitHubImage from "../../../public/GitHub-Mark-Light-32px.png";
import Image from "next/image";
import Link from "next/link";
import { imageType } from "../../lib/imageType";
import { useState } from "react";
import { Pagination } from "../../components/Pagination";
import { ListHeader } from "../../components/ListHeader";

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

interface User {
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

export interface UserProps {
  name: string;
  avatarUrl: string;
  githubUrl: string;
}

interface RepoProps {
  key: string;
  repoName: string;
  repoUrl: string;
  createdAt: string;
  updatedAt: string;
  language: string;
}

interface ListProps {
  user: UserProps[];
  repo: RepoProps[];
}

export default function List(props: ListProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itensPerPage] = useState<number>(5);

  const indexOfLastItem = currentPage * itensPerPage;
  const indexOfFirstItem = indexOfLastItem - itensPerPage;
  const currentItens = props.repo.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto text-white">
      <ListHeader user={props.user[0]} />

      <div className="flex justify-center">
        <h1 className="mt-5 text-3xl">Repositórios</h1>
      </div>

      <div className="mx-auto flex justify-center">
        <main className="mb-10 mt-4 box-border w-3/4 rounded-lg border-2 border-gray-600 bg-gray-900 p-3">
          <ul>
            {currentItens.map((el: any) => (
              <li
                key={el.key}
                className="m-3 flex rounded-lg rounded-l-2xl bg-gray-800"
              >
                <Image
                  className="rounded-xl border-2 border-blue-200"
                  loader={() => imageType(el.language)}
                  src={imageType(el.language)}
                  alt="avatar"
                  quality={100}
                  height={80}
                  width={80}
                />
                <div className="flex flex-grow justify-between py-3 px-10">
                  <div>
                    <p className="text-xl">{el.repoName}</p>
                  </div>
                  <div className="flex items-center">
                    <Link target="_blank" href={el.repoUrl}>
                      <Image quality={100} alt="github" src={GitHubImage} />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Pagination
            paginate={paginate}
            itensPerPage={itensPerPage}
            totalItens={props.repo.length}
            currentPage={currentPage}
          />
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const user = params?.user;
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = await response.json();
  const repoData: User[] = data.map((e: User) => {
    return {
      key: e.id,
      repoName: e.name,
      repoUrl: e.html_url,
      createdAt: e.created_at,
      updatedAt: e.updated_at,
      language: e.language,
    };
  });
  const userData: User[] = data.map((e: User) => {
    return {
      name: e.owner.login,
      avatarUrl: e.owner.avatar_url,
      githubUrl: e.owner.html_url,
    };
  });
  return {
    props: {
      user: userData,
      repo: repoData,
    },
  };
};
