const express = require('express');
const router = express.Router();

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