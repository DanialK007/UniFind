const blogs = [
  {
    id: 1,
    title: "The Rising Cost of College: Is Higher Education Becoming Unaffordable?",
    description: "Explore the factors contributing to the increasing cost of college tuition and its impact on students.",
    photo: "https://www.shutterstock.com/image-photo/group-students-digital-tablet-laptop-600nw-2347371743.jpg"
  },
  {
    id: 2,
    title: "Online Learning vs. Traditional Classroom: Which is Better?",
    description: "Compare and contrast the advantages and disadvantages of online and traditional learning methods.",
    photo: "https://image.cnbcfm.com/api/v1/image/106918576-1627532474886-gettyimages-871203832-pi-1589476.jpeg?v=1627532520"
  },
  {
    id: 3,
    title: "The Importance of Study Abroad Experiences for Students",
    description: "Discover the benefits of studying abroad and how it can enrich a student's academic and personal growth.",
    photo: "https://www.bankrate.com/2022/05/19180025/Average-cost-of-studying-abroad.jpg?auto=webp&optimize=high&crop=16:9"
  },
  {
    id: 4,
    title: "Navigating the University Application Process",
    description: "A comprehensive guide to understanding and managing the steps involved in applying to universities.",
    photo: "https://d2zhlgis9acwvp.cloudfront.net/images/articles/0070-how-to-start-your-college-applications-process.jpg"
  },
  {
    id: 5,
    title: "Balancing Work and Study: Tips for Part-Time Students",
    description: "Strategies for part-time students to effectively balance their work commitments with academic responsibilities.",
    photo: "https://keystoneacademic-res.cloudinary.com/image/upload/element/15/157646_Parttimestudentjob.jpg"
  },
  {
    id: 6,
    title: "The Evolution of Distance Education",
    description: "Trace the history of distance education from correspondence courses to the modern era of online learning.",
    photo: "https://vibe.us/blog/10-positive-aspects-to-distance-learning/cover_hu3d03a01dcc18bc5be0e67db3d8d209a6_184197_640x0_resize_q90_lanczos.ea326e175ea41a8a8013658ca8ec88b43ed1a14e0e9902f5ab052f97182095a2.jpg"
  },
  {
    id: 7,
    title: "The Role of Technology in Enhancing Academic Collaboration",
    description: "Examine how technology fosters collaboration among students and educators, breaking down traditional barriers.",
    photo: "https://www.apply.eduhk.hk/ug/sites/default/files/2021-09/Bachelor-of-Science-%28Hons%29-in-Artificial-Intelligence-and-Educational-Technology.jpg"
  },
  {
    id: 8,
    title: "Cultural Diversity in Higher Education",
    description: "Explore the importance of cultural diversity in universities and its impact on the educational experience.",
    photo: "https://apuedge.com/wp-content/uploads/iStock-1346227626-Diverse-College-Students.jpg"
  }
];


const news = [
  {
    id: 1,
    title: "New Study Shows Benefits of Early Childhood Education",
    description: "Research highlights the long-term positive impacts of early childhood education on children's development.",
    photo: "https://www.fijitimes.com.fj/wp-content/uploads/2021/07/60e933395aef48f2a3e77d7962aa7ec4.jpeg"
  },
  {
    id: 2,
    title: "Schools Face Teacher Shortage Amidst Rising Burnout Rates",
    description: "A growing number of schools are struggling to fill teaching positions as educators experience increased burnout.",
    photo: "https://media.wbur.org/wp/2024/05/0503_protests-02-1920x1280.jpg"
  },
  {
    id: 3,
    title: "The Impact of Technology on Modern Education",
    description: "Exploring the advantages and challenges of integrating technology into the classroom.",
    photo: "https://www.thinkific.com/wp-content/uploads/2022/06/online-learning-student.jpg?original"
  },
  {
    id: 4,
    title: "Universities Adapt to Hybrid Learning Models Post-Pandemic",
    description: "As the world recovers from the pandemic, universities are embracing hybrid models of learning to offer flexibility and accessibility.",
    photo: "https://ncda.org/aws/NCDA/asset_manager/get_image/563209?ver=2"
  },
  {
    id: 5,
    title: "Global University Rankings Released: Trends and Insights",
    description: "The latest global university rankings are out, providing insights into the top institutions for higher education around the world.",
    photo: "https://media.licdn.com/dms/image/D5612AQEQhrTenclCTA/article-cover_image-shrink_720_1280/0/1679903094472?e=2147483647&v=beta&t=aYNeoXQS-TO01WQcaN_RPbM5znF2B8d60d-9QRwuviA"
  },
  {
    id: 6,
    title: "Study Reveals the Most In-Demand Skills for Graduates",
    description: "A recent study sheds light on the skills that today's graduates need to succeed in the rapidly changing job market.",
    photo: "https://www.moneytalksnews.com/workers/images/width=730/wp-content/uploads/2023/02/07152859/shutterstock_445337599-scaled.jpg?s=c1e377e7fa1d0cceb1d0d7c09f0e0c322332782d17f583b85158f1b0f763d88c"
  },
  {
    id: 7,
    title: "New Scholarship Programs Aim to Increase College Accessibility",
    description: "Several new scholarship programs have been announced, aiming to make college more accessible to students from all backgrounds.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/2015_SRNS_Family_Scholarships_%2835559759033%29.jpg"
  },
  {
    id: 8,
    title: "University Research Leads to Breakthrough in Renewable Energy",
    description: "Researchers at a leading university have made a significant breakthrough in the field of renewable energy.",
    photo: "https://www.ebcf.org/wp-content/uploads/2021/11/Scholarships_Header.jpg"
  }
];


export { blogs, news };

