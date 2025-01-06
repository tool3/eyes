import { useEffect } from "react";

const Debug = ({set}) => {
    const hash = '#debug';

    const toggle = (e: any) => {
        if ((e.key === 'D' && e.shiftKey) || (e.touches && e.touches.length >= 3)) {
            const isDebug = window.location.hash === hash;
            if (isDebug) {
                window.location.hash = '';
                dispatchEvent(new Event('debugClose'));
                set(true)
            } else {
                dispatchEvent(new Event('debug'));
                set(false)
                window.location.hash = hash;
                
            }
        }
    }

    useEffect(() => {
        addEventListener('keydown', toggle);
        addEventListener('touchstart', toggle);

        return () => {
            removeEventListener('keydown', toggle);
            removeEventListener('touchstart', toggle);
        }
    }, [])

    return null;
}

export default Debug;