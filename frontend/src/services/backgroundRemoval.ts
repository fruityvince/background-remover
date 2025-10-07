export async function removeBackground(file: File): Promise<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch('/app/api/endpoints', {
        method: 'POST',
        body: formData
    });
    
    if (!response.ok) {
        throw new Error('Background removal failed');
    }
    
    return await response.blob();
}

export function createDownloadUrl(blob: Blob): string {
    return window.URL.createObjectURL(blob);
}

export function revokeDownloadUrl(url: string): void {
    window.URL.revokeObjectURL(url);
}
