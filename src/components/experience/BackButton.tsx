import React from "react";
import { ChevronLeft } from "lucide-react";
import { BackButtonProps } from "../../types/experience";

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="back-button"
    >
        <ChevronLeft size={20} />
        <span>Back to all experiences</span>
    </button>
);

export default BackButton;
