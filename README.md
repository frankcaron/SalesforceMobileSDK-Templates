
# Salesforce Mobile SDK - LWC Flow Example

This repository contains a working build artifact of a Hybrid Remote mobile app built with the new Lightning Web Component embed technique to leverage LWC in the context of the Mobile SDK. In particular, this example has been built to show how a Lightning Flow can be embedded in a mobile app via the SDK.

# Pre-reqs

* Xcode and Xcode CLI tools
* Node and npm
* Cocoa Pods

# Installation Instructions

1. Clone the repo
2. Deploy the files in the `server` directory to your Salesforce org. This includes a Visualforce page which embeds the desired components.
3. Run `npm install` from the root repo
4. CD into the `mobileLWCFlow/platform/ios` folder
5. Run `pod install` 
6. Open the workspace file `mobileLWCFlow.xcworkspace`
7. Change the build target in the selector to the right of the play / stop buttons on XCode to `mobileLWCFlow`
8. Build