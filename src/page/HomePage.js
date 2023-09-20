import React, { useState } from 'react'
import Sidebar from 'components/Sidebar'
import Page from 'components/Page'
import Welcome from 'sections/Welcome'
import Experience from 'sections/Experience'
import About from 'sections/About'
import ContactSection from 'components/ContactSection'
import Footer from 'sections/Footer'
import { onTargetScroll } from 'utils/AutoScroll'
import getSection from 'utils/getSection'
import PageContent from 'components/PageContent'
import 'styles/HomePage.css'
import SiteHeader from 'components/SiteHeader'

const HomePage = ({ history, sidebarLinks, sections }) => {
  const [activeSection, onActiveSectionChange] = useState('welcome')
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
          <Welcome history={history} />
          <Experience section={getSection(sections, 'experience')} onClick={() => history.push('/')} />
          <About section={getSection(sections, 'about')} onClick={() => history.push('/')} />
          <ContactSection onClick={() => history.push('/')} />
          <Footer />
        </PageContent>
    </Page>
  )
}

export default HomePage
