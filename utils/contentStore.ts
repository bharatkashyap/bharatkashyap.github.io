import { ref } from 'vue'

export const content = {
  image: 'me.jpeg',
  links: [
    {
      src: 'https://github.com/bharatkashyap',
      icon: {
        solid: false,
        id: 'github',
      },
    },
    {
      src: 'https://twitter.com/@bharattttttt',
      icon: {
        solid: false,
        id: 'twitter',
      },
    },
    {
      src: 'https://bharatkashyap.wordpress.com',
      icon: {
        solid: false,
        id: 'wordpress',
      },
    },
    {
      src: 'https://www.linkedin.com/in/bharat-kashyap-india',
      icon: {
        solid: false,
        id: 'linkedin',
      },
    },
  ],
  title: {
    en: "Hi, I'm Bharat, from 🇮🇳",
    hi: 'भरत, भारत 🇮🇳 से',
  },
  about: {
    tldr: {
      en: "I'm a software engineer writing TypeScript and building tools for the web. I am interested in technology and societal improvement. I am curious about most things in the world, which compels me to travel extensively and write about it sometimes. Grateful for early failure.",
    },
    more: [
      {
        en: 'Here is a little bit more about me: I was born and went to school in Delhi, India. I was bright academically for most of school but had few friends – the computer was a big part of my life all through childhood and teenage. Technology was my biggest interest all through school, culminating with being president of the high school computer club on graduating school in 2015.',
      },
      {
        en: 'I went to college in Patiala (a beautiful princely city in the north of India) to study computer engineering in 2016, after attempting to make it to the IITs (the best engineering colleges in India) for one extra attempt. I did not, and that remains an early, spectacular failure for which I am very grateful.',
      },
      {
        en: 'I was greatly interested in societal improvement all through college years and got multiple internships in the area. I graduated in 2020 and found a job to pursue the same interest: to apply open-source technology for governments.',
      },
      {
        en: 'I remain extremely thankful for the year and a half I spent at this job, since it provided opportunity to understand many facts of the world I was attempting to impact.',
      },
      {
        en: 'My work with open-source coupled with a desire to separate work and play got me an offer to work full-time for an open-source company whose projects I had been using for many years.',
      },
      {
        en: 'On the side, I work with an organisation called <a href="https://ispirt.in" target="_blank" class="link">iSPIRT</a> which is trying to bring about orbital shifts in Indian society. This is a <a href="https://www.ted.com/talks/brian_little_who_are_you_really_the_puzzle_of_personality" target="_blank" class="link">core project</a>.',
      },
      {
        en: 'For almost four years, I worked at MUI to build with and learn from some of the great open-source developers of the world. I also got to travel a fair bit because of the remote nature of the job of which I am still trying to write about <a href="https://auraq.bharatk.in/" target="_blank" class="link">here</a>.',
      },
      {
        en: 'I was driven by the curiosity to experience life on the other end of the spectrum (in more ways than one) and thus have, as of writing, moved to Bangkok to work at Agoda. I can confirm that browsing through hotel, activity and flight listings while working is a nice escape from what many warned me would be the drudgery of corporate life.',
      },
    ],
  },
  work: {
    employment: [
      {
        title: 'Agoda',
        date: 'Sep 2025 - present',
        designation: 'Senior Software Engineer',
        description: {
          en: 'A large travel booking company headquartered in Singapore and based in Bangkok. I was hired to be part of a new Personal Travel Assistant organisation within the company, building the storefront for a new AI-first funnel for travel bookings.',
          hi: "सिंगापुर मुख्यालय और बैंकॉक स्थित एक प्रमुख ट्रैवल बुकिंग कंपनी। मुझे कंपनी की नई 'पर्सनल ट्रैवल असिस्टेंट' टीम में शामिल किया गया, जहाँ मैंने यात्रा बुकिंग के लिए AI-आधारित नए ग्राहक अनुभव (booking funnel) के फ्रंटएंड/स्टोरफ्रंट के विकास पर कार्य किया",
        },
        pow: [],
      },
      {
        title: 'MUI',
        date: 'Nov 2021 - Aug 2025',
        designation: 'Full Stack Engineer I → II',
        description: {
          en: 'A web tools company headquartered in France that builds and maintains open-source projects — such as “Material-UI” — that have 4M+ weekly downloads on npm, 90k+ stars on GitHub and 2.7k+ community contributors. I am part of the Toolpad (new initiatves) and docs infrastructure teams.',
          hi: 'मैं MUI (पहले Material-UI) के साथ कार्यरत हूँ, जो की विश्व की सबसे विख्यात सॉफ्टवेयर निर्माताओं में से एक है, और मेरा उद्देश्य है लोगों के लिए सॉफ्टवेयर बनाने की प्रक्रिया को तेज़ और आसान बनाना',
        },
        pow: [
          'https://github.com/mui/mui-toolpad/pulls?q=is%3Apr+is%3Aclosed+author%3Abharatkashyap',
          'https://github.com/mui/material-ui/pulls?q=is%3Apr+is%3Aclosed+author%3Abharatkashyap',
        ],
      },

      {
        title: 'Samagra',
        date: 'May 2020 - Nov 2021',
        designation: 'Forward Deployed Engineer',
        description: {
          en: 'A management consulting company company headquartered in India that works with governments of 5+ states on large scale projects funded by large philanthropies. I was part of an in-house technology team working primarily on open-source governance products',
          hi: 'भारत में स्ूली बच्चों और अध्यापकों के लिए बनाये गए डिजिटल, सार्वजनिक इंफ्रास्ट्रक्चर "दीक्षा" में नया फ़ीचर जोड़ा जिससे भिन्न जगहों पर स्थित लोग साथ मिल कर मूल्यांकन की रचना कर सकें',
        },
        pow: ['https://github.com/samagra-development/x-admin'],
      },

      {
        title: 'Atlan',
        date: 'May 19 - Jan 20',
        description: {
          en: 'A data collaboration company headquartered in Singapore whose data catalog product is used by multiple Fortune 500 companies. I was part of the initial product team building the query previewing and collaboration workspace.',
          hi: 'Atlan के सात एक फ्रंटेंड इंटर्न के रूप में कार्यरत रहा | वहां एक वीडियो लाइब्रेरी और एक क्वेरी इंटरफेस बनाने में मदद की |',
        },
        designation: 'Frontend Engineering Intern',
      },

      {
        title: 'SocialCops',
        date: 'May 2018 - Dec 2018',
        description: {
          en: 'A data intelligence company headquartered in Singapore which worked as a consultant to several large government projects in India. I was part of a frontend team tasked with rewriting a large chunk of the user interface.',
          hi: 'भारत सरकार द्वारा बनवाये गए पहले अंतर-मंत्रालय डेटा प्लेटफार्म "दिशा डैश���ोर्ड" के निर्माण में सहयोग दिया, जिससे सासंद अपने क्षेत्र में चल रही विकास योजनाओं की निगरानी कर सकें',
        },
        pow: ['https://socialcops.com/case-studies/disha-dashboard/'],
      },
    ],
    speaking: [
      {
        title: 'Amrit Grand Challenge, 2022',
        date: 'March 2022',
        description: {
          en: 'Using India’s new data empowerment protection architecture for health-tech reforms',
          hi: 'BIRAC द्वारा संयोजित वेबिनार में iSPIRT की ओर से भारत में डिजिटल स्वास्थ्य पर किये जा रहे काम पर चर्चा की',
        },
        pow: [
          'https://www.youtube.com/watch?v=nCURja43dVc&t=2267s',
          'https://bharatkashyap.github.io/ikp-health-22',
        ],
      },
      {
        title: 'GraphQL Asia 2021',
        date: 'February 2021',
        description: {
          en: 'Adding GraphQL to government',
          hi: '"GraphQL Asia" नामक अ��तर्राष्ट्रीय सम्मलेन में बोलने का अवसर मिला, जहाँ राज्यों में GraphQL की सहायता से लो-कोड सॉफ्टवेयर बना कर तकनीकी बदलाव लाने के लाभों की चर्चा की',
        },
        pow: [
          'https://www.youtube.com/watch?v=G3HIKcLy8uw',
          'https://bharatkashyap.github.io/gql-asia-21/',
        ],
      },
      {
        title: 'ReactFoo Pune',
        date: 'February 2020',
        description: {
          en: 'Iterative evolution of large codebases, from Backbone to Vue',
          hi: '"ReactFoo Pune 2020" नामक सम्मलेन में बोलने का अवसर मिला, जहाँ सॉफ्टवेयर के नवीनीकरण के एक तरीके पर अपने विचार रखे ',
        },
        pow: [
          'https://hasgeek.com/reactfoo/2020-pune/schedule/backbone-vue-adding-modern-frameworks-to-legacy-codebases-GPQX78fMxCFn9ZSj1JFJ4s',
          'https://docs.google.com/presentation/d/1eYrK4AqkwdGY1da2PPGzEXNN5litR2PeFxQte6fEMjU/edit#slide=id.p',
        ],
      },
    ],
    contact: {
      en: "Here's a detailed resumé if you're interested:",
      hi: 'यदि आप इसे देखना चाहते हैं, तो यहाँ एक विस्तृत रिज़ुमे है:',
    },
  },
  play: [
    {
      title: 'Daily Quiz Question',
      date: 'March 2019 - present',
      designation: 'Maintainer',
      description: {
        en: 'A daily quiz question on the web which is solved by people across the world. I source interesting trivia and craft the questions.',
        hi: 'एक दैनिक प्रश्न जो वेब पर है, जो लोगों को हल करते हैं। मैं लेख एकत्र करता हूं और वेबसाइट को चालू रखता हूं।',
      },
      pow: ['https://www.instagram.com/dailyquizquestion/'],
    },
    {
      title: 'Auraq',
      date: 'June 2019 - present',
      description: {
        en: 'A community-sourced online magazine which publishes articles on life, culture, and cities. I source articles and keep the website running at Auraq.',
        hi: 'एक सामुदायिक ऑनलाइन पत्रिका जो जीवन, संस्कृति और शहरों पर लेख प्रकाशित करती है। मैं Auraq के लिए लेख एकत्र करता हूं और वेबसाइट को चालू रखता हूं।',
      },
      designation: 'Maintainer',
      pow: ['https://auraq.bharatk.in'],
    },
    {
      title: 'iSPIRT',
      designation: 'Volunteer',
      date: 'Sep 2021 - present',
      description: {
        en: 'iSPIRT is a not-for-profit think tank, staffed mostly by volunteers from the tech world, who dedicate their time, energy and expertise towards India’s hard problems. I am a volunteer (after having graduated from being a “balloon” volunteer) who contributes technical skills in web development and API design.',
        hi: 'iSPIRT में स्वयंसेवक की भूमिका में काम करते हुए विभिन्न योजनाओं में सम्मिलित होकर सरकार और बाज़ार के साथ कार्यरत हूँ | इस समय मेरा कार्य data के सहमत और गुप्त संचार पर केंद्रित है | ',
      },
      pow: ['https://depa.world', 'https://ispirt.in/who-we-are/our-people/'],
    },
    {
      title: 'Civic Tech Field Guide',
      date: 'Jan 2022 - present',
      designation: 'Consultant',
      description: {
        en: 'The Civic Tech Field Guide is the world’s largest collection of projects using tech for the common good. I am a volunteer who contributes technical skills in scripting to help automate cumbersome manual tasks',
        hi: 'Civic Tech Field Guide में निर्देशिका बनाने में मदद करने के लिए एक स्वयंसेवक की तरह जुड़ा हुआ हूँ|',
      },
      pow: ['https://github.com/bharatkashyap/ctfg-media-go'],
    },
    {
      category: 'Work',
      title: 'Hasura',
      date: 'June 2021',
      designation: 'Community Champion',
      description: {
        en: 'Hasura is a Data API Platform headquartered in India for automating 80% of the tediousness of building, securing, optimizing, and deploying GraphQL and REST APIs. I contribute to their open-source projects and have spoken at events organised by them.',
      },
      pow: [
        'https://twitter.com/HasuraHQ/status/1559870630807445508',
        'https://github.com/hasura/ra-data-hasura/pulls?q=is%3Apr+author%3Abharatkashyap+is%3Aclosed',
      ],
    },
    {
      title: 'CoWIN',
      date: 'May 2021',
      description: {
        en: "Fixed an issue where ages were calculated incorrectly on India's national digital Covid vaccination certificate",
        hi: 'भारत के राष्ट्रीय डिजिटल कोविड टीकाकरण प्रमाण-पत्र पर ग़लत उम्र आ जाने वाले एक सॉफ्टवेयर दोष को ठीक किया ',
      },
      pow: [
        'https://github.com/egovernments/DIVOC/pulls?q=is%3Apr+is%3Aclosed+author%3Abharatkashyap',
      ],
    },
    {
      title: 'KisanMate',
      date: 'June – December 2019',
      designation: 'ML Engineer',
      description: {
        en: 'KisanMate was a Flutter application designed to let farmers in India identify diseases and treatment modes based on self-taken pictures of crops. Awarded a pilot by a large agricultural university in North India. Contributed, in a team of 3, to the development of the machine learning model for disease identification.',
        hi: 'KisanMate एक Flutter एप्लिकेशन थी जो भारत के किसानों को फसलों की स्वयं ली गई तस्वीरों के आधार पर बीमारियों और उपचार के तरीकों की पहचान करने की अनुमति देती थी। उत्तर भारत के एक बड़े कृषि विश्वविद्यालय द्वारा एक पायलट प्रोजेक्ट के रूप में सम्मानित किया गया। बीमारी पहचान के लिए मशीन लर्निंग मॉडल के विकास में 3 लोगों की टीम में योगदान दिया।',
      },
    },
    {
      title: 'Carnot',
      date: 'September 2019',
      designation: 'Full Stack Engineer',
      description: {
        en: 'Carnot was a proof-of-concept for a low-cost, secure and robust dock-less bike sharing end-to-end infrastructure including a retrofitted lock, and a web application. Contributed, in a team of 4, to the creation of the web app, and the retrofitted lock.',
        hi: 'Carnot एक कम लागत वाला, सुरक्षित और मजबूत डॉक-रहित बाइक शेयरिंग एंड-टू-एंड इंफ्रास्ट्रक्चर का प्रूफ-ऑफ-कॉन्सेप्ट था, जिसमें एक रेट्रोफिटेड लॉक और एक वेब एप्लिकेशन शामिल थे। 4 लोगों की टीम में वेब ऐप और रेट्रोफिटेड लॉक के निर्माण में योगदान दिया।',
      },
    },

    {
      title: 'Argonaut',
      date: 'Sep 2019',
      description: {
        en: 'Argonaut was a cryptocurrency based urban data exchange project which won first place at HackMIT 2019, for "Building the financial revolution"',
        hi: 'क्रिप्टोकरेंसी पर आधारित एक डेटा के लेन - देन का सॉफ्टवेयर जिसे MIT की हैकथॉन "HackMIT" में प्रथम स्थान मिला',
      },
      pow: ['https://devpost.com/software/argonaut'],
    },
    {
      title: 'Turkbox',
      date: 'Aug 2019 - Dec 2020',
      designation: 'Software Engineer',
      description: {
        en: 'Turkbox was a product aiming to allow news platforms to generate revenue from companies which require human effort for data labelling, by matching reader attention to tasks which require it. Awarded first prize and financial grant by the Google News Initiative – Asia Pacific, 2019. Contributed, in a team of 5, to the creation of widgets which could handle multiple types of image segmentation tasks, and infrastructure for widget insertion on publisher websites.',
        hi: 'Turkbox एक ऐसा प्रोडक्ट है जो छोटे अखबारों को अपने पाठकों को बिना विज्ञापन दिखाए मुनाफ़ा कमाने का साधन देता है | इसको Google News Initiative से आर्थिक अनुदान भी प्राप्त हुआ था',
      },
      pow: [
        'https://www.blog.google/around-the-globe/google-asia/here-are-winners-gni-innovation-challenge-asia-pacific/',
      ],
    },
    {
      title: 'Quizgen',
      date: 'November 2016',
      designation: 'Creator',
      description: {
        en: 'Quizgen is a Node.js based tiny utility to present quizzes in a grid-based format instead of having to use bulky powerpoint presentations. Used across 20+ quizzes in schools and quizzes in Delhi, India',
        hi: 'Quizgen एक Node.js आधारित छोटी उपयोगिता है जो भारी पावरपॉइंट प्रस्तुतियों का उपयोग करने के बजाय ग्रिड-आधारित प्रारूप में प्रश्नोत्तरी प्रस्तुत करने के लिए है। दिल्ली, भारत में 20+ स्कूलों और प्रश्नोत्तरी में उपयोग किया गया।',
      },
      pow: ['https://quizgen.app'],
    },
    {
      title: 'Fatehmetrics',
      date: 'November 2017',
      designation: 'Creator',
      description: {
        en: "Fatehmetrics was a Node.js/Angular web app built to connect to Team Fateh's Formula Student race car and display telemetry data from the engine on a portal. Awarded sixth position at Formula Student, Italy in 2017.",
        hi: 'Fatehmetrics एक Node.js/Angular वेब ऐप था जो टीम फतेह के फॉर्मूला स्टूडेंट रेस कार से जुड़ने और इंजन से टेलीमेट्री डेटा को एक पोर्टल पर प्रदर्शित करने के लिए बनाया गया था। 2017 में फॉर्मूला स्टूडेंट, इटली में छठा स्थान प्राप्त किया।',
      },
    },
  ],
}

