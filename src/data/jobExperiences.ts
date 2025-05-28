import { JobExperience } from "../types/experience";

// Job experiences (work/internship positions)
const jobExperiences: JobExperience[] = [
    {
        id: 1,
        timeRange: "JAN — AUG 2025",
        title: "Software Developer Intern",
        company: "InsideDesk",
        description:
            "Contributed to web scraping systems that automated the extraction of 1M+ dental claims for RCM workflows. Tackled anti-bot challenges and automated QA processes using Python, SQL, and AWS—while ensuring HIPAA compliance for sensitive client data.",
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
                        "Setup EC2 instance for developers to access AWS facing resources.",
                        "Created easy to follow visual and written documentation to ensure low maintenance cost and frictionless adoption.",
                    ],
                },
            ],
        },
    },
    {
        id: 2,
        timeRange: "AUG — DEC 2024",
        title: "AI Software Developer Consultant",
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
                        "Solution: I developed an algorithm to split the PDF data into configurable overlapping chunks and individually fed them into an AI model with a system prompt: 'Extract the data into the following json format: { label0: [\"...\", \"...\"], label1: [\"...\", \"...\"] }, where the array of strings for a given label contains all the relevant information for the label.' After generating all the separate json data, I combine them all to get labels mapped to large arrays. Finally, I have an AI summarize each array to a string, leaving us with the following information { label0: \"all about label0 …\", label1: \"all about label1\" ...}. This method proved to be far more effective than using RAG.",
                    ],
                },
            ],
        },
    },
    {
        id: 3,
        timeRange: "MAY — AUG 2024",
        title: "AI Software Developer Intern",
        company: "Exchange Solutions",
        description:
            "Independently built an AI agent that autonomously generates React Native app prototypes in under 30 minutes using a human-in-the-loop LLM system.",
        skills: ["LLM", "AWS", "Node", "Next", "React Native"],
        details: {
            details: [],
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
        timeRange: "SEP — DEC 2023",
        title: "Developer",
        company: "UBC Game Development Club",
        description:
            "Engineered a procedural spider animation and behavior system that defined the horror game's tension and atmosphere. Built a custom inverse kinematics solution to simulate realistic spider movement across uneven cave surfaces, including walls and ceilings.",
        skills: ["Godot Engine", "Linear Algebra"],
        details: {
            details: [
                {
                    title: "More",
                    points: ["<a href='https://rn-games.itch.io/spider-cave-game-demo' target='_blank'>View Game</a>"]
                }
            ],
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
                },
            ],
        },
    },
];

