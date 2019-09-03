# Getting Started with Ronin Development
### So you want to get started with ronin development and contribution? Follow the steps below to ensure you have all the requirements for your system setup. 

## Requirements
- Docker Compose
- Yarn or NPM

## Installing Docker Desktop 
For Mac or Linux systems, docker can be installed with minimal configuration. On Windows systems, docker has to be configured alongside of WSL in order to make use of shared drives/directories. 

Follow the instructions below to install docker for your specific system.

## Windows Installation 
#### Install WSL(if already installed skip to [Installing Docker Desktop on Windows](#Install-Docker-Desktop-on-Windows))
> Instructions are from the microsoft wsl docs which can be found [here.](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
1. Open powershell as administrator and run:
```console
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```
2. Restart your computer if prompted.
3. Install the distro of your choice from the microsoft store: 

Here is a list of the tested distros and their support level.
|Distro|Support|
| - | - |
|[Ubuntu 18.04](https://www.microsoft.com/en-ca/p/ubuntu-1804-lts/9n9tngvndl3q?rtc=1&activetab=pivot:overviewtab)|Supported|

#### Install Docker Desktop on Windows
1. Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop) for Windows.

#### Configuring WSL with Docker
Follow the instructions found [here.](https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly)

#### Install Yarn
Download and install [Yarn](https://yarnpkg.com/en/docs/install#windows-stable) for Windows.

## Mac Installation
# 🚧 UNDER CONSTRUCTION 🚧

## Linux Installation
# 🚧 UNDER CONSTRUCTION 🚧

## Configure ronin-cli for development
Since the ronin-cli is a command line tool, you must first unlink the production build and link the development repo.
1. Ensure that ronin-cli is uninstalled globally: 
```console
npm uninstall -g ronin-cli
```
or 
```console
yarn global remove ronin-cli
```
2. Fork the ronin-cli repo to your account. And then clone to the desired location:

#### Example: 
```console
git clone https://github.com/Squishy123/ronin-cli.git
```
#### *Replace Squishy123 with your github username

3. Navigate into the cloned directory and install project dependencies:
```console
yarn 
```
4. In the cloned directory, link ronin-cli as a system variable. Run: 
```console
yarn link
```

## Development Practices
- ### Ensure you are working off a forked repo
- ### If you are referencing an issue, make sure to create a separate branch with the following name: issueNumber_issueName 
- ### Before making a pull-request make sure you rebase against the dev branch: 
``` 
git rebase -i origin/develop
```
- ### PR's will be approved after they are reviewed and edited. 

## Things to Checkout:
- https://gist.github.com/ravibhure/a7e0918ff4937c9ea1c456698dcd58aa