import { connect } from "../conf/db.config";
import { Logger } from "../conf/logger.config";
import {
  IPullRequest,
  PullRequestModel,
} from "../model/pr.model";

/**
 * Pull Request Repository class handles the data layer,
 * all api calls and interact with database for the service layer.
 */
export class PullRequestRepository {
  private logger: Logger;

  constructor() {
    connect();
    this.logger = new Logger();
  }

  async getPullRequests(): Promise<IPullRequest[]> {
    const prs = await PullRequestModel.find({});
    this.logger.debug("fetching pull requests:::", prs);
    return prs;
  }

  async createPullRequest(pr: IPullRequest) {
    let data = {};
    this.logger.debug("Got data to create in collection:", pr);
    try {
      data = await PullRequestModel.create(pr);
    } catch (err) {
      this.logger.error("Error::" + err);
    }
    return data;
  }
}
