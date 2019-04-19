export class Project {
  readonly Id?: number;
  Title: string;
  Description: string;
  Photos?: string[];
  Tools: string;
  GithubURL?: string;
  YoutubeURL?: string;
  readonly DatePosted?: Date;
}
