import doggyproj from "../../assets/doggyproj.jpeg";
import fixyproj from "../../assets/fixyproj.jpeg";

const ProjectCardData = [
  {
    imgsrc: fixyproj,
    title: "FIXY App",
    text: "The application's purpose is to facilitate contracting and offering home maintenance services. It has a mandatory review system in which the client and the professional who provided the service must score the other part. It is compulsory since it gives confidence when choosing which professional to hire or whether or not to accept a job according to the client's score.",
    view: "https://fixy-showcase.vercel.app/",
  },
  {
    imgsrc: doggyproj,
    title: "SPA DoggyDog`s ",
    text: "DoggyDog's App is a digital encyclopedia of dog breeds that has a range of features: Access through a Landing Page, search by dog breed in a controlled search bar, pagination, details of each dog breed, filter by: Temperaments or origin of the breed (either from API or created). Sort by: Alphabetical order or according to their Weight Create or add a new breed using a controlled form For this page use the following technologies: React, Redux, Express, NodeJS, Sequelize, Postgres, HTML & CSS",
    view: "https://doggy-dogs-app.vercel.app/",
  },
];

export default ProjectCardData;
