import { JobExperience } from "../types/experience";

// Sample job data with additional details
const jobExperiences: JobExperience[] = [
    {
        id: 1,
        timeRange: "JAN — AUG 2025",
        title: "Software Engineer Intern",
        company: "InsideDesk",
        description:
            "Contributed to web scraping systems that automated the extraction of 1M+ dental claims for RCM workflows. Tackled anti-bot challenges and streamlined QA processes using Python, SQL, and AWS—while ensuring HIPAA compliance for sensitive client data.",
        skills: ["AWS", "TypeScript", "Python", "Web Scraping"],
        details: {
            details: [
                {
                    title: "Amazon Web Services",
                    points: [
                        "I had the opportunity to thoroughly learn several AWS services and apply them to large scale and practical company challenges.",
                        "Took advantage of CloudWatch to make data-driven decisions.",
                        "Configured SES and Cloudflare to send and receive emails from a Cloudflare hosted subdomain.",
                        "Used SNS to connect SES to Lambdas, routing and processing email data to a serverless redis instance hosted on ElastiCache.",
                        "Setup EC2 instance for developers to access AWS facing resources",
                        "Created easy to follow visual and written documentation to ensure low maintenance cost and frictionless adoption",
                    ]
                }
            //     {
            //         title: "Key Achievements",
            //         points: [
            //             "Led accessibility initiative that increased <a href='https://www.w3.org/WAI/WCAG21/quickref/' target='_blank' rel='noopener noreferrer'>WCAG compliance</a> from 76% to 98% across the platform",
            //             "Developed reusable component library with built-in accessibility features used by 40+ engineers",
            //             "Implemented automated <a href='https://github.com/dequelabs/axe-core' target='_blank' rel='noopener noreferrer'>accessibility testing</a> in CI/CD pipeline, reducing accessibility bugs by 64%",
            //         ],
            //     },
            //     {
            //         title: "Projects",
            //         points: [
            //             "Component System Redesign - Led frontend architecture for accessibility-first design system",
            //             "Keyboard Navigation Overhaul - Improved keyboard navigation throughout the application",
            //         ],
            //     },
            //     {
            //         title: "Technologies",
            //         points: [
            //             "React",
            //             "TypeScript",
            //             "Jest",
            //             "React Testing Library",
            //             "Storybook",
            //             "Figma",
            //             "NVDA",
            //             "axe DevTools",
            //         ],
            //     },
            ],
            media: [
                // {
                //     type: "youtube",
                //     url: "https://www.youtube.com/watch?v=G9smB9Cr1bI&ab_channel=RNSFDev",
                //     title: "Component Library Demo",
                //     description:
                //         "Demonstration of the accessibility-first component library we built",
                // },
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
        timeRange: "AUG — DEC 2024",
        title: "AI Software Engineer Consultant",
        company: "Self-employed",
        description:
            "Developed AI-powered solutions for a dental software company to improve insurance data management. Built and deployed AI systems using RAG, React, Flask, LangChain, and AWS.",
        skills: ["RAG", "LangChain", "AWS", "Flask", "React"],
        details: {
            details: [
                {
                    title: "Improvement to RAG",
                    points: [
                        "Problem: To scrape data from large PDFs with slightly different formats, RAGs were not effective due to the overwhelming size and complexity of the PDFs.",
                        "Observation 1: The data to scrape is neatly labelled for humans to read, but difficult for RAGs to extract.",
                        "Observation 2: Models without RAG were great at extracting the data from a single page.",
                        "Solution: I developed an algorithm to split the PDF data into configurable overlapping chunks and individually fed them into an AI model with a system prompt: “Extract the data into the following json format: { label0: [“...”, “...”], label1: [“...”, “...”] }, where the array of strings for a given label contains all the relevant information for the label. After generating all the separate json data, I combine them all to get labels mapped to large arrays. Finally, I have an AI summarize each array to a string, leaving us with the following information { label0: “all about label0 …”, label1: “all about label1” …}. This method proved to be far more effective than using RAG."
                    ]
                }
            ]
        },
    },
    {
        id: 3,
        timeRange: "MAY — AUG 2024",
        title: "AI Software Engineer Intern",
        company: "Exchange Solutions",
        description:
            "Independently built an AI agent that autonomously generates React Native app prototypes in under 30 minutes using a human-in-the-loop LLM system.",
        skills: ["LLM", "AWS", "Node", "Next", "React Native"],
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
        id: 4,
        timeRange: "PROJECT",
        title: "Developer",
        company: "UBC Game Development Club",
        description: "Engineered a procedural spider animation and behavior system that defined the horror game’s tension and atmosphere. Built a custom inverse kinematics solution to simulate realistic spider movement across uneven cave surfaces, including walls and ceilings.",
        skills: ["Godot Engine", "Linear Algebra"],
        details: {
            details: [],
            media: [
                {
                    type: "youtube",
                    title: "Trailer",
                    url: "https://www.youtube.com/watch?v=G9smB9Cr1bI",
                },
                {
                    type: "youtube",
                    title: "Technical Demo",
                    url: "https://youtu.be/j8emiSYQmcE",
                }
            ]
        },
    },
    {
        id: 5,
        timeRange: "PROJECT",
        title: "Personal Website",
        company: "",
        description:
            "Built a sleek and responsive portfolio using Deno, React, and Vite. Leveraged AI tools to scaffold the initial layout, then customized design details—spacing, color palette, and component structure—for visual clarity and long-term maintainability. The site serves as a creative outlet and a central hub for showcasing my work.",
        skills: ["Deno", "React", "Vite", "Vercel", "AI-Assisted"],
        details: {
            details: [
            ],
        },
    },
];

export default jobExperiences;
