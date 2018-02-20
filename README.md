# Drizzle Truffle Box

This box comes with everything you need to start using smart contracts from a react app with Drizzle. It includes `drizzle`, `drizzle-react` and `drizzle-react-components` to give you a complete overview of Drizzle's capabilities.

## Installation

1. Install Truffle and Ganache CLI globally. If you prefer, the graphical version of Ganache works as well!
    ```javascript
    npm install -g truffle
    npm install -g ganache-cli
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```javascript
    truffle unbox drizzle
    ```

3. Run the development blockchain, we recommend passing in a blocktime. Otherwise, its difficult to track things like loading indicators because Ganache will mine instantly.
    ```javascript
    // 3 second blocktime.
    ganache-cli -b 3
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

5. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```

6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

7. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

8. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## FAQ

* __Where do I find more information about Drizzle?__

    Check out our [documentation](http://truffleframework.com/docs/drizzle/getting-started) or any of the three repositories ([`drizzle`](https://github.com/trufflesuite/drizzle), [`drizzle-react`](https://github.com/trufflesuite/drizzle-react), [`drizzle-react-components`](https://github.com/trufflesuite/drizzle-react-components)).

* __Why is there both a truffle.js file and a truffle-config.js file?__

    `truffle-config.js` is a copy of `truffle.js` for compatibility with Windows development environments. Feel free to it if it's irrelevant to your platform.

* __Where is my production build?__

    The production build will be in the `build_webpack` folder. This is because Truffle outputs contract compilations to the `build` folder.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
