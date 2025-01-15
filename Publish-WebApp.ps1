# BUILD ANGULAR APPLICATION

Write-Host [BUILD ANGULAR APPLICATION]  -ForegroundColor DarkYellow

npx @angular/cli build app-host --configuration production


# PUBLISH TO AZURE

Write-Host [PUBLISH TO AZURE]  -ForegroundColor DarkYellow

Push-Location $PSScriptRoot

Set-Location .\dist\app-host\browser\

az webapp up --name eima-webapp --plan eima-app-service-plan --resource-group eima-rg --html

Pop-Location
