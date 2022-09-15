import doggyproj from "../../assets/doggyproj.jpeg";
import fixyproj from "../../assets/fixyproj.jpeg";
import picPicker from "../../assets/picPicker.jpg";

const ProjectCardData = [
  {
    imgsrc: picPicker,
    title: "PicPicker App",
    text: "PicPicker allows us to search and download on our mobile devices all kinds of images in high quality, without watermarks and without copyright, with just one touch! I have used the Pexels Images API for its creation, we can also access the profile of the photographer of said image and see more of their creations through a browser that opens in the same App",
    src: "https://expo.dev/artifacts/9eb8d1a1-1ca6-4e87-99c2-0e13426317aa",
    view: "https://www.linkedin.com/feed/update/urn:li:activity:6976185210136596480/",
  },
  {
    imgsrc: fixyproj,
    title: "FIXY App",
    text: "The application's purpose is to facilitate contracting and offering home maintenance services. It has a mandatory review system in which the client and the professional who provided the service must score the other part. It is compulsory since it gives confidence when choosing which professional to hire or whether or not to accept a job according to the client's score.",
    src: "https://fixy-showcase.vercel.app/",
    view: "https://www.linkedin.com/feed/update/urn:li:activity:6965312492080103424/",
  },
  {
    imgsrc: doggyproj,
    title: "SPA DoggyDog`s",
    text: "DoggyDog's App is a digital encyclopedia of dog breeds that has a range of features: Access through a Landing Page, search by dog breed in a controlled search bar, pagination, details of each dog breed, filter by: Temperaments or origin of the breed (either from API or created). Sort by: Alphabetical order or according to their Weight Create or add a new breed using a controlled form For this page use the following technologies: React, Redux, Express, NodeJS, Sequelize, Postgres, HTML & CSS",
    src: "https://doggy-dogs-app.vercel.app/",
    view: "https://www.linkedin.com/feed/update/urn:li:activity:6952280728449470464/",
  },
];

export default ProjectCardData;
