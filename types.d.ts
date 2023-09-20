export interface GitHubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  stargazers_count: number;
  clone_url: string;
  updated_at: string;
  language: string;
  languages_url: string;
}

export interface fetchResponse {
  error: string | null;
  data: GitHubRepository[] | null;
  total_data: number;
}
