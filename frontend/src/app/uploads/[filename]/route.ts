import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'

function contentTypeFromFilename(filename: string): string {
    const ext = path.extname(filename).toLowerCase()
    switch (ext) {
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg'
        case '.png':
            return 'image/png'
        case '.gif':
            return 'image/gif'
        case '.webp':
            return 'image/webp'
        case '.avif':
            return 'image/avif'
        case '.svg':
            return 'image/svg+xml'
        default:
            return 'application/octet-stream'
    }
}

function candidateUploadDirs(): string[] {
    const primary = process.env.UPLOADS_DIR
        ? path.resolve(process.env.UPLOADS_DIR)
        : path.join(process.cwd(), '.data/uploads')

    const legacyPublic = path.join(process.cwd(), 'public/uploads')

    return primary === legacyPublic ? [primary] : [primary, legacyPublic]
}

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ filename: string }> }
) {
    const { filename } = await params
    const safeName = path.basename(filename)

    if (safeName !== filename) {
        return new Response('Bad Request', { status: 400 })
    }

    for (const dir of candidateUploadDirs()) {
        const filePath = path.join(dir, safeName)
        try {
            const buffer = await readFile(filePath)
            return new Response(buffer, {
                status: 200,
                headers: {
                    'Content-Type': contentTypeFromFilename(safeName),
                    'Cache-Control': 'public, max-age=31536000, immutable',
                },
            })
        } catch {
            // Try next directory
        }
    }

    return new Response('Not Found', { status: 404 })
}
