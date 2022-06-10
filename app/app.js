var randomLegendApp = angular.module('randomLegendApp',[]);

randomLegendApp.controller('legendController',['$scope',function($scope){

$scope.randomLegend=function(noPicks){
    let pick = [];
    let seen = [];
    let noLegends = $scope.legends.length;
    // Reset picked values
    for (let i=0; i<noLegends;i++){
        $scope.legends[i].picked=false;
    }
    // Randomise order each time
    for (let i=0; i<noLegends;i++){
        $scope.legends[i].pickNo=Math.random();
    }
    // Randomise pick for i picks 
    pick[0]=Math.floor(Math.random()*(noLegends));
    seen[0]=pick[0];
    for (i=1;i<=noPicks;){
        pick[i]=Math.floor(Math.random()*(noLegends));
        if (seen.includes(pick[i])==true){
            pick[i]=Math.floor(Math.random()*(noLegends));
        }
        else{
            seen[i]=pick[i];
            i++;
        }
    }
    for (i=0;i<noPicks+1;i++){
        $scope.legends[pick[i]].picked=true;
    }
}

$scope.legends=[
    {
        name: "Bloodhound",
        type: "Recon",
        picked: false,
        thumb:"content/img/bloodhound.png",
        pickNo: Math.random()
    },
    {
        name: "Gibraltar",
        type: "Defence",
        picked: false,
        thumb:"content/img/gibraltar.png",
        pickNo: Math.random()
    },
    {
        name: "Lifeline",
        type: "Medic",
        picked: false,
        thumb:"content/img/lifeline.png",
        pickNo: Math.random()
    },
    {
        name: "Pathfinder",
        type: "Recon",
        picked: false,
        thumb:"content/img/pathfinder.png",
        pickNo: Math.random()
    },
    {
        name: "Wraith",
        type: "Assult",
        picked: false,
        thumb:"content/img/wraith.png",
        pickNo: Math.random()
    },
    {
        name: "Bangalore",
        type: "Assult",
        picked: false,
        thumb:"content/img/bangalore.png",
        pickNo: Math.random()
    },
    {
        name: "Caustic",
        type: "Defence",
        picked: false,
        thumb:"content/img/caustic.png",
        pickNo: Math.random()
    },
    {
        name: "Mirage",
        type: "Assult",
        picked: false,
        thumb:"content/img/mirage.png",
        pickNo: Math.random()
    },
    {
        name: "Octane",
        type: "Assult",
        picked: false,
        thumb:"content/img/octane.png",
        pickNo: Math.random()
    },
    {
        name: "Wattson",
        type: "Defence",
        picked: false,
        thumb:"content/img/wattson.png",
        pickNo: Math.random()
    },
    {
        name: "Crypto",
        type: "Recon",
        picked: false,
        thumb:"content/img/crypto.png",
        pickNo: Math.random()
    },
    {
        name: "Revenant",
        type: "Assult",
        picked: false,
        thumb:"content/img/revenant.png",
        pickNo: Math.random()
    },
    {
        name: "Loba",
        type: "Medic",
        picked: false,
        thumb:"content/img/loba.png",
        pickNo: Math.random()
    },
    {
        name: "Rampart",
        type: "Defence",
        picked: false,
        thumb:"content/img/rampart.png",
        pickNo: Math.random()
    },
    {
        name: "Horizon",
        type: "Assult",
        picked: false,
        thumb:"content/img/horizon.png",
        pickNo: Math.random()
    },
    {
        name: "Fuse",
        type: "Assult",
        picked: false,
        thumb:"content/img/fuse.png",
        pickNo: Math.random()
    },
    {
        name: "Valkyrie",
        type: "Recon",
        picked: false,
        thumb:"content/img/valkyrie.png",
        pickNo: Math.random()
    },
    {
        name: "Seer",
        type: "Recon",
        picked: false,
        thumb:"content/img/seer.png",
        pickNo: Math.random()
    },
    {
        name: "Ash",
        type: "Assult",
        picked: false,
        thumb:"content/img/ash.png",
        pickNo: Math.random()
    },
    {
        name: "Mad Maggie",
        type: "Assult",
        picked: false,
        thumb:"content/img/madmaggie.png",
        pickNo: Math.random()
    },
    {
        name: "Newcastle",
        type: "Defence",
        picked: false,
        thumb:"content/img/newcastle.png",
        pickNo: Math.random()
    }
];
//console.log(angular.toJson($scope.legends)); // this helps get the data into a json format for transfer 
//console.log($scope.legends.length);
console.log($scope.legends);
}]);