export const routes = [
  {
    svg: `<path opacity="0.25" d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z" fill="currentColor"></path><path d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z" fill="currentColor"></path>`,
    route: '/',
    name: 'Home',
    type: 'route',
  }, // Home
  {
    svg: `<path opacity="0.25" d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5V7H14V5ZM8 5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V7H20C22.2091 7 24 8.79086 24 11V19C24 21.2091 22.2091 23 20 23H4C1.79086 23 0 21.2091 0 19V11C0 8.79086 1.79086 7 4 7H8V5Z" fill="currentColor"></path><path d="M6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11Z" fill="currentColor"></path>`,
    route: '/work',
    name: 'Work',
    type: 'route',
  }, // Work
  {
    svg: `<path d="M19.7308 3.27092C20.5074 2.49436 20.5074 1.24154 19.7308 0.464975C18.9543 -0.311587 17.7015 -0.311587 16.9249 0.464975L15.9079 1.48196L21.518 7.09204L22.535 6.07506C23.3116 5.29849 23.3116 4.04567 22.535 3.26911L19.7308 3.27092ZM20.0051 8.60493L14.3951 3.00028L3.11184 14.2835C2.80209 14.5933 2.58013 14.9797 2.46981 15.4026L0.0466639 23.0723C-0.0352869 23.3442 0.0466639 23.6343 0.246624 23.8343C0.446585 24.0343 0.736698 24.1162 1.00859 24.0343L8.67824 21.6111C9.10115 21.5008 9.48756 21.2789 9.79731 20.9691L20.0051 8.60493Z" fill="currentColor"/>`,
    route: '/play',
    name: 'Play',
    type: 'route',
  }, // Side Projects
  {
    svg: `<path opacity="0.25" d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H17C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H7Z" fill="currentColor"></path>`,
    route: '/writing',
    name: 'Writing',
    type: 'route',
  }, // Writing
  {
    svg: `<path opacity="0.25" d="M2 5.5L8 4L14 6L20 4.5V18.5L14 20L8 18L2 19.5V5.5Z" fill="currentColor"/>
  <path d="M2 5.5L8 4V18L2 19.5V5.5ZM14 6L8 4V18L14 20V6ZM20 4.5L14 6V20L20 18.5V4.5ZM6 8H8V10H6V8ZM10 12H12V14H10V12ZM14 10H16V12H14V10Z" fill="currentColor"/>
`,
    route: 'https://auraq.bharatk.in',
    name: 'Travel',
    type: 'external',
  }, // Travel
  {
    svg: `<path opacity="0.25" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="currentColor"></path>`,
    route: 'https://github.com/bharatkashyap',
    name: 'GitHub',
    type: 'external',
  }, // GitHub
  {
    svg: `<path opacity="0.25" d="M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28388 19.7706C1.85051 19.5631 2.0199 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C11.0001 14 11.5 13 12.2646 9.02396C12.0933 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0147 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8929 4.65815C22.3207 4.59703 22.6194 5.07087 22.3796 5.43047L20.9999 7.5Z" fill="currentColor"></path><path d="M7.99998 16.9999C2.58358 15.1944 1.64928 8.49939 2.62226 5.00708C2.73651 4.59701 3.26964 4.59488 3.48453 4.96234C5.14601 7.80359 8.30518 9.38991 12.2646 9.02385C18.5 9.02385 17 19.9999 7.99998 16.9999Z" fill="currentColor"></path>`,
    route: 'https://twitter.com/bharattttttt',
    name: 'Twitter',
    type: 'external',
  }, // Twitter
  {
    svg: `<mask id="myMask2"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect><circle r="9" fill="black" cx="50%" cy="23%"></circle></mask><circle cx="12" cy="12" fill="hsl(0 0% 52.3%)" mask="url(#myMask2)" r="9"></circle><g stroke="currentColor" opacity="0"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g>`,
    svgDark: `<mask id="myMask2"><rect x="0" y="0" width="100%" height="100%" fill="white"></rect><circle r="9" fill="black" cx="100%" cy="0%"></circle></mask><circle cx="12" cy="12" fill="var(--colors-gray10)" mask="url(#myMask2)" r="5"></circle><g stroke="currentColor" opacity="1"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g>`,
    type: 'button',
    name: 'Theme',
  },
]

