import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.80ce4722.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$d = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;500;600;700;900&display=swap" rel="stylesheet">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		<div class="pattern-container">
			<div class="light-effect">
				<div class="light-beam"></div>
			</div>
			<div class="background">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
		 	</div>
		</div>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/xdieg/my-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$c = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="container astro-5BLMO7YK">
  <nav class="astro-5BLMO7YK">
    <a target="_blank" href="/docs/resume.pdf" class="astro-5BLMO7YK">Download CV <span class="arrow astro-5BLMO7YK">↯</span></a>
  </nav>
</header>`;
}, "C:/Users/xdieg/my-portfolio/src/components/Navbar.astro", void 0);

const $$Astro$b = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="container astro-IVDEV4KK">
  <h1 class="astro-IVDEV4KK">
    <span class="major astro-IVDEV4KK">&lt;</span>
    Diego Salinas
    <span class="slash astro-IVDEV4KK">&sol;</span>
    <span class="minus astro-IVDEV4KK">&gt;</span>
  </h1>
  <div class="meta-info astro-IVDEV4KK">
    <p class="rol astro-IVDEV4KK">Frontend dev</p>
    <span class="status astro-IVDEV4KK">Available to hire</span>
  </div>

  <div class="personal-info astro-IVDEV4KK">
    <div class="icons astro-IVDEV4KK">
      <div class="contact astro-IVDEV4KK">
        <p class="astro-IVDEV4KK">About me</p>
        <div class="contact-icons astro-IVDEV4KK">
          <i class="fa-brands fa-github-alt astro-IVDEV4KK"></i>
          <i class="fa-brands fa-linkedin-in astro-IVDEV4KK"></i>
        </div>
      </div>
      <div class="stack astro-IVDEV4KK">
        <p class="astro-IVDEV4KK">Working with...</p>
        <div class="stack-icons astro-IVDEV4KK">
          <img src="/assets/icons/javascript.svg" alt="Javascript icon" class="astro-IVDEV4KK">
          <img src="/assets/icons/vue.svg" alt="VueJs icon" class="astro-IVDEV4KK">
          <img src="/assets/icons/css.svg" alt="CSS icon" class="astro-IVDEV4KK">
          <img src="/assets/icons/html.svg" alt="HTML icon" class="astro-IVDEV4KK">
          <img src="/assets/icons/sass.svg" alt="SASS icon" class="astro-IVDEV4KK">
          <img src="/assets/icons/firebase.svg" alt="Firebase icon" class="astro-IVDEV4KK">
          <img src="/assets/icons/sql.svg" alt="SQL icon" class="astro-IVDEV4KK">
          <img src="/assets/icons/python.svg" alt="Python icon" class="astro-IVDEV4KK">
        </div>
      </div>
    </div>
    <div class="info astro-IVDEV4KK">
      <h2 class="astro-IVDEV4KK">Who am I?</h2>
      <div class="info-text astro-IVDEV4KK">
        <p class="astro-IVDEV4KK">
          My name is Diego. I am a 24yo programmer from México who likes to develop frontend projects like 💻 landing pages, functional websites and 🎨 web layouts/web design. I like frontend and backend but I prefer frontend. 
        </p>
        <p class="astro-IVDEV4KK">
          I'm a programming ⌨️ and videogames 🎮 geek. I like to enjoy 🐈 my pets, 🫂 my family and 🌮 good food.
        </p>
      </div>
    </div>
  </div>
  <div class="arrow-down-container astro-IVDEV4KK">
    <a href="#projects" class="astro-IVDEV4KK">
      <img id="arrow-down" src="/assets/icons/arrow-down.svg" alt="Arrow down icon" class="astro-IVDEV4KK">
    </a>
  </div>
</main>`;
}, "C:/Users/xdieg/my-portfolio/src/components/Main.astro", void 0);

const $$Astro$a = createAstro();
const $$ProjectsView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ProjectsView;
  return renderTemplate`${maybeRenderHead()}<div class="projects astro-EOP3QB2Z">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/xdieg/my-portfolio/src/components/ProjectsView.astro", void 0);

const $$Astro$9 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { image, title, description, repoUrl, websiteUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project-card astro-MSPUYIFQ" id="project">
  <div class="project-img astro-MSPUYIFQ">
    <img${addAttribute(image, "src")} alt="Project image" class="astro-MSPUYIFQ">
  </div>
  <div class="card-info astro-MSPUYIFQ">
    <h3 class="astro-MSPUYIFQ">${title}</h3>
    <p class="astro-MSPUYIFQ">${description}</p>
    <div class="links astro-MSPUYIFQ">
      <a target="_blank" class="code button astro-MSPUYIFQ"${addAttribute(repoUrl, "href")}><i class="fa-solid fa-code astro-MSPUYIFQ"></i>Code</a>
      <a target="_blank" class="website button astro-MSPUYIFQ"${addAttribute(websiteUrl, "href")}><i class="fa-solid fa-right-to-bracket astro-MSPUYIFQ"></i>Website</a>
    </div>
  </div>
</div>`;
}, "C:/Users/xdieg/my-portfolio/src/components/ProjectCard.astro", void 0);

