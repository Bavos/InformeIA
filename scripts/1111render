import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startRender() {
  console.log('🚀 Iniciando o bundling do projeto Remotion...');

  const entryPoint = path.join(__dirname, '../src/index.ts');

  const bundled = await bundle({
    entryPoint,
    webpackOverride: (config) => config,
  });

  const compositionId = 'AIGovernanceVideo';

  console.log(`🎬 Selecionando a composição "${compositionId}"...`);
  const composition = await selectComposition({
    containerTree: bundled,
    id: compositionId,
    browserExecutable: '/usr/bin/chromium-browser',
    chromiumOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });

  const outputLocation = path.join(__dirname, '../out/video-ai-governance.mp4');

  console.log('⚡ Renderizando o vídeo MP4...');
  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: 'h264',
    outputLocation,
    browserExecutable: '/usr/bin/chromium-browser',
    chromiumOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });

  console.log(`✅ Vídeo renderizado com sucesso em: ${outputLocation}`);
}

startRender().catch((err) => {
  console.error('❌ Erro na renderização do vídeo:', err);
  process.exit(1);
});
