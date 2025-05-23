import { ReactNode } from "react";

export interface TimeFrameProps {
    timeRange: string;
}

export interface JobTitleProps {
    title: string;
    company: string;
    isHovered: boolean;
}

export interface JobDescriptionProps {
    description: string;
}

export interface SkillTagProps {
    skill: string;
}

export interface SkillTagsProps {
    skills: string[];
}

export interface DetailSectionProps {
    title: string;
    items: string[];
}

export interface BackButtonProps {
    onClick: () => void;
}

export interface ExpandedCardOverlayProps {
    job: JobExperience;
    rect: DOMRect;
    mainContainerRect: DOMRect;
    onClose: () => void;
    isAnimating: boolean;
    isClosing: boolean;
}

export interface JobCardProps {
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

export interface MediaItem {
    type: "youtube" | "image";
    url: string;
    title?: string;
    description?: string;
}

export interface JobDetails {
    achievements: string[];
    projects: string[];
    technologies: string[];
    media?: MediaItem[];
}

export interface JobExperience {
    id: number;
    timeRange: string;
    title: string;
    company: string;
    description: string;
    skills: string[];
    details: JobDetails;
}

export interface MediaComponentProps {
    media: MediaItem[];
}
