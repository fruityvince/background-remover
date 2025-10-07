import { useState } from 'react';
import { removeBackground, createDownloadUrl, revokeDownloadUrl } from '../services/backgroundRemoval';

export function useBackgroundRemoval() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const processImage = async (file: File) => {
        setIsLoading(true);
        setError(null);
        
        try {
            const blob = await removeBackground(file);
            const url = createDownloadUrl(blob);
            setPreviewUrl(url);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadImage = () => {
        if (!previewUrl) return;
        
        const a = document.createElement('a');
        a.href = previewUrl;
        a.download = 'background-removed.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const reset = () => {
        if (previewUrl) {
            revokeDownloadUrl(previewUrl);
        }
        setPreviewUrl(null);
        setError(null);
    };

    return {
        processImage,
        downloadImage,
        reset,
        previewUrl,
        isLoading,
        error
    };
}
