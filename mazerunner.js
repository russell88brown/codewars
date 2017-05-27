/* mazerunner.js

https://www.codewars.com/kata/maze-runner/

*/

//dictionary for movement


var movementArray = {'N': [0,1], 'S': [0.-1], E: [1,0], W: [-1,0]}
var move = []
function getMove(coord) {
	console.log(coord)
	console.log(movementArray.N)
	return movementArray.coord;
}



function mazeRunner(maze, directions) {
	var move = getMove('N')
	console.log(move)
}

mazeRunner(1,1)
/*
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




mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"])
*/