import {
  agricultural_loan,
  analysis,
  basesurvey,
  bmz,
  businessloan,
  businesssavings,
  caid,
  consultancyicon,
  consultancyimage,
  cordaid,
  endsurvey,
  eu,
  finaudit,
  fastfast_loan,
  finmgt,
  grouploan,
  groupsavings,
  irishaid,
  kidssavings,
  ladysaving,
  loan,
  logo,
  meeting,
  money,
  moneygram,
  moneyhand,
  naccua,
  orange,
  orgcap,
  pay,
  rapid,
  ria,
  salary,
  salary_loan,
  sendserial,
  softtraining,
  strategy,
  teratech,
  westernunion,
  whh,
  visa,
  express,
} from "../assets";
import {
  ContactModel,
  FAQType,
  GeneralListModel,
  InterestType,
  Menus,
} from "../types";

export const navLinks: Menus[] = [
  {
    id: "home",
    title: "Home",
  },

  {
    id: "aboutus",
    title: "About us",
  },

  {
    id: "services",
    title: "Services",
    subNav: [
      {
        id: "1",
        content: `Secure your future with our flexible personal and group savings plans`,
        subtitle: "Personal and Group Savings",
        subheading: "Savings",
        img: salary,
        mainImage: ladysaving,
        description: `At Kakebo Financial Services, we offer a variety of savings plans designed to help you secure your financial future. Whether you're saving for a rainy day, a major life event, or simply looking to build a solid financial foundation, our savings solutions are tailored to meet your needs. Start saving today with any of our Credit Unions across Sierra Leone.`,
        title: "Savings",
        notes:
          "Start your savings journey with Kakebo Financial Services today and take the first step towards a financially secure future.",
        plans: [
          {
            img: salary,
            id: "1",
            title: "Personal Savings",
            content:
              "Flexible and secure savings accounts that help you achieve your personal financial goals",
          },

          {
            id: "2",
            img: groupsavings,
            title: "Group Savings",
            content:
              "Ideal for communities and groups, our group savings plans promote collective financial security and growth",
          },

          {
            id: "3",
            img: businesssavings,
            title: "Business/Institutional Saving",
            content: "",
          },

          {
            id: "4",
            img: kidssavings,
            title: "Kid’s Savings",
            content: "",
          },
        ],

        reason: [
          {
            id: "1",
            title: "Community-Centric Approach",
            content:
              "We understand the unique needs of our communities and provide accessible savings options",
          },

          {
            id: "2",
            title: "Reliability and Security",
            content:
              "Your savings are safe with us, backed by our commitment to transparency and trust",
          },

          {
            id: "3",
            title: "Empowerment through Education",
            content:
              "We offer guidance and resources to help you make informed savings decisions",
          },
        ],
      },

      {
        id: "2",
        content: `Access personal and business loans tailored to your financial needs`,

        buttonText: "Loan application",
        title: "Loans",
        subheading: "Loans Service",
        subtitle: "Personal and Business Loans",
        img: pay,
        mainImage: loan,
        description:
          "Kakebo Financial Services offers a range of loan products designed to support both personal and business financial needs. Our loan services are structured to provide the necessary funds to help you achieve your goals, whether it's for personal development or business expansion. Apply for a loan today at any of our Credit Unions across Sierra Leone.",
        notes:
          "Empower your personal and business growth with Kakebo Loans. Apply today and take the next step towards financial success.",
        plans: [
          {
            id: "1",
            img: pay,
            title: "Personal Loans",
            content:
              "Get the financial support you need for personal expenses, from education to home improvements.",
          },

          {
            id: "2",
            img: businessloan,
            title: "Business/Institutional Loans",
            content:
              "Access funding to start, grow, or enhance your business, tailored to suit the needs of micro, small, and medium-sized enterprises (MSMEs).",
          },
          {
            id: "3",
            img: grouploan,
            title: "Group Loans",
            content: "",
          },
          {
            id: "4",
            img: agricultural_loan,
            title: "Agricultural loan",
            content: "",
          },
          {
            id: "5",
            img: fastfast_loan,
            title: "Fast fast Loan",
            content: "",
          },
          {
            id: "6",
            img: salary_loan,
            title: "Salary Loan",
            content: "",
          },
        ],

        reason: [
          {
            id: "1",
            title: "Flexible Terms",
            content:
              "Our loan products come with flexible repayment terms to suit your financial situation.",
          },

          {
            id: "2",
            title: "Quick and Easy Processing",
            content:
              "We ensure a hassle-free loan application process, with prompt approval and disbursement.",
          },

          {
            id: "3",
            title: "Supportive Service",
            content:
              "Our team is here to provide you with the guidance and support needed to make the best financial decisions.",
          },
        ],
      },
      {
        id: "3",
        content: `Experience seamless mobile money and international money transfers and transactions`,
        title: "Mobile Transfer",
        subtitle: "Mobile and International Money Transfer",
        subheading: "Mobile Money Transfer",
        img: money,
        mainImage: moneyhand,

        description:
          "At Kakebo Financial Services, we offer efficient and reliable money transfer services that make sending and receiving money easy and convenient. Whether you need to transfer money locally or internationally, our services ensure your funds reach their destination quickly and securely. Send more today at any of our Credit Unions across Sierra Leone.",
        notes:
          "Experience the ease and reliability of Kakebo Money Transfer services. Send and receive money with confidence today.",
        plans: [
          {
            id: "1",
            title: "Orange Money",
            img: orange,
            content:
              "Seamlessly transfer money using your mobile device, providing convenience and accessibility.",
          },

          // {
          //   id: "2",
          //   title: "International Money Transfer",
          //   content:
          //     "Send and receive money across borders with our secure international transfer services.",
          // },

          {
            id: "2",
            img: moneygram,
            title: "MoneyGram",
            content:
              "Send and receive money across borders with our secure international transfer services.",
          },

          {
            id: "3",
            img: westernunion,
            title: "Western Union",
            content:
              "Send and receive money across borders with our secure international transfer services.",
          },

          {
            id: "4",
            img: ria,
            title: "Ria Money",
            content:
              "Send and receive money across borders with our secure international transfer services.",
          },

          {
            id: "5",
            img: rapid,
            title: "Rapid Transfer",
            content:
              "Send and receive money across borders with our secure international transfer services.",
          },
          {
            id: "6",
            img: visa,
            title: "Visa",
            content: "Card Loading and Bill payments.",
          },
          {
            id: "7",
            img: express,
            title: "American Express",
            content: "Card Loading and Bill payments.",
          },
        ],

        reason: [
          {
            id: "1",
            title: "Speed and Efficiency",
            content:
              "Enjoy fast and efficient money transfers, ensuring your funds arrive on time.",
          },

          {
            id: "2",
            title: "Security",
            content:
              "Our money transfer services are secure, giving you peace of mind with every transaction.",
          },

          {
            id: "3",
            title: "Accessibility",
            content:
              "With our mobile and international transfer options, you can send money anytime, anywhere.",
          },
        ],
      },

      {
        id: "4",
        content: `Enhance your business skills with our comprehensive training services for MSMEs`,
        subtitle: "Business Training Services for MSMEs",
        buttonText: "Business Training Request Form",
        title: "Business Training Services",
        subheading: "Business Training Services",
        img: analysis,
        mainImage: meeting,
        notes:
          "Enhance your business acumen and drive your enterprise towards success with Kakebo Business Training Services. Enroll in our programs today and take your business to new heights.",
        description:
          "Kakebo Financial Services is committed to empowering micro, small, and medium-sized enterprises (MSMEs) through our comprehensive business training services. Our programs are designed to equip business owners with  the skills and knowledge needed to succeed in today's competitive market.",
        plans: [
          {
            id: "1",
            title: "Entrepreneurship Training",
            img: analysis,
            content:
              "Learn the fundamentals of starting and running a successful business.",
          },

          {
            id: "2",
            title: "Financial Management",
            img: finmgt,
            content:
              "Gain insights into effective financial planning, budgeting, and management.",
          },

          {
            id: "3",
            img: strategy,
            title: "Marketing Strategies",
            content:
              "Develop effective marketing strategies to promote your business and attract customers.",
          },
          {
            id: "4",
            img: strategy,
            title: "Business Proposal Development",
            content: "",
          },
        ],

        reason: [
          {
            id: "1",
            title: "Expert Guidance",
            content:
              "Our training programs are led by experienced professionals with in-depth industry knowledge.",
          },

          {
            id: "2",
            title: "Practical Skills",
            content:
              " We focus on providing practical, hands-on training that you can apply directly to your business.",
          },

          {
            id: "3",
            title: "Supportive Community",
            content:
              "Join a network of fellow entrepreneurs and business owners, fostering collaboration and support.",
          },
          {
            id: "4",
            title: "Business Proposal Development",
            content:
              "We offer targeted, hands-on training to help you craft business proposals that are both strategic and impactful.",
          },
        ],
      },
      {
        id: "5",
        content:
          "Receive expert guidance and support with Kakebo Consultancy Services today.",
        title: "Consultancy Work",
        subtitle: "Consultancy Work for Projects",
        img: consultancyicon,
        mainImage: consultancyimage,

        description:
          "At Kakebo Consultancy Services, we offer comprehensive and professional consultancy services that cater to a wide range of needs. Whether you require a baseline survey, project evaluation/end line survey, financial auditing, organizational capacity building, software development & training, or mobile app development, our services ensure you receive expert guidance and support. Partner with us today to achieve your goals efficiently and effectively.",
        notes:
          "Receive expert guidance and support with Kakebo Consultancy Services today to achieve your goals efficiently and effectively.",
        plans: [
          {
            id: "1",
            title: "Baseline Survey",
            img: basesurvey,
            content: "",
          },
          {
            id: "2",
            img: endsurvey,
            title: "Project Evaluation / End Line Survey",
            content: "",
          },

          {
            id: "3",
            img: finaudit,
            title: "Financial Auditing",
            content: "",
          },

          {
            id: "4",
            img: orgcap,
            title: "Organizational Capacity Building",
            content: "",
          },

          {
            id: "5",
            img: softtraining,
            title: "Software Development and Training",
            content: "",
          },
        ],

        reason: [
          {
            id: "1",
            title: "Comprehensive Expertise",
            content:
              "Our team of experts ensures that you receive tailored solutions that meet your specific needs.",
          },

          {
            id: "2",
            title: "Proven Track Record",
            content:
              "With a history of delivering successful projects across various sectors, we are committed to helping you achieve your goals effectively and efficiently.",
          },

          {
            id: "3",
            title: "Innovative Solutions",
            content:
              " We stay ahead of the curve by incorporating the latest technologies and methodologies in our services.",
          },
        ],
      },
    ],
  },

  {
    id: "unions",
    title: "Our Credit Unions",
    subNav: [
      {
        id: "1",
        title: "Bonthe Island Cooperative Credit Union",
        img: logo,
        mainImage: logo,
        description: `Bonthe Island Cooperative Credit Union is a community base cooperative society operating as a not-for-profit and non-political entity. Established on 17th July 2020 by Social Enterprise Development – SEND Sierra Leone, with fund from BMZ through WHH. The union is registered with the Department of Cooperatives under the Ministry of Trade and Industry. The core vision of the credit union is to foster a culture of saving among its members by offering avenues for savings, providing fair and competitive interest rates on loans for both provident and productive purposes, and delivering other necessary financial services to promote members' self-reliance. Decisions concerning product offerings and services are made locally to cater to the specific needs of the membership.
           Community-based Cooperative Credit Union plays a pivotal role in SEND SL's mission to drive community socio-economic development. By facilitating savings and providing affordable loans primarily to market women engaged in entrepreneurial activities, Bonthe Island Credit union empowers its members to advance their economic standing and become self-sufficient contributors to society.`,
      },
      {
        id: "2",
        title: "Jong Cooperative Credit Union",
        img: logo,
        mainImage: logo,
        description: `Jong Cooperative Credit Union is a community base cooperative society. "not-for-profit" organization and a non-political organization that is established in Mattru Jong Town, Bonthe District, by the SEND Sierra Leone and registered since 2023 through the Department of Cooperatives under the ministry of Trade and Industry with funding support from UNDP under the human security project in Sierra Leone. With the vision to promote thrift among its Members by providing a means of Savings; provide Loans to its Members for provident or productive purposes at fair and attractive rate of interest and provide other financial services that may be required by Members for their self-reliance. Decisions are made at a local level as to the products and services they offer to their membership. 
        Community base Cooperative Credit Union is among one of the main pillars of SEND SL in promoting the socio – economic growth of communities through savings mobilizations, and giving out of affordable loans to its members who are basically market women that do business activities in order to be able to develop themselves and to stand-up in society not as liabilities but self-sufficient and reliable persons where so ever they may find themselves.`,
      },
      {
        id: "3",
        title: "Kenema Cooperative Credit Union",
        img: logo,
        mainImage: logo,
        description: `The Kenema Cooperative Credit Union (KCCU) is a non-profit community-based organization registered with the Ministry of Trade and Industry in Sierra Leone through the Department of Cooperatives and the Corporate Affairs Commission. Its goal is to provide rural communities access to financial services and resources by mobilizing savings and credit facilities. It was established in 2020 with Social Enterprise Development (SEND SL) technical assistance, with funding support from Irish Aid, BMZ through Terra Tech. KCCU works with various groups, including stakeholders, entrepreneurs, government authorities, and partners, to develop innovative solutions that promote financial inclusion and sustainable self-reliance.
KCCU has a common national bond and members from all regions, including Western Area Rural and Western Area Urban. It has over 1,500 registered members across the country, with a total asset value of SLL 7,000,000.
`,
      },
      // {
      //   id: "4",
      //   title: "Kissi Tongi Cooperative Credit Union",
      //   img: logo,
      //   mainImage: logo,
      //   description: "",
      // },
      //       {
      //         id: "5",
      //         title: "Sincunia Cooperative Credit Union: ",
      //         img: logo,
      //         mainImage: logo,
      //         description: `Sinkunia Cooperative Credit Union is a community base cooperative society. "not-for-profit" organization and a non-political organization that is established in Sinkunia community in Falabba District by  SEND Sierra Leone and registered since 2023 through the Department of Cooperatives under the ministry of Trade and Industry with funding support from UNDP under the human security project in Sierra Leone. With funding support from UNDP under the human security, project in Sierra Leone. With the vision to promote thrift among its Members by providing a means of Savings; provide Loans to its Members for provident or productive purposes at fair and attractive rate of interest and provide other financial services that may be required by Members for their self-reliance. Decisions are therefore made at a local level as to the products and services they offer to their membership.
      // Community base Cooperative Credit Union is among one of the main pillars of SEND SL in promoting the socio – economic growth of communities through savings, and the giving out of affordable loans to its members who are basically market women that do business activities in order to be able to develop themselves and to stand-up in society not as liabilities but self-sufficient and reliable persons where so ever they may be found.
      // `,
      //       },
      {
        id: "6",
        title: "Kono Cooperative Credit Union",
        img: logo,
        mainImage: logo,
        description: `Kono Cooperative Credit Union is a community base cooperative society. "not-for-profit" organization and a non-political organization that is established in Koidu city, Kono District by SEND Sierra Leone. And registered since 2023 through the Department of Cooperatives under the ministry of Trade and Industry with funding support from Irish Aid for women groups with the vision of promoting thrift among women groups and its Members by providing a means of Savings; provide Loans to its Members for provident or productive purposes at fair and attractive rate of interest and provide other financial services that may be required by Members for their self-reliance. Decisions are therefore made at a local level as to the products and services they offer to their membership.
Community base Cooperative Credit Union is among one of the main pillars of SEND SL in promoting the socio – economic growth of communities through savings, and the giving out of affordable loans to its members who are basically market women that do business activities in order to be able to develop themselves and to stand-up in society not as liabilities but self-sufficient and reliable persons where so ever they may find themselves.
`,
      },
      // {
      //   id: "6",
      //   title: "Luawa Cooperative Credit Union",
      //   img: logo,
      //   mainImage: logo,
      //   description: "",
      // },
      {
        id: "7",
        title: "Mongo Cooperative Credit Union",
        img: logo,
        mainImage: logo,
        description: `Mongo Cooperative Credit Union is a community base cooperative society. "not-for-profit" organization and a non-political organization that is established in Mongo community in Falabba District by the Social Enterprise Development – SEND Sierra Leone and registered since 2023 through the Department of Cooperatives under the ministry of Trade and Industry with funding support from UNDP under the human security project in Sierra Leone. With the vision to promote thrift among its Members by providing a means of Savings; provide Loans to its Members for provident or productive purposes at fair and attractive rate of interest and provide other financial services that may be required by Members for their self-reliance. Decisions are therefore made at a local level as to the products and services they offer to their membership`,
      },
      // {
      //   id: "8",
      //   title: "Peje West Cooperative Credit Union",
      //   img: logo,
      //   mainImage: logo,
      //   description: `Mongo Cooperative Credit Union is a community base cooperative society. "not-for-profit" organization and a non-political organization that is established in Mongo community in Falabba District by the Social Enterprise Development – SEND Sierra Leone and registered since 2023 through the Department of Cooperatives under the ministry of Trade and Industry with funding support from UNDP under the human security project in Sierra Leone. With the vision to promote thrift among its Members by providing a means of Savings; provide Loans to its Members for provident or productive purposes at fair and attractive rate of interest and provide other financial services that may be required by Members for their self-reliance. Decisions are therefore made at a local level as to the products and services they offer to their membership`,
      // },
      {
        id: "9",
        title: "Sinkunia Cooperative Credit Union",
        img: logo,
        mainImage: logo,
        description: `Sinkunia Cooperative Credit Union is a community base cooperative society. "not-for-profit" organization and a non-political organization that is established in Sinkunia community in Falabba District by  SEND Sierra Leone and registered since 2023 through the Department of Cooperatives under the ministry of Trade and Industry with funding support from UNDP under the human security project in Sierra Leone. With funding support from UNDP under the human security, project in Sierra Leone. With the vision to promote thrift among its Members by providing a means of Savings; provide Loans to its Members for provident or productive purposes at fair and attractive rate of interest and provide other financial services that may be required by Members for their self-reliance. Decisions are therefore made at a local level as to the products and services they offer to their membership.`,
      },

      // {
      //   id: "10",
      //   title: "Upper Bambara Cooperative Credit Union",
      //   img: logo,
      //   mainImage: logo,
      //   description: "",
      // },

      // {
      //   id: "11",
      //   title: "Overview of Credit Unions",
      //   img: logo,
      //   mainImage: logo,
      //   description:
      //     "A credit union is a member-owned financial cooperative that provides a range of financial services to its members. Unlike traditional banks, which are typically for-profit institutions owned by shareholders, credit unions aim to be financially sustainable while operating as not-for-profit organizations. Profits generated by credit unions are reinvested into the organization to benefit its members, such as through lower loan rates, higher savings rates, or expanded services. Members of credit unions are both owners and customers, giving them a direct say in the management and operations of the institution.",
      // },

      // {
      //   id: "12",
      //   title: "Historical Context in Sierra Leone",
      //   img: logo,
      //   mainImage: logo,
      //   description:
      //     "The credit union movement in Sierra Leone traces its roots to the cooperative movement that began in the early to mid-20th century. Credit unions, also known as savings and credit cooperatives (SACCOs), emerged as part of this tradition. The regulation and supervision of credit unions fall under the Ministry of Trade and Industry through the Department of Cooperatives. The Cooperative Societies Act of 1977 provides the legal framework for the establishment and operation of credit unions in the country.",
      // },

      //       {
      //         id: "13",
      //         title: "Recent Developments and Impact",
      //         img: logo,
      //         mainImage: logo,
      //         description: `Since 2009, SEND Sierra Leone has established 10 credit unions, providing additional financial services to individual members and Village Savings and Loans Associations (VSLAs). This initiative has empowered thousands of women, making them more financially literate, self-reliant, and vocal in their communities. These credit unions have significantly increased income-earning opportunities, access to affordable loans, and addressed social challenges such as gender inequality and decision-making in households and communities.
      // As of May 2024, the 10 credit unions supported by SEND have over 7,070 individual members and 1,366 VSLA groups, representing more than 40,000 members. These credit unions, located in Kailahun, Kenema, Kono, Bonthe, and Falaba districts, have total assets valued at SLE 59,750,000 (approximately 2.5 million USD).
      // `,
      //       },
    ],
  },

  {
    id: "contactus",
    title: "Contact",
  },
];

