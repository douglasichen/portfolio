import React from "react";
import { MediaComponentProps, MediaItem } from "../../../types/experience";
import "./MediaComponent.scss";

const MediaComponent: React.FC<MediaComponentProps> = ({ media }) => {
    if (!media || media.length === 0) {
        return null;
    }

    const extractYouTubeId = (url: string): string | null => {
        // Handle various YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
            /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) {
                return match[1];
            }
        }
        return null;
    };

    const renderMediaItem = (item: MediaItem, index: number) => {
        if (item.type === "youtube") {
            const videoId = extractYouTubeId(item.url);
            if (!videoId) {
                console.warn("Invalid YouTube URL:", item.url);
                return null;
            }

            return (
                <div key={index} className="media-item youtube-item">
                    {item.title && (
                        <h4 className="media-title">{item.title}</h4>
                    )}
                    <div className="youtube-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={item.title || `YouTube video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                    {item.description && (
                        <p className="media-description">{item.description}</p>
                    )}
                </div>
            );
        }

        if (item.type === "image") {
            return (
                <div key={index} className="media-item image-item">
                    {item.title && (
                        <h4 className="media-title">{item.title}</h4>
                    )}
                    <div className="image-container">
                        <img
                            src={item.url}
                            alt={item.title || `Media image ${index + 1}`}
                            loading="lazy"
                        />
                    </div>
                    {item.description && (
                        <p className="media-description">{item.description}</p>
                    )}
                </div>
            );
        }

        return null;
    };

    return (
        <div className="media-component">
            <div className="media-grid">
                {media.map(renderMediaItem)}
            </div>
        </div>
    );
};

export default MediaComponent;
