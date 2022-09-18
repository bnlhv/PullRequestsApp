import React, { useEffect, useState } from "react";
import PRPerDayChart from "../Charts/PRPerDayChart";
import Navbar from "../Navbar/Navbar";
import { DivRow1, DivRow2, Grid, Section } from "./Dashboard.styles";
import scrollreveal from "scrollreveal";
import { IPullRequest } from "../../types/PullRequestType";
import PullRequestsTable from "../PullRequests/PullRequests";
import axios from "axios";

const Dashboard: React.FC = (): JSX.Element => {
  const [pullRequests, setPullRequests] = useState<IPullRequest[] | null>(null);

  useEffect(() => {
    axios("http://localhost:3080/prs")
      .then((response) => setPullRequests(response.data))
      .catch((err) => console.log(err));
  }, []);

  const scrollReveal: Function = (): void => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  };

  useEffect(() => {
    scrollReveal();
  }, []);

  return (
    <>
      <Section>
        <Navbar />
        <Grid>
          <DivRow1>
            <PRPerDayChart pullRequests={pullRequests ? pullRequests : null} />
          </DivRow1>
          <DivRow2>
            <PullRequestsTable
              pullRequests={pullRequests ? pullRequests : null}
            />
          </DivRow2>
        </Grid>
      </Section>
    </>
  );
};

export default Dashboard;