export const contact: ContactModel = {
  email: "info@kakebofinancialservices.com",
  address: "4 Reservation Road, Kenema, Sierra Leone",
  phone: "+232 76332287",
  whatsappLink: "+23276332287",
  phone2: "+232 78 206853",
  whatsappLink2: "+232 78 206853",
};

export const donors: Menus[] = [
  {
    id: "sendserial",
    title: "sendserial",
    img: sendserial,
  },

  {
    id: "bmz",
    title: "bmz",
    img: bmz,
  },

  {
    id: "teratech",
    title: "teratech",
    img: teratech,
  },

  {
    id: "irishaid",
    title: "irishaid",
    img: irishaid,
  },

  {
    id: "WHH",
    title: "WHH",
    img: whh,
  },
  {
    id: "EU",
    title: "EU",
    img: eu,
  },
  {
    id: "CordAid Netherlands",
    title: "CordAid Netherlands",
    img: cordaid,
  },
  {
    id: "Christian Aid",
    title: "Christian Aid",
    img: caid,
  },
  {
    id: "NaCCUA",
    title: "NaCCUA",
    img: naccua,
  },
];

export const faq: FAQType[] = [
  {
    id: "location",
    title: "WHERE CAN I FIND A CREDIT UNION?",
    answer: [
      {
        title: "Bonthe Island Co-operative Credit Union",
        address: "Yagoi Community.",
        unionId: "1",
        contact: [
          {
            name: "Memunatu Kindeh",
            phone: "073 948428",
          },
        ],
      },

      {
        title: "Jong Cooperative Credit union",
        address: "4 Betty Kpanabum Lane – Mattru Jong.",
        unionId: "2",
        contact: [
          {
            name: "Peter Swalieu Navo",
            phone: "078 191332",
          },
        ],
      },

      {
        title: "Kenema Co-operative Credit Union",
        address: "4 Reservation Road, Kenama City.",
        unionId: "3",
        contact: [
          {
            name: "Alimatu Barrie",
            phone: "076 587758",
          },
        ],
      },

      {
        title: "Kissi Tongi Community Co-operative Credit Union",
        address: "Kailahun Road, Buedu Town",
        contact: [
          {
            name: "Elizabeth Hallie",
            phone: "076 516522",
          },
        ],
      },

      {
        title: "Kono Cooperative Credit Union",
        address: "64 Bona Street, Koidu City.",
        contact: [
          {
            name: "Betty Simbo Kamara",
            phone: "tel:078 503513",
          },
        ],
      },

      // {
      //   title: "Luawa Community Co-operative Credit Union",
      //   address: "Buedu Road, Kissi Town Section,",
      //   unionId: "6",
      //   contact: [
      //     {
      //       name: "Augusta Adu",
      //       phone: "076 143535",
      //     },
      //   ],
      // },

      {
        title: "Mongo Cooperative Credit Union ",
        address: "5 Seria Road mongo town.",
        unionId: "7",
        contact: [
          {
            name: "Sarah Bangura",
            phone: "076 739729",
          },
        ],
      },

      // {
      //   title: "Peje West Co-operative Credit Union",
      //   address: "Bunumbu",
      //   unionId: "8",
      //   contact: [
      //     {
      //       name: "Abdul E Ansumana",
      //       phone: "080 753940",
      //     },
      //   ],
      // },

      {
        title: "Sinkonia Cooperative Credit Union",
        address: "7 kalaba Road Sinkunia.",
        unionId: "9",
        contact: [
          {
            name: "Foday Kamara",
            phone: "078 213833",
          },
        ],
      },

      // {
      //   title: "Upper Bambara Co-operative Credit Union",
      //   address: "Old Railway Line, Pendembu Town",
      //   unionId: "10",
      //   contact: [
      //     {
      //       name: "Jeneba Aruna",
      //       phone: "078 781455",
      //     },
      //   ],
      // },
    ],
  },

  {
    id: "membership",
    title: "HOW DO I JOIN THE CREDIT UNION?",
    answer: [
      {
        title:
          "Visit your local credit union with the address provided and ask for a membership form",
      },
      {
        title: "Fill and return the completed form to the credit union office.",
      },
      {
        title:
          "Pay the entrance fee - NLe 30 which will earn you: one passbook and one ledger card.",
      },
      {
        title:
          "Buy a share -N Le 100 for individual account or NLe300 for group or business/institutional accounts.",
      },

      {
        title:
          "Invest your first savings - minimum NLe 70 for individual account and NLe 170 for group or business/institutional accounts.",
      },
      {
        title:
          "Save every month (it could be on daily, weekly/bi-weekly basis), and in 6 months time you can ask for a loan.",
      },
    ],
  },

  {
    id: "loan",
    title: "HOW DO I GET A CREDIT UNION LOAN?",
    answer: [
      {
        title:
          "Collect and fill a loan application form (Remember, you are eligible for a loan up to twice your savings with the union)",
      },
      {
        title: "Submit your application form to the accounts clerk.",
      },
      {
        title: "The loan committee will sit to approve your loan",
      },
      {
        title:
          "Once the loan is approved, the account clerk will then call you at the office for your money – and you will be paid without commission.",
      },

      {
        title:
          "He/she will also give you a loan schedule to guide your repayment.",
      },
      {
        title:
          "Credit union accept bank standing order for salary workers to settle their loans.",
      },
      {
        title:
          "Once you have repaid your loan you are eligible for further loans.",
      },
    ],
  },

  {
    id: "benefit",
    title: "WHAT ARE THE BENEFITS OF CREDIT UNIONS?",
    answer: [
      {
        heading: "Loan and credit facility:",
        title:
          "You can access loan from credit unions to support your business, education, house construction, medical, agricultural activities and the livelihood of your family etc.",
      },

      {
        heading: "A safe way to save:",
        title:
          "Saving with credit unions will help you grow and protect you from the risks of robbery, fire accidents, etc.",
      },
      {
        heading: "Leadership opportunities:",
        title: "Being a member creates leadership opportunities.",
      },
      {
        heading: "Promotes unity:",
        title:
          "Promotes unity: It promotes partnership, friendship and solidarity to help drive community unity and peace.",
      },
      {
        heading: "Democratic governance:",
        title: "Credit unions are owned and controlled by members.",
      },
      {
        heading: "Economic empowermen:",
        title:
          "It is a way of increasing women’s sources of income and livelihood for economic empowerment in promoting their participation in leadership and governance.",
      },
    ],
  },
];

