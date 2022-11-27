# E2E-Hometask-ABerling

## SETUP


1. Clone this repository to your workstation.  

2. Enter the root directory

3. Run `yarn install` command to install all dependencies.  


## TESTS


`yarn test` -  run all tests

`yarn search` - search bar functionality

`yarn deals` - daily deals functionality


## POPUP

I managed to avoid the popup issue entirely by using a different endpoint 
 -> https://www.newegg.com/home

I also added a snippet that should work to avoid the popup using browser.refresh() in a comment in `steps.js`