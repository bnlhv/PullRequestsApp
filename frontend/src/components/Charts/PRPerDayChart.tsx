import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { mockPullRequests } from "../../data/PullRequestsMockData";
import { IPullRequest } from "../../types/PullRequestType";
import { Chart, Section } from "./Chart.styles";

interface Props {
  pullRequests: IPullRequest[] | null;
}

const PRPerDayChart: React.FC<Props> = (props: Props): JSX.Element => {
    
  let dates: (string | null)[] | undefined = props.pullRequests?.sort().map((value) =>
  value["createdAt"] ? value["createdAt"].toDateString() : null
  );

//   Use this instead of dates to see mock data on dashboard
  let mockDates: (string | null)[] | undefined = mockPullRequests.sort().map((value: any) =>
  value["createdAt"] ? value["createdAt"].toDateString() : null
  );

  function date_data(dates: (string | null)[] | undefined): Object[]{
      let mappedDates: any = dates?.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
      let data: Object[] = [];
      mappedDates?.forEach((k: string, v: number) => data.push({data:k}));
      
      return data;
    } 
    let data = date_data(dates);
    data = data.length ? data : date_data(mockDates)
  
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h1>Pull Requests Per Day</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#cda5f3"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Chart>
    </Section>
  );
};

export default PRPerDayChart;
