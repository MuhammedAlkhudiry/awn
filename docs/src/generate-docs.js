import fs from 'fs-extra';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_PATH = path.join(__dirname, '../../registry');
const OUTPUT_PATH = path.join(__dirname, '../public/utilities.json');

async function extractManifestFromFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');

        // Extract the manifest export using regex
        const manifestMatch = content.match(/export const manifest = ({[\s\S]*?});/);

        if (!manifestMatch) {
            return null;
        }

        // Clean up the manifest string and parse it
        let manifestStr = manifestMatch[1];

        // Replace 'as const' with empty string
        manifestStr = manifestStr.replace(/as const/g, '');

        // Parse the JavaScript object (this is a simplified parser)
        // In a real implementation, you might want to use a proper JS parser
        const manifest = eval(`(${manifestStr})`);

        return manifest;
    } catch (error) {
        console.error(`Error extracting manifest from ${filePath}:`, error);
        return null;
    }
}

async function generateUtilitiesData() {
    const utilities = {
        array: [],
        string: [],
        number: []
    };

    const categories = ['array', 'string', 'number'];

    for (const category of categories) {
        const categoryPath = path.join(REGISTRY_PATH, category);

        if (await fs.pathExists(categoryPath)) {
            const files = await fs.readdir(categoryPath);
            const tsFiles = files.filter(file => file.endsWith('.ts'));

            for (const file of tsFiles) {
                const filePath = path.join(categoryPath, file);
                const manifest = await extractManifestFromFile(filePath);

                if (manifest) {
                    utilities[category].push({
                        ...manifest,
                        filename: file.replace('.ts', '')
                    });
                }
            }
        }
    }

    return utilities;
}

async function main() {
    console.log('Generating utilities documentation...');

    const utilities = await generateUtilitiesData();

    await fs.ensureDir(path.dirname(OUTPUT_PATH));
    await fs.writeFile(OUTPUT_PATH, JSON.stringify(utilities, null, 2));

    console.log(`Generated documentation for ${
        utilities.array.length + utilities.string.length + utilities.number.length
    } utilities`);

    console.log('Documentation data saved to:', OUTPUT_PATH);
}

main().catch(console.error);