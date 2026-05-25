import { existsSync, readdirSync } from "fs";
import path from "path";
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

export default ({ env, dirname }) => {
    const target = env.VITE_TARGET_BUILD_INSTANCE;

    if (!target) {
        throw new Error('VITE_TARGET_BUILD_INSTANCE not set');
    }

    let instanceConfigPath = `src/instanceConfig`

    let aliasPath = path.resolve(dirname, instanceConfigPath + `/${target?.toLowerCase()}/index.js`);

    if (!existsSync(aliasPath)) {
        let instanceConfigPathObj = path.resolve(dirname, instanceConfigPath);
        let allFiles = readdirSync(instanceConfigPathObj, { withFileTypes: true });
        let folders = allFiles.filter(file => file.isDirectory()).map(e => e.name).join(' | ');
        let errorStr = `
        
        Input: ${target}
        Expect: ${folders}
`
        throw new Error(`\n\n ❗❗❗ Instance not support. Check your variable VITE_TARGET_BUILD_INSTANCE in env.local again ----------${errorStr}`);
    } else {
        console.log('\n✨Use instance: ', target)
        console.log('✨Path config: ', aliasPath)
    }

    const baseConfig = {
        base: env.VITE_BASE_PATH || "./",
        plugins: [
            mkcert(),
            react()
        ],
        resolve: {
            alias: {
                "@core": path.resolve(dirname, "src/core"),
                "@instanceConfig": aliasPath,
            }
        },
        build: {
            sourcemap: env.VITE_SOURCEMAP === 'false'
        },
        server: {
            https: env.VITE_HTTPS !== 'false',
            port: parseInt(env.VITE_PORT) || 3000,
        }
    };

    return baseConfig;
}