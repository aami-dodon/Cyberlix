import { put } from '@vercel/blob'
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'

export interface StorageService {
    upload(file: File): Promise<string>
}

export class LocalStorageService implements StorageService {
    async upload(file: File): Promise<string> {
        const buffer = Buffer.from(await file.arrayBuffer())
        const filename = `${Date.now()}-${file.name.replaceAll(' ', '_')}`
        const uploadDir = process.env.UPLOADS_DIR
            ? path.resolve(process.env.UPLOADS_DIR)
            : path.join(process.cwd(), '.data/uploads')

        try {
            await mkdir(uploadDir, { recursive: true })
            await writeFile(path.join(uploadDir, filename), buffer)
            return `/uploads/${filename}`
        } catch (error) {
            console.error('Error uploading file locally:', error)
            throw new Error('Failed to upload file locally')
        }
    }
}

export class VercelBlobStorageService implements StorageService {
    async upload(file: File): Promise<string> {
        try {
            const filename = `${Date.now()}-${file.name.replaceAll(' ', '_')}`
            const blob = await put(filename, file, {
                access: 'public',
            })
            return blob.url
        } catch (error) {
            console.error('Error uploading file to Vercel Blob:', error)
            throw new Error('Failed to upload file to Vercel Blob')
        }
    }
}

export function getStorageService(): StorageService {
    const provider = process.env.STORAGE_PROVIDER || 'local'

    switch (provider) {
        case 'vercel':
        case 'blob':
            return new VercelBlobStorageService()
        case 'local':
        default:
            return new LocalStorageService()
    }
}
