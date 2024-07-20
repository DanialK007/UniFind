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
      photo: "https://lh3.googleusercontent.com/p/AF1QipPFo3RIdi41ZJF8HWgUbisbkf62fYJV4QNPzOYK=s1360-w1360-h1020",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0R9vm_mLrdeSgmCI3aI1UrBgGILNW7e7gmg&s"
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
      photo: "https://strategyfirst.edu.mm/frontend/home_image/mdy_campus.jpg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLSDuhpwv8YcL9IWkiGpeAlIThMiXR02hmw&s"
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
      photo: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2b/08/fd/4a/caption.jpg",
      logo: "https://media.licdn.com/dms/image/C560BAQF6zpq8sSyFOA/company-logo_100_100/0/1630647541798?e=2147483647&v=beta&t=6-o4Kc6y0ueFT6wbYbRV6qaj9bjrMhY43rBau-TN4i8"
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
      photo: "https://antechnic.com/wp-content/uploads/2019/09/Auston-College-Myanmar-495x400.jpg",
      logo: "https://auston.edu.mm/wp-content/uploads/2019/02/Auston-Logo-Mobile-square.jpg"
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
      photo: "https://media.crej.com/wp-content/uploads/2016/08/20105816/gusto-for-fitzmartin.jpg",
      logo: "https://www.ayabank.com/images/borrowing/hire_purchase/education_loan/partners/gusto_university_logo.png"
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
      photo: "https://media.licdn.com/dms/image/D4D22AQEyxf8Cy4AZEQ/feedshare-shrink_800/0/1696858979003?e=2147483647&v=beta&t=P153E3Nco7RY1yFiHICpGDTPQBXUfhl-clJJvYAKki8",
      logo: "https://miu.org.mm/upload/5f7494a97a9ca.png"
    },
    {
      id: 7,
      name: "MIBA University",
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
      photo: "https://lwfiles.mycourse.app/mibauniversity-public/66470b42634833c7758c7e853d53b8b1.jpeg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9gWuWtsUSKdR4js19Fdm0asn4eNX5SWnWw&s"
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
      photo: "https://www.eda-archi.com/img/projects/nvl-institute/light/6.jpg",
      logo: "https://www.nccedu.com/wp-content/uploads/2021/03/NVL.png"
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
      photo: "https://static.wixstatic.com/media/4ebe82_1da8d1b2623944d3860c472689b8a5d8~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ebe82_1da8d1b2623944d3860c472689b8a5d8~mv2.jpg",
      logo: "https://static.wixstatic.com/media/4ebe82_27d1d563438e450fa3bd54b90aeccdf2~mv2.jpg"
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
      photo: "https://ctu.edu.mm/wp-content/uploads/2018/06/cover.jpg",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9hmN7R5NQ7VKleM_Wklk-WlxVlOvD9FKNw&s"
    },
    {
      id: 11,
      name: "Info Myanmar University (IMU)",
      location: {
        city: "Yangon",
        country: "Myanmar"
      },
      website: "https://imu.edu.mm/",
      established: 2019,
      programs: [
        { name: "Computing", degreeLevels: ["B.Sc. (Hons)", "M.Sc."] }
      ],
      photo: "https://imu.edu.mm/wp-content/uploads/2022/08/IMU_1542-scaled-e1660653470242.jpg",
      logo: "https://imu.edu.mm/wp-content/uploads/elementor/thumbs/viber_image_2022-06-27_13-17-09-397-e1658997793548-psf7w74l5rv41347hgsjsmyxefoj297le31x2y6rbk.png"
    },
    {
      id: 12,
      name: "KBTC University",
      location: {
        city: "Yangon",
        country: "Myanmar"
      },
      website: "https://kbtc.edu.mm/",
      established: 2016,
      programs: [
        { name: "Software Engineering", degreeLevels: ["Diploma"] },
        { name: "Web Development", degreeLevels: ["Diploma"] }
        // ... other programs
      ],
      photo: "https://www.nccedu.com/wp-content/uploads/2021/03/KBTC-04.png",
      logo: "https://www.nccedu.com/wp-content/uploads/2021/03/KBTC-University-Original-Logo-File_500px.png"
    },
    {
      id: 13,
      name: "MST University",
      location: {
        city: "Yangon",
        country: "Myanmar"
      },
      website: "http://www.mstinstitute.net/",
      established: 2005,
      programs: [
        { name: "Telecommunications", degreeLevels: ["Bachelor", "Master"] },
        { name: "IT Technology", degreeLevels: ["Bachelor", "Master"] }
        // ... other programs
      ],
      photo: "https://media.licdn.com/dms/image/D5605AQGsMIVZnH6qtw/videocover-low/0/1707186583318?e=2147483647&v=beta&t=BgZk76c-WumrcmvMdSVywQzc2nA5jZgzlEgkJ0V8ao0",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57rQ0eYgQ9w52_ygJsN4vv26V6i14E-UYSg&s"
    },
    {
      id: 14,
      name: "Myanmar Institute of Business (MIB)",
      location: {
        city: "Yangon",
        country: "Myanmar"
      },
      website: "https://mib.edu.mm/",
      established: 2015,
      programs: [
        { name: "Business", degreeLevels: ["Diploma", "Bachelor"] }
        // ... other programs
      ],
      photo: "https://mib.edu.mm/wp-content/themes/mib/images/main_images/mib_slider_01.JPG",
      logo: "https://www.nccedu.com/wp-content/uploads/2021/03/KBTC-University-Original-Logo-File_500px.png"
    },
    {
      id: 15,
      name: "New Next University",
      location: {
        city: "Mandalay",
        country: "Myanmar"
      },
      website: "https://newnextuniversity.com/",
      established: 2019,
      programs: [
        { name: "Business Administration", degreeLevels: ["Bachelor", "Master"] }
        // ... other programs
      ],
      photo: "https://newnextuniversity.com/wp-content/uploads/2023/06/IMG_5309-1536x1024.jpg" ,
      logo: "https://i.redd.it/clean-logo-for-a-education-campus-in-myanmar-new-next-v0-w5ydol34zmca1.jpg?width=3600&format=pjpg&auto=webp&s=dd1a30794f0c187089785fbafa50c07580ddf501"
    },
    {
      id: 16,
      name: "AU MIT Myanmar University",
      location: {
        city: "Yangon",
        country: "Myanmar"
      },
      website: "https://www.aumitmyanmar.com/",
      established: 2018,
      programs: [
        { name: "Corporate Financial Reporting", degreeLevels: ["Professional Diploma"] },
        { name: "Supply Chain Risk Management", degreeLevels: ["Professional Diploma"] }
        // ... other programs
      ],
      photo: "https://www.aumitmyanmar.com/wp-content/uploads/2023/07/Slideshow1.jpg",
      logo: "https://www.aumitmyanmar.com/wp-content/uploads/2020/01/abac-logo.png"
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