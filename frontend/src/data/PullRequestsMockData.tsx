import { IPullRequest, PullRequestStatus } from "../types/PullRequestType";

export const mockPullRequests: IPullRequest[] = [
    {
        serial:1,
        author: "Ben Lahav",
        title: "Title 1",
        createdAt: new Date("2022-01-01"),
        description: "Description 1...",
        status: PullRequestStatus.CLOSED,
        labels: ["bugfix", "release20"],
    },
    {
        serial:2,
        author: "John Doe",
        title: "Title 2",
        createdAt: new Date("2022-01-02"),
        description: "Description 2...",
        status: PullRequestStatus.OPEN,
        labels: ["release20"],
    },
    {
        serial:3,
        author: "Scytale Compliance",
        title: "Title 3",
        createdAt: new Date("2022-01-02"),
        description: "Description 3...",
        status: PullRequestStatus.CLOSED,
        labels: ["release20"],
    },
    {
        serial:4,
        author: "Hanibal Lecter",
        title: "Title 4",
        createdAt: new Date("2022-01-05"),
        status: PullRequestStatus.DRAFT,
    },
    {
        serial:5,
        author: "Super Man",
        title: "Title 5",
        createdAt: new Date("2022-01-06")
    },
    {
        serial:6,
        author: "Kobe Bryant",
        title: "Title 6",
        createdAt: new Date("2022-01-06")
    },
    {
        serial:7,
        author: "Ben",
        title: "Ben Title",
        createdAt: new Date("2022-01-06"),
        description: "Description 1...",
        status: PullRequestStatus.CLOSED,
        labels: ["feature", "release20"],
    },
]