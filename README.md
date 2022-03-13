# angular-nx-nest

Basing off
https://github.com/wlucha/angular-nest-nx

Looking at nest examples from zach here
https://github.com/zach-meyers/tasker


UI based off ngx-admin
https://github.com/akveo/ngx-admin


following NX steps here:
https://nx.dev/nest/overview


Nx Walkthrough with nest
https://nx.dev/node-tutorial/01-create-application


## Important
When adding angular to the frontend

Application Proxies
Generating Nest applications has an option to configure other projects in the workspace to proxy API requests. This can be done by passing the --frontendProject with the project name you wish to enable proxy support for.

nx g @nrwl/nest:app nest-api-2 --frontendProject angular-frontend


## Building
to build the frontend
nx run angular-frontend:build
nx run angular-frontend:build:production