const express = require('express');
const router = express.Router();

const universities = [
    {
      id: 1,
      name: "STI Myanmar University",
      location: {
        city: "Yangon / Mandalay",
        country: "Myanmar"
      },
      website: "https://www.stiedu.net/",
      established: 2006,
      programs: [
        { name: "Business Administration", degreeLevels: ["Bachelor", "Master"] },
        { name: "Information Technology", degreeLevels: ["Bachelor", "Master"] }
      ],
      photo: "https://lh3.googleusercontent.com/p/AF1QipPFo3RIdi41ZJF8HWgUbisbkf62fYJV4QNPzOYK=s1360-w1360-h1020"
    },
    {
      id: 2,
      name: "Strategy First University",
      location: {
        city: "Yangon / Mandalay",
        country: "Myanmar"
      },
      website: "https://www.strategyfirst.edu.mm/",
      established: 2010,
      programs: [
        { name: "Business Management", degreeLevels: ["Diploma", "Bachelor", "Master"] },
        { name: "Information Technology", degreeLevels: ["Diploma", "Bachelor"] }
      ],
      photo: "https://strategyfirst.edu.mm/frontend/home_image/mdy_campus.jpg"
    },
    {
      id: 3,
      name: "London Business University (LBU)",
      location: {
        city: "Yangon / Mandalay",
        country: "Myanmar"
      },
      website: "https://www.lbu.edu.mm/",
      established: 2017,
      programs: [
        { name: "Business Administration", degreeLevels: ["Certificate", "Diploma", "Bachelor", "Master"] },
        { name: "Management", degreeLevels: ["Certificate", "Diploma", "Bachelor", "Master"] }
      ],
      photo: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2b/08/fd/4a/caption.jpg"
    },
    {
      id: 4,
      name: "Auston College Myanmar",
      location: {
        city: "Yangon / Mandalay",
        country: "Myanmar"
      },
      website: "https://auston.edu.mm/",
      established: 1996,
      programs: [
        { name: "Engineering Technology", degreeLevels: ["Diploma", "Bachelor"] },
        { name: "Infrastructure & Networks", degreeLevels: ["Diploma", "Bachelor"] },
        { name: "Mechanical Engineering", degreeLevels: ["Diploma", "Bachelor"] }
      ],
      photo: "https://antechnic.com/wp-content/uploads/2019/09/Auston-College-Myanmar-495x400.jpg"
    },
    {
      id: 5,
      name: "GUSTO University",
      location: {
        city: "Yangon",
        country: "Myanmar"
      },
      website: "https://www.gusto.edu.mm/",
      established: 2006,
      programs: [
        { name: "Business Administration", degreeLevels: ["Diploma", "Bachelor"] },
        { name: "Information Technology", degreeLevels: ["Diploma", "Bachelor"] }
      ],
      photo: "https://media.crej.com/wp-content/uploads/2016/08/20105816/gusto-for-fitzmartin.jpg"
    },
    {
      id: 6,
      name: "Myanmar Imperial University (MIU)",
      location: {
        city: "Yangon",
        country: "Myanmar"
      },
      website: "https://www.miu.edu.mm/",
      established: 2010,
      programs: [
        { name: "Business Management", degreeLevels: ["Bachelor", "Master"] },
        { name: "Information Technology", degreeLevels: ["Bachelor", "Master"] }
      ],
      photo: "https://media.licdn.com/dms/image/D4D22AQEyxf8Cy4AZEQ/feedshare-shrink_800/0/1696858979003?e=2147483647&v=beta&t=P153E3Nco7RY1yFiHICpGDTPQBXUfhl-clJJvYAKki8"
    },
    {
      id: 7,
      name: "Myanmar International Business Academy (MIBA)",
      location: {
        city: "Yangon / Mandalay",
        country: "Myanmar"
      },
      website: "https://www.mibauniversity.com/",
      established: 2015,
      programs: [
        { name: "International Business", degreeLevels: ["Diploma", "Bachelor"] },
        { name: "Accounting and Finance", degreeLevels: ["Diploma", "Bachelor"] }
      ],
      photo: "https://lwfiles.mycourse.app/mibauniversity-public/66470b42634833c7758c7e853d53b8b1.jpeg"
    },
    {
      id: 8,
      name: "NVL University",
      location: {
        city: "Mandalay",
        country: "Myanmar"
      },
      website: "http://www.nvl-university.com/",
      established: 2022, // NVL University was extended from NVL Institute in 2022
      programs: [
        { name: "Business Computing and Information Systems", degreeLevels: ["B.Sc. (Hons)"] },
        { name: "Business Management", degreeLevels: ["BA (Hons)", "MBA"] },
      ],
      photo: "https://www.eda-archi.com/img/projects/nvl-institute/light/6.jpg"
    },
    {
      id: 9,
      name: "AIM Institute of Management",
      location: {
        city: "Mandalay",
        country: "Myanmar"
      },
      website: "https://my.aim.edu.mm/about-us",
      established: 2010,
      programs: [
        { name: "Business Management", degreeLevels: ["Diploma", "Bachelor", "Master"] },
      ],
      photo: "https://static.wixstatic.com/media/4ebe82_1da8d1b2623944d3860c472689b8a5d8~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ebe82_1da8d1b2623944d3860c472689b8a5d8~mv2.jpg"
    },
    {
      id: 10,
      name: "Chindwin Technological University (CTU)",
      location: {
        city: "Mandalay",
        country: "Myanmar"
      },
      website: "https://ctu.edu.mm/",
      established: 2007,
      programs: [
        { name: "Engineering", degreeLevels: ["HND", "Bachelor"] },
        { name: "Business Management", degreeLevels: ["Bachelor", "Master"] }
      ],
      photo: "https://ctu.edu.mm/wp-content/uploads/2018/06/cover.jpg"
    }
  ];

router.get('/', (req, res) => {
  res.json(universities);
});

router.get('/:id', (req, res) => {
    const universityId = req.params.id;
    const universityList = universityList.find(universityList => universityList.id === parseInt(universityId));
    if (universityList) {
        res.json(universityList);
    } else {
        res.status(404).json({ message: 'University not found' });
    }
});

module.exports = router;