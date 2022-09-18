// Types and Interfaces declarations.
type Labels = string[];

export enum PullRequestStatus {
  DRAFT = "draft",
  OPEN = "open",
  CLOSED = "closed",
}

/**
 * Main Interface type of pull request receive from api.
 * Example payload: 
 {
    "serial": 1,
    "title": "my pull request",
    "description": "This pull request is awesome",
    "author": "Ben Lahav",
    "status": "draft",
    "labels": ["bugfix", "release20"]
  }
 */
export interface IPullRequest {
  serial: number;
  title: string;
  author: string;
  createdAt: Date;
  description?: string;
  status?: PullRequestStatus;
  labels?: Labels;
}
