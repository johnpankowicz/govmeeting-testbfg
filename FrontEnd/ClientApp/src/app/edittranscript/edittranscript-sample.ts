import { EditTranscript, Talk, Word } from '../models/edittranscript-view';

export let EditTranscriptSample: EditTranscript = {
  sections: [
      'Invocation',
      'Approval of Journal',
      'Leaves of Absense',
      'Presentations',
      'Communications',
      'Introductions of Bills',
      'Reports',
      'Bills on Second Reading',
      'Public Comment',
      'Second Reading',
      'Speeches',
      'Adjournment'
  ],
  topics: [
      "",
      "Pave 4th St.",
      "Hire business manager",
      "Parking ordinaces",
      "Ice skating rink"
  ],

  "talks": [
    {
      "speaker": "UNKOWN",
      "said": "Okay.",
      "section": null,
      "topic": null,
      "showSetTopic": false,
      "confidence": 0.89840960502624512,
      "wordcount": 0,
      "words": [
        {
          "word": "Okay.",
          "confidence": 0.0,
          "starttime": 3400,
          "endtime": 4300,
          "speaker": 0,
          "wordnum": 1
        }
      ]
    },
    {
      "speaker": "UNKOWN",
      "said": " Good evening, everybody.",
      "section": null,
      "topic": null,
      "showSetTopic": false,
      "confidence": 0.99072182178497314,
      "wordcount": 0,
      "words": [
        {
          "word": "Good",
          "confidence": 0.0,
          "starttime": 5900,
          "endtime": 6300,
          "speaker": 0,
          "wordnum": 2
        },
        {
          "word": "evening,",
          "confidence": 0.0,
          "starttime": 6300,
          "endtime": 6500,
          "speaker": 0,
          "wordnum": 3
        },
        {
          "word": "everybody.",
          "confidence": 0.0,
          "starttime": 6500,
          "endtime": 7100,
          "speaker": 0,
          "wordnum": 4
        }
      ]
    }
  ]
}












