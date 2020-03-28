# dotnet-build-test-msdeploy
.NET core build test and msdeploy to deploy your website's publish folder to your personally hosted IIS server.

# Tested project with example
https://github.com/RahulParmarRP/TestGithubActions

# Configuring a Web Server for Web Deploy Publishing
https://docs.microsoft.com/en-us/aspnet/web-forms/overview/deployment/configuring-server-environments-for-web-deployment/configuring-a-web-server-for-web-deploy-publishing-web-deploy-handler

# Using Windows PowerShell commands in a DockerFile to set up Windows Containers

https://docs.microsoft.com/en-us/dotnet/architecture/containerized-lifecycle/design-develop-containerized-apps/set-up-windows-containers-with-powershell

# To-Do

Create a README.md file that specifies the following information:

- A detailed description of what the action does.
- Required input and output arguments.
- Optional input and output arguments.
- Secrets the action uses.
- Environment variables the action uses.
    - PROJECT_DIRECTORY_PATH
    - IIS_SERVER_COMPUTER_NAME         
    - IIS_WEBSITE_NAME      
    - IIS_SERVER_USERNAME       
    - IIS_SERVER_PASSWORD       
    - RECYCLE_APP_NAME      
    - WEBSITE_CONTENT_PATH           
- An example of how to use your action in a workflow.
