import React, { useState } from 'react'
import Sidebar from 'components/Sidebar'
import Page from 'components/Page'
import Welcome from 'sections/Welcome'
import Experience from 'sections/Experience'
import Qualification from 'sections/Qualification'
import Project from 'sections/Project'
import About from 'sections/About'
import Contact from 'sections/Contact'
import Footer from 'sections/Footer'
import { onTargetScroll } from 'utils/AutoScroll'
import getSection from 'utils/getSection'
import PageContent from 'components/PageContent'
import 'styles/HomePage.css'
import SiteHeader from 'components/SiteHeader'

const HomePage = ({ history, sidebarLinks, sections }) => {
  const [activeSection, onActiveSectionChange] = useState("welcome");
  return (
    <Page 
      onScroll={onTargetScroll}
      pageContainerClassName='home-page-outer-container'>
      <SiteHeader />
      <Sidebar
        onActiveSectionChange={onActiveSectionChange}
        activeSection={activeSection}
        sidebarLinks={sidebarLinks}
      />
      <PageContent
        pageContentContainerClassName={'home-page-container'}
        pageContentClassName='home-page-content'>
        <Welcome />
        <Experience section={getSection(sections, 'experience')} />
        <Qualification section={getSection(sections, 'qualification')} />
        <Project section={getSection(sections, 'project')} />
        {/* <About section={getSection(sections, 'about')} /> */}
        <Contact section={getSection(sections, 'contact')} />
        <Footer />
      </PageContent>
    </Page>
  )
}

export default HomePage
