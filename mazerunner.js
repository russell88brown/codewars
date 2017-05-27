/* mazerunner.js

https://www.codewars.com/kata/maze-runner/

*/

// 1. determine your position
// 2. take your next direction convert it to coordinates
// 3. use coordinates to find next position in the maze
// 4. check next position against bondary, wall, start, end, fine
// 5. terminate te program if check fails
// 6. apply next position to current position
// 7. goto 2.

//This is the maze
var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,0,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];


var position = [0,0];
var directionsDictionary = {N:[-1,0], S:[1,0], E:[0,1], W:[0,-1]}; //object dictionary for coords
var nextPosition = [];
var nextVariable = [];
var outcome = false;
var a;
var b;

function determinePosition() {
      return [6,1];
}

function getNextPosition(coordGet) {
      for (i = 0; i < 2; i++) {
            nextPosition[i] = position[i] + coordGet[i];
            if (nextPosition[i] < 0 || nextPosition > 6) {
                  sumDigPow = 'dead';
            }
      }
      return;
}

function checkNextPosition() {
      console.log('checking a step in this direction' + coord);
      a = nextPosition[0];
      b = nextPosition[1];
      nextVariable = inputMaze[a][b];
      if (nextVariable == 1) {
            console.log('you walked into a wall');
            outcome = 'dead';
      } else if (nextVariable == 2) {
            console.log('you found the start again');
            outcome = 'dead';
      } else if (nextVariable == 3) {
            console.log('you found the finnish');
            outcome = 'Finish';
      } else {
            console.log('keep walking');
      }
}


function mazeRunner(givenMaze, yourDirections) {
      inputMaze = givenMaze;
      position = determinePosition();
      console.log('#####################################');
      console.log('#    you start on poition: ' + position + "      #");
      console.log('#####################################');
      for (index = 0; index < yourDirections.length; index++) {
            coord = directionsDictionary[yourDirections[index]];
            console.log('step' + (index + 1) + ' : ' + yourDirections[index]);
            getNextPosition(coord);
            checkNextPosition();
            console.log('### your new position is: ' + nextPosition + " #######");
            index = (outcome!=false) ? yourDirections.length: index ;
            position = nextPosition;
      }
      outcome = (outcome!=false) ? 'lost': outcome ;
      return outcome;
      var outcome = false
}

//mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]) // "Finish", "Expected Finish");
//mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]) // "Finish", "Expected Finish");
//mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]) // "Finish", "Expected Finish");
mazeRunner(maze,["N","N","N","W","W"]) // "Dead", "Expected Dead");
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]) // "Dead", "Expected Dead");
mazeRunner(maze,["N","E","E","E","E"]) // "Lost", "Expected Lost");


/*
var position = [6,0]; //original position
var coord = [0,0] // store the next movement
var ` = false // end program after a failed check


function calculateNext(current, movment) {

}

function checkBoundary(coordCheck) {
      for (i = 0; i < 2; i++) {
            checkingVariable = coordCheck[i] + position[i];
            if (checkingVariable < 0 || checkingVariable > 6) {
                  console.log('you walked off the map');
                  kill = true;
            }
      return
      }
}

function checkNext(nextPosition) {
      if (nextPosition == 1) {
            console.log('you walked into a wall');
            kill = true;
      } else if (nextPosition == 2) {
            console.log('you found the start again');
            kill = true;
      } else if (nextPosition == 3) {
            console.log('you found the finnish');
            console.log('you did it in: ' + i + ' steps');
            kill = true;
      } else {
            console.log('keep walking')
      }
return
}


function mazeRunner(inputMaze, directionsArray) {
      for (index = 0; index < directionsArray.length; index++) {
            coord = movementArray[directionsArray[index]]
            console.log('your at: ' + position)
            console.log('to move:' + directionsArray[index])
            checkBoundary(coord)
            checkNext(coord)
            if (kill == true) {
                  return console.log('END')
            }
      }
}

mazeRunner(maze,["N","N","N","N","N","N","N","N","N","N"]);
*/