//   talks: [
//       { speaker: "COUNCIL PRESIDENT CLARKE", said: "     Thank you.\n    Before considering the resolutions and bills, we will consider our public comment as follows:\n    If you are interested in testifying on a bill or resolution that is on the Final Passage Calendar today, if you have not already done so, I'd ask that you sign up at the table to my left.\n    When your name is called, you will go to the podium in the middle of the Council Chambers.  There's a device on that podium.  When that light turns green, it will be your time to speak. When the light turns yellow, you will have 30 seconds to conclude your remarks. When the light turns red, we'd ask you to please adhere to our guidelines and conclude your remarks.  You will be given three minutes to testify.\n    Mr. Decker, please call the first name on the list.\n", section: "PUBLIC COMMENT", topic: null, showSetTopic: false }
//       ,
//       { speaker: "CHIEF CLERK", said: "    Marybeth Christiansen, commenting on 171066.\n    (Witness approached podium.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCIL PRESIDENT CLARKE", said: "    Good afternoon.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MS. CHRISTIANSEN", said: "    Good afternoon.\n    Good morning, and thank you. My name is Marybeth Christiansen.  I am the State Legislative Directive of Moms Demand Action for Gun Sense in America. I want to thank Councilman Kenyatta Johnson for sponsoring this resolution in support of State Senate Bill 501.\n    Our organization is all volunteer.  We are non-partisan.  We are single issue.  We're dedicated to preventing the epidemic of gun violence in America.\n    We are the largest gun prevention organization in the country. We have over four million members across 50 states, and we work with local, state, and federal officials for commonsense solutions to gun violence that respect the Second Amendment, and State Senate Bill 501 is one of those commonsense measures.  So we applaud you, Councilman, for passing a resolution to support this bill.\n \n    (Applause.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN HENON", said: "    Thank you.\n    Clerk, would you please read our next speaker.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "CHIEF CLERK", said: "    Joe Danihel, commenting on 171057 and 171067.\n    (Witness approached podium.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MR. DANIHEL", said: "    This is an official decree of the people in writ of mandamus quo warranto and, as such, requires immediate action and remedy.\n    Every week Council, Mayor, and others transfer private property to government, probably illegally.  Have oath, Constitution, and law violators achieved what the Japanese empire could not do 76 years ago?  Stealing the home of one of the sovereign people of the United States.  Eleanor Roosevelt spoke 76 years ago:  We are the free and unconquerable people of the United States.\n    How this government by the people and for the people allow oath, Constitution, and law violators to screw the people.  Why is Council, Mayor, and others violating oath, Constitution, and laws by denying due process remedy opposing trial by jury?\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN HENON", said: "    Thank you.\n    Clerk, would you please read the name of our next speaker.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "CHIEF CLERK", said: "    Emmanuel Bussie, commenting on 171072.\n    (Witness approached podium.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MR. BUSSIE", said: "    Good afternoon, Council.  So today -- it's afternoon, right?  It's after 12:00.\n    So today the Auditor General released its findings on his audit of the Parking Authority, and I am doing my best -- and I'm glad Councilman Squilla came back, and I really wish Council President Clarke was here, because I'm doing my best to stay calm.  Because the Auditor General was kind of outraged at the press conference.  He was refraining from using certain language.  He was so outraged about what's going on in the Parking Authority, about the 900 hours of comp time for somebody getting paid over $250,000 a year, accumulating 900 hours of comp time, the $77 million that didn't go to the School District because of mismanagement and vacation time and the games they play at the Parking Authority.\n ", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN HENON", said: "    Clerk, read the name of our next speaker, please.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "CHIEF CLERK", said: "    Rochelle Bail [sic].\n    (Witness approached podium.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MS. BILAL", said: "    Oh, you wrong.  You cut up my name.  That's a shame.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MR. BUSSIE", said: "    It's Rochelle Bilal.  She testify here every week.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MS. BILAL", said: "    Let me help you with that.  Bilal.  Bill and Al together. Bilal.  We good?\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN HENON", said: "    You may proceed with your comment, please.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MS. BILAL", said: "    Thank you.  I am in support of Bill 171072 introduced by the champion of the Parking Authority take-back takedown, and we appreciate the Councilman at-large who has taken on this fight and consistently stayed focused in the reference to the Parking Authority. He now has more ammunition in reference to the audit that was just given out in a press conference downstairs that all of y'all should have been at, where the Auditor says the Parking Authority has been raping this city for years, that $77.5 million that should have been turned over to the school in the past five years has not, due to the Parking Authority exquisite taste in time management and property.\n    (Applause.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN HENON", said: "    Thank you for your testimony.\n    Clerk, would you please read the name of our next speaker.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "CHIEF CLERK", said: "    Clarc King, commenting on 171059.\n    (Witness approached podium.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MR. KING", said: "    Good afternoon, Council President and thank you, Councilmembers.  I am here in support of Councilman Henon's resolution urging the President, Congress, and all relevant federal offices to continue to protect net neutrality and open Internet services.\n    The public domain is constantly encroached upon by the private sector. The narrative, despite the reality, is that the private sector can run any organization better than public agencies and institutions.\n    Free speech is also an issue here in this modern era.  Corporate power has put tremendous pressure on the truth, the facts and with the power of characterizing the actual reality we live in, undermining our democracy, the principles of our democratic republic.\n    It's reported that Google now censors its customers, clients, and visitors to their site.  So we see in the end large corporations matter and everyone else looks bewildered.  These accusations greatly diminish the platform that allows people to speak, to access facts, knowledge and understanding of the world we live in.\n   Thank you.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN HENON", said: "    Thank you.\n    Clerk, would you please read our last speaker.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "CHIEF CLERK", said: "    Robert Burdge, commenting on 171059.\n    (Witness approached podium.)\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "MR. BURDGE", said: "    My name is Robert Burdge, as you know.\n    I heard about affordable housing.  I met with one of the Council leaders yesterday and he said that we need to do something for the poor, and affordable housing is a start.\n    I've been on your list for PHA for five years, and I'm finally getting considered after five years of being on a list and being on the streets.\n    We need to get this affordable housing, seriously, guys.  It's something that is very necessary.  Curtis said we are doing better with it, but we need more.  We need more.  We need something to get the poor people.\n    Our city is the fifth largest city, and we have the most poverty in it. So we need to work for the poor people and get affordable housing and really work on this.\n    And, two, we need not just the government to do it.  We need the private sector too.  So we can work together, as the gentleman that was just up here said. The private sector needs very good time, but we also need the government and City Hall to really do something.\n    And thank you, Mr. Curtis.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCIL PRESIDENT CLARKE", said: "     Thank you.  Thank you so much for your testimony.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "CHIEF CLERK", said: "    There are no other speakers on the public comment list, Mr. President.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCIL PRESIDENT CLARKE", said: "     Thank you, Mr. Decker.\n    The Chair recognizes Councilman Johnson.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN JOHNSON", said: "    Council President, I would like to be excused and voted voting aye on all bills and resolutions, please.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCIL PRESIDENT CLARKE", said: "     Thank you.  Leave shall be granted.  The record shall reflect you're voting aye on all bills and resolutions.\n    Thank you, Councilman.\n", section: null, topic: null, showSetTopic: false }
//       ,
//       { speaker: "COUNCILMAN JOHNSON", said: "    Thank you.\n", section: "RESOLUTION CONSENT AGENDA", topic: null, showSetTopic: false },

//       { speaker: "COUNCIL PRESIDENT CLARKE", "said": "     Okay.  We will now consider our Consent Agenda on resolutions.  I would ask Mr. Decker to read the titles of all the resolutions on the Consent Agenda.  After each title is read, any member may object to the inclusion of the resolution on the Resolution Consent Agenda.  Upon such an objection and without debate, the resolution will be immediately removed from the Resolution Consent Agenda and placed on today's regular Final Passage Calendar.\n    Mr. Decker will now read the titles of the resolutions on the Consent Agenda.\n", section: null, topic: null, showSetTopic: false }
//   ]
// };