// const universities = [
//     {
//       id: 1,
//       name: "Massachusetts Institute of Technology (MIT)",
//       location: {
//         city: "Cambridge",
//         state: "Massachusetts",
//         country: "USA"
//       },
//       website: "https://www.mit.edu/",
//       established: 1861,
//       type: "Private",
//       size: 11500,
//       programs: [
//         { name: "Computer Science", degreeLevels: ["Bachelor", "Master", "PhD"] },
//         { name: "Electrical Engineering", degreeLevels: ["Bachelor", "Master", "PhD"] }
//       ],
//       acceptanceRate: 7,
//       tuitionFees: 55000, // Approximate annual tuition
//       photo: "https://news.mit.edu/sites/default/files/images/202209/MIT_Campus_SpringErtl-01-press_2.jpg"
//     },
//     {
//       id: 2,
//       name: "Stanford University",
//       location: {
//         city: "Stanford",
//         state: "California",
//         country: "USA"
//       },
//       website: "https://www.stanford.edu/",
//       established: 1885,
//       type: "Private",
//       size: 17000,
//       programs: [
//         { name: "Computer Science", degreeLevels: ["Bachelor", "Master", "PhD"] },
//         { name: "Medicine", degreeLevels: ["MD"] }
//       ],
//       acceptanceRate: 4.7,
//       tuitionFees: 58000, // Approximate annual tuition
//       photo: "https://cdn.britannica.com/25/121725-050-8BF363EC/Hoover-Tower-Stanford-University-California.jpg"
//     },
//     {
//       id: 3,
//       name: "University of Cambridge",
//       location: {
//         city: "Cambridge",
//         country: "United Kingdom"
//       },
//       website: "https://www.cam.ac.uk/",
//       established: 1209,
//       type: "Public",
//       size: 22000,
//       programs: [
//         { name: "Mathematics", degreeLevels: ["Bachelor", "Master", "PhD"] },
//         { name: "Law", degreeLevels: ["LLB", "PhD"] }
//       ],
//       acceptanceRate: 12.4,
//       tuitionFees: 35000, // Approximate annual tuition (for overseas students)
//       photo: "https://plantbasednews.org/app/uploads/2023/02/plant-based-news-university-cambridge.jpg"
//     },
//     {
//       id: 4,
//       name: "University of Tokyo",
//       location: {
//         city: "Tokyo",
//         country: "Japan"
//       },
//       website: "https://www.u-tokyo.ac.jp/en/",
//       established: 1877,
//       type: "National",
//       size: 30000,
//       programs: [
//         { name: "Engineering", degreeLevels: ["Bachelor", "Master", "PhD"] },
//         { name: "Agriculture", degreeLevels: ["Bachelor", "Master", "PhD"] }
//       ],
//       acceptanceRate: 35,
//       tuitionFees: 12000, // Approximate annual tuition
//       photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Yasuda_Auditorium_-_Tokyo_University_3.jpg/1200px-Yasuda_Auditorium_-_Tokyo_University_3.jpg"
//     },
//     {
//       id: 5,
//       name: "National University of Singapore (NUS)",
//       location: {
//         city: "Singapore",
//         country: "Singapore"
//       },
//       website: "https://www.nus.edu.sg/",
//       established: 1905,
//       type: "Public",
//       size: 40000,
//       programs: [
//         { name: "Business", degreeLevels: ["Bachelor", "Master", "PhD"] },
//         { name: "Life Sciences", degreeLevels: ["Bachelor", "Master", "PhD"] }
//       ],
//       acceptanceRate: 10,
//       tuitionFees: 25000, // Approximate annual tuition (for international students)
//       photo: "https://www.usj.edu.mo/wp-content/uploads/2020/12/NUS-Banner.jpg"
//     },
//     {
//       id: 6,
//       name: "University of Oxford",
//       location: {
//         city: "Oxford",
//         country: "United Kingdom"
//       },
//       website: "https://www.ox.ac.uk/",
//       established: 1096,
//       type: "Public",
//       size: 24000,
//       programs: [
//         { name: "History", degreeLevels: ["Bachelor", "Master", "PhD"] },
//         { name: "Philosophy", degreeLevels: ["Bachelor", "Master", "PhD"] }
//       ],
//       acceptanceRate: 17.5,
//       tuitionFees: 35000, // Approximate annual tuition (for overseas students)
//       photo: "https://oxfordshireguardian.co.uk/wp-content/uploads/2022/11/Tom-Tower-Christ-Church-Oxford-University.jpeg"
//     },
//     {
//       id: 7,
//       name: "Harvard University",
//       location: {
//         city: "Cambridge",
//         state: "Massachusetts",
//         country: "USA"
//       },
//       website: "https://www.harvard.edu/",
//       established: 1636,
//       type: "Private",
//       size: 21000,
//       programs: [
//         { name: "Law", degreeLevels: ["JD"] },
//         { name: "Medicine", degreeLevels: ["MD"] }
//       ],
//       acceptanceRate: 4.5,
//       tuitionFees: 58000, // Approximate annual tuition
//       photo: "https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg"
//     },
//     {
//       id: 8,
//       name: "University of California, Berkeley",
//       location: {
//         city: "Berkeley",
//         state: "California",
//         country: "USA"
//       },
//       website: "https://www.berkeley.edu/",
//       established: 1868,
//       type: "Public",
//       size: 43000,
//       programs: [
//         { name: "Engineering", degreeLevels: ["Bachelor", "Master", "PhD"] },
//         { name: "Computer Science", degreeLevels: ["Bachelor", "Master", "PhD"] }
//       ],
//       acceptanceRate: 16.5,
//       tuitionFees: 45000, // Approximate annual tuition
//       photo: "https://images.shiksha.com/mediadata/images/1495170014php5jrKAW.jpeg"
//     }
//   ];