const blogs = [
  {
    id: 1,
    title: "The Rising Cost of College: Is Higher Education Becoming Unaffordable?",
    description: "Explore the factors contributing to the increasing cost of college tuition and its impact on students.",
    photo: "https://www.thoughtco.com/thmb/nqn9FRGVhqeQyYQSLsPWrIp_dHw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/happy-student-in-paris-532854948-266abdb9e9b1449b918eb8fc0c96bde1.jpg"
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