npm run build

# navigate into the build output directory

cd dist

# if you are deploying to a custom domain

# echo 'www.rest-countries-api.com' > CNAME

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:qouaynt/countries-apis.git master:gh-pages

cd -