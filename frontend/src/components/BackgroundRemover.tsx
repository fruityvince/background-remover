import React, { useRef } from 'react';
import { useBackgroundRemoval } from '../hooks/useBackgroundRemoval';

export function BackgroundRemover() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { 
        processImage, 
        downloadImage, 
        reset, 
        previewUrl, 
        isLoading, 
        error 
    } = useBackgroundRemoval();

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            processImage(file);
        }
    };

    const handleNewImage = () => {
        reset();
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="background-remover">
          <button
            className={`btn btn-primary`}
          >Download Image</button>
        </div>
    );
}
