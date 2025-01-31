Template.navbar_menu.events({
    'click .nav-home': function() {
        FlowRouter.go('home');
    },
    'click .nav-uploadDNA': function() {
    	FlowRouter.go('uploadDNA');
    },
    'click .nav-newRiskGroup' : function() {
        FlowRouter.go('addNewRiskGroup');
    }, 
    'click .nav-myDNA' : function() {
        FlowRouter.go('myDNA');
    }
});

Template.navbar_menu.helpers({
    activeIfNameIs: function(name) {
        if (FlowRouter.getRouteName() === name) {
            return "active";
        }
    }
});