const projectsItems = [
  {
    image: "/assets/screenshots/algo-landing-page.png",
    title: "Algorithmics Landing Page",
    description: "Landing page for Algorithmics. Users will find information about the school and available courses.",
    repoUrl: "https://github.com/diegoOG09/algorithmics-landing-web",
    websiteUrl: "https://algorithmics-landing-page.netlify.app"
  },
  {
    image: "/assets/screenshots/algo-lessons-website.png",
    title: "Algorithmics Sample Classes",
    description: "Algorithmics website to schedule sample classes. The child(')s parents can schedule a sample class to meet the teachers and the course.",
    repoUrl: "https://github.com/diegoOG09/algorithmics-landing-page",
    websiteUrl: "https://algorithmics-sample-classes.netlify.app"
  },
  {
    image: "/assets/screenshots/analyze-this.png",
    title: "Analyze This",
    description: "Web tool for analyze text, number of words, palindromes, etc. ",
    repoUrl: "https://github.com/diegoOG09/analyze-this",
    websiteUrl: "https://analyze-this.netlify.app/"
  },
  {
    image: "/assets/screenshots/viajes-bernal.png",
    title: "Viajes Bernal",
    description: "Travel website where users can view upcoming and past trips. It also has an administration panel for those administrators who are logged in. They can create, delete and modify trips.",
    repoUrl: "https://github.com/diegoOG09/travels",
    websiteUrl: "https://viajes-bernal.netlify.app/"
  }
];

const $$Astro$8 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section class="container astro-AMNG4ZVP" id="projects">
  <div class="section-title astro-AMNG4ZVP">
    <div class="neon-circle astro-AMNG4ZVP">
      <div class="neon-beam astro-AMNG4ZVP"></div>
      <img id="rocket" src="/assets/icons/rocket-2.svg" alt="" class="astro-AMNG4ZVP">
    </div>
  </div>
  <div class="title astro-AMNG4ZVP">
    <h2 class="astro-AMNG4ZVP">Projects</h2>
    <p class="astro-AMNG4ZVP">In some projects I can't share the code because of privacy policies.</p>
  </div>
  <div class="light-effect astro-AMNG4ZVP">
    <div class="light-beam astro-AMNG4ZVP"></div>
  </div>
  ${renderComponent($$result, "ProjectsView", $$ProjectsView, { "class": "astro-AMNG4ZVP" }, { "default": ($$result2) => renderTemplate`${projectsItems.map((item) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...item, "class": "astro-AMNG4ZVP" })}`)}` })}
  <div class="arrow-down-container astro-AMNG4ZVP">
    <a href="#experience" class="astro-AMNG4ZVP">
      <img id="arrow-down" src="/assets/icons/arrow-down.svg" alt="Arrow down icon" class="astro-AMNG4ZVP">
    </a>
  </div>
</section>`;
}, "C:/Users/xdieg/my-portfolio/src/components/Projects.astro", void 0);

const $$Astro$7 = createAstro();
const $$ExperienceView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExperienceView;
  return renderTemplate`${maybeRenderHead()}<div class="experience astro-HFEP2CFT">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/xdieg/my-portfolio/src/components/ExperienceView.astro", void 0);

const $$Astro$6 = createAstro();
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, position, description, location, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="experience-card astro-P7B4WQOP">
  <div class="card-meta-info astro-P7B4WQOP">
    <div class="flex-info-left astro-P7B4WQOP">
      <h4 class="astro-P7B4WQOP">${title}</h4>
      <span class="astro-P7B4WQOP">${position}</span>
    </div>
    <div class="flex-info-right astro-P7B4WQOP">
      <span class="astro-P7B4WQOP">${location}</span>
      <span class="astro-P7B4WQOP">${date}</span>
    </div>
  </div>
  <div class="card-description astro-P7B4WQOP">
    <ul class="astro-P7B4WQOP">
      ${description.map((item) => renderTemplate`<li class="astro-P7B4WQOP">${item}</li>`)}
    </ul>
  </div>
</div>`;
}, "C:/Users/xdieg/my-portfolio/src/components/ExperienceItem.astro", void 0);

const expItems = [
  {
    title: "Algorithmics Metepec - Sample Classes Website",
    position: "Web Developer",
    description: [
      "Implemented a website in which parents can schedule sample classes to know the school, courses and teachers.",
      "The website collect info like kid's name, day and hour, parent's contact, etc. And save the info in the Firebase database for later use in an administration panel.",
      "The site was built in VueJs, a javascript framework."
    ],
    location: "Metepec, Estado de Mexico",
    date: "2023"
  },
  {
    title: "Algorithmics Metepec - Landing Page",
    position: "Web Developer",
    description: [
      "Built a landing page that shows the available courses and the target age range, the content of courses and the school location. It also redirects to the website of the sample classes.",
      "Landing page was built in AstroJs, a modern javascript framework."
    ],
    location: "Metepec, Estado de Mexico",
    date: "2023"
  },
  {
    title: "Codeando Mexico",
    position: "Fullstack Developer",
    description: [
      "Development of a section to post job offers.",
      "Implemented a CRUD for create, read, update and delete job offers published by the users.",
      "Implemented a views for showing the job offers, using CSS preprocessors like SASS, also HTML and Javascript."
    ],
    location: "Metepec, Estado de Mexico",
    date: "2023"
  }
];

