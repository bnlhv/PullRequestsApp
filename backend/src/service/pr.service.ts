import { IPullRequest } from "../model/pr.model";
import { PullRequestRepository } from "../repository/pr.repository";

/**
 * Pull Request Service class that enables to insert functionality 
 * outside view and model layers.
 */
export class PullRequestService {
  private pullRequestRepository: PullRequestRepository;

  constructor() {
    this.pullRequestRepository = new PullRequestRepository();
  }

  async getPullRequests(): Promise<IPullRequest[]> {
    return await this.pullRequestRepository.getPullRequests();
  }

  async createPullRequest(pr: IPullRequest) {
    return await this.pullRequestRepository.createPullRequest(pr);
  }
}