export const interestRates: InterestType[] = [
  {
    period: "1st Month",
    principal: "1,000",
    USDPrincipal: "0.04",
    interest: "1,000",
    total: "1,180",
    USDTotal: "0.047",
    balance: "5,000",
    USDBalance: "0.2",
  },
  {
    period: "2nd Month",
    principal: "1,000",
    USDPrincipal: "0.04",
    interest: "150",
    total: "1,150",
    USDTotal: "0.046",
    balance: "4,000",
    USDBalance: "0.16",
  },

  {
    period: "3rd Month",
    principal: "1,000",
    USDPrincipal: "0.04",
    interest: "120",
    total: "1,120",
    USDTotal: "0.045",
    balance: "3,000",
    USDBalance: "0.12",
  },
  {
    period: "4th Month",
    principal: "1,000",
    USDPrincipal: "0.04",
    interest: "90",
    total: "1,090",
    USDTotal: "0.043",
    balance: "2,000",
    USDBalance: "0.08",
  },
  {
    period: "5th Month",
    principal: "1,000",
    USDPrincipal: "0.04",
    interest: "60",
    total: "1,060",
    USDTotal: "0.042",
    balance: "1,000",
    USDBalance: "0.04",
  },
  {
    period: "6th Month",
    principal: "1,000",
    USDPrincipal: "0.04",
    interest: "30",
    total: "1,030",
    USDTotal: "0.041",
    balance: "",
    USDBalance: "",
  },
  {
    period: "Total ",
    principal: "6,000",
    USDPrincipal: "0.24",
    interest: "630",
    total: "6,630",
    USDTotal: "0.27",
    balance: "",
    USDBalance: "",
  },
];

