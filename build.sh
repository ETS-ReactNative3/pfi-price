rm -rf build
rm -rf android
npm run build
npx cap add android
npx cap open android
