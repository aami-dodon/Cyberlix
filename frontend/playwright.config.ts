import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

export default defineConfig({
    testDir: './tests',
    timeout: 120 * 1000,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'web',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'mobile',
            use: { ...devices['Pixel 5'] },
        },
    ],
});
