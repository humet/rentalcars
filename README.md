# Technical exercise for https://www.rentalcars.com.

## Completed Summary

- Production version: https://rentalcars.robh-uk.now.sh/
- React
- Search results on user typing
- Starts search on 2 or more characters
- Pulls data from the Rental Cars API
- Error messages for no results or other error
- BEM CSS naming
- Tested on IE10+ (Polyfill to work with IE10)

## Original Objective

Create a Pick-up Location input box and apply the styling as per www.rentalcars.com homepage.

### Format

Using any framework you like, implement the following user stories, and provide a link to a git repo with everything needed to run your example. Quality should be considered as a default.

You are not limited to any technology so impress us with what you are comfortable with. The solution would work in all modern browsers (IE10+)

For brevity, this test is for desktop only, however consideration should be made for a mobile first approach.

### Test 1
#### AC1:
Given I am a visitor to the rentalcars.com homepage 
Then I should see a Search Widget 
And a text box labelled 'Pick-up Location' 
And the styling as per the rentalcars.com homepage.
 
#### AC2:
Given I am on the Search box within the rentalcars.com homepage
Then I should see the placeholder text within the 'Pick Up Location' input box: 'city, airport, station, region and district...'
AND the styling is as per the rentalcars.com homepage
 
#### AC3:
Given I am on the Search box within the rentalcars.com homepage
When I click/tap into 'Pick Up Location' box 
Then a focus state is applied (browser default)
 
#### AC4: AA criteria (optional)
Given I am on the Search box within the rentalcars.com homepage
When I use a screen reader
Then the correct criteria is read out for the 'Pick Up Location' box

### TEST 2
 
Objective: Return raw data/search results but without any styling

#### AC1:
Given I am a visitor on the Search Box within the rentalcars.com homepage
When I enter a single alphanumeric character into the pick up location
Then the placeholder text disappears
AND no search results list is displayed
 
#### AC2:
Given I am a visitor on the Search Box within the rentalcars.com homepage
When I enter 2 or more alphanumeric characters into the pick up location 
Then I see a list of search results 

#### AC3:
Given I have entered a matched search term for pick up location on desktop
Then the maximum number of search results displayed is 6
 
#### AC4:
Given I am a visitor on the Search Box within the rentalcars.com homepage
When I enter a search term in the pick up location that is not recognised eg XX
Then I should see the message 'No results found'
 
#### AC5:
Given the search results list is displayed 
When I remove the search term leaving only 1 character 
Then the search results list no longer displayed

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
