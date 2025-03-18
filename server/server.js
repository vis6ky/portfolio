import express from 'express'
import {MongoClient} from 'mongodb'
import 'dotenv/config'
import cors from 'cors'
const app = express()

app.use(cors());

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.get("/work", (req, res) => {
  const data = [
    {
      label: "HTML",
      value: "html",
      images: [
        {
          imageLink:
            "/images/html-runitrade-b2b.jpeg"
        },
        {
          imageLink:
            "/images/html-paryavaranurjatimes.png"
        },
        {
          imageLink:
            "/images/html-fibertest2.png"
        },
        {
          imageLink:
            "/images/html-myfiber2.png"
        }
      ],
    },
    {
      label: "Angular Js",
      value: "angularjs",
      images: [
        {
          imageLink:
            "/images/angularjs-fsdatabridge.jpeg",
        },
        {
          imageLink:
            "/images/angularjs-covenantmanager.jpeg",
        },
        {
          imageLink:
            "/images/angularjs-hidubai.png",
        }
      ],
    },
    {
      label: "Angular",
      value: "angular",
      images: [
        {
          imageLink:
            "https://i.ytimg.com/vi/FPKnCLajBhc/sddefault.jpg",
        },
        {
          imageLink:
            "/images/angular-hidubai-category.png",
        }
      ],
    },
    {
      label: "React",
      value: "react",
      images: [
        {
          imageLink:
            "/images/react-portfolio.png",
        }
      ],
    },
    {
      label: "PHP",
      value: "php",
      images: [
        {
          imageLink:
            "/images/html-runitrade-b2b.jpeg"
        }
      ],
    },
    {
      label: "PHP CMS",
      value: "php_cms",
      images: [
        {
          imageLink:
            "images/php-specs123.jpeg",
        }
      ],
    },
  ]
  res.json({"work": data})
})

app.get("/skills", (req, res) => {
  const data = [
    {label: "Html", value: 80},
    {label: "Css", value: 80},
    {label: "Javascript", value: 80},
    {label: "Angular", value: 80},
    {label: "React", value: 60},
    {label: "Node Js", value: 70},
    {label: "Agile Methodology", value: 90},
    {label: "OpenLayers", value: 50},
    {label: "Azure Devops", value: 50},
    {label: "Google Cloud/GCP", value: 50},
    {label: "Sonarqube", value: 60},
    {label: "Scrum", value: 90},
    {label: "PHP", value: 80},
    {label: "Mysql", value: 80},
    {label: "Wordpress", value: 70},
    {label: "Git", value: 70},
    {label: "JQuery", value: 0},
  ]
  res.json({"skills": data})
})

app.get("/services", (req, res) => {
  const data = [
    { 
        title: 'PHP', 
        describe: 'can do web application / rest api development with php with framework or from core',
        icon: "language",
        color: "blue",
        img: 'https://www.thedroptimes.com/sites/thedroptimes.com/files/2024-04/php-card.png'
     },
    { 
        title: 'MySQL', 
        describe: 'can do database creation, update, indexing, views, triggers',
        icon: "database",
        color: "violet",
        img: 'https://www.ropstam.com/wp-content/uploads/2023/12/Why-Use-MySQL-for-Database-Management.jpg'
     },
     {
      title: 'UI Design',
      describe: 'can do website design from scratch within framework or core',
      icon: 'code',
      color: "red",
      img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219162542/Become-UI-Designer-in-2023.png'
    },
    {
        title: 'UI Development',
        describe: 'can do website development from scratch within framework or core',
        icon: 'code',
        color: "red",
        img: 'https://www.wavemaker.com/wp-content/uploads/2024/01/Blog-187.png'
    },
    { 
        title: 'DevOps CI/CD', 
        describe: 'can do application integration to deployment with jira, jenkins, azure, google cloud etc.',
        icon: "cloud-upload",
        color: "green",
        img: 'https://www.impactqa.com/wp-content/uploads/2022/05/Boast-the-potential-of-DevOps-with-CICD.jpg'
     },
    { 
        title: 'Team Lead', 
        describe: 'can handled team of 4-6 members following reporting, performance, meeting etc.',
        icon: "user",
        color: "yellow",
        img: 'https://img.freepik.com/premium-vector/team-leader-concept-leadership-concept-with-business-people-characters_165932-561.jpg'
     }
  ]
  res.json({"services": data})
})

async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */

  const client = new MongoClient(process.env.DB_URI);

  try {
      // Connect to the MongoDB cluster
      await client.connect();
      console.log("Connected to MongoDB");

      const db = client.db(process.env.DB_NAME);  // Access your database
      const collection = db.collection(process.env.DB_COLLECTION_SKILLS);  // Access a collection

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);

app.listen(process.env.port, () => console.log("server started on port "+process.env.port))