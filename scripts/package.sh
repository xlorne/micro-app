rm -rf app
rm -rf home

cd ../mirco-app
yarn
yarn run build

cp -r ./dist/ ../scripts/app/


cd ../mirco-home
yarn
yarn run build
cp -r ./dist/ ../scripts/home/

