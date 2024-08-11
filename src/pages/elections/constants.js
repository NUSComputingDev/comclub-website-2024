export const TimelineEvents = [
  {
    title: 'Nomination Period Starts',
    date: '12 Aug 2024, Monday',
    description:
      'Nomination period starts for the election of the new committee members.',
  },
  {
    title: 'Nomination Period Ends',
    date: '18 Aug 2024, Sunday',
    description:
      'The final day for submitting nominations for the election of the new committee members.',
  },
  {
    title: 'Campaigning Period',
    date: '20 Aug 2024, Tuesday - 26 Aug 2024, Monday',
    description: 'Candidates campaign to gather support from the voters.',
  },
  {
    title: 'Cooling Off Day (Computing Club MC External Elections)',
    date: '27 Aug 2024, Tuesday',
    description:
      'A day for voters to reflect on their choices before voting, with no campaigning allowed.',
  },
  {
    title: 'MC External Elections',
    date: '28 Aug 2024, Wednesday - 30 Aug 2024, Friday',
    description:
      'MC External Elections are held to elect representatives for the different wings.',
  },
  {
    title: 'MC External Elections Results & Cooling Off Day (NUSSU Reps External Elections)',
    date: '1 Sep 2024, Sunday',
    description:
      'The results of the MC External Elections are announced, along with a cooling-off day for NUSSU Reps External Elections.',
  },
  {
    title: 'NUSSU Representatives Elections',
    date: '2 Sep 2024, Monday',
    description:
      'Elections are held to elect representatives for the NUSSU Council.',
  },
  {
    title: 'NUSSU Reps External Election Results Release',
    date: '4 Sep 2024, Wednesday',
    description:
      'The results of the external elections for NUSSU Reps are announced.',
  },
  {
    title: 'Internal Elections',
    date: '5 Sep 2024, Thursday - 7 Sep 2024, Saturday',
    description:
      'Internal elections are held to elect specific roles within the organization.',
  },
  {
    title: 'Results Release of Internal Elections',
    date: '9 Sep 2024, Monday',
    description:
      'The results of the internal elections are announced.',
  },
  // {
  //   title: 'Club Annual General Meeting',
  //   date: '14 Sep 2024, Saturday (tentative)',
  //   description:
  //     'The annual general meeting of the club to discuss the past year and future plans.',
  // },
  // {
  //   title: '46th NUSSU Council First Council Meeting',
  //   date: '21-22 Sep 2024',
  //   description:
  //     'The first council meeting of the 46th NUSSU Council to outline the agenda for the new term.',
  // },
];

export const FAQ = [
  {
    question: 'What are the items I need to prepare?',
    answer:
      'Awesome that you\'re considering joining us! You\'ll have to submit the nomination forms to elections@nuscomputing.com together with their related material. If there are no issues with the nomination, candidates can start preparing the publicity materials for their campaign.',
  },
  {
    question: 'What\'s the commitment like?',
    answer:
      'The amount of commitment varies between every role and also depends on the number of initiatives/events you wish to push out. Contact the respective MC members for a clearer understanding of the commitment level. You can reach us at elections@nuscomputing.com!',
  },
  {
    question: 'What\'re all the roles in Computing Club?',
    answer: 'You can find all the roles and their responsibilities below.',
  },
  {
    question: 'Can I try for multiple roles?',
    answer: 'Yes, you can indicate your second choice in the nomination form.',
  },
  {
    question: 'Can I join other CCAs with Computing Club?',
    answer:
      'Yup, you can be part of multiple CCAs in NUS. However, if you are intending to run for President, you cannot be the President of another CCA. We recommend checking your timetable and calendar to ensure there aren\'t any other major commitments that may compromise your best work with us!',
  },
  {
    question: 'Are there any pre-requisites?',
    answer:
      'There is no pre-requisite to be in the Computing Club Management Committee, except that upon election, you are required to perform and learn on the job leadership, management, communication, processes, and procedures of the Union, and day-to-day execution of your portfolio.',
  },
  {
    question: 'Can I change my decision?',
    answer:
      'You can pull out of elections at any point in time, just let us know! The positions you include in your nomination form is not final; you make your decision during the Internal Elections. If you are unsure of which position but want to be a part of the management committee, join us for externals first and decide after!',
  },
];

