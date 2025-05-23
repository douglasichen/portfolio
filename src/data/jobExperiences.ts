import { JobExperience } from "../types/experience";

// Sample job data with additional details
const jobExperiences: JobExperience[] = [
    {
        id: 1,
        timeRange: "2024 — PRESENT",
        title: "Software Engineer Intern",
        company: "InsideDesk",
        description:
            "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        skills: ["AWS", "TypeScript", "Python", "Web Scraping"],
        details: {
            achievements: [
                "Led accessibility initiative that increased WCAG compliance from 76% to 98% across the platform",
                "Developed reusable component library with built-in accessibility features used by 40+ engineers",
                "Implemented automated accessibility testing in CI/CD pipeline, reducing accessibility bugs by 64%",
            ],
            projects: [
                "Component System Redesign - Led frontend architecture for accessibility-first design system",
                "Keyboard Navigation Overhaul - Improved keyboard navigation throughout the application",
            ],
            technologies: [
                "React",
                "TypeScript",
                "Jest",
                "React Testing Library",
                "Storybook",
                "Figma",
                "NVDA",
                "axe DevTools",
            ],
        },
    },
    {
        id: 2,
        timeRange: "2022 — 2024",
        title: "Frontend Engineer",
        company: "Stripe",
        description:
            "Developed and maintained core payment interface components, focusing on creating seamless user experiences. Collaborated with the design team to implement responsive UI elements that maintained accessibility standards while providing an intuitive checkout flow.",
        skills: ["React", "TypeScript", "Jest", "CSS-in-JS"],
        details: {
            achievements: [
                "Reduced checkout form abandonment rate by 18% through UX improvements",
                "Optimized rendering performance with 42% reduction in load time for payment components",
                "Built internationalization system supporting 28 languages and 45 currencies",
            ],
            projects: [
                "Stripe Elements Redesign - Modernized payment form UI components",
                "Payment Flow Optimization - Streamlined checkout experience",
            ],
            technologies: [
                "React",
                "TypeScript",
                "Jest",
                "Emotion",
                "Webpack",
                "Redux",
                "GraphQL",
                "Cypress",
            ],
        },
    },
    {
        id: 3,
        timeRange: "2020 — 2022",
        title: "UI Developer",
        company: "Shopify",
        description:
            "Built e-commerce interface components for merchant storefronts. Worked with product managers to translate business requirements into technical solutions that emphasized usability and conversion optimization. Contributed to the company's design system.",
        skills: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
        details: {
            achievements: [
                "Created 15+ reusable Vue components now used across 10,000+ merchant stores",
                "Improved mobile conversion rates by 22% through responsive design improvements",
                "Reduced bundle size by 37% through code splitting and lazy loading implementation",
            ],
            projects: [
                "Merchant Dashboard Revamp - Redesigned analytics dashboard for better UX",
                "Mobile Checkout Optimization - Improved mobile experience for higher conversions",
            ],
            technologies: [
                "Vue.js",
                "JavaScript",
                "SCSS",
                "Webpack",
                "Vuex",
                "Jest",
                "Polaris Design System",
            ],
        },
    },
    {
        id: 4,
        timeRange: "2018 — 2020",
        title: "Junior Web Developer",
        company: "Digital Ocean",
        description:
            "Created responsive web applications for cloud hosting platform. Participated in code reviews and agile development processes while learning modern frontend technologies. Contributed to the documentation portal and developer-facing tools.",
        skills: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        details: {
            achievements: [
                "Optimized documentation portal, increasing page load speed by 40%",
                "Built interactive pricing calculator used by 30,000+ customers monthly",
                "Contributed to open-source projects with 5 pull requests merged into production",
            ],
            projects: [
                "Documentation Platform Redesign - Improved readability and search functionality",
                "Infrastructure Calculator - Created interactive cost estimation tool",
            ],
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "jQuery",
                "LESS",
                "Gulp",
                "Git",
                "Jira",
            ],
        },
    },
];

export default jobExperiences;