const $$Astro$5 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<section class="container astro-XPQ65RYK" id="experience">
  <div class="experience-card astro-XPQ65RYK">
    <div class="exp-header astro-XPQ65RYK">
      <img src="/assets/icons/rocket-exp.svg" alt="" class="astro-XPQ65RYK">
      <h2 class="astro-XPQ65RYK">Experience</h2>
    </div>
    ${renderComponent($$result, "ExperienceView", $$ExperienceView, { "class": "astro-XPQ65RYK" }, { "default": ($$result2) => renderTemplate`${expItems.map((item) => renderTemplate`${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { ...item, "class": "astro-XPQ65RYK" })}`)}` })}
  </div>
  <div class="arrow-down-container astro-XPQ65RYK">
    <a href="#education" class="astro-XPQ65RYK">
      <img id="arrow-down" src="/assets/icons/arrow-down.svg" alt="Arrow down icon" class="astro-XPQ65RYK">
    </a>
  </div>
</section>`;
}, "C:/Users/xdieg/my-portfolio/src/components/Experience.astro", void 0);

const $$Astro$4 = createAstro();
const $$EducationView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EducationView;
  return renderTemplate`${maybeRenderHead()}<div class="education astro-2UASX6EO">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/xdieg/my-portfolio/src/components/EducationView.astro", void 0);

const $$Astro$3 = createAstro();
const $$EducationItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EducationItem;
  const { title, career, location, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="experience-card astro-GBG4VCUG">
  <div class="card-meta-info astro-GBG4VCUG">
    <div class="flex-info-left astro-GBG4VCUG">
      <h4 class="astro-GBG4VCUG">${title}</h4>
      <span class="astro-GBG4VCUG">${career}</span>
    </div>
    <div class="flex-info-right astro-GBG4VCUG">
      <span class="astro-GBG4VCUG">${location}</span>
      <span class="astro-GBG4VCUG">${date}</span>
    </div>
  </div>
</div>`;
}, "C:/Users/xdieg/my-portfolio/src/components/EducationItem.astro", void 0);

const educationItems = [
  {
    title: "Universidad Virtual del Estado de Guanjuato",
    career: "Engineering Information Technology Management",
    location: "Guanajuato,  México",
    date: "2021-2023"
  },
  {
    title: "Instituto Tecnológico de Toluca",
    career: "Computer Systems Engineering",
    location: "Metepec, Estado de México",
    date: "2017-2020"
  },
  {
    title: "Scrum Fundamentals Certified",
    career: "SCRUMstudy - Accreditation Body for Scrum and Agile",
    location: "México",
    date: "2022"
  }
];

const $$Astro$2 = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${maybeRenderHead()}<section class="container astro-2GVRK3WR" id="education">
  <div class="experience-card astro-2GVRK3WR">
    <div class="exp-header astro-2GVRK3WR">
      <img src="/assets/icons/telescope-education.svg" alt="" class="astro-2GVRK3WR">
      <h2 class="astro-2GVRK3WR">Education</h2>
    </div>
    ${renderComponent($$result, "EducationView", $$EducationView, { "class": "astro-2GVRK3WR" }, { "default": ($$result2) => renderTemplate`${educationItems.map((item) => renderTemplate`${renderComponent($$result2, "EducationItem", $$EducationItem, { ...item, "class": "astro-2GVRK3WR" })}`)}` })}
  </div>
  <div class="arrow-down-container astro-2GVRK3WR">
    <a href="#footer" class="astro-2GVRK3WR">
      <img id="arrow-down" src="/assets/icons/arrow-down.svg" alt="Arrow down icon" class="astro-2GVRK3WR">
    </a>
  </div>
</section>`;
}, "C:/Users/xdieg/my-portfolio/src/components/Education.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="container astro-SZ7XMLTE">
  <div class="footer astro-SZ7XMLTE">
    <p class="astro-SZ7XMLTE">Thanks for your time</p>
    <span class="astro-SZ7XMLTE">
      <i class="fa-solid fa-face-smile-wink astro-SZ7XMLTE"></i>
    </span>
  </div>
  <div class="up-button astro-SZ7XMLTE">
    <a href="#header" class="astro-SZ7XMLTE"><i class="fa-solid fa-chevron-up astro-SZ7XMLTE"></i></a>
  </div>
</footer>`;
}, "C:/Users/xdieg/my-portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Diego Salinas Portfolio" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Navbar", $$Navbar, {})}
	${renderComponent($$result2, "Main", $$Main, {})}
	${renderComponent($$result2, "Projects", $$Projects, {})}
	${renderComponent($$result2, "Experience", $$Experience, {})}
	${renderComponent($$result2, "Education", $$Education, {})}
	${renderComponent($$result2, "Footer", $$Footer, {})}
` })}`;
}, "C:/Users/xdieg/my-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/xdieg/my-portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
