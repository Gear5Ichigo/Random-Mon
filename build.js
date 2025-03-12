import { context } from 'esbuild';

const b = await context({
    entryPoints: ['src/*'],
    bundle: true,
    outdir: 'dist',
    platform: 'browser',
    minify: true,
}).catch(() => {process.exit(1)});