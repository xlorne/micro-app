rm -rf app
rm -rf home
rm -rf dynamic

cd ../mirco-app
yarn
yarn run build

cp -r ./dist/ ../scripts/app/


cd ../mirco-home
yarn
yarn run build
cp -r ./dist/ ../scripts/home/

cd ../mirco-home-dynamic
yarn
yarn run build
cp -r ./dist/ ../scripts/dynamic/
