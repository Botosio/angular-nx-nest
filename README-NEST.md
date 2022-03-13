# Create Libraries
You can add a new Nest library with the following command:

nx g @nrwl/nest:lib my-nest-lib
To make the library buildable, use the following command:

nx g @nrwl/nest:lib my-nest-lib --buildable
To make the library publishable, use the following command:

nx g @nrwl/nest:lib my-nest-lib --publishable --importPath=@my-workspace/my-nest-lib


# Build
nx build nest-api
nx build my-nest-lib

# Serve
nx serve nest-api

## Important
When adding angular to the frontend

Application Proxies
Generating Nest applications has an option to configure other projects in the workspace to proxy API requests. This can be done by passing the --frontendProject with the project name you wish to enable proxy support for.

nx g @nrwl/nest:app nest-api --frontendProject angular-frontend