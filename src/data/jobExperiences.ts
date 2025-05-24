import { JobExperience } from "../types/experience";

// Sample job data with additional details
const jobExperiences: JobExperience[] = [
    {
        id: 1,
        timeRange: "JAN — AUG 2025",
        title: "Software Engineer Intern",
        company: "InsideDesk",
        description:
            "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        skills: ["AWS", "TypeScript", "Python", "Web Scraping"],
        details: {
            details: [
                {
                    title: "Key Achievements",
                    points: [
                        "Led accessibility initiative that increased <a href='https://www.w3.org/WAI/WCAG21/quickref/' target='_blank' rel='noopener noreferrer'>WCAG compliance</a> from 76% to 98% across the platform",
                        "Developed reusable component library with built-in accessibility features used by 40+ engineers",
                        "Implemented automated <a href='https://github.com/dequelabs/axe-core' target='_blank' rel='noopener noreferrer'>accessibility testing</a> in CI/CD pipeline, reducing accessibility bugs by 64%",
                    ],
                },
                {
                    title: "Projects",
                    points: [
                        "Component System Redesign - Led frontend architecture for accessibility-first design system",
                        "Keyboard Navigation Overhaul - Improved keyboard navigation throughout the application",
                    ],
                },
                {
                    title: "Technologies",
                    points: [
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
            ],
            media: [
                {
                    type: "youtube",
                    url: "https://www.youtube.com/watch?v=G9smB9Cr1bI&ab_channel=RNSFDev",
                    title: "Component Library Demo",
                    description:
                        "Demonstration of the accessibility-first component library we built",
                },
                // {
                //     type: "image",
                //     url: "https://cdn.pixabay.com/photo/2016/06/20/13/16/greengrocers-1468809_1280.jpg",
                //     title: "Dashboard Interface",
                //     description:
                //         "Screenshot of the improved dashboard with accessibility features",
                // },
            ],
        },
    },
    {
        id: 2,
        timeRange: "MAY — AUG 2024",
        title: "AI Software Engineer Intern",
        company: "Exchange Solutions",
        description:
            "Independently built an AI agent that autonomously generates React Native app prototypes in under 30 minutes using a human-in-the-loop LLM system.",
        skills: ["AWS", "Node", "Next", "React Native"],
        details: {
            details: [
                // {
                //     title: "Key Achievements",
                //     points: [
                //         "Reduced checkout form abandonment rate by 18% through UX improvements",
                //         "Optimized rendering performance with 42% reduction in load time for payment components",
                //         "Built internationalization system supporting 28 languages and 45 currencies",
                //     ]
                // },
                // {
                //     title: "Projects",
                //     points: [
                //         "Stripe Elements Redesign - Modernized payment form UI components",
                //         "Payment Flow Optimization - Streamlined checkout experience",
                //     ]
                // }
            ],
            media: [
                {
                    title: "Demo",
                    type: "youtube",
                    url: "https://youtu.be/mMaEmro4iEw",
                },
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
            details: [
                {
                    title: "Key Achievements",
                    points: [
                        "Created 15+ reusable Vue components now used across 10,000+ merchant stores",
                        "Improved mobile conversion rates by 22% through responsive design improvements",
                        "Reduced bundle size by 37% through code splitting and lazy loading implementation",
                    ],
                },
                {
                    title: "Projects",
                    points: [
                        "Merchant Dashboard Revamp - Redesigned analytics dashboard for better UX",
                        "Mobile Checkout Optimization - Improved mobile experience for higher conversions",
                    ],
                },
                {
                    title: "Technologies",
                    points: [
                        "Vue.js",
                        "JavaScript",
                        "SCSS",
                        "Webpack",
                        "Vuex",
                        "Jest",
                        "Polaris Design System",
                    ],
                },
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
            details: [
                {
                    title: "Key Achievements",
                    points: [
                        "Optimized documentation portal, increasing page load speed by 40%",
                        "Built interactive pricing calculator used by 30,000+ customers monthly",
                        "Contributed to open-source projects with 5 pull requests merged into production",
                    ],
                },
                {
                    title: "Projects",
                    points: [
                        "Documentation Platform Redesign - Improved readability and search functionality",
                        "Infrastructure Calculator - Created interactive cost estimation tool",
                    ],
                },
                {
                    title: "Technologies",
                    points: [
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
            ],
        },
    },
];

export default jobExperiences;
