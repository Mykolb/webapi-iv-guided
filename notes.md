Installing dev dependencies 

- using yarn: yarn add package --dev ex. yarn add nodemon --dev
- add start/node to scripts ex.  "start": "node index.js" 


- create new app on Heroku 
- connect repo/branch
-select auto deploy and that's it
* don't forget to make port dynamic in server.listen function

Environments

-development
-staging/testing
-production

npmjs.com
-dotenv (useful when you hit switch between production/build database)
- yard add dotenv 

have to restart server after changing env 