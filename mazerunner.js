/* mazerunner.js

https://www.codewars.com/kata/maze-runner/

*/


function checkCoords(coord) {
}

function mazeRunner(maze, directions) {
}

mazeRunner(maze, 'N')
mazeRunner(maze, 'S')
mazeRunner(maze, 'E')
mazeRunner(maze, 'W')
mazeRunner(maze, 'F')


//This is the maze
var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

//this is the movement array
var movementArray = {
	'N':[0,1],
	'S':[0.-1],
	'E':[1,0],
	'W':[-1,0],
}

/*
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])
*/