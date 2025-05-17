import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';
import './ExperienceList.scss';

// Define types for props
interface TimeFrameProps {
  timeRange: string;
}

interface JobTitleProps {
  title: string;
  company: string;
  isHovered: boolean;
}

interface JobDescriptionProps {
  description: string;
}

interface SkillTagProps {
  skill: string;
}

interface SkillTagsProps {
  skills: string[];
}

interface DetailSectionProps {
  title: string;
  items: string[];
}

interface BackButtonProps {
  onClick: () => void;
}

interface ExpandedCardOverlayProps {
  job: JobExperience;
  rect: DOMRect;
  mainContainerRect: DOMRect;
  onClose: () => void;
  isAnimating: boolean;
  isClosing: boolean;
}

interface JobCardProps {
  id: number;
  timeRange: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  isHovered: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  onClick: (id: number, rect: DOMRect) => void;
  hoveredId: number | null;
  expandedId: number | null;
}

interface JobDetails {
  achievements: string[];
  projects: string[];
  technologies: string[];
}

interface JobExperience {
  id: number;
  timeRange: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  details: JobDetails;
}

// Sample job data with additional details
const jobExperiences: JobExperience[] = [
  {
    id: 1,
    timeRange: "2024 — PRESENT",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "TypeScript", "React", "Storybook"],
    details: {
      achievements: [
        "Led accessibility initiative that increased WCAG compliance from 76% to 98% across the platform",
        "Developed reusable component library with built-in accessibility features used by 40+ engineers",
        "Implemented automated accessibility testing in CI/CD pipeline, reducing accessibility bugs by 64%"
      ],
      projects: [
        "Component System Redesign - Led frontend architecture for accessibility-first design system",
        "Keyboard Navigation Overhaul - Improved keyboard navigation throughout the application" 
      ],
      technologies: ["React", "TypeScript", "Jest", "React Testing Library", "Storybook", "Figma", "NVDA", "axe DevTools"]
    }
  },
  {
    id: 2,
    timeRange: "2022 — 2024",
    title: "Frontend Engineer",
    company: "Stripe",
    description: "Developed and maintained core payment interface components, focusing on creating seamless user experiences. Collaborated with the design team to implement responsive UI elements that maintained accessibility standards while providing an intuitive checkout flow.",
    skills: ["React", "TypeScript", "Jest", "CSS-in-JS"],
    details: {
      achievements: [
        "Reduced checkout form abandonment rate by 18% through UX improvements",
        "Optimized rendering performance with 42% reduction in load time for payment components",
        "Built internationalization system supporting 28 languages and 45 currencies"
      ],
      projects: [
        "Stripe Elements Redesign - Modernized payment form UI components",
        "Payment Flow Optimization - Streamlined checkout experience"
      ],
      technologies: ["React", "TypeScript", "Jest", "Emotion", "Webpack", "Redux", "GraphQL", "Cypress"]
    }
  },
  {
    id: 3,
    timeRange: "2020 — 2022",
    title: "UI Developer",
    company: "Shopify",
    description: "Built e-commerce interface components for merchant storefronts. Worked with product managers to translate business requirements into technical solutions that emphasized usability and conversion optimization. Contributed to the company's design system.",
    skills: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
    details: {
      achievements: [
        "Created 15+ reusable Vue components now used across 10,000+ merchant stores",
        "Improved mobile conversion rates by 22% through responsive design improvements",
        "Reduced bundle size by 37% through code splitting and lazy loading implementation"
      ],
      projects: [
        "Merchant Dashboard Revamp - Redesigned analytics dashboard for better UX",
        "Mobile Checkout Optimization - Improved mobile experience for higher conversions"
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Vuex", "Jest", "Polaris Design System"]
    }
  },
  {
    id: 4,
    timeRange: "2018 — 2020",
    title: "Junior Web Developer",
    company: "Digital Ocean",
    description: "Created responsive web applications for cloud hosting platform. Participated in code reviews and agile development processes while learning modern frontend technologies. Contributed to the documentation portal and developer-facing tools.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    details: {
      achievements: [
        "Optimized documentation portal, increasing page load speed by 40%",
        "Built interactive pricing calculator used by 30,000+ customers monthly",
        "Contributed to open-source projects with 5 pull requests merged into production"
      ],
      projects: [
        "Documentation Platform Redesign - Improved readability and search functionality",
        "Infrastructure Calculator - Created interactive cost estimation tool"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "LESS", "Gulp", "Git", "Jira"]
    }
  }
];

