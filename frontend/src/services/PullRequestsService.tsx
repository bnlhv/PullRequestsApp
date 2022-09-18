import React from "react";
import { IPullRequest } from "../types/PullRequestType";

const axios = require("axios");

export class PullRequestsService {
  
  public static async getPullRequests(): Promise<IPullRequest[]> {
    const response = await axios.get("/prs");
    return response.data;
  }
}

export default PullRequestsService;
