    
    $$\      $$\                 $$\           $$\                              
    $$$\    $$$ |                $$ |          $$ |                             
    $$$$\  $$$$ | $$$$$$\   $$$$$$$ |$$\   $$\ $$ | $$$$$$\   $$$$$$\  $$$$$$\  
    $$\$$\$$ $$ |$$  __$$\ $$  __$$ |$$ |  $$ |$$ | \____$$\ $$  __$$\ \____$$\ 
    $$ \$$$  $$ |$$ /  $$ |$$ /  $$ |$$ |  $$ |$$ | $$$$$$$ |$$ |  \__|$$$$$$$ |
    $$ |\$  /$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |$$  __$$ |$$ |     $$  __$$ |
    $$ | \_/ $$ |\$$$$$$  |\$$$$$$$ |\$$$$$$  |$$ |\$$$$$$$ |$$ |     \$$$$$$$ |
    \__|     \__| \______/  \_______| \______/ \__| \_______|\__|      \_______|            

## Installation Requirements
- NodeJS https://nodejs.org/en/download/
- Git https://git-scm.com/downloads (optional)

Each installation can be checked by `npm --version` and `git --version`

## Developer Setup
- If Git is used, follow this guide for "Setting up Git" and "Authenticating with GitHub from Git" (either HTTPS/SSH):  https://docs.github.com/en/get-started/quickstart/set-up-git
- When setting up for development, you'll need to set up a GitHub account to connect your machine with any accessible repository. Doing so allows you to retrieve the latest updates to the project with one command (e.g., `git pull`).

## Chad Setup
1. In the GitHub page, under the `mainframe` branch, a green button named "Code" should give the option to "Download ZIP"
2. After downloading the ZIP, use a shell/terminal (e.g., PowerShell/Bash) or a code editor to access wherever you put the downloaded ZIP
-- Commands to go through shell/terminal: `cd [name of folder]`, `ls` to see a list of files, pressing tab to autocomplete partially typed folders
3. When inside the Modulara-mainframe folder, type in `npm install`. If necessary, `npm audit fix --force` if there's any "high" vulnerabilities (or ignore it). 
4. After installing the files, `npm start` to run the website.
