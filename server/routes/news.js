const express = require('express');
const router = express.Router();

const news = [
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
    title: "Navigating the university Application Process",
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
    photo: "https://samelane.com/wp-content/uploads/2023/07/online-distance-learning.jpg"
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

router.get('/', (req, res) => {
  res.json(news);
});

router.get('/:id', (req, res) => {
    const newsId = req.params.id;
    const newsList = newsList.find(newsList => newsList.id === parseInt(newsId));
    if (newsList) {
        res.json(newsList);
    } else {
        res.status(404).json({ message: 'news not found' });
    }
});

module.exports = router;