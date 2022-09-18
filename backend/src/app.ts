import * as bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { PullRequestService } from "./service/pr.service";

// Express application instantiation with middleware and routing.
class App {
  public express: express.Application;
  public pullRequestService: PullRequestService;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.pullRequestService = new PullRequestService();
  }

  // Express template configure of middleware.
  private middleware(): void {
    const cors = require("cors")
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors({
      origin: "http://localhost:3000",
      options: ["GET", "POST"],
    }));
  }

  // Function that configure all routes of api to express object.
  private routes(): void {
    this.express.get("/", (req: Request, res: Response) => {
      return res.json({message: "Root Path of Pull Requests API"});
    });
    
    this.express.get("/prs", (req: Request, res: Response) => {
      this.pullRequestService.getPullRequests().then((data) => res.json(data));
    });

    this.express.post("/prs", (req: Request, res: Response) => {
      this.pullRequestService
        .createPullRequest(req.body)
        .then((data) => res.json(data));
    });

    // handle undefined routes
    this.express.use("*", (req: Request, res: Response) => {
      res.send("Unhandled url.");
    });
  }
}

export default new App().express;