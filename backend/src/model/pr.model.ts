import { model, Schema, Model, Document, Types } from "mongoose";

// Types and Interfaces declarations.
type Labels = string[];

enum PullRequestStatus {
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
export interface IPullRequest extends Document {
  serial: number;
  title: string;
  description: string;
  author: string;
  status: PullRequestStatus;
  labels: Labels;
  createdAt: Date;
}

export interface IPullRequestCreated extends IPullRequest {
    _id: Types.ObjectId;
}

// Schema configuration with mongoose odm.
const PullRequestSchema: Schema = new Schema({
  serial: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, default: "draft" },
  createdAt: { type: Date, default: Date.now },
  description: String,
  labels: [String],
});

// Creating the schema collection.
export const PullRequestModel: Model<IPullRequest> = model<IPullRequest>(
  "prs",
  PullRequestSchema
);
