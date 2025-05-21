import { useEffect, useRef } from 'react';

/**
 * A custom hook to lock body scroll when a modal or overlay is active.
 * It uses CSS classes to apply styles and manages scroll position restoration.
 * 
 * Assumes the following CSS classes are defined globally or imported where the hook is used:
 * .html-modal-open { overflow: hidden !important; overscroll-behavior-y: contain !important; }
 * .body-modal-open { 
 *   overflow: hidden !important; 
 *   position: fixed !important; 
 *   width: 100% !important; 
 *   overscroll-behavior-y: contain !important; 
 * }
 * The body-modal-open class also relies on `top` being set via JavaScript to the negative
 * scrollY to maintain scroll position.
 */
const useBodyScrollLock = (isLocked: boolean) => {
    const scrollYRef = useRef(0);

    useEffect(() => {
        const htmlElement = document.documentElement;
        const bodyElement = document.body;

        if (isLocked) {
            scrollYRef.current = window.scrollY;
            
            // This must be set before adding the class for position:fixed to work correctly
            // with maintaining scroll position.
            bodyElement.style.top = `-${scrollYRef.current}px`; 
            
            htmlElement.classList.add('html-modal-open');
            bodyElement.classList.add('body-modal-open');
        } else {
            // Only remove styles and restore scroll if they were potentially set.
            // Check if the class is present before trying to remove,
            // avoids issues if unlocked when never locked.
            if (bodyElement.classList.contains('body-modal-open')) {
                htmlElement.classList.remove('html-modal-open');
                bodyElement.classList.remove('body-modal-open');
                bodyElement.style.top = ''; // Clear the dynamically set top style
                window.scrollTo(0, scrollYRef.current);
            }
        }

        // Cleanup function for when the component unmounts or isLocked changes.
        return () => {
            // Ensure styles are reset if the component unmounts while locked.
            if (bodyElement.classList.contains('body-modal-open')) {
                htmlElement.classList.remove('html-modal-open');
                bodyElement.classList.remove('body-modal-open');
                bodyElement.style.top = '';
                window.scrollTo(0, scrollYRef.current);
            }
        };
    }, [isLocked]); // Effect runs when isLocked changes
};

export default useBodyScrollLock;
