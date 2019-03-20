<!-- ## Galactic Age Calculator
---
#### _Javascript practice, homework as assigned by Epicodus, 3/15/19_

#### Slater Smith

### Description

Javascript application to identify user's age on various planets in Earth's solar system based on birthdate and current date. Because each planet in the solar system carries a different solar year length, meaning that Earth, Mercury, Venus, Mars, and Jupiter are a length of 1, .24, .62, 1.88, and 11.86 Earth years long respectively. This application tells the user how 'old' they are on each of these planets, and how their age relates to their particular life expectancy calculated by planet year length.

#### Program behavior specifications:
| Behavior | Input | Output |
| --------------------------- | ------------------- | ------------------- |
| Application returns user’s current age | (User's birthday year, month, and day) 1989, 10, 22 | 29 |
| Application returns user’s current age in Mercury years | 1989, 10, 22 | 122 |
| Application returns user’s current age in Venus years | 1989, 10, 22 | 47 |
| Application returns user’s current age in Mars years | 1989, 10, 22 | 15 |
| Application returns user’s current age in Jupiter years | 1989, 10, 22 | 2 |
| Application returns user’s life expectancy for all planets | (User's birthday year, month, day, & life expectancy on Earth for user’s particular demographic) 1989, 10, 22, 75 | Current life expectancy divided by .24,  .62, 1.88, and 11.86 for Mercury, Venus, Mars, and Jupiter respectively. |
| Application returns the difference between user age and life expectancy for all planets (if positive) | 2019, 10, 22, 75 | 'You have 45 years left to live on Earth, 190 years left to live on Mercury, 73 years left to live on Venus, 24 years left to live on Mars, and 4 years left to live on Jupiter...' |
| Application returns exceeded age expectancy for all planets (if difference is positive) | 1899, 10, 22, 75 | 'You have exceeded your life expectancy by 45 Earth years, 185 Mercury years, 72 Venus years, 24 Mars years, and 4 Jupiter years...' |

### Technologies and Resources

* Javascript
* Jasmine
* Karma
* Webpack
* npm

### Setup Instructions

1. Clone this repository at https://github.com/SlaterJamesSmith/galactic-age-calc
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. In terminal, enter "$ npm i" to install node package manager
6. In terminal, navigate into project by entering enter "$ cd co-working-project"
7. Next, in terminal enter "$ npm run build"
8. Open directory in preferred text editor and open galactic-calc.spec.js to view and/or modify specifications
9. Run '$npm run test' in terminal to test specs. A new browser window should open to alert you to whether tests were run successfully


### Roadmap
This application still needs work before it can be considered complete. It still needs:
* A front end interface, html, & styling

### License

*{This software is licensed under the MIT license}*
Copyright (c) 2019 **_{Slater Smith}_** -->
