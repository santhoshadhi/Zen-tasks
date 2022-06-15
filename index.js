const resume = [
  {
    basics: {
      name: "Adhi",
      label: "Programmer",
      email: "adhi@gmail.com",
      phone: "(912) 555-4321",
      url: "https://adhi.com",
      location: {
        address: "2712 Tnagr",
        postalCode: "600018",
        city: "Chennai",
        countryCode: "IND",
        region: "Tamilnadu",
      },
      profiles: [
        {
          network: "Twitter",
          username: "adhi",
          url: "https://twitter.com/adhi",
        },
      ],
    },
    work: [
      {
        name: "Company",
        position: "President",
        url: "https://company.com",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: "Description…",
        highlights: ["Started the company"],
      },
    ],
    volunteer: [
      {
        organization: "Organization",
        position: "Volunteer",
        url: "https://organization.com/",
        startDate: "2012-01-01",
        endDate: "2013-01-01",
        summary: "Description…",
        highlights: ["Awarded 'Volunteer of the Month'"],
      },
    ],
    education: [
      {
        institution: "University",
        url: "https://institution.com/",
        area: "Software Development",
        studyType: "Bachelor",
        startDate: "2011-01-01",
        endDate: "2013-01-01",
        score: "4.0",
        courses: ["DB1101 - Basic SQL"],
      },
    ],
    certificates: [
      {
        name: "Certificate",
        date: "2021-11-07",
        issuer: "Company",
        url: "https://certificate.com",
      },
    ],
    skills: [
      {
        name: "Web Development",
        level: "Master",
        keywords: ["HTML", "CSS", "JavaScript"],
      },
    ],
    languages: [
      {
        language: "English",
        fluency: "Native speaker",
      },
    ],
    interests: [
      {
        name: "Wildlife",
        keywords: ["Ferrets", "Unicorns"],
      },
    ],

    projects: [
      {
        name: "Project",
        description: "Description…",
        highlights: ["Won award at AIHacks 2016"],
        keywords: ["HTML"],
        startDate: "2019-01-01",
        endDate: "2021-01-01",
        url: "https://project.com/",
        roles: ["Team Lead"],
        entity: "Entity",
        type: "application",
      },
    ],
  },
];

resume.forEach((ele) => console.log(ele.basics.name));

for (var i = 0; i < resume.length; i++) {
  let obj = resume[i];
  console.log(obj.basics.email);
}

for (let x in resume) {
  resume[x];
  console.log(resume);
}

for (let element of resume) {
  console.log(element);
}