// TimeFrame component
const TimeFrame: React.FC<TimeFrameProps> = ({ timeRange }) => (
  <div className="time-frame">
    <p>{timeRange}</p>
  </div>
);

// JobTitle component
const JobTitle: React.FC<JobTitleProps> = ({ title, company, isHovered }) => (
  <div className="job-title">
    <h2 className={isHovered ? 'hovered' : ''}>
      {title} · {company}
    </h2>
    <ArrowUpRight className={isHovered ? 'hovered' : ''} size={20} />
  </div>
);

// JobDescription component
const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => (
  <p className="job-description">
    {description}
  </p>
);

// SkillTag component
const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <span className="skill-tag">
    {skill}
  </span>
);

// SkillTags component
const SkillTags: React.FC<SkillTagsProps> = ({ skills }) => (
  <div className="skill-tags">
    {skills.map((skill, index) => (
      <SkillTag key={index} skill={skill} />
    ))}
  </div>
);

// DetailSection component
const DetailSection: React.FC<DetailSectionProps> = ({ title, items }) => (
  <div className="detail-section">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Back Button component
const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="back-button"
  >
    <ChevronLeft size={20} />
    <span>Back to all experiences</span>
  </button>
);

// Expanded Card Overlay component
const ExpandedCardOverlay: React.FC<ExpandedCardOverlayProps> = ({ 
  job, 
  rect, 
  mainContainerRect,
  onClose, 
  isAnimating, 
  isClosing 
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    position: 'fixed',
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${mainContainerRect.width - 48}px`, // Accounting for container padding
    height: `${rect.height}px`,
    zIndex: 50,
    borderRadius: '0.75rem',
    padding: '2rem',
    backgroundColor: '#111827', // bg-gray-900
    transition: 'all 250ms ease-out',
    overflow: 'hidden',
    overflowY: 'auto' // Always allow scrolling
  });

  // Animation sequence
  useEffect(() => {
    // Only run expansion if not closing
    if (!isClosing) {
      // First set max height to viewport height to enable scrolling if needed
      document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
      
      // Start with the card at its original position
      const timer1 = setTimeout(() => {
        // Expand only vertically, keeping horizontal position and width the same
        setStyle(prev => ({
          ...prev,
          top: '5vh',
          height: '90vh',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }));
      }, 25);
  
      return () => {
        clearTimeout(timer1);
      };
    } else {
      // If closing, shrink back to original size
      setStyle(prev => ({
        ...prev,
        top: `${rect.top}px`,
        height: `${rect.height}px`,
        boxShadow: 'none'
      }));
    }
  }, [isClosing, rect]);

  // Make sure back button opacity is managed correctly
  const backButtonOpacity = isAnimating || isClosing ? 'opacity-0' : 'opacity-100';

  return (
    <>
      {/* Semi-transparent background overlay */}
      <div 
        className={`overlay-background ${isClosing ? 'closing' : ''}`}
        onClick={onClose}
      />
      
      {/* Expanded card */}
      <div style={style} className="expanded-card" ref={contentRef}>
        {/* Back button with its own opacity transition */}
        <div className={`back-button-container ${backButtonOpacity}`}>
          <BackButton onClick={onClose} />
        </div>
        
        {/* Main content - always visible */}
        <div>
          <h2 className="expanded-title">
            {job.title} · {job.company}
          </h2>
          <p className="expanded-timerange">{job.timeRange}</p>
          
          <div className="expanded-main-content">
            <p>{job.description}</p>
            <SkillTags skills={job.skills} />
          </div>
        </div>
        
        {/* Details section - always rendered, only hidden when closing */}
        <div className={`expanded-details ${isClosing ? 'hidden' : ''}`}>
          <DetailSection title="Key Achievements" items={job.details.achievements} />
          <DetailSection title="Projects" items={job.details.projects} />
          <DetailSection title="Technologies" items={[job.details.technologies.join(', ')]} />
        </div>
      </div>
    </>
  );
};

// Single JobCard component
const JobCard: React.FC<JobCardProps> = ({ 
  timeRange,
  title,
  company,
  description,
  skills,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  id,
  hoveredId,
  expandedId
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate opacity based on hover and expanded states
  const shouldDim = (hoveredId !== null && hoveredId !== id) || (expandedId !== null);
  
  return (
    <div 
      ref={cardRef}
      className={`job-card ${shouldDim ? 'dimmed' : ''}`}
      onMouseEnter={() => expandedId === null && onMouseEnter(id)}
      onMouseLeave={() => expandedId === null && onMouseLeave()}
      onClick={() => {
        if (expandedId === null && cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          onClick(id, rect);
        }
      }}
    >
      <div className="job-card-content">
        <TimeFrame timeRange={timeRange} />
        <div className="job-details">
          <JobTitle title={title} company={company} isHovered={isHovered} />
          <JobDescription description={description} />
          <SkillTags skills={skills} />
        </div>
      </div>
    </div>
  );
};

// Experience list component
const ExperienceList = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedRect, setExpandedRect] = useState<DOMRect | null>(null);
  const [mainContainerRect, setMainContainerRect] = useState<DOMRect | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Measure container dimensions on mount
  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      setMainContainerRect(element.getBoundingClientRect());
    }
  }, []);
  
  const handleMouseEnter = (id: number) => {
    if (expandedId === null) {
      setHoveredId(id);
    }
  };
  
  const handleMouseLeave = () => {
    if (expandedId === null) {
      setHoveredId(null);
    }
  };
  
  const handleCardClick = (id: number, rect: DOMRect) => {
    // Update container rect in case of window resize
    const element = containerRef.current;
    if (element) {
      setMainContainerRect(element.getBoundingClientRect());
    }
    
    setExpandedId(id);
    setExpandedRect(rect);
    setIsAnimating(true);
    setIsClosing(false);
    
    // Update animation state after expansion completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 250);
  };
  
  const handleCloseExpanded = () => {
    // Start closing animation sequence
    setIsClosing(true);
    
    // After animation completes, remove card
    setTimeout(() => {
      setExpandedId(null);
      setExpandedRect(null);
      setIsAnimating(false);
      setIsClosing(false);
    }, 250);
  };
  
  // Get expanded job data
  const expandedJob = expandedId ? jobExperiences.find(job => job.id === expandedId) : null;
  
  return (
    <div ref={containerRef} className="experience-list-container">
      <style>{`
        body {
          overflow: ${expandedId ? 'hidden' : 'auto'};
        }
        
        :root {
          --viewport-height: 100vh;
        }
      `}</style>
      
      <h1 className="section-title">
        Work Experience
      </h1>
      
      {jobExperiences.map(job => (
        <JobCard
          key={job.id}
          id={job.id}
          timeRange={job.timeRange}
          title={job.title}
          company={job.company}
          description={job.description}
          skills={job.skills}
          isHovered={hoveredId === job.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCardClick}
          hoveredId={hoveredId}
          expandedId={expandedId}
        />
      ))}
      
      {/* Expanded card overlay */}
      {expandedId && expandedRect && mainContainerRect && expandedJob && (
        <ExpandedCardOverlay 
          job={expandedJob}
          rect={expandedRect}
          mainContainerRect={mainContainerRect}
          onClose={handleCloseExpanded}
          isAnimating={isAnimating}
          isClosing={isClosing}
        />
      )}
    </div>
  );
};

export default ExperienceList;
