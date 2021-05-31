const express = require('express');
const router = express.Router();


var response = {
  firstname:"Narendrakumar",
  cv:"https://drive.google.com/file/d/1OqHUe8-LwnzuerHcOVy6ZRoW6IUp6uD_/view?usp=sharing",
  lastname:"Hosamani",
  img:"C:/Users/mangadsa/Documents/myapp/myappbe/shaan.jpg",
  title:"Intern in the field of RF and SATCOM Systems at Fraunhofer IIS",
  currentlocation:"Erlangen, Bavaria, Germany",
  about:`MSc in Data Engineering Graduate with 3+ years of professional experience in Python, SQL, Hadoop, data modeling and scalable ETL solutions. Currently working as data researcher at Munich Re focused on providing data analytics solution for the cyber insurance using R, Power BI, and Azure storage and compute services. Data science practitioner with an expertise on data analysis and implementation of machine learning models for prediction and forecasting.`,
  expereince:[
    {
      title:"Intern Data Researcher",
      type:"Internship",
      company:"Munich RE",
      location:"Munich, Germany",
      startdate:"15.09.2020",
      enddate:"Present",
      tasks:["Built data pipelines for standardization of cyber insurance data using internal ETL tool, R, Azure SQL, azure data lake and REST API.",
	"Automated data preparation steps using R scripts that drive the pricing/risk assessment models, which previously required manual intervention, now saving 90% of the time approximately.",
	"Designed data model and created reports in Power BI with relevant KPIs for the data availability and benchmarking analysis of cyber risks and claims, which has helped underwriters in their business.",
	"Enforced row level security at database level to utilize the existing framework to deliver services to external clients while abiding to GDPR data privacy rules.",
	"Co-ordinating with business units and clients to gather requirements and deliver analytical services."]
    },
    {
      title:"Teaching Assitant",
      type:"Student Job",
      company:"Jacobs University Bremen",
      location:"Bremen, Germany",
      startdate:"01.02.2021",
      enddate:"31.05.2020",
      tasks:["Teaching Assistant (Principles of statistical modeling) – Involved in creating, evaluating assignments, and conducting tutorials."]
    },
	{
      title:"Research Assistant",
      type:"Student Job",
      company:"Jacobs University Bremen",
      location:"Bremen, Germany",
      startdate:"01.07.2020",
      enddate:"01.09.2020",
      tasks:["This project in Data Engineering builds on research projects on the stability of electricity grids, in particular the joint research initiative ConDyNet funded by BMBF http://www.condynet.de",
	"Time series analysis of the wind infeed on the phase angle of the power stations.",
	"Forecast the phase angle (direction of power flow) between two power stations using LSTM."]
    },
    {
      title:"Sr. Software Developer",
      type:"Full-Time",
      company:"Infosys Limited",
      location:"Bengaluru, India",
      startdate:"31.05.2018",
      enddate:"10.09.2019",
      tasks:["Developed monthly batch processing services on hadoop data lake to provision the data for reporting of consumer credit card acquisition and profitability using Informatica.",
	"Improved the performance of unit testing of ETL jobs by 40%, utilizing hive queries over SQL queries.",
	"Organizing meetings with clients to discuss functional, non-functional business requirements and translating them into ETL design document.",
	"Onboarding new members to the team and conducting training sessions about agile methods, kanban, data lake architecture and OLAP cube."
	]
    },
    {
      title:"Software Developer",
      type:"Full-Time",
      company:"Infosys Limited",
      location:"Bengaluru, India",
      startdate:"01.06.2017",
      enddate:"31.05.2018",
      tasks:["Successfully implemented the automated distribution on hadoop data lake and data delivery to the SAS server with data lineage and control validations as required by the CCAR-A (Comprehensive Capital Analysis and Review -Annual) models.",
	"Eliminated the earlier manual process for monthly data extraction by creating ingestion framework for all the data sources to bring into data lake using Ab Initio, bash scripts and CA7 job scheduler.",
	"The standardized generic design is sustainable and can be extended to any new application to be built in the date lake. This reduced the data governance cost for client by 60%.",
	"This project resulted in revenue from the client to go up by 35 folds - from 10K to 375K in 6 months."]
    },
    {
      title:"Software Trainee",
      type:"Trainee",
      company:"Infosys Limited",
      location:"Mysuru, India",
      startdate:"26.12.2016",
      enddate:"31.05.2017",
      tasks:["Fundamentals of programming using Python, OOPs, Data Structures.",
	"Business Intelligence concepts, DBMS, Informatica and IBM Cognos."]
    },
  ],
  education:[
    {
      school:"Jacobs University Bremen",
      degree:"Master of Science in Data Engineering",
      subjects:["Data Analytics",
		"Data Mining",
		"Machine Learning",
		"Big Databases and Cloud Services",
		"Data Acquisition and Sensor network",
		"Principals of Statistical Modeling",
		"Probability and Statistics",
		"Linear Algebra",
		"Data Security"
		"Image Processing"],
      startdate:"15.09.2019",
      enddate:"30.11.2021",
      location:"Jena, Germany"
    },
    {
      school:"Visvesvaraya Technological University",
      degree:"Bachelors of Engineering in Electrical and Electronics",
      subjects:["Programming in C++", "Eletrical Power Generation", "Transmission and Distribution"],
      startdate:"01.08.2012",
      enddate:"01.07.2016",
      location:"Bengaluru, India"
    }
  ],
  skills2:[
    {name:"Concepts",info:"Object Oriented Programming, Data Structures & Algorithms",level:"" },
    {name:"Frontend Technologies",info:"VueJS, ReactJS, HTML, CSS",level:"" },
    {name:"Designing Tool",info:"Photoshop",level:"" },
    
  ],
  skills1:[
    {name:"Programming Laungages", info:"Python, R, PySpark, Scala, NodeJS, HTML, CSS",level:"" },
    {name:"Databases",info:"MySQL, PostgreSQL, NOSQL (Elasticsearch and MongoDB)",level:"" },
    {name:"Data Science", info:"Scikit-learn, TesnsorFlow, Keras, Deep Learning, Machine Learning",level:"" },
    {name:"Data Analysis", info:"Numpy, Pandas, Matplotlib, Seaborn",level:"" },
	{name:"Data Engineering", info:"Spark, Hadoop, Azure, Informatica, Ab Initio, Power BI",level:"" },
    
  ],
  courses:[
    {
      name:"Machine Learning A-Z™: Hands-On Python In Data Science",
      instructor:"Kirill Eremenko & Hadelin de Ponteves",
      institute:"Udemy",
      topics:["Data Preprocessing, Regression, Classification, Clustering, NLP, Neural Networks",],
      startdate:"09.10.2019",
      enddate:"30.11.2021",
      location:"Online",
    },
    {
      name:"Complete Guide to Image Processing with MATLAB",
      instructor:"Fawaz Sammani",
      institute:"Udemy",
      topics:["Theory of Image Processing, apply it in MATLAB, and design a GUI to interface it!"],
      startdate:"09.10.2019",
      enddate:"30.11.2021",
      location:"Online",
    },
  ],
  projects:[
    {
      name:"Circuit Design for Band Gap Reference and Low Drop Regulator in Cadence Virtuosso",
      team:"Kirill Eremenko & Hadelin de Ponteves",
      technology:"Cadence Virtuosso",
      topics:["Designing BGR with a target output voltage of 1.2V with a maximum variation of 75mV as specs with Monte Caro Simulation. For LDO, targetting of 5 mA as load current for MPHY driver."],
      startdate:"09.10.2019",
      enddate:"30.11.2021",
      location:"Online",
    },
  ],
  awards:[
    {
      name:"Insta Award for Continuous and Outstanding Contribution to the Team (Infosys Limited)",
      year:"2019",
    },
    {
      name:"“Game Changers” award for remarkable accomplishments in CCAR-A Project (Infosys Limited).",
      year:"2018",
    },
    {
      name:"Best All Rounder Award/Best Outgoing Student in High School",
      year:"2012",
    },
    {
      name:"Elected as Head Boy of School and President of the Science Club",
      year:"2010-2012",
    },
  ],
  activities:[
    {
      name:"Imparting computer-based knowledge to underprivileged students.",
    },
    {
      name:"Organized various cultural, technical events through out School and College",
    },
    {
      name:"Skilled Graphics Designer.",
    },
    {
      name:"Athletic (Long Distance Runner), Basketball Player, Movie Making, Painting",
    },
  ],
  contacts:[
    
    {url:'mailto:shanmukha.krish123@gmail.com', icon:'mdi-gmail'},
        {url:'https://www.linkedin.com/in/shanmukha-m-s/', icon:'mdi-linkedin'},
        {url:'https://github.com/shanmukhams', icon:'mdi-github'},
        
  ]
}

router.get('/', async (req, res) => {
 
  res.send(response);
});


module.exports = router;