export const regulationsData = [
  // {
  //   title: 'Union Elections Standing Orders',
  //   link: 'assets/elections/regulations/Union_Election_Standing_Orders.pdf',
  //   color: '#78e08f',
  // },
  {
    title: 'NUSSU Executive Committee Election Regulations',
    link: '/elections/NUSSU_Executive_Committee_Election_Regulations_Rev_Ed_2021_Mar.pdf',
    color: '#f19066',
  },
  {
    title: 'Constituent Club Management Committee Election Regulations',
    link: '/elections/Constituent_Club_Management_Committee_Election_Regulations_Rev_Ed.pdf',
    color: '#395B9B',
  },
  {
    title:
      'AY 2024/2025 NUSSU Students\' Computing Club Election Standing Orders',
    link: '/elections/Computing Club 27th MC Election Standing Order AY2425.pdf',
    color: '#778beb',
  },
  {
    title:
      'Constitution of the National University of Singapore Students\' Union',
    link: '/elections/NUSSU_Constitution_approved_by_BOT_on_26072018.pdf',
    color: '#93c6c3',
  },
];

export const officers = [
  {
    name: 'Mervyn Seah',
    role: 'Returning Officer',
  },
  {
    name: 'Jamie Ho',
    role: 'Election Officer',
  },
  {
    name: 'Ng Le Xuan',
    role: 'Election Officer',
  },
];

export const wingsData = [
  {
    title: 'Presidential Wing',
    roles: [
      { name: 'President' },
      { name: 'Finance Secretary', subRoles: ['Deputy Finance Secretary'] },
      { name: 'Tech Lead', subRoles: ['Deputy Tech Lead'] },
      { name: 'General Secretary', subRoles: ['Deputy General Secretary'] },
    ],
    link: 'elections/presidentialwing.html',
  },
  {
    title: 'External Relations',
    roles: [
      { name: 'Vice President (External Relations)' },
      {
        name: 'Director of Marketing',
        subRoles: [
          'Deputy Director of Marketing (Sponsorships)',
          'Deputy Director of Marketing (Merchandise)',
        ],
      },
      {
        name: 'Director of Publicity',
        subRoles: ['Deputy Director of Publicity'],
      },
    ],
    link: 'elections/externalrelations.html',
  },
  {
    title: 'Internal Relations',
    roles: [
      { name: 'Vice President (Internal Relations)' },
      { name: 'Director of Welfare', subRoles: ['Deputy Director of Welfare'] },
      { name: 'Director of Sports', subRoles: ['Deputy Director of Sports'] },
    ],
    link: 'elections/internalrelations.html',
  },
  {
    title: 'Student Development',
    roles: [
      { name: 'Vice President (Student Development)' },
      {
        name: 'Director of Academic Liaison',
        subRoles: ['Deputy Director of Academic Liaison'],
      },
      { name: 'Director of Community Engagement' },
      {
        name: 'Director of Rag & Flag',
        subRoles: ['Deputy Director of Rag & Flag'],
      },
    ],
    link: 'elections/studentdevelopment.html',
  },
  {
    title: 'Student Life',
    roles: [
      { name: 'Vice President (Student Life)' },
      {
        name: 'Director of Freshmen Orientation Projects',
        subRoles: [
          'Deputy Director of Freshmen Orientation Projects',
          'Deputy Director of Freshmen Orientation Projects',
        ],
      },
      {
        name: 'Director of Student Engagement',
        subRoles: ['Deputy Director of Student Engagement'],
      },
    ],
    link: 'elections/studentlife.html',
  },
];
