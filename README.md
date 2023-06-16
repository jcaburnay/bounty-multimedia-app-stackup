# Multimedia Application - Bounty

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running locally

Before you can run the application locally, you need to install all packages first, run this on your terminal pointing at your root directory:

`$ npm install`

Then, you can run:

`$ npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

I decided on features that are very common for file management applications, these are sorting of files and being able to search file names. With these features it will help users to easily navigate to their files. For example, a user has so many files and he/she knows that the file he/she is looking for is a very big file then he/she can use the sort by functionality, or he/she can also search the name of the file he/she is looking for. For the sorting, I added a functionality that a user can select from the dropdown on how the files will be arranged depending on the selected option. On this specific bounty quest, I included the following options: name, type, and size. Selecting “Name” will arrange the files by alphabetical order (in ascending order), selecting “Type” will arrange the files by total number of specific type (in descending order), and selecting “Size” will arrange the files by the file size (also in descending order). As for the search functionality, it is just a simple includes() JavaScript function. Typing a search term and pressing “Enter” or clicking the Search button will trigger the search. It will filter the files by name depending on the search term. I also added a color (somewhat blue) for when a user selected a file. I also added a z-index for the chart since when there’s an active file preview, e.g. video file, the chart is somehow behind the video file. I also refactor some of the components, e.g., Chart.js, File.js, ViewFile.js. This will help developers to have a better understanding of the codebase. It also helps in separation of concerns.
