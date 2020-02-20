import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle, generateStore } from "@drizzle/store";

import "./App.css";

import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore)

const App = () => {
    return (
      <DrizzleContext.Provider drizzle={drizzle}>
        <DrizzleContext.Consumer>
          {drizzleContext => {
            const {drizzle, drizzleState, initialized} = drizzleContext;
            
            if(!initialized) {
              return "Loading..."
            }
            
            return (
              <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
              )
            }}
        </DrizzleContext.Consumer>
      </DrizzleContext.Provider>
    );
  }

export default App;
