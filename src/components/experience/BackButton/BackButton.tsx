import React from "react";
import { ChevronLeft } from "lucide-react";
import { BackButtonProps } from "../../../types/experience";
import "./BackButton.scss";

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="back-button"
    >
        <ChevronLeft size={20} />
        <span>Back</span>
    </button>
);

export default BackButton;