// Personal projects
const projects: JobExperience[] = [
    {
        id: 5,
        timeRange: "PROJECT",
        title: "Neural Network From Scratch",
        description:
            "Developed and trained a neural network from scratch in C++ using calculus, gradient descent and dynamic programming (92.5\% accuracy).",
        skills: ["Machine Learning", "Algorithms", "C++"],
        details: {
            details: [
                {
                    title: "Magic",
                    points: [
                        "Starting at some abritary set of parameters (weights and biases), we must adjust them such that they minimize the cost function. To do this, backwards propogation is applied.",
                        "Put simply, the partial derivative of the cost function with respect to each weight and bias is calculated. Each weight and bias is then shifted by d*k, where d is the corresponding derivative and k is the learning rate close to 0 (commonly 0.0001). This causes the cost function to decrease by a tiny amount.",
                        "Through thousands of samples and training iterations, the parameters will eventually converge to a local minimum. Strange as it may seem, due to the gradual minimization of the cost function, the predictions the network produces gradually become the same as the correct answer.",
                    ],
                },
                {
                    title: "More",
                    points: [
                        "<a href='https://github.com/douglasichen/Neural-Network-From-Scratch' target='_blank'>View Source Code</a>",
                    ],
                },
            ],
            media: [
                {
                    type: "image",
                    title: "Motivation",
                    url: "https://i.postimg.cc/bvdWJJnx/boom.png",
                    description:
                        "Developing algorithms to complete complex tasks that are conventionally done by humans intrigued me. As I delved into the math behind the neural nets, I was amazed by how the calculus I've learned in highschool had such a creative and powerful application. To further my understanding of neural networks, I decided to write my own gradient descent algorithm in C++.",
                },
                {
                    type: "image",
                    title: "Configuration",
                    url: "https://i.postimg.cc/6QdRCVCt/nn-config.png",
                    description:
                        "The algorithm is applied on a 784x10x10 model to predict hand written digits [0,9] as shown in the figure below. The MNIST data set is used for training and testing the model's accuracy.",
                },
                {
                    type: "image",
                    title: "ReLU Function",
                    url: "https://i.postimg.cc/tgffVjdL/ReLU.webp",
                    description:
                        "Let every node hold two numbers, the bias and z-value (first layer lacks bias values). Let every edge hold one number, the weight. Initially, all bias and weights are randomized with numbers close to 0. The training process includes forwards and backwards propogation. Forward propogation begins with taking a sample from the data set (one sample has 784 numbers) and setting each node's z-value in the first layer to one of the 784 numbers. Each node's z-value in the second layer is calculated with the following equation: ReLU(SUM(z*w) + b), such that each (z,w) pair comes from an edge with weight 'w' is from some node with z-value 'z', and ReLU is an activation function used to provide non-linearities.",
                },
                {
                    type: "image",
                    title: "Learning",
                    url: "https://i.postimg.cc/TwDsV4Ch/nn-3d-graph.gif",
                    description:
                        "A similar process repeats from layer 2 to 3 with the expection of normalizing the final layer z-values (make them add up to 100%). Note that in the last layer, the top node represents a prediction of 0 and the bottom 9. The final z-values represent the probability of the input represting some digit. the cost matrix is calculated as the difference between the correct answer and the predicted answer: A-Z, such that A is the correct probabilities and Z is the predicted probabilities. Next, a cost value is calculated based on how far each value in the cost matrix is from 0. The goal is to minimize this cost value. To do this, we first realize, this cost value is a multivariable function with parameters being the weight and biases of nodes and edges. To minimize the cost function, we can first think of the problem in 3 dimensions in GIF above.",
                },
            ],
        },
    },
    {
        id: 6,
        timeRange: "PROJECT",
        title: "Personal Website",
        company: "",
        description:
            "Built a sleek and responsive portfolio using Deno, React, and Vite. Leveraged AI tools to scaffold the initial layout, then customized design details—spacing, color palette, and component structure—for visual clarity and long-term maintainability. The site serves as a creative outlet and a central hub for showcasing my work.",
        skills: ["Deno", "React", "Vite", "AI-Assisted"],
        details: {
            details: [
                {
                    title: "More",
                    points: [
                        "<a href='https://github.com/douglasichen/portfolio' target='_blank'> View Source Code </a>",
                    ],
                },
            ],
        },
    },
    {
        id: 7,
        timeRange: "PROJECT",
        title: "Froggi",
        skills: ["Gamemaker Studio 2", "Game Design", "Sound & Music Design"],
        description:
            "Built as a birthday present for a special person. In this video game, you are a frog named Froggi. However, you are no ordinary frog. Froggi can grow a stronger and longer tongue to attack it's enemies. This unique frog specimen can also gain extra hops and health. As the only one left of your kind, you must fight off the evil monsters that come wave after wave. How long can you survive?",
        details: {
            details: [
                {
                    title: "More",
                    points: [
                        "<a href='https://github.com/douglasichen/Froggi' target='_blank'>View Source Code</a>",
                    ],
                },
            ],
            media: [
                {
                    type: "youtube",
                    title: "Demo",
                    url: "https://www.youtube.com/watch?v=D4XT642DfuY",
                },
            ],
        },
    },
    {
        id: 8,
        timeRange: "PROJECT",
        title: "Portal Wizard",
        skills: ["Java", "LibGDX", "JProfiler"],
        description:
            "Portal Wizard is a Java-based dungeon game where you play as an ancient wizard who uses spatial magic—specifically, Portal Magic—to outsmart enemies and navigate a world full of danger. Embark on a journey to defeat Desmond Froid, the world's most powerful fire wizard, using creativity, strategy, and dimensional manipulation.",
        details: {
            details: [
                {
                    title: "More",
                    points: [
                        "<a href='https://github.com/douglasichen/PortalGame' target='_blank'>View Source Code</a>",
                    ],
                },
            ],
            media: [
                {
                    type: "youtube",
                    title: "Demo",
                    url: "https://youtu.be/4FzLd-FZOmw",
                },
            ],
        },
    },
    {
        id: 9,
        timeRange: "PROJECT",
        title: "Roblox Medieval Tycoon",
        skills: ["Roblox Dev", "Lua", "NPC"],
        description:
            "Build your empire, command your army, and conquer your enemies. In this Roblox tycoon game, you don't just collect resources—you lead. I designed and developed the core NPC system that lets players recruit soldiers, issue commands, and defend their territory in real time.",
        details: {
            details: [
                {
                    title: "More",
                    points: [
                        "Co-created with <a href='https://www.linkedin.com/in/ianpe-thompson/'>Ian Thompson</a>",
                        "<a href='https://www.roblox.com/games/6244027214/not-done-Medieval-Tycoon' target='_blank'>View Game</a>",
                    ],
                },
            ],
            media: [
                {
                    type: "youtube",
                    title: "Demo",
                    url: "https://youtu.be/Ip9Ie227-QA",
                },
            ],
        },
    },
    {
        id: 10,
        timeRange: "PROJECT",
        title: "Multiplayer Third Person Shooter",
        skills: ["Godot Engine", "Networking"],
        description:
            "Built with Godot Engine's Networking API, this LAN-based multiplayer TPS allows players to host or join matches using IP addresses. While designed for local play, online functionality is possible through Hamachi.",
        details: {
            details: [],
            media: [
                {
                    type: "youtube",
                    title: "Demo",
                    url: "https://youtu.be/iBmT5c8xoso",
                },
            ],
        },
    },
    {
        id: 11,
        timeRange: "PROJECT",
        title: "Platformer Sandbox",
        skills: ["Gamemaker Studio 2"],
        description:
            "This 2D platformer sandbox was built to experiment with player effects and mechanics, including portals, boosts, jump pads, drop-through platforms, enemy cannons, and a health system. It features a smooth camera and responsive controls for testing platforming interactions in a focused environment.",
        details: {
            details: [],
            media: [
                {
                    type: "youtube",
                    title: "Demo",
                    url: "https://youtu.be/psjzJolidAo",
                },
            ],
        },
    },
];

// Combined array for components that need all items
const allExperiences = [...jobExperiences, ...projects];

export { jobExperiences, projects, allExperiences };
export default allExperiences;
