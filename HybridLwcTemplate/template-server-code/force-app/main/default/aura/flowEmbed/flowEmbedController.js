({
    init : function (component) {
        // Find the component whose aura:id is "flowData"
        var flow = component.find("myEmbeddedFlow");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Test_Flow_Embed");
    },
})