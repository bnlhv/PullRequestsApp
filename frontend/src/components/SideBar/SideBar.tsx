import React from 'react'
import { BiGitPullRequest } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';
import { FiGitPullRequest } from 'react-icons/fi';
import { Links, ListItem, Section } from './SideBar.styles';


const SideBar: React.FC<{}> = (): JSX.Element => {
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <BiGitPullRequest />
            <div>
              <span>Pull</span><br/>
              <span>Requests</span><br/>
            </div>
          </div>
        </div>
        <div className="toggle"></div>
        <Links>
          <ul>
            <ListItem>
              <a href='#'>
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </a>
            </ListItem>
            <ListItem>
              <a href='#'>
                <FiGitPullRequest />
                <span> Pull Requests</span>
              </a>
            </ListItem>
          </ul>
          </Links>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
    </>
  )
}

export default SideBar;