export const quotes = [
  {
    text: 'You need to hate the world enough to change it, but love it enough to consider it worth changing. Action is the offspring of dark pessimism and frenzied optimism, working in tandem.',
    source: 'GK Chesterton',
  },
  {
    text: 'Today, the rich have invented new islands, but the poor throng the old islands in their quest for prestige. But then, prestige is not merely belonging to a certain institution; it is belonging in a place that is unattainable to most. By thronging the old islands of prestige, the poor are eroding the very thing that they think they are attaining.',
    source: 'Manu J',
  },
  {
    text: 'Three, the nationalism of shame. I am a big believer in this. Historically, nationalism begins as pride, but eventually becomes more sophisticated and real, and people who have high stakes in a region will feel strongly ashamed of its flaws. Shame is a form of intelligence, and I wish it upon us.',
    source: 'Manu J',
  },
  {
    text: 'To insist on the miraculous is to deny to the machine at least some of its claims on us',
    source: 'Is it okay to be a Luddite?',
  },
  {
    text: 'Panj snaani mahagyaani, nit nahaan daridari',
    source: 'Papa',
  },
  {
    text: "No man is an island, entire of itself; every man is a piece of the continent, a part of the main . . . any man's death diminishes me, because I am involved in mankind, and therefore never send to know for whom the bell tolls; it tolls for thee.",
    source: 'John Donne, Devotions Upon Emergent Occasions',
  },
  {
    text: 'The hatred that men bear to privilege increases in proportion as privileges become fewer and less considerable, so that democratic passions would seem to burn most fiercely just when they have least fuel. I have already given the reason for this phenomenon. When all conditions are unequal, no inequality is so great as to offend the eye, whereas the slightest dissimilarity is odious in the midst of general uniformity; the more complete this uniformity is, the more insupportable the sight of such a difference becomes. Hence it is natural that the love of equality should constantly increase together with equality itself, and that it should grow by what it feeds on.',
    source: 'Alexis de Toqueville, Democracy in America',
  },
  {
    text: 'If the red slayer think he slays,\nOr if the slain think he is slain,\nThey know not well the subtle ways\nI keep, and pass, and turn again.\nFar or forgot to me is near;\nShadow and sunlight are the same;\nThe vanished gods to me appear;\nAnd one to me are shame and fame.\nThey reckon ill who leave me out;\nWhen me they fly, I am the wings;\nI am the doubter and the doubt,\nI am the hymn the Brahmin sings.\nThe strong gods pine for my abode,\nAnd pine in vain the sacred Seven;\nBut thou, meek lover of the good!\nFind me, and turn thy back on heaven.',
    source: 'Ralph Waldo Emerson, Brahma',
  },
  {
    text: 'Theory cannot travel because it is rooted in context, and yet it is the easiest to travel because it can be interpreted as anything at the destination.',
    source: 'Edward Said',
  },
  {
    text: 'Large, intractable problems don\'t get solved by one entity; they don\'t have "solutions" that can be scaled. Large problems get solved when the ability to solve gets distributed.',
    source: 'Sujith Nair, Beckn',
  },
  {
    text: 'England has to fulfil a double mission in India: one destructive, the other regenerating--the annihilation of old Asiatic society, and the laying of the material foundations of Western society in Asia.',
    source: 'Marx, speaking approvingly of British colonialism in India',
  },
  {
    text: 'There is no sincerer love than the love of food.',
    source: 'George Bernard Shaw',
  },
  {
    text: 'यस्य बुद्धिः बलम् अपि तस्य एव',
    source: '',
  },
  {
    text: 'Most agents of change encounter the accumulated wisdom of the entrenched, or the passionate argumentation of the polarised. In India, we also meet an obsession with words. Form and process are often deemed more important than outcome.',
    source: 'Subramanyam Jaishankar',
  },
  {
    text: 'How shall we preserve democratic states where the media of mass communications provide means of instantly reaching downwards from centres of authority, but, short of public agitation, there is no authorised channel for the reverse feedback for controlling the political system between elections?',
    source: 'Vikram Sarabhai; IIT Madras, 1965',
  },
  {
    text: 'If India is to meet the challenge of change, mere incremental progress is not enough. A metamorphosis is needed. The transformation of India cannot happen without a transformation in governance; the transformation of governance cannot happen without a transformation in mindset and the transformation in mindset cannot happen without transformative ideas.',
    source: 'Narendra Modi',
  },
  {
    text: "The thing about working in government is that if you don't have any skeletons in your closet, you can take a stand. And if your case is genuine, you will be able to find allies within the system.",
    source: 'PS Nair',
  },
  {
    text: 'Every organization has people who just do not see the importance of action and delivery but are more concerned about being safe or some other personal agenda. They do not say No and they do not say Yes; they just cavil, equivocate or procrastinate. Such a delaying tactic is called jalebi-making, due to its similarity with the round and round process of making this sweetmeat. Whenever, I came across any such instance, I would call for the file, make my own judgement and if indeed there were people delaying the case unnecessarily, invite them to my room. I would order jalebis and offer it to them, saying that they had really earned this honour. I do not know whether the concerned officers improved their working or not but a message certainly went down.',
    source: 'Sudhanshu Mani',
  },
  {
    text: "In IR, and indeed in all govt. organizations, we have this system of files for all decision-making processes. The much-maligned files! Much-maligned, not wrongfully, because these files move from table to table at excruciatingly slow speed. And we have some executives who are experts in diverting the issue at hand and send the file in a spin just because they do not want to commit to anything; the infamous jalebi. But the system has a merit. It has everyone concerned writing their views, which may not always be convenient or comfortable. Yet, you have a cross section of views. I have always thought that if the movement of these files can be expedited, it's not such a bad system at all. One can use this system of file movement for the benefit of the organization. One has to declare clearly that all are encouraged to record contra views, never asking anyone to write/propose what one perceives to be in the interest of the organization. This practice of getting your underlings, if I may use the term, to put up comfortable notes on file is pretty prevalent on IR and as one would expect in contrived decision-making, it may frequently backfire. On the other hand, if the leader or the person where the buck stops has the courage of conviction to decide an issue in the direction she or he feels to be correct, in spite of adverse notes on the file, contra views help in preventing her or him from taking a wrong decision in the zeal to seal a decision fast. These views offer an opportunity to think more before deciding; they are by no means obstacles. I have tried this all my life; it works as the colleague working with you feel relaxed to examine issues freely, without fear or favour. Just one caveat: if you delay or send in gyration a file, a plate of jalebis await you, diabetes or not.",
    source: 'Sudhanshu Mani',
  },
  {
    text: 'The greatest repurcussion of the government entering business is that instead of protecting people from vested interests, they themselves become the vested interest.',
    source: 'Verghese Kurien',
  },
  {
    text: "You cannot develop women and men unless you place the instruments of development in their hands, involve them in the process of such development and create structures that they themselves can command. What, therefore, is a government at its best? It is a government that 'governs' least and instead finds ways to mobilise the energies of our people.",
    source: 'Verghese Kurien',
  },
  {
    text: 'It is not that the government officials lack ability; it is that they try to achieve development through a structure that is not designed to achieve it. The British way of doing things had always been to get things done through a government department and after independence we merely continued this system.',
    source: 'Verghese Kurien',
  },
  {
    text: 'I have been - and continue to be - highly critical of our bureaucracy. Fortunately for us, within our bureaucracy there are a number of people - men and women - who are dedicated, patriotic and able. The tricky part has always been: how do we educate the bureaucracy to be truly public servants - servants of the people - rather than the bosses they continue to be?',
    source: 'Verghese Kurien',
  },
  {
    text: 'The bottom line is that the government must govern, in every sector. The government need not nationalise banks but the government must see that banks do not defraud people. The government need not run dairies but it must ensure that the private sector puts out good quality milk at reasonable prices. That is governing. So, let the government get out from places where it never should have been in the first place.',
    source: 'Verghese Kurien',
  },
  {
    text: "Walking through the corridors of the Krishi Bhawan, the answer to an oft-debated question became immediately apparent : the requirement is not of abolishing the generalist IAS officers, or of inducting domain experts into the top echelons of the government. The single urgent need is to have people who refuse to let anything other than people's interest infiltrate their agenda. Towards this end, they will allow nothing to get in their way : established hierarchies; bureaucratic inertia and governmental vested interests.This does not require domain expertise or administrative experience. It requires courage and conviction.",
    source: '',
  },
  {
    text: 'The entire Constitutional system is designed with the principle of mistrust in mind. That no one is to be trusted when in power.',
    source: '',
  },
  {
    text: 'The real tragedy of the poor is the poverty of their aspirations.',
    source: '',
  },
  {
    text: 'Originality is the fine art of remembering what you hear but forgetting where you heard it.',
    source: 'Unknown',
  },
  {
    text: 'Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them.',
    source: 'Lawrence J. Peter',
  },
  {
    text: "Give every man thine ear, but few thy voice; Take each man's censure, but reserve thy judgment",
    source: '',
  },
  {
    text: 'What a fascinating mix of physical and mental elegance! What accomplishments! What friendships! And, yet so shy of talking about himself, his accomplishments and his friends.',
    source: '(about) R. N. Kao',
  },
  {
    text: 'There is a term in moral psychology for the phenomenon of being inspired by someone. It is called elevation. Jonathan Haidt, a pioneering moral psychologist, describes elevation like this: "A warm, uplifting feeling that people experience when they see unexpected acts of human good­ness, kindness, courage, or compassion." Elevation is what happens when we experience moral beauty. When we see what we most value manifest in the world. We expand. We rise. Elevation is how our heroes make us feel. Having a hero comes with risk. It requires placing faith outside ourselves. That opens us up for elevation, but also for betrayal. When we have heroes, we are easily inspired, but we are also easily misled.',
    source: '',
  },
  {
    text: 'For all your days prepare, and meet them ever alike.\nWhen you are the anvil bear, when you are the hammer strike.',
    source: 'A.P.J. Abdul Kalam',
  },
  {
    text: 'जो सुख और दुःख दोनों को समान समझे, और उनसे प्रभावित हुए बिना ही उन्हें झेला झाए, वही स्थितप्रज्ञ है और मोक्ष का अधिकारी भी है |',
    source: 'Krishna',
  },
  {
    text: "कर्म तो अपने में ही पुण्य है, पवित्र है और समाज के लिए कल्याण कारी भी है | कर्म तो स्वयं ही अपना फल भी है, पार्थ | परन्तु यदि तुम समाज कल्याण के कार्य में स्वयं का हित मिला लोगे, तो तुम्हारा वो कर्म अशुद्ध और अशुभ हो जाएगा| इसलिए हे पार्थ, निष्काम कर्म के मार्ग पर चलो, क्यूंकि कर्म फल तो तुम्हारे वश में है ही नहीं | इसलिए केवल कर्म करो और कर्म फल की इच्छा न करो | कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥\nKarmanye Vadhikaraste, Ma phaleshu kada chana - You have the right to perform your actions, but you are not entitled to the fruits of the actions.\nMa Karma Phala Hetur Bhurmatey Sangostva Akarmani – Do not let the fruit be the purpose of your actions, and therefore you won't be attached to not doing your duty.",
    source: 'Krishna',
  },
  {
    text: "Architecture will always compete poorly with utilitarian demands for humanity's resources. How hard it is to make a case for the cost of tearing down and rebuilding a mean but serviceable street, How awkward to have to defend, in the face of more tangible needs, the benefits of realigning a crooked lamppost or replacing an ill-matched window frame. Beautiful architecture has none of the unambiguous advantages of a vaccine or a bowl of rice. Its construction will hence never be raised to a dominant political priority, for even if the whole of the man-made world could, through relentless effort and sacrifice, be modelled to rival St Mark's Square, even if we could spend the rest of our lives in the Villa Rotunda or the Glass House, we would still often be in a bad mood.",
    source: 'Alain de Botton',
  },
  {
    text: "Love is the willingness to interpret the other's at the surface, not-so-appealing, behaviour to realise the benevolent reasons that may be behind it. In other words, love is charity, generosity and empathy of interpretation.",
    source: 'Alain de Botton',
  },
  {
    text: 'You cannot have imperfection and company. To be in company with another person is to negotiate imperfection everyday. The noble work of love is to make us graciously accommodate incompatibility.',
    source: 'Alain de Botton',
  },
  {
    text: 'Marx [and other communists] are metaphysicians of a new age; always arguing ideologies and theoretical applications of what will happen in theory, regardless of fact.',
    source: 'Jawaharlal Nehru, 1964',
  },
  {
    text: "The Hindus were not, and are not, a proselytizing race. They didn't care very much what the other party did, while the Muslims were; keen on proselytizing and getting converts. In fact, nearly all the Muslims in India are descendants of Hindus. Only a handful came from outside.",
    source: 'Jawaharlal Nehru, 1964',
  },

  {
    text: 'Earphone le jaata hun, dukh mein sunte sunte wapas aaunga.',
    source: 'Shikhar Arora',
  },
  {
    text: 'Innovation is anthropology.',
    source: '',
  },
  {
    text: 'In the age of mass politics, group identities like religion or nation have more elements in common than in difference. If Muslims can be unabashedly assertive about the sanctity of their religious identity and traditions, other groups can be unapologetic about their respective identities as well.',
    source: '',
  },
  {
    text: 'Hard work compounds like interest, and the earlier you do it, the more time there is for the benefits to pay off.',
    source: '',
  },
  {
    text: 'Literally pound into your body, step after step, the positive habits that can be found only through repetition. To create a physiological template of stillness, or kindness, or focus that you can then attempt to bring back to the "real" world. Stillness is then no longer an idea, but a muscular configuration. Sure, you may be a "floating consciousness" between the rice fields, but how patient are you back in the office with frustrating coworkers?',
    source: 'Craig Mod',
  },
  {
    text: 'We shall never leave the newly captured lands. These shall be our India, our Garden of Eden',
    source: 'Adolf Hitler, 1941, on the Soviet Invasion',
  },
  {
    text: 'When we think of the Hindu religion, we find it difficult, if not impossible, to define Hindu religion or even adequately describe it. Unlike other religions in the world, the Hindu religion does not claim any one prophet; it does not worship any one God; it does not subscribe to any one dogma; it does not believe in any of the philosophic concept; it does not follow any one set of religious rites or performances; in fact, it does not appear to satisfy the narrow traditional features of any religion or creed. It may broadly be described as a way of life and nothing more.',
    source: 'Chief Justice Gajendragadkar',
  },
  {
    text: 'Only a fool would predict a happy ending to the Hong Kong story, but it is also foolish to assume that history will follow a predictable course. And just as Michnik\'s most famous statement in Letters from Prison was that Poles should practice acting "as if they were free" even while living in an unfree land, there is much to be said for the people of Hong Kong now acting, despite all the logical reasons to feel hopeless, as if there is hope.',
    source: '',
  },
  {
    text: "When I walked into a store, the attendants didn't stare at me like they do in America, skeptical that I'll buy anything. I found myself thinking, so many times, is this what white men feel all the time? No one questioned whether I fit in. I realized I had never felt the privilege of people assuming I belonged before talking to me.",
    source: 'Ahmed Ali Akbar',
  },
  {
    text: 'Vedanta is not theology, because it denies the conception of an anthropomorphistic deity. It is not ethics alone, since in the later development of soul-existence, it denies the paradox of good and evil. It is not a science of things, since it proves things to be non-existent and illusory. It is a science whose exact English synonym is hard to find out, the Science of Seeing being the best translation',
    source: 'Manmatha Nath Dutt',
  },
  {
    text: 'The cancer of corruption and nepotism is in no way unique to India; it exists in every country and within every system. But in India it is structured: condemned on the surface, but accepted as integral to a working society.',
    source: 'Monisha Rajesh',
  },
  {
    text: "Delhi is much more than India's capital. It is an experiment in entrepreneurship, gastronomy, pedagogy and architecture; a melting pot of cultures as well as a battleground for conflicts. Written works can only capture a fraction of these facets.",
    source: '',
  },
  {
    text: 'Unawareness of the difficulties that await them is the greatest strength of the very young.',
    source: 'Krishna Kumar',
  },
  {
    text: "In the 2nd century encyclopaedic compilation Vishnudharmottara that dealt with subjects as diverse as cosmology, painting and cuisine, there is a story of King Vajra who goes to meet Sage Markandeya. A quasi-Socratic dialogue between the two follows. Vajra asks Markandeya to teach him the art of making images or icons. In order to make icons, Markandeya says one must learn the art of painting. But a good painter, Markandeya continues, must also know the art of dancing—for both arts involve the knowledge of 'three worlds' (in modern translations, 'three dimensions'). Yet again, before Vajra gets his hopes too high, Markandeya instructs him that to be a good dancer, one must have a sense of music. And slowly, it dawns on Vajra that to master one art form is to cultivate awareness regarding another art form, in turn leading to mastering yet another and so on. At its limit, says Markandeya, to master painting is in effect indistinguishable from cultivating aptitude and talent for 'sculpture, dance, instrumental and vocal music, song composition, prose, poetry, literature, language, grammar, logic, aesthetics, theatrical arts and even theatre-architecture'. Painting then can be understood to contain musicality, music can reflect the preciseness of a logical argument while sculpture can be pregnant with as much meaning as poetry.",
    source: '',
  },
  {
    text: 'Enna Sacch na bol, ke kalla reh javen\nChaar ku Bande Chhad de, Modha den laee',
    source: 'Surjit Patar',
  },
  {
    text: 'You go to war with the decisions you have made, not the decisions you wish you would have made with better hindsight',
    source: 'Donald Rumsfeld',
  },
  {
    text: 'यस्य बुद्धिः बलम् अपि तस्य एव',
    source: '',
  },
  {
    text: 'I returned, and saw under the sun, that the race is not to the swift, nor the battle to the strong, neither yet bread to the wise, nor yet riches to men of understanding… but time and chance happeneth to them all.',
    source: 'Book of ecclesiastes, 9:11',
  },
]

export const locale = ref('en') // Default to English

export function initLocale(initialLocale: string) {
  if (initialLocale) {
    locale.value = initialLocale
  }
}

export function detectBrowserLocale() {
  if (import.meta.client && navigator.languages && navigator.languages.length) {
    return navigator.languages[0]?.startsWith('hi') ? 'hi' : 'en'
  }
  return 'en' // Default to English if detection fails
}