export const membership: GeneralListModel[][] = [
  [
    {
      id: "Loans",
      title: "9597004",
    },
    {
      id: "Male Members",
      title: "2460",
    },
    {
      id: "Female Members",
      title: "3123 ",
    },
    {
      id: "Groups",
      title: "1366",
    },
  ],
  [
    {
      id: "Loans",
      title: "3633373",
    },
    {
      id: "Male Members",
      title: "369",
    },
    {
      id: "Female Members",
      title: "613",
    },
    {
      id: "Groups",
      title: "186",
    },
  ],
  [
    {
      id: "Loans",
      title: "249857",
    },
    {
      id: "Male Members",
      title: "63",
    },
    {
      id: "Female Members",
      title: "75",
    },
    {
      id: "Groups",
      title: "26",
    },
  ],

  [
    {
      id: "Loans",
      title: "3633373",
    },
    {
      id: "Male Members",
      title: "512",
    },
    {
      id: "Female Members",
      title: "418",
    },
    {
      id: "Groups",
      title: "394",
    },
  ],

  [
    {
      id: "Loans",
      title: "838246",
    },
    {
      id: "Male Members",
      title: "369",
    },
    {
      id: "Female Members",
      title: "613",
    },
    {
      id: "Groups",
      title: "186",
    },
  ],

  [
    {
      id: "Loans",
      title: "665395",
    },
    {
      id: "Male Members",
      title: "44",
    },
    {
      id: "Female Members",
      title: "170",
    },
    {
      id: "Groups",
      title: "25",
    },
  ],

  [
    {
      id: "Loans",
      title: "1189167",
    },
    {
      id: "Male Members",
      title: "510",
    },
    {
      id: "Female Members",
      title: "589",
    },
    {
      id: "Groups",
      title: "240",
    },
  ],

  [
    {
      id: "Loans",
      title: "101915",
    },
    {
      id: "Male Members",
      title: "45",
    },
    {
      id: "Female Members",
      title: "41",
    },
    {
      id: "Groups",
      title: "43",
    },
  ],

  [
    {
      id: "Loans",
      title: "943612",
    },
    {
      id: "Male Members",
      title: "172",
    },
    {
      id: "Female Members",
      title: "519",
    },
    {
      id: "Groups",
      title: "129",
    },
  ],

  [
    {
      id: "Loans",
      title: "91298",
    },
    {
      id: "Male Members",
      title: "45",
    },
    {
      id: "Female Members",
      title: "67",
    },
    {
      id: "Groups",
      title: "18",
    },
  ],
  [
    {
      id: "Loans",
      title: "964141",
    },
    {
      id: "Male Members",
      title: "306",
    },
    {
      id: "Female Members",
      title: "369",
    },
    {
      id: "Groups",
      title: "192",
    },
  ],
];

