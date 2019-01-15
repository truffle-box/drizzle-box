# Drizzle Truffle Box

This box comes with everything you need to start using smart contracts from a react app with Drizzle. It includes `drizzle`, `drizzle-react` and `drizzle-react-components` to give you a complete overview of Drizzle's capabilities.

## Installation

First ensure you are in a new and empty directory.

1. Run the `unbox` command via `npx` and skip to step 3. This will install all necessary dependencies. A Create-React-App is generated in the `app` directory.
   ```js
   npx truffle unbox drizzle
   ```

2. Alternatively, you can install Truffle globally and run the `unbox` command.
    ```javascript
    npm install -g truffle
    truffle unbox drizzle
    ```

3. Run the development console.
    ```javascript
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

5. In the `app` directory, we run the React app. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd app
    npm run start
    ```

6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // inside the development console
    test

    // outside the development console
    truffle test
    ```

7. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // ensure you are inside the app directory when running this
    npm run test
    ```

8. To build the application for production, use the build script. A production build will be in the `app/build` folder.
    ```javascript
    // ensure you are inside the app directory when running this
    npm run build
    ```

## FAQ

* __Where do I find more information about Drizzle?__

    Check out our [documentation](http://truffleframework.com/docs/drizzle/getting-started) or any of the three repositories ([`drizzle`](https://github.com/trufflesuite/drizzle), [`drizzle-react`](https://github.com/trufflesuite/drizzle-react), [`drizzle-react-components`](https://github.com/trufflesuite/drizzle-react-components)).

* __Where is my production build?__

    The production build will be in the `app/build` folder after running `npm run build` in the `app` folder.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
