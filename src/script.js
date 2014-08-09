(function(){
  var
  time = 0,
  default_array = [], //default settings
  live_array = [], //what is set now as setting
  
  /**
   * what pressing the keys performs
   * @return {[type]} [description]
   */
  keypress = function(){
    
    liveArrayFill();
  },

  /**
   * sets the data of the inputs to live array
   * @return {[type]} [description]
   */
  liveArrayFill = function(){},
  
  /**
   * saves the data of live array to the default array
   * @return {[type]} [description]
   */
  defaultArrayFill = function(){},

  /**
   * returns the setting data in live array to default values in default array
   */
  setLiveToDefault = function(){},

  /**
   * [timer description]
   * @return {[type]} [description]
   */
  timer = function(){
    time ++;
    if (time == 4){
      time = 0;
    }
  },

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
    setInterval(timer, 1);
    defineLiveArray();
    angular
      .module('mainApp', [])
      .controller('mainCtrl',['$scope', control]);
  };
  return {init: init};
})().init();