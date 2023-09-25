import React, { useState } from 'react'
import Sidebar from 'components/Sidebar'
import Page from 'components/Page'
import Profile from 'sections/Profile'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Qualification from 'sections/Qualification'
import Project from 'sections/Project'
import Contact from 'sections/Contact'
import Footer from 'sections/Footer'
import { onTargetScroll } from 'utils/AutoScroll'
import getSection from 'utils/getSection'
import PageContent from 'components/PageContent'
import 'styles/Home.css'
import SiteHeader from 'components/SiteHeader'

const Home = ({ sidebarLinks, sections }) => {
  const [activeSection, onActiveSectionChange] = useState("about");
  return (
    <Page
      pageContainerClassName="home-outer-container"
    >
      <SiteHeader />
      <div className="home-wrapper">
        <Sidebar
          onActiveSectionChange={onActiveSectionChange}
          activeSection={activeSection}
          sidebarLinks={sidebarLinks}
        ></Sidebar>
        <PageContent
          onScroll={onTargetScroll}
          pageContentContainerClassName={"home-container"}
          pageContentClassName="home-content"
        >
          <Profile containerClassName="profile-container" />
          <About />
          <Experience section={getSection(sections, "experience")} />
          <Qualification section={getSection(sections, "qualification")} />
          <Project section={getSection(sections, "project")} />
          <Footer />
        </PageContent>
      </div>
    </Page>
  );
}

export default Home
