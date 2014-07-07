(function(){
  var
  time = 0,
  default_array = [], //defaults
  live_array = [], //what is set now
  /**
   * the link between HTML and JS file
   * @param  {[type]} s is $scope
   * @return {[type]}   [description]
   */
  control = function(s){

  },
  
  /**
   * runs the total JS file as an angular module
   */
  init = function(){
    angular
      .module('mainApp', [])
      .controller('mainCtrl',['$scope', control]);
  };
})().init();