// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/SNFSwarmOps/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications of the SwarmOps project and its members.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/SNFSwarmOps/publications/";
          },
        },{id: "nav-tools-amp-datasets",
          title: "tools &amp; datasets",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/SNFSwarmOps/repositories/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/SNFSwarmOps/news/";
          },
        },{id: "nav-team",
          title: "team",
          description: "Meet the project team",
          section: "Navigation",
          handler: () => {
            window.location.href = "/SNFSwarmOps/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/SNFSwarmOps/books/the_godfather.html";
            },},{id: "news-the-call-for-the-second-edition-of-the-uav-testing-competition-is-open-now",
          title: 'The call for the Second edition of the UAV Testing Competition is open...',
          description: "",
          section: "News",},{id: "news-swarmops-snsf-219732-has-started-project-funding-duration-2025-2029",
          title: 'SwarmOps (SNSF 219732) has started (Project funding, duration 2025–2029).',
          description: "",
          section: "News",},{id: "news-swarmops-project-accepted-by-snsf",
          title: 'SwarmOps project accepted by SNSF',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/SNFSwarmOps/news/2025-12-01-project-accepted.html";
            },},{id: "news-new-team-members-joined-swarmops",
          title: 'New team members joined SwarmOps',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/SNFSwarmOps/news/2026-02-01-team-expanded.html";
            },},{id: "news-participation-in-icst-amp-sbft-uav-testing-competitions",
          title: 'Participation in ICST &amp;amp; SBFT UAV Testing Competitions',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/SNFSwarmOps/news/2026-03-15-competitions.html";
            },},{id: "news-swarmops-project-officially-started",
          title: 'SwarmOps project officially started',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/SNFSwarmOps/news/2026-04-01-project-started.html";
            },},{id: "projects-swarmops-snsf-219732",
          title: 'SwarmOps (SNSF 219732)',
          description: "Human-sensing based MLOps for Collaborative Cyber-Physical Systems",
          section: "Projects",handler: () => {
              window.location.href = "/SNFSwarmOps/projects/swarmops.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6B%68%61%74%69%72%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/skhatiri", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0354-9747", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-wOYP9AAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/skhatiri", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
