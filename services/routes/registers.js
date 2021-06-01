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
      startdate:"09/2020",
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
      startdate:"02/2021",
      enddate:"05/2021",
      tasks:["Teaching Assistant (Principles of statistical modeling) – Involved in creating, evaluating assignments, and conducting tutorials."]
    },
	{
      title:"Research Assistant",
      type:"Student Job",
      company:"Jacobs University Bremen",
      location:"Bremen, Germany",
      startdate:"07/2020",
      enddate:"09/2020",
      tasks:["This project in Data Engineering builds on research projects on the stability of electricity grids, in particular the joint research initiative ConDyNet funded by BMBF http://www.condynet.de",
	"Time series analysis of the wind infeed on the phase angle of the power stations.",
	"Forecast the phase angle (direction of power flow) between two power stations using LSTM."]
    },
    {
      title:"Sr. Software Developer",
      type:"Full-Time",
      company:"Infosys Limited",
      location:"Bengaluru, India",
      startdate:"06/2018",
      enddate:"09/2019",
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
      startdate:"06/2017",
      enddate:"05/2018",
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
      startdate:"12/2016",
      enddate:"05/2017",
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
		"Data Security",
		"Image Processing"],
      startdate:"09/2019",
      enddate:"Present",
      location:"Bremen, Germany"
    },
    {
      school:"Visvesvaraya Technological University",
      degree:"Bachelors of Engineering in Electrical and Electronics",
      subjects:["Programming in C++", "Eletrical Power Generation", "Transmission and Distribution"],
      startdate:"07/2012",
      enddate:"07/2016",
      location:"Bengaluru, India"
    }
  ],
  skills2:[
    {name:"Concepts",info:"Object Oriented Programming, Business Intelligence",level:"" },
    {name:"Data Science", info:"Machine Learning, Deep Learning, Scikit-learn, TesnsorFlow, Keras",level:"" },
    {name:"Data Analysis", info:"Numpy, Pandas, Matplotlib, Seaborn, dplyr",level:"" },
    {name:"Cloud services",info:"Microsoft Azure, AWS, Heroku",level:"" }
  ],
  skills1:[
    {name:"Programming Laungages", info:"Python, R, PySpark, Scala, NodeJS, HTML, CSS",level:"" },
    {name:"Relational Databases",info:"MySQL, PostgreSQL, DB2, Oracle, MS SQL server",level:"" },
    {name:"Non-Relational Databases",info:"Elasticsearch, MongoDB, Azure Cosmos DB",level:"" },
    {name:"Data Engineering",info:"Spark, Hadoop, Informatica, Ab Initio, Azure Data Factory",level:"" }
  ],
  courses:[
    {
      name:"Microsoft Certified: Azure Data Fundamentals",
      instructor:"",
      institute:"Microsoft",
      topics:["Azure data fundamentals provides an overview of how to work with data in the cloud and the concepts of relational and non-relational data, and different types of data workloads such as transactional or analytical."],
      startdate:"",
      enddate:"05/2021",
      location:"Online",
    },
    {
      name:"Microsoft Certified: Azure Fundamentals",
      instructor:"",
      institute:"Microsoft",
      topics:["Azure Fundamentals exam is an opportunity to prove knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support."],
      startdate:"",
      enddate:"04/2021",
      location:"Online",
    },
    {
      name:"Sequences, Time Series and Prediction",
      instructor:"",
      institute:"Coursera",
      topics:["Solve time series and forecasting problems in TensorFlow"],
      startdate:"",
      enddate:"03/2021",
      location:"Online",
    }
  ],
  projects:[
    {
      name:"Analysis and forecast of automatic frequency restoration reserve market",
      team:"",
      technology:"Master Thesis",
      topics:["A data driven approach to assess the impact of integration of renewable energy to the Germany’s power grid and predict the trend breaks in the aFRR time series data and comparing various ML models."],
      startdate:"02/2021",
      enddate:"07/2021",
      location:"Online",
    },
  ],
  awards:[
    {
      name:"'Insta' award for outstanding contributions to the cards portal project (Infosys Limited)",
      year:"2018",
    },
    {
      name:"'Game Changers' award for remarkable accomplishments in CCAR-A Project (Infosys Limited)",
      year:"2018",
    },
    {
      name:"'Best Debutant' award for my contribution to the company (Infosys Limited)",
      year:"2017",
    }
  ],

  contacts:[
    
    {url:'mailto:narendra.hosamani@gmail.com', icon:'mdi-gmail'},
        {url:'https://www.linkedin.com/in/narendra1508/', icon:'mdi-linkedin'},
        {url:'https://github.com/Narendra1508', icon:'mdi-github'},
        
  ]
}

router.get('/', async (req, res) => {
 
  res.send(response);
});


module.exports = router;