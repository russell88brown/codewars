/* mazerunner.js

https://www.codewars.com/kata/maze-runner/

*/

//This is the maze
var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

var position = [6,0]; //original position
var movementArray = {N:[0,1], S:[0,-1], E:[1,0], W:[-1,0]}; //object dictionary for coords
var coord = [0,0] // store the next movement
var killCode = 0

// function to call dictionary
function getCoords(a) {
      return movementArray[a];
}

function checkBoundary(coordCheck) {
      for (i = 0; i < 2; i++) {
            console.log('your position: ' + position)
            console.log('to be moved: ' + coordCheck)
            checkingVariable = coordCheck[i] + position[i]
            console.log('0 and 1, your at: ' + i)
            console.log('new position: ' + checkingVariable)
            if (checkingVariable < 0 || checkingVariable > 6) {
                  console.log('you walked off the map')
                  passup = [0.0];
            } else {
                  passup = coordCheck;
            }
      }
      return passup
}

function whatNext(nextPosition) {
      if (nextPosition == 1) {
            console.log('you walked into a wall');
            killCode = 1
            return [0,0];
      } else if (nextPosition == 2) {
            console.log('you found the start again');
            killCode = 1
            return [0,0];
      } else if (nextPosition == 3) {
            console.log('you found the finnish');
            console.log('you did it in: ' + i + ' steps');
            killCode = 1
            return [0,0]
      } else {
            console.log('keep walking')
            return nextPosition
      }
}


function mazeRunner(inputMaze, directionsArray) {
      for (index = 0; index < directionsArray.length; index++) {
            console.log(directionsArray[index])
            coord = getCoords(directionsArray[index])
            coord = checkBoundary(coord)
            console.log(coord)
      }
}

mazeRunner(maze,["S","N","N","N","N","E","E","E","E","E"]);

/*
function mazeRunner(inputMaze,directionsArray) {
      for (i = 0; i < directionsArray.length; i++) {
            for (ii = 0; ii < 2; ii++)
                  position[ii] +=(whatNext(getCoords(directionsArray[i]))[ii]);
                        }
            }




mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]);
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])
*/