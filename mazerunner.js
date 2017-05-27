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
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

var position = [0,0]
var directionsDictionary = {N:[0,1], S:[0,-1], E:[1,0], W:[-1,0]}; //object dictionary for coords


function determinePosition() {
      return [6,1];
}

function getNextPosition() {
      return;
}

function checkNextPosition() {
      return;
}


function mazeRunner(inputMaze, yourDirections) {
      position = determinePosition()
      for (index = 0; index < yourDirections.length; index++) {
            coord = directionsDictionary[yourDirections[index]]
            
      }
}

mazeRunner(maze,["N","S","E","W","N","S","E","W"]);

/*
var position = [6,0]; //original position
var coord = [0,0] // store the next movement
var kill = false // end program after a failed check


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