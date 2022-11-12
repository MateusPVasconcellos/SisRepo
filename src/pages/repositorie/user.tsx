import GitHubImage from "../../../public/GitHub-Mark-Light-32px.png";
import Image from "next/image";
import Link from "next/link";
import { imageType } from "../../lib/imageType";
import { Pagination } from "../../components/Pagination";
import { ListHeader } from "../../components/ListHeader";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";

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
  language: string | null;
}

export default function List() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itensPerPage] = useState<number>(5);
  /*  const { userData } = useSearch(); */

  const userData: UserDataProps[] = [
    {
      key: 544892371,
      repoName: "05-design-system",
      repoUrl: "https://github.com/diego3g/05-design-system",
      createdAt: "2022-10-03T12:19:04Z",
      updatedAt: "2022-11-04T19:06:18Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 148536159,
      repoName: "blog-graphql-prisma",
      repoUrl: "https://github.com/diego3g/blog-graphql-prisma",
      createdAt: "2018-09-12T20:11:34Z",
      updatedAt: "2022-10-02T15:57:59Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 453118754,
      repoName: "context-example",
      repoUrl: "https://github.com/diego3g/context-example",
      createdAt: "2022-01-28T15:29:34Z",
      updatedAt: "2022-10-17T02:42:14Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 371128111,
      repoName: "cranetlify",
      repoUrl: "https://github.com/diego3g/cranetlify",
      createdAt: "2021-05-26T18:09:11Z",
      updatedAt: "2021-09-01T12:51:40Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 278385384,
      repoName: "diego3g",
      repoUrl: "https://github.com/diego3g/diego3g",
      createdAt: "2020-07-09T14:21:29Z",
      updatedAt: "2022-10-13T01:55:29Z",
      language: null,
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 131076869,
      repoName: "dokr",
      repoUrl: "https://github.com/diego3g/dokr",
      createdAt: "2018-04-26T00:03:59Z",
      updatedAt: "2022-06-28T12:47:33Z",
      language: "JavaScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 275675505,
      repoName: "electron-typescript-react",
      repoUrl: "https://github.com/diego3g/electron-typescript-react",
      createdAt: "2020-06-28T22:01:03Z",
      updatedAt: "2022-11-12T00:46:09Z",
      language: "JavaScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 258042609,
      repoName: "expo-pomodoro-app",
      repoUrl: "https://github.com/diego3g/expo-pomodoro-app",
      createdAt: "2020-04-22T23:20:58Z",
      updatedAt: "2022-11-04T19:06:16Z",
      language: "JavaScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 495481183,
      repoName: "fronteditorv2",
      repoUrl: "https://github.com/diego3g/fronteditorv2",
      createdAt: "2022-05-23T16:03:33Z",
      updatedAt: "2022-10-21T23:00:49Z",
      language: null,
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 230470400,
      repoName: "gcloud-node-video-transcoding",
      repoUrl: "https://github.com/diego3g/gcloud-node-video-transcoding",
      createdAt: "2019-12-27T15:47:16Z",
      updatedAt: "2022-11-12T01:15:52Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 180689098,
      repoName: "graphql-nexus-example",
      repoUrl: "https://github.com/diego3g/graphql-nexus-example",
      createdAt: "2019-04-11T01:13:40Z",
      updatedAt: "2021-11-19T20:51:43Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 507071997,
      repoName: "ignite-lab-react",
      repoUrl: "https://github.com/diego3g/ignite-lab-react",
      createdAt: "2022-06-24T16:12:59Z",
      updatedAt: "2022-11-02T17:01:26Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 459780386,
      repoName: "jamstack-next-graphcms",
      repoUrl: "https://github.com/diego3g/jamstack-next-graphcms",
      createdAt: "2022-02-15T23:10:31Z",
      updatedAt: "2022-11-02T17:33:49Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 94660093,
      repoName: "jivia",
      repoUrl: "https://github.com/diego3g/jivia",
      createdAt: "2017-06-18T02:20:10Z",
      updatedAt: "2022-08-16T12:48:10Z",
      language: "JavaScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 482698671,
      repoName: "jivia-godot",
      repoUrl: "https://github.com/diego3g/jivia-godot",
      createdAt: "2022-04-18T03:12:30Z",
      updatedAt: "2022-11-05T16:14:26Z",
      language: "GDScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 537130269,
      repoName: "journey-quiz",
      repoUrl: "https://github.com/diego3g/journey-quiz",
      createdAt: "2022-09-15T17:13:00Z",
      updatedAt: "2022-11-04T19:06:19Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 515729207,
      repoName: "keycloak-nextjs-example",
      repoUrl: "https://github.com/diego3g/keycloak-nextjs-example",
      createdAt: "2022-07-19T20:17:01Z",
      updatedAt: "2022-11-06T20:15:29Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 475078831,
      repoName: "microservices-base-decode",
      repoUrl: "https://github.com/diego3g/microservices-base-decode",
      createdAt: "2022-03-28T16:07:10Z",
      updatedAt: "2022-11-11T10:57:08Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 363773341,
      repoName: "mini-video-me",
      repoUrl: "https://github.com/diego3g/mini-video-me",
      createdAt: "2021-05-02T23:43:21Z",
      updatedAt: "2022-08-05T12:16:40Z",
      language: null,
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 390139558,
      repoName: "mux-batch-import",
      repoUrl: "https://github.com/diego3g/mux-batch-import",
      createdAt: "2021-07-27T22:05:20Z",
      updatedAt: "2022-09-24T22:45:44Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 474463911,
      repoName: "nest-sls-starter",
      repoUrl: "https://github.com/diego3g/nest-sls-starter",
      createdAt: "2022-03-26T20:53:06Z",
      updatedAt: "2022-06-15T14:05:43Z",
      language: null,
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 406549999,
      repoName: "next-and-cra-serverless",
      repoUrl: "https://github.com/diego3g/next-and-cra-serverless",
      createdAt: "2021-09-14T23:28:05Z",
      updatedAt: "2022-11-02T17:39:30Z",
      language: "JavaScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 353484078,
      repoName: "next-aws",
      repoUrl: "https://github.com/diego3g/next-aws",
      createdAt: "2021-03-31T20:39:04Z",
      updatedAt: "2022-10-16T01:25:22Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 460640337,
      repoName: "next-basics",
      repoUrl: "https://github.com/diego3g/next-basics",
      createdAt: "2022-02-17T23:19:39Z",
      updatedAt: "2022-10-14T13:43:48Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 547259324,
      repoName: "next-graphql-codegen",
      repoUrl: "https://github.com/diego3g/next-graphql-codegen",
      createdAt: "2022-10-07T11:45:24Z",
      updatedAt: "2022-11-04T19:06:13Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 384283365,
      repoName: "next-supabase-fullcycle",
      repoUrl: "https://github.com/diego3g/next-supabase-fullcycle",
      createdAt: "2021-07-09T00:53:01Z",
      updatedAt: "2022-09-10T16:03:26Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 286807769,
      repoName: "nextjs-chakra",
      repoUrl: "https://github.com/diego3g/nextjs-chakra",
      createdAt: "2020-08-11T17:32:53Z",
      updatedAt: "2022-06-13T16:32:08Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 286103023,
      repoName: "nextjs-dogs",
      repoUrl: "https://github.com/diego3g/nextjs-dogs",
      createdAt: "2020-08-08T19:01:20Z",
      updatedAt: "2022-03-17T13:02:07Z",
      language: "JavaScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 371151523,
      repoName: "nextvercel",
      repoUrl: "https://github.com/diego3g/nextvercel",
      createdAt: "2021-05-26T19:45:07Z",
      updatedAt: "2022-03-02T15:20:48Z",
      language: "JavaScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
    {
      key: 306151334,
      repoName: "nivo",
      repoUrl: "https://github.com/diego3g/nivo",
      createdAt: "2020-10-21T21:24:05Z",
      updatedAt: "2022-03-24T01:09:34Z",
      language: "TypeScript",
      name: "diego3g",
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      githubUrl: "https://github.com/diego3g",
    },
  ];

  const indexOfLastItem = currentPage * itensPerPage;
  const indexOfFirstItem = indexOfLastItem - itensPerPage;
  const currentItens = userData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto max-w-[80%] text-white">
      <ListHeader user={userData[1]} />
      <div className="flex justify-center">
        <h1 className="mt-5 text-2xl md:text-3xl">Repositórios</h1>
      </div>

      <div className="mx-auto flex justify-center">
        <main className="mt-4 box-border w-full rounded-lg border-2 border-gray-600 bg-gray-900 px-3 pb-3">
          <ul>
            {currentItens.map((el: any) => (
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
                <div className="flex flex-grow items-center justify-between py-3 px-4 md:py-6 md:text-xl">
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
  );
}
