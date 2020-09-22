
# Salesforce Mobile SDK - LWC Flow Example

This repository contains a working build artifact of a Hybrid Remote mobile app built with the new Lightning Web Component embed technique to leverage LWC in the context of the Mobile SDK. In particular, this example has been built to show how a Lightning Flow can be embedded in a mobile app via the SDK.

# Pre-reqs

* Xcode and Xcode CLI tools
* Node and npm
* Cocoa Pods

# Installation Instructions

1. Clone the repo
2. With SFDX, authorize your desired dev org.
3. Deploy the files in the `server` directory to your Salesforce org using `sfdx force:source:deploy -u <your dev org user name>  --sourcepath /HybridLwcTemplate/server/force-app/main/default/`
4. Run `npm install` from the root repo
5. Run `sfdx mobilesdk:hybrid:createwithtemplate -p ios -r HybridLwcTemplate -n yourAppName -k com.yourCompany.yourApp -o yourOrganization`
6. CD into the `mobileLWCFlow/platform/ios` folder
7. Run `pod install` 
8. Open the workspace file `mobileLWCFlow.xcworkspace`
9. Change the build target in the selector to the right of the play / stop buttons on XCode to `mobileLWCFlow`
10. Build and see your magic app