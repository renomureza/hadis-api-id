// copy swagger static file to .dist
const fs = require('fs/promises');
const fsSync = require('fs');
const path = require('path');

const main = async () => {
  const assetsDirPath = path.resolve('node_modules/swagger-ui-dist');
  const destination = path.resolve('.dist');
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const assets = await fs.readdir(assetsDirPath);
  const globs = ['js', 'css', 'html', 'png'];

  assets
    .filter((file) => globs.some((glob) => file.endsWith(glob)))
    .forEach(async (file) => {
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      const isExsitsDir = fsSync.existsSync(destination);
      if (!isExsitsDir) {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        await fs.mkdir(destination, { recursive: true });
      }
      await fs.copyFile(
        `${assetsDirPath}/${file}`,
        path.resolve(destination, file)
      );
    });
};

main();
