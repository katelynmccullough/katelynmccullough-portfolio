export const about = {
    name: "Katelyn McCullough",
    role: "Data Science Student & Analytics Developer",
    about:
        "I'm a Data Science student at Florida Polytechnic University passionate about analytics, machine learning, and business intelligence. I enjoy building software and data-driven tools that solve real business problems, from predictive models to enterprise workflow automation.",
    email: "mcculloughkatelyn09@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description:
        "Portfolio of Katelyn McCullough, a Data Science student specializing in analytics, predictive modeling, business intelligence, and workflow automation.",
    keywords:
        "Katelyn McCullough, data science, data analytics, Power BI, Power Apps, Python, R, SQL, machine learning, portfolio",
};

export const forms = {
    formspreeUrl: "",
};

export const skills = [
    { name: "Python", alt: "Python", icon: "/python.svg" },
    { name: "R", alt: "R programming", icon: "/r.svg" },
    { name: "SQL", alt: "SQL", icon: "/sqlite.svg" },
    { name: "Power BI", alt: "Power BI", icon: "/tailwind.svg" },
    { name: "JavaScript", alt: "JavaScript", icon: "/javascript.svg" },
    { name: "Next.js", alt: "Next.js", icon: "/nextjs.svg" },
    { name: "C", alt: "Next.js", icon: "/c.svg" },
    { name: "C++", alt: "Next.js", icon: "/cplusplus.svg" },
];

export const socials = {
    github: "https://github.com/katelynmccullough",
    linkedin: "https://www.linkedin.com/in/katelynmccullough09/",
    email: "mailto:mcculloughkatelyn09@gmail.com",
    resume: "/MCCULLOUGH_FPU_DATA_SCIENCE.pdf",
};

export const projects = {
    pinProjects: [
        {
            title: "Stock Screening and Scoring Platform",
            description:
                "Developed an interactive stock screening application that filters companies by exchange, sector, market capitalization, and other investment criteria. The platform evaluates stocks using a custom scoring system and presents key market information through a responsive interface.",
            tags: ["Next.js", "TypeScript", "Finance"],
            link: "",
        },
        {
            title: "Global Terrorism Predictive Modeling",
            description:
                "Analyzed more than 200,000 global terrorism incidents in R and developed Random Forest, Logistic Regression, and XGBoost models to predict attack success using data cleaning, feature engineering, and predictive analysis.",
            tags: ["R", "XGBoost", "Machine Learning"],
            link: "",
        },
        {
            title: "Enterprise Project Reference Tool",
            description:
                "Developed a Power Apps solution integrating Dataverse, SharePoint, and Excel to centralize remodel and project data across hundreds of Publix stores with dynamic search, filtering, and drill-down navigation.",
            tags: ["Power Apps", "Dataverse", "SharePoint"],
            link: "",
        },
    ],

    otherProjects: [
        {
            title: "Business Intelligence and Automated Reporting",
            description:
                "Designed Power BI dashboards that automated executive reporting, visualized remodel pipeline performance and survey data, and transformed operational information into actionable insights.",
            tags: ["Power BI", "Data Visualization", "Analytics"],
            link: "",
        },
        {
            title: "Prototype Revision Workflow Automation",
            description:
                "Replaced a legacy Smartsheet process with a Power Apps, SharePoint, and Power Automate solution featuring automated approvals, notifications, role-based permissions, and lifecycle management.",
            tags: ["Power Automate", "Power Apps", "Automation"],
            link: "",
        },
        {
            title: "Investment Portfolio Simulation",
            description:
                "Managed a simulated $100,000 investment portfolio throughout a semester-long market simulation, evaluating investment strategies, portfolio performance, and risk-adjusted returns.",
            tags: ["Finance", "Portfolio Analysis", "Risk"],
            link: "",
        },
    ],
};

export const experience = [
    {
        title: "Facilities Technical Specialist Intern — Publix",
        description:
            "Developed enterprise applications, business intelligence dashboards, and automated workflows using Power Apps, Power BI, Power Automate, Dataverse, SharePoint, and Excel. Selected to demonstrate a completed workflow automation solution to the President of Publix during a departmental leadership visit.",
        date: "May 2026 – July 2026",
    },
    {
        title: "Customer Service Staff — Publix",
        description:
            "Manage cash office reconciliation, transaction auditing, secure fund handling, front-end operations, and service desk activities while maintaining financial accuracy and operational compliance in a high-volume retail environment.",
        date: "July 2023 – Present",
    },
    {
        title: "Cadet Commander — Civil Air Patrol",
        description:
            "Led cadet operations, training, and logistics while making decisions in high-pressure environments. Mentored cadets and coordinated activities that promoted teamwork, accountability, and organizational effectiveness.",
        date: "May 2023 – October 2023",
    },
];

//export const blogs = [];