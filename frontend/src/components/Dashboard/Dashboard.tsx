import React, { useEffect, useState } from 'react'
import PRPerDayChart from '../Charts/PRPerDayChart';
import Navbar from '../Navbar/Navbar';
import { DivRow1, DivRow2, Grid, Section } from './Dashboard.styles';
import scrollreveal from "scrollreveal";
import PullRequestsService from '../../services/PullRequestsService';
import { IPullRequest } from '../../types/PullRequestType';
import PullRequestsTable from '../PullRequests/PullRequests';

interface Props {
  url: string;
}

const Dashboard: React.FC<Props> = (props: Props): JSX.Element => {
  
  const [pullRequests, setPullRequests] = useState<IPullRequest[] | null>(null)
  
  const getAllPullRequests = async (): Promise<void> => {
      const prs: IPullRequest[] = await PullRequestsService.getPullRequests();
      console.log(prs);
      setPullRequests(prs);
  }

  useEffect(() => {
    if (props.url) getAllPullRequests()
  }, [props.url]);
  
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
  }

  useEffect(() => {
    scrollReveal()
  }, [])
  

  return (
    <>
      <Section>
        <Navbar />
        <Grid>
          <DivRow1>
            <PRPerDayChart pullRequests={pullRequests? pullRequests: null}/>
          </DivRow1>
          <DivRow2>
            <PullRequestsTable pullRequests={pullRequests? pullRequests: null}/>
          </DivRow2>
        </Grid>
      </Section>
    </>
  )
}

export default Dashboard;