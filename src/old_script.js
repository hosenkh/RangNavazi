    var time = 0,
    //defaults:
    default_array = [],
    //what is set now
    live_array = [],
    channelCounter = 0;
    for (i=0;i<3;i++){
      live_array.push({cind: i, nam: "col", check: 1, valu: false});
      live_array.push({cind: i, nam: "col", check: 2, valu: false});
      live_array.push({cind: i, nam: "col", check: 3, valu: false});
      live_array.push({cind: i, nam: "mov", check: 1, valu: true});
      live_array.push({cind: i, nam: "sig", check: 1, valu: true});
      live_array.push({cind: i, nam: "pos", check: 1, valu: false});
      live_array.push({cind: i, nam: "pos", check: 2, valu: false});
      live_array.push({cind: i, nam: "pos", check: 3, valu: false});
      live_array.push({cind: i, nam: "lev", check: 1, valu: false});
      live_array.push({cind: i, nam: "lev", check: 2, valu: false});
      live_array.push({cind: i, nam: "sid", check: 1, valu: true});
      live_array.push({cind: i, nam: "sid", check: 2, valu: false});
      live_array.push({cind: i, nam: "fin", check: 1, valu: false});
      live_array.push({cind: i, nam: "fou", check: 1, valu: true});
      live_array.push({cind: i, nam: "sin", check: 1, valu: true});
      live_array.push({cind: i, nam: "que", check: 1, valu: false});
      live_array.push({cind: i, nam: "mut", check: 1, valu: false});
    }
    clock = function (){
      time ++;
      if (time == 4){time = 0;}
    };
    setInterval(clock,1);
    control = function($scope){
      $scope.main = [];
      for (i=0;i<480;i++){
        $scope.main.push({ind:i, ext:{R:0,G:0,B:0}});
      }
      $scope.ri = new Array(11);
      for (i=0;i<11;i++){
        $scope.ri[i] = {rind : i, cells : [{cind : 0, check1: false, check2: false, check3: false, check1vis: true, check2vis: true, check3vis: true},{cind : 1, check1: false, check2: false, check3: false, check1vis: true, check2vis: true, check3vis: true},{cind : 2, check1: false, check2: false, check3: false, check1vis: true, check2vis: true, check3vis: true}]};
      }
      (function tableContent(){
        for (i=0;i<3;i++){
          $scope.ri[0].cells[i].tex = "Color B, G, R";
          $scope.ri[1].cells[i].tex = "Movement";
          $scope.ri[2].cells[i].tex = "Sign";
          $scope.ri[3].cells[i].tex = "Position 4, 2, 1";
          $scope.ri[4].cells[i].tex = "Level -, +";
          $scope.ri[5].cells[i].tex = "Side R, L";
          $scope.ri[6].cells[i].tex = "fade In";
          $scope.ri[7].cells[i].tex = "Fade Out";
          $scope.ri[8].cells[i].tex = "Sinusoidal";
          $scope.ri[9].cells[i].tex = "Queue";
          $scope.ri[10].cells[i].tex = "Mute";
          $scope.ri[0].cells[i].nam = "col";
          $scope.ri[1].cells[i].nam = "mov";
          $scope.ri[2].cells[i].nam = "sig";
          $scope.ri[3].cells[i].nam = "pos";
          $scope.ri[4].cells[i].nam = "lev";
          $scope.ri[5].cells[i].nam = "sid";
          $scope.ri[6].cells[i].nam = "fin";
          $scope.ri[7].cells[i].nam = "fou";
          $scope.ri[8].cells[i].nam = "sin";
          $scope.ri[9].cells[i].nam = "que";
          $scope.ri[10].cells[i].nam = "mut";
          $scope.ri[1].cells[i].check2vis = false;
          $scope.ri[1].cells[i].check3vis = false;
          $scope.ri[2].cells[i].check2vis = false;
          $scope.ri[2].cells[i].check3vis = false;
          $scope.ri[4].cells[i].check3vis = false;
          $scope.ri[5].cells[i].check3vis = false;
          $scope.ri[6].cells[i].check2vis = false;
          $scope.ri[6].cells[i].check3vis = false;
          $scope.ri[7].cells[i].check2vis = false;
          $scope.ri[7].cells[i].check3vis = false;
          $scope.ri[8].cells[i].check2vis = false;
          $scope.ri[8].cells[i].check3vis = false;
          $scope.ri[9].cells[i].check2vis = false;
          $scope.ri[9].cells[i].check3vis = false;
          $scope.ri[10].cells[i].check2vis = false;
          $scope.ri[10].cells[i].check3vis = false;
        }
      })();
      vari = $scope.ri;
      $scope.defaultArrayFill = function(){
        // for (i=0;i<51;i++){
        //   default_array[i] = {};
        //   default_array[i].cind = live_array[i].cind;
        //   default_array[i].nam = live_array[i].col;
        //   default_array[i].check = live_array[i].check;
        //   default_array[i].valu = live_array[i].valu;
        // }
        default_array = JSON.parse(JSON.stringify(live_array));
        console.log("defaultArrayFill");
      };
      $scope.defaultArrayFill();
      setCheckBoxToLive = function(){  
        di = 0;
        for (i=0;i<3;i++){
          for (j=0;j<17;j++){
            for (k=0;k<11;k++){
              if (live_array[di].nam === $scope.ri[k].cells[i].nam) { 
                switch (live_array[di].check){
                  case 1: 
                  $scope.ri[k].cells[i].check1 = live_array[di].valu; break;
                  case 2:
                  $scope.ri[k].cells[i].check2 = live_array[di].valu; break;
                  case 3:
                  $scope.ri[k].cells[i].check3 = live_array[di].valu; break;
                }
              }
            }
            di ++;
          }
        }
         console.log("setCheckBoxToLive");
      };
      (function hey() {setCheckBoxToLive();})();
      setLiveToDefault = function(){  
        // for (i=0;i<51;i++){
        //   live_array[i] = {};
        //   live_array[i].cind = default_array[i].cind;
        //   live_array[i].nam = default_array[i].col;
        //   live_array[i].check = default_array[i].check;
        //   live_array[i].valu = default_array[i].valu;
        // }
        live_array = JSON.parse(JSON.stringify(default_array));
        console.log("setLiveToDefault");
      };
      test = function(){setLiveToDefault(); setCheckBoxToLive();};
      liveArrayFill = function(){  
        di = 0;
        for (i=0;i<3;i++){
          for (j=0;j<17;j++){
            for (k=0;k<11;k++){
              if (live_array[di].nam === $scope.ri[k].cells[i].nam) { 
                switch (live_array[di].check){
                  case 1: 
                  live_array[di].valu = $scope.ri[k].cells[i].check1; break;
                  case 2:
                  live_array[di].valu = $scope.ri[k].cells[i].check2; break;
                  case 3:
                  live_array[di].valu = $scope.ri[k].cells[i].check3; break;
                }
              }
            }
            di ++;
          }
        }
        console.log("liveArrayFill");
      };
      $scope.tc = function(){liveArrayFill();};
      $scope.sty1 = function(cell){
        if (cell.check1vis === false){
          return {display: "none"};
        }
      }
      $scope.sty2 = function(cell){
        if (cell.check2vis === false){
          return {display: "none"};
        }
      }
      $scope.sty3 = function(cell){
        if (cell.check3vis === false){
          return {display: "none"};
        }
      }
      

      $scope.tail = "";
      $scope.backgroundR = 127;
      $scope.backgroundG = 127;
      $scope.backgroundB = 127;
      x1 = x2 = x3 = x4 = x5 = true;      
      $scope.spc1 = function(){
        x1 = !x1;
        if ($scope.speed <1) {$scope.speed = 1} else{
        if ($scope.speed <2.5) {$scope.speed = 2} else{
        if ($scope.speed <3.5) {$scope.speed = 3} else{
        if ($scope.speed <4.5) {$scope.speed = 4} else{
        if ($scope.speed <5.5) {$scope.speed = 5} else{
        if ($scope.speed <7) {$scope.speed = 6} else{
        if ($scope.speed <9) {$scope.speed = 8} else{
        if ($scope.speed <11) {$scope.speed = 10} else{
        if ($scope.speed <13.5) {$scope.speed = 12} else{
        if ($scope.speed <15.5) {$scope.speed = 15} else{
        if ($scope.speed <18) {$scope.speed = 16} else{
        if ($scope.speed <22) {$scope.speed = 20} else{
        if ($scope.speed <27) {$scope.speed = 24} else{
        if ($scope.speed <35) {$scope.speed = 30} else{
        if ($scope.speed <44) {$scope.speed = 40} else{
        if ($scope.speed <54) {$scope.speed = 48} else{
        if ($scope.speed <70) {$scope.speed = 60} else{
        if ($scope.speed <100) {$scope.speed = 80} else{
        {$scope.speed = 120} }}}}}}}}}}}}}}}}}}
      };
      $scope.ins1 = function(){
        if (x1) {return {display: 'auto'};} else {return {display: 'none'};}
      };
      $scope.spc2 = function(){
        x2 = !x2;
      };
      $scope.ins2 = function(){
        if (x2) {return {display: 'auto'};} else {return {display: 'none'};}
      };
      $scope.spc3 = function(){
        x3 = !x3;
      };
      $scope.ins3 = function(){
        if (x3) {return {display: 'auto'};} else {return {display: 'none'};}
      };
      $scope.spc4 = function(){
        x4 = !x4;
      };
      $scope.ins4 = function(){
        if (x4) {return {display: 'auto'};} else {return {display: 'none'};}
      };
      $scope.spc5 = function(){
        x5 = !x5;
      };
      $scope.ins5 = function(){
        if (x5) {return {display: 'auto'};} else {return {display: 'none'};}
      };

      functionalKeys = {
        c1ss: function(){
          console.log('w');
        },
        c1sm: function(){
          console.log('s');
        },
        c1sw: function(){
          console.log('x');
        },
        c1ms: function(){
          console.log('e');
        },
        c1mm: function(){
          console.log('d');
        },
        c1mw: function(){
          console.log('c');
        },
        c1ls: function(){
          console.log('r');
        },
        c1lm: function(){
          console.log('f');
        },
        c1lw: function(){
          console.log('v');
        },
        c2ss: function(){
          console.log('t');
        },
        c2sm: function(){
          console.log('g');
        },
        c2sw: function(){
          console.log('b');
        },
        c2ms: function(){
          console.log('y');
        },
        c2mm: function(){
          console.log('h');
        },
        c2mw: function(){
          console.log('n');
        },
        c2ls: function(){
          console.log('u');
        },
        c2lm: function(){
          console.log('j');
        },
        c2lw: function(){
          console.log('m');
        },
        c3ss: function(){
          console.log('i');
        },
        c3sm: function(){
          console.log('k');
        },
        c3sw: function(){
          console.log(',');
        },
        c3ms: function(){
          console.log('o');
        },
        c3mm: function(){
          console.log('l');
        },
        c3mw: function(){
          console.log('.');
        },
        c3ls: function(){
          console.log('p');
        },
        c3lm: function(){
          console.log(';');
        },
        c3lw: function(){
          console.log('/');
        }
      };

      (function status(){
        $scope.key = function($event){
          // console.log($event.keyCode);
          switch ($event.keyCode) {
            case 27: //esc
              channelCounter = 0;
              setLiveToDefault();
              setCheckBoxToLive(); 
            break;
            case 50: //2
              if(channelCounter <3){
              $scope.ri[0].cells[channelCounter].check1 = true; 
              channelCounter++; }
            break;
            case 51: //3
              if(channelCounter <3){
              $scope.ri[0].cells[channelCounter].check2 = true; 
              channelCounter++; }
              break;
            case 52: //4
              if(channelCounter <3){
              $scope.ri[0].cells[channelCounter].check3 = true; 
              channelCounter++; }
              break;
            case 53: //5
              if(channelCounter <3){
              $scope.ri[0].cells[channelCounter].check1 = true; 
              $scope.ri[0].cells[channelCounter].check2 = true; 
              channelCounter++; }
            break;
            case 54: //6
              if(channelCounter <3){
              $scope.ri[0].cells[channelCounter].check2 = true; 
              $scope.ri[0].cells[channelCounter].check3 = true; 
              channelCounter++; }
            break;
            case 55: //7
              if(channelCounter <3){
              $scope.ri[0].cells[channelCounter].check1 = true; 
              $scope.ri[0].cells[channelCounter].check3 = true; 
              channelCounter++; }
            break;
            case 56: //8
              if(channelCounter <3){
              $scope.ri[0].cells[channelCounter].check1 = true; 
              $scope.ri[0].cells[channelCounter].check2 = true; 
              $scope.ri[0].cells[channelCounter].check3 = true; 
              channelCounter++; }
            break;
            case 17: //ctrl, ch1 movement switch
              $scope.ri[1].cells[0].check1 = !$scope.ri[1].cells[0].check1;
            break;
            case 16: //shift, ch1 sign switch
              $scope.ri[2].cells[0].check1 = !$scope.ri[2].cells[0].check1;
            break;
            case 65: //a, ch1 position to left
              if($scope.ri[3].cells[0].check3 == true){
                $scope.ri[3].cells[0].check3 = false;
              }else{
                if ($scope.ri[3].cells[0].check2 == true) {
                  if ($scope.ri[3].cells[0].check1 == true) {
                    $scope.ri[3].cells[0].check1 = false;
                    $scope.ri[3].cells[0].check2 = false;
                    $scope.ri[3].cells[0].check3 = true;
                  } else{
                    $scope.ri[3].cells[0].check1 = true;
                  };
                }else{
                  if ($scope.ri[3].cells[0].check1 == true) {
                    $scope.ri[3].cells[0].check1 = false;
                    $scope.ri[3].cells[0].check2 = true;
                  } else{
                    $scope.ri[3].cells[0].check1 = true;
                  };
                }
              }
            break;
            case 90: //z, ch1 position to right
              if ($scope.ri[3].cells[0].check3 == true) {
                $scope.ri[3].cells[0].check1 = true;
                $scope.ri[3].cells[0].check2 = true;
                $scope.ri[3].cells[0].check3 = false;
              } else{
                if ($scope.ri[3].cells[0].check2 == true) {
                  if ($scope.ri[3].cells[0].check1 == true) {
                    $scope.ri[3].cells[0].check1 = false;
                  } else{
                    $scope.ri[3].cells[0].check1 = true;
                    $scope.ri[3].cells[0].check2 = false;
                  };
                } else{
                  if ($scope.ri[3].cells[0].check1 == true) {
                    $scope.ri[3].cells[0].check1 = false;
                  } else{
                    $scope.ri[3].cells[0].check3 = true;
                  };
                };
              };
            break;
            case 49: //1, ch1 level up
              if ($scope.ri[4].cells[0].check1 == false && $scope.ri[4].cells[0].check2 == false) {
                $scope.ri[4].cells[0].check1 = true;
              } else{
                if ($scope.ri[4].cells[0].check2 == true) {
                  $scope.ri[4].cells[0].check2 = false;
                };
              };
            break;
            case 81: //q, ch1 level down
              if ($scope.ri[4].cells[0].check1 == false && $scope.ri[4].cells[0].check2 == false) {
                $scope.ri[4].cells[0].check2 = true;
              } else{
                if ($scope.ri[4].cells[0].check1 == true) {
                  $scope.ri[4].cells[0].check1 = false;
                };
              };
            break;
            case 20: //caps lock, ch1 side switch
              if ($scope.ri[5].cells[0].check1 == true && $scope.ri[5].cells[0].check2 == true) {
                $scope.ri[5].cells[0].check1 = false;
              } else {
                if ($scope.ri[5].cells[0].check1 == true) {
                  $scope.ri[5].cells[0].check2 = true;
                } else{
                  $scope.ri[5].cells[0].check1 = true;
                  $scope.ri[5].cells[0].check2 = false;
                };
              }
            break;
            case 192: //`, ch1 fadeIn switch
              $scope.ri[6].cells[0].check1 = !$scope.ri[6].cells[0].check1;
            break;
            case 113: //f2, ch1 fadeOut switch
              $scope.ri[7].cells[0].check1 = !$scope.ri[7].cells[0].check1;
            break;
            case 115: //f4, ch1 sinusoidal switch
              $scope.ri[8].cells[0].check1 = !$scope.ri[8].cells[0].check1;
            break;
            case 118: //f7, ch1 queue switch
              $scope.ri[9].cells[0].check1 = !$scope.ri[9].cells[0].check1;
            break;
            case 32: //space, ch1 mute switch
              $scope.ri[10].cells[0].check1 = !$scope.ri[10].cells[0].check1;
            break;
            






            case 57:
              $scope.ri[1].cells[1].check1 = !$scope.ri[1].cells[1].check1;
            break;
            case 119:
              $scope.ri[2].cells[1].check1 = !$scope.ri[2].cells[1].check1;
            break;
            case 187:
              if($scope.ri[3].cells[1].check3 == true){
                $scope.ri[3].cells[1].check3 = false;
              }else{
                if ($scope.ri[3].cells[1].check2 == true) {
                  if ($scope.ri[3].cells[1].check1 == true) {
                    $scope.ri[3].cells[1].check1 = false;
                    $scope.ri[3].cells[1].check2 = false;
                    $scope.ri[3].cells[1].check3 = true;
                  } else{
                    $scope.ri[3].cells[1].check1 = true;
                  };
                }else{
                  if ($scope.ri[3].cells[1].check1 == true) {
                    $scope.ri[3].cells[1].check1 = false;
                    $scope.ri[3].cells[1].check2 = true;
                  } else{
                    $scope.ri[3].cells[1].check1 = true;
                  };
                }
              }
            break;
            case 189:
              if ($scope.ri[3].cells[1].check3 == true) {
                $scope.ri[3].cells[1].check1 = true;
                $scope.ri[3].cells[1].check2 = true;
                $scope.ri[3].cells[1].check3 = false;
              } else{
                if ($scope.ri[3].cells[1].check2 == true) {
                  if ($scope.ri[3].cells[1].check1 == true) {
                    $scope.ri[3].cells[1].check1 = false;
                  } else{
                    $scope.ri[3].cells[1].check1 = true;
                    $scope.ri[3].cells[1].check2 = false;
                  };
                } else{
                  if ($scope.ri[3].cells[1].check1 == true) {
                    $scope.ri[3].cells[1].check1 = false;
                  } else{
                    $scope.ri[3].cells[1].check3 = true;
                  };
                };
              };
            break;
            case 219:
              if ($scope.ri[4].cells[1].check1 == false && $scope.ri[4].cells[1].check2 == false) {
                $scope.ri[4].cells[1].check1 = true;
              } else{
                if ($scope.ri[4].cells[1].check2 == true) {
                  $scope.ri[4].cells[1].check2 = false;
                };
              };
            break;
            case 222:
              if ($scope.ri[4].cells[1].check1 == false && $scope.ri[4].cells[1].check2 == false) {
                $scope.ri[4].cells[1].check2 = true;
              } else{
                if ($scope.ri[4].cells[1].check1 == true) {
                  $scope.ri[4].cells[1].check1 = false;
                };
              };
            break;
            case 48:
              if ($scope.ri[5].cells[1].check1 == true && $scope.ri[5].cells[1].check2 == true) {
                $scope.ri[5].cells[1].check1 = false;
              } else {
                if ($scope.ri[5].cells[1].check1 == true) {
                  $scope.ri[5].cells[1].check2 = true;
                } else{
                  $scope.ri[5].cells[1].check1 = true;
                  $scope.ri[5].cells[1].check2 = false;
                };
              }
            break;
            case 120:
              $scope.ri[6].cells[1].check1 = !$scope.ri[6].cells[1].check1;
            break;
            case 19:
              $scope.ri[7].cells[1].check1 = !$scope.ri[7].cells[1].check1;
            break;
            case 221:
              $scope.ri[8].cells[1].check1 = !$scope.ri[8].cells[1].check1;
            break;
            case 220:
              $scope.ri[9].cells[1].check1 = !$scope.ri[9].cells[1].check1;
            break;
            case 13:
              $scope.ri[10].cells[1].check1 = !$scope.ri[10].cells[1].check1;
            break;
            





            case 45:
              $scope.ri[1].cells[2].check1 = !$scope.ri[1].cells[2].check1;
            break;
            case 145:
              $scope.ri[2].cells[2].check1 = !$scope.ri[2].cells[2].check1;
            break;
            case 46:
              if($scope.ri[3].cells[2].check3 == true){
                $scope.ri[3].cells[2].check3 = false;
              }else{
                if ($scope.ri[3].cells[2].check2 == true) {
                  if ($scope.ri[3].cells[2].check1 == true) {
                    $scope.ri[3].cells[2].check1 = false;
                    $scope.ri[3].cells[2].check2 = false;
                    $scope.ri[3].cells[2].check3 = true;
                  } else{
                    $scope.ri[3].cells[2].check1 = true;
                  };
                }else{
                  if ($scope.ri[3].cells[2].check1 == true) {
                    $scope.ri[3].cells[2].check1 = false;
                    $scope.ri[3].cells[2].check2 = true;
                  } else{
                    $scope.ri[3].cells[2].check1 = true;
                  };
                }
              }
            break;
            case 36:
              if ($scope.ri[3].cells[2].check3 == true) {
                $scope.ri[3].cells[2].check1 = true;
                $scope.ri[3].cells[2].check2 = true;
                $scope.ri[3].cells[2].check3 = false;
              } else{
                if ($scope.ri[3].cells[2].check2 == true) {
                  if ($scope.ri[3].cells[2].check1 == true) {
                    $scope.ri[3].cells[2].check1 = false;
                  } else{
                    $scope.ri[3].cells[2].check1 = true;
                    $scope.ri[3].cells[2].check2 = false;
                  };
                } else{
                  if ($scope.ri[3].cells[2].check1 == true) {
                    $scope.ri[3].cells[2].check1 = false;
                  } else{
                    $scope.ri[3].cells[2].check3 = true;
                  };
                };
              };
            break;
            case 33:
              if ($scope.ri[4].cells[2].check1 == false && $scope.ri[4].cells[2].check2 == false) {
                $scope.ri[4].cells[2].check1 = true;
              } else{
                if ($scope.ri[4].cells[2].check2 == true) {
                  $scope.ri[4].cells[2].check2 = false;
                };
              };
            break;
            case 34:
              if ($scope.ri[4].cells[2].check1 == false && $scope.ri[4].cells[2].check2 == false) {
                $scope.ri[4].cells[2].check2 = true;
              } else{
                if ($scope.ri[4].cells[2].check1 == true) {
                  $scope.ri[4].cells[2].check1 = false;
                };
              };
            break;
            case 35:
              if ($scope.ri[5].cells[2].check1 == true && $scope.ri[5].cells[2].check2 == true) {
                $scope.ri[5].cells[2].check1 = false;
              } else {
                if ($scope.ri[5].cells[2].check1 == true) {
                  $scope.ri[5].cells[2].check2 = true;
                } else{
                  $scope.ri[5].cells[2].check1 = true;
                  $scope.ri[5].cells[2].check2 = false;
                };
              }
            break;
            case 38:
              $scope.ri[6].cells[2].check1 = !$scope.ri[6].cells[2].check1;
            break;
            case 40:
              $scope.ri[7].cells[2].check1 = !$scope.ri[7].cells[2].check1;
            break;
            case 39:
              $scope.ri[8].cells[2].check1 = !$scope.ri[8].cells[2].check1;
            break;
            case 37:
              $scope.ri[9].cells[2].check1 = !$scope.ri[9].cells[2].check1;
            break;
            case 8:
              $scope.ri[10].cells[2].check1 = !$scope.ri[10].cells[2].check1;
            break;





            case 87: functionalKeys.c1ss(); break;
            case 83: functionalKeys.c1sm(); break;
            case 88: functionalKeys.c1sw(); break;
            case 69: functionalKeys.c1ms(); break;
            case 68: functionalKeys.c1mm(); break;
            case 67: functionalKeys.c1mw(); break;
            case 82: functionalKeys.c1ls(); break;
            case 70: functionalKeys.c1lm(); break;
            case 86: functionalKeys.c1lw(); break;
            case 84: functionalKeys.c2ss(); break;
            case 71: functionalKeys.c2sm(); break;
            case 66: functionalKeys.c2sw(); break;
            case 89: functionalKeys.c2ms(); break;
            case 72: functionalKeys.c2mm(); break;
            case 78: functionalKeys.c2mw(); break;
            case 85: functionalKeys.c2ls(); break;
            case 74: functionalKeys.c2lm(); break;
            case 77: functionalKeys.c2lw(); break;
            case 73: functionalKeys.c3ss(); break;
            case 75: functionalKeys.c3sm(); break;
            case 188: functionalKeys.c3sw(); break;
            case 79: functionalKeys.c3ms(); break;
            case 76: functionalKeys.c3mm(); break;
            case 190: functionalKeys.c3mw(); break;
            case 80: functionalKeys.c3ls(); break;
            case 186: functionalKeys.c3lm(); break;
            case 191: functionalKeys.c3lw(); break;
          };
          liveArrayFill();
          // setCheckBoxToLive();
        };
      })();
      $scope.barStyle = function(bar){
        bar.R = parseInt($scope.backgroundR) + parseInt(bar.ext.R);
        bar.G = parseInt($scope.backgroundG) + parseInt(bar.ext.G);
        bar.B = parseInt($scope.backgroundB) + parseInt(bar.ext.B);
        
        return {backgroundColor: rgb2hex(bar.R,bar.G,bar.B)};
      };

    };

    function rgb2hex(r,g,b){
      return "#"+toHex(r)+toHex(g)+toHex(b);
    };
    function toHex(n){
      n = parseInt(n,10);
      if(isNaN(n))
        return "00"
      n=Math.max(0,Math.min(n,255));
      n=n.toString(16);
      return n.length<2 ? '0'+n : n;
    }
    angular
      .module('mainApp',[])
      .controller('mainCtrl',['$scope', control]);