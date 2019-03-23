This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
### `yarn`
or
### `npm install`

## Additional Branch
There is an additional branch called `recompose` where I replaced the classes with the `Recompose` HOCS.

## Available Scripts
### `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
[x] actions

[x] reducers

[x] `<App />` component - `App.test.tsx`: snapshot & lifecycle testing

[x] `<Header />` component - `Header.test.tsx`: snapshot & `checkTopOffset` method testing

### `yarn build`
Builds the app for production to the `build` folder.

[x] SSR
The HTML page is generated completely by the `react-static-generator`. The result can be seen in `build/index.html`.

## Other info
[x] installed & configured Tslint, Prettier, Editorconfig, Husky

[x] installed Redux & Redux Thunks

[x] installed StyledComponents
The customizations are loaded through the ThemeProvider. The default theme configuration can be found in `src/store/theme/constants`

[x] Installed Axios for fetching the Theme.
Initially, the header has a dark background, but after 2 seconds, the light theme is loaded (through `axiox-mock-adapter`).

[x] Installed & Configured the `react-redux-loading-bar`. A red line is displayed on top to track fetch progress.

[x] Header Top Menu is horizontally scrollable;

[x] The Top Menu gets hidden when the distance from top is higher than 400px;

[x] The Header gets hidden and the Burger Menu becomes sticky after 800px;

[x] The scrolling is throttled for performance reasons.

[x] The Side Menu is displayed when the Burger Menu button is clicked. The Side Menu is animated.
