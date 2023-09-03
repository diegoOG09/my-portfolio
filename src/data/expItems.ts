import type { expItem } from "../types/types";

const expItems : expItem[] = [
  {
    title: 'Algorithmics Metepec - Sample Classes Website',
    position: 'Web Developer',
    description: [
      "Implemented a website in which parents can schedule sample classes to know the school, courses and teachers.",
      "The website collect info like kid's name, day and hour, parent's contact, etc. And save the info in the Firebase database for later use in an administration panel.",
      "The site was built in VueJs, a javascript framework."
    ],
    location: "Metepec, Estado de Mexico",
    date: "2023"
  },
  {
    title: 'Algorithmics Metepec - Landing Page',
    position: 'Web Developer',
    description: [
      "Built a landing page that shows the available courses and the target age range, the content of courses and the school location. It also redirects to the website of the sample classes.",
      "Landing page was built in AstroJs, a modern javascript framework.",
    ],
    location: "Metepec, Estado de Mexico",
    date: "2023"
  },
  {
    title: 'Codeando Mexico',
    position: 'Fullstack Developer',
    description: [
      "Development of a section to post job offers.",
      "Implemented a CRUD for create, read, update and delete job offers published by the users.",
      "Implemented a views for showing the job offers, using CSS preprocessors like SASS, also HTML and Javascript."
    ],
    location: "Metepec, Estado de Mexico",
    date: "2023"
  }
]

export default expItems;