export const staffs: ContactModel[] = [
  {
    email: "kenemacreditunion@gmail.com, ayamga@sendsierraleone.com",
    name: "Mohamed M Jalloh",
    position: "General Manager",
    phone: "+232 76 332287/+232 78 206853",
    unionId: "0",
  },
  {
    email: "KAKEBO Secretariat",
    name: "Mohamed M. Jalloh",
    position: "General Manager",
    unionId: "0",
    phone: "076 332287, 088 206567",
  },
  {
    email: "KAKEBO Secretariat",
    name: "Alimatu Barrie",
    position: "Relations Officer",
    unionId: "0",
    phone: "O76 587758, 088 917990",
  },
  {
    email: "KAKEBO Secretariat",
    name: "Massah Konneh",
    position: "Admin / Finance Officer",
    unionId: "0",
    phone: "078 038994, 033 427482",
  },

  {
    email: "Bonthe Island Cooperative Credit Union",
    name: "Memunatu Keindeh",
    position: "Manager",
    unionId: "1",
    phone: "073 948428",
  },
  {
    email: "Bonthe Island Cooperative Credit Union",
    name: "Karim Kain",
    position: "Officer Assistance",
    unionId: "1",
    phone: "073 817171",
  },
  {
    email: "Jong Cooperative Credit Union",
    name: "Peter S Navo",
    position: "Manager",
    unionId: "2",
    phone: "078 191332, 031 828224",
  },
  {
    email: "Kenema Co-operative Credit Union",
    name: "Kulinda M Mansaray",
    position: "Credit Office",
    unionId: "3",
    phone: "078 677995, 033 237434",
  },
  {
    email: "Kenema Co-operative Credit Union",
    name: "Priscilla H Sheriff",
    position: "Operation Officer",
    unionId: "3",
    phone: "076 499100, 033 562472",
  },
  {
    email: "Kenema Co-operative Credit Union",
    name: "Theresa Swarray",
    position: "Loan Officer",
    unionId: "3",
    phone: "073 708285, 030 336437",
  },
  {
    email: "Kenema Co-operative Credit Union",
    name: "Francis S Vandi",
    position: "Loan Officer",
    unionId: "3",
    phone: "078 307092",
  },
  {
    email: "Kenema Co-operative Credit Union",
    name: "Nyuma S Tommy",
    position: "Security Guard",
    unionId: "3",
    phone: "030 217401",
  },
  {
    email: "Kenema Co-operative Credit Union",
    name: "Sylvester L Juana",
    position: "Office Assistant",
    unionId: "3",
    phone: "",
  },
  // {
  //   email: "Kissi Tongi Cooperative Credit Union",
  //   name: "Elizabeth Hallie",
  //   position: "Manager",
  //   unionId: "4",
  //   phone: "076 516522",
  // },
  // {
  //   email: "Kissi Tongi Cooperative Credit Union",
  //   name: "Watta Lahun",
  //   position: "Book keeper",
  //   unionId: "4",
  //   phone: "078 191419",
  // },
  // {
  //   email: "Kissi Tongi Cooperative Credit Union",
  //   name: "Sahr Bongay",
  //   position: "Security Gard",
  //   unionId: "4",
  //   phone: "078 493605",
  // },
  {
    email: "Kono Cooperative Credit Union",
    name: "Betty Simbo Kamara",
    position: "Manager",
    unionId: "5",
    phone: "078 503513, 099 202794",
  },
  {
    email: "Kono Cooperative Credit Union",
    name: "Swaray A Kaingbaja",
    position: "Loan Officer",
    unionId: "5",
    phone: "076 601445",
  },
  // {
  //   email: "Luawa Cooperative Credit Union",
  //   name: "Festus Bockarie",
  //   position: "Manager",
  //   unionId: "6",
  //   phone: "079 661761",
  // },
  // {
  //   email: "Luawa Cooperative Credit Union",
  //   name: "Augusta Adu",
  //   position: "Account Officer",
  //   unionId: "6",
  //   phone: "076 143535",
  // },
  // {
  //   email: "Luawa Cooperative Credit Union",
  //   name: "Soadatu Vandi",
  //   position: "Loan Officer",
  //   unionId: "6",
  //   phone: "076 216525",
  // },
  // {
  //   email: "Luawa Cooperative Credit Union",
  //   name: "Augustine Feika",
  //   position: "Security Gard",
  //   unionId: "6",
  //   phone: "073 458049",
  // },
  {
    email: "Mongo Cooperative Credit Union",
    name: "Sarah Bangura",
    position: "Manager",
    unionId: "7",
    phone: "076 739729",
  },
  {
    email: "Mongo Cooperative Credit Union",
    name: "Damba Sannoh",
    position: "Book keeper",
    unionId: "7",
    phone: "073 904777",
  },

  // {
  //   email: "Peje West Cooperative Credit Union",
  //   name: "Abdul E Ansumana",
  //   position: "Manager",
  //   unionId: "8",
  //   phone: "076 344591",
  // },
  // {
  //   email: "Peje West Cooperative Credit Union",
  //   name: "Annmarie Abu",
  //   position: "Account Officer",
  //   unionId: "8",
  //   phone: "078 879708",
  // },
  // {
  //   email: "Peje West Cooperative Credit Union",
  //   name: "Umaru Mustapha",
  //   position: "Security Gard",
  //   unionId: "8",
  //   phone: "074 819725",
  // },
  {
    email: "Sinkunia Cooperative Credit Union",
    name: "Foday S Kamara",
    position: "Manager",
    unionId: "9",
    phone: "078 213833",
  },
  {
    email: "Sinkunia Cooperative Credit Union",
    name: "Adama S Kamara",
    position: "Account Officer",
    unionId: "9",
    phone: "076 134708",
  },

  // {
  //   email: "Upper Bambara Cooperative Credit Union",
  //   name: "Jeneba Aruna",
  //   position: "Manager",
  //   unionId: "10",
  //   phone: "078 781455",
  // },
  // {
  //   email: "Upper Bambara Cooperative Credit Union",
  //   name: "Charles Ansumana",
  //   position: "Account Officer",
  //   unionId: "10",
  //   phone: "080 737201",
  // },
  // {
  //   email: "Upper Bambara Cooperative Credit Union",
  //   name: "Samuel Massata",
  //   position: "Security Gard",
  //   unionId: "10",
  //   phone: "",
  // },
];
