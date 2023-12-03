import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { WagmiConfig, createConfig } from "wagmi";
// import {
//   ConnectKitProvider,
//   ConnectKitButton,
//   getDefaultConfig,
// } from "connectkit";
// const config = createConfig(
//   getDefaultConfig({
//     // Required API Keys
//     alchemyId: process.env.ALCHEMY_ID, // or infuraId
//     walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

//     // Required
//     appName: "Your App Name",

//     // Optional
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//   })
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  // <WagmiConfig config={config}>
  //   <ConnectKitProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
