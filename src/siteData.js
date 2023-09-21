// data structure used to provide static content to site
const siteData = {
  headerLinks: [{ label: "Welcome", path: "/" }],
  sidebarLinks: [
    { label: "Welcome", sectionName: "welcome" },
    { label: "Experience", sectionName: "experience" },
    { label: "Qualification", sectionName: "qualification" },
    { label: "Project", sectionName: "project" },
    // { label: "And More", sectionName: "about" },
    { label: "Get In Touch", sectionName: "contact" },
  ],
  sections: [
    {
      id: "experience",
      data: [
        {
          title: "Principal Software Engineer",
          company: "Cylance/BlackBerry",
          industry: "Cyber-Security",
          description:
            "Protect thousands of organization devices by analyzing over 20,000,000 events and logs per month. Architect highly-available/scalable microservice APIs for diverse clients, including UI applications, data pipelines, and public users.",
          achievements: [
            "Implement cloud data pipeline to reduce 80% operation costs in 7 months.",
            "Lead 6 production region deployments for 4 years without a miss, contribute toward cloud engineering division's accountability and transparency.",
          ],
          date: "2019 — 2023",
          tools: [
            "AWS",
            "Terraform",
            "Kubernetes",
            ".Net Core",
            "Python",
            "Go",
            "React",
            "SQL",
            "Elasticsearch",
          ],
          link: "https://www.blackberry.com/us/en/products/cylance-endpoint-security/cylance-is-blackberry-cybersecurity"
        },
        {
          title: "Software Engineer II",
          company: "Microsoft",
          industry: "E-commerce Fulfillment",
          description:
            "Improve order fulfillment services for Microsoft market store. Refactor monolithic legacy service into Kubernetes driven microservices to migrate to Azure.",
          achievements: [
            "Migrate and resolve 26 Azure DevOps deployment pipelines in 3 months.",
            "Achieve 15% code coverage improvement of .Net Core unit tests by leveraging Dependency Inversion design patterns.",
          ],
          date: "2021 — 2021",
          tools: [
            "Azure",
            "Azure DevOps",
            "Kubernetes",
            ".Net Core",
            "Angular",
          ],
          link: "https://www.microsoft.com/en-us/store/b/sale"
        },
        {
          title: "Principal Software Consultant",
          company: "Bio Rad",
          industry: "Life Science",
          description:
            "Contribute as a full-stack engineer to modernize legacy desktop software into Cloud-driven application.",
          achievements: [
            "Engage with product owners starting from breaking down epics until delivering products.",
            "Migrate the entirety of desktop application features into Angular and C#.",
          ],
          date: "2017 — 2019",
          tools: ["AWS", "Azure", "C#", "Angular", "SQL"],
          link: "https://www.bio-rad.com/"
        },
        {
          title: "Kowa American Corporation",
          company: "Senior Software Engineer",
          industry: "Healthcare",
          description:
            "Head of the engineering division to develop products for Air Force and Hospital clients. Collaborate with the Japan headquarters team in R&D requirements.",
          achievements: [
            "Design HL7 and DICOM integration libraries to gain 3rd party instrument compatibility.",
          ],
          date: "2013 — 2017",
          tools: ["C#", "SQL", "HL7", "DICOM"],
          link: "https://www.kowa-usa.com/"
        },
      ],
    },
    {
      id: "qualification",
      educations: [
        {
          imageName: "csulb",
          category: "Education",
          title: "Master's in Computer Science",
          subtitle: "California State University of Long Beach",
          date: "2011 — 2012",
          link: "https://www.csulb.edu/college-of-engineering/computer-engineering-computer-science",
        },
        {
          imageName: "csulb",
          category: "Education",
          title: "Bachelor's in Mathematics",
          subtitle: "California State University of Long Beach",
          date: "2008 — 2011",
          link: "https://www.csulb.edu/mathematics-statistics",
        },
      ],
      certifications: [
        {
          imageName: "aws-certified-solutions-architect-associate",
          category: "Certification",
          title: "Amazon Web Services Architect - Associate",
          subtitle: "Amazon Web Service",
          date: "2020",
          link: "https://www.credly.com/badges/ea977711-9477-40f1-9d30-0fce3bf9e0fb/public_url",
        },
        {
          imageName: "aws-certified-developer-associate",
          category: "Certification",
          title: "Amazon Web Services Developer - Associate",
          subtitle: "Amazon Web Service",
          date: "2020",
          link: "https://www.credly.com/badges/78988da5-4335-4de4-a7a1-2d20834f3679/public_url",
        },
        {
          imageName: "azure-solutions-architect-expert",
          category: "Certification",
          title: "Azure Solutions Architect Expert",
          subtitle: "Microsoft",
          date: "2019",
          link: "https://www.credly.com/badges/3c768faa-cf9f-427f-b037-0d3315892216/public_url",
        },
        {
          imageName: "azure-developer-associate",
          category: "Certification",
          title: "Azure Solutions Developer Associate",
          subtitle: "Microsoft",
          date: "2019",
          link: "https://www.credly.com/badges/141a8120-3bfb-4265-a5c1-1a4d914fbc9b/public_url",
        },
        {
          imageName: "azure-administrator-associate",
          category: "Certification",
          title: "Azure Solutions Administrator Associate",
          subtitle: "Microsoft",
          date: "2019",
          link: "https://www.credly.com/badges/7a77e435-2a32-4f6f-91d7-5698dbe829e8/public_url",
        },
        {
          imageName: "mcse-cloud-platform-infrastructure",
          category: "Certification",
          title:
            "Microsoft Certified Solutions Expert (MCSE) - Cloud Platform and Infrastructure",
          subtitle: "Microsoft",
          date: "2018",
          link: "https://www.credly.com/badges/c1e6743b-5c63-4671-97be-216b8cb3a044/public_url",
        },
        {
          imageName: "mcsa-cloud-platform",
          category: "Certification",
          title:
            "Microsoft Certified Solutions Associate (MCSA) - Cloud Platform",
          subtitle: "Microsoft",
          date: "2018",
          link: "https://www.credly.com/badges/4bcc6f06-fe0f-494e-a950-71ba62c7662b/public_url",
        },
      ],
    },
    {
      id: "project",
      data: [
        {
          title: "Audit / System Log Enrichment",
          description:
            "Enrich event information comprehensiveness for threat analysis and client security administrator to gain better insight of their devices' security activities.",
          tools: ["AWS Lambda", "AWS Kinesis", "Python", "Go", "Elasticsearch"],
          year: "2023",
          link: "https://docs.blackberry.com/en/unified-endpoint-security/blackberry-ues/cylance-syslog-guide/Overview",
        },
        {
          title: "Endpoint Detection and Response (EDR)",
          description:
            "Develop ETL system and microservice APIs for handling events detected in user devices. Service UI application to monitor threat events and trigger response actions to the user devices.",
          tools: ["AWS", "Kubernetes", "Terraform", "Python", "Go", "React", "SQL", "Elasticsearch"],
          year: "2023",
          link: "https://www.blackberry.com/us/en/solutions/endpoint-security/endpoint-detection-and-response",
        },
        {
          title: "Role-based Access Control (RBAC)",
          description:
            "Organize fine-tuned feature access controls across 9 UI products based on the logged-in user's role and over 40 types of permissions.",
          tools: ["React", "Cypress", "LaunchDarkly"],
          year: "2022",
          link: "https://en.wikipedia.org/wiki/Role-based_access_control",
        },
        {
          title: "Memory Protection Event Bifurcation",
          description:
            "Design data bifurcation system and migrate legacy memory defense event pipeline. Leverage Elasticsearch to improve event aggregation features and overall costs.",
          tools: ["AWS Kinesis", "AWS Lambda", "Kafka", "Databricks", "Terraform", ".Net Core", "CQRS", "Elasticsearch"],
          year: "2021",
          link: "https://docs.blackberry.com/en/unified-endpoint-security/blackberry-ues/cylance-syslog-guide/CylancePROTECT_Event_Types/Memory_Protection",
        },
        {
          title: "Mobile Threat Detection (MTD)",
          description:
            "Lead team to expand desktop threat management product to mobile phone users. Design 6 microservices and ETL system. Service UI with data collection APIs.",
          tools: ["AWS Kinesis", "AWS Lambda", "Kafka", "Terraform", ".Net Core", "React", "SQL", "Elasticsearch"],
          year: "2020",
          link: "https://www.blackberry.com/us/en/solutions/endpoint-security/mobile-threat-defense",
        },
        {
          title: "Endpoint Protect Platform (EPP)",
          description:
            "Enhance event insights for threat events and UI audit logs to protect user devices from attacks.",
          tools: ["AWS", "Terraform", ".Net Core", "ELK", "React", "SQL"],
          year: "2019",
          link: "https://www.blackberry.com/us/en/solutions/endpoint-security/endpoint-protection-platform",
        },
      ],
    },
    {
      id: "about",
      data: [
        {
          header: "Background",
          description: "asdfqwerzxcv",
        },
        {
          header: "Polyglot",
          description: "asdfqwerzxcv",
        },
        {
          header: "Leadership",
          description: "asdfqwerzxcv",
        },
      ],
    },
  ],
};

export default siteData