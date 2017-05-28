/* function friend(friends){
  answer = [];
  console.log(friends.length)
  for (i = 0; i < friends.length; i++) {
	  console.log(friends[i]);
	  console.log(friends[i].length);  
	  if (friends[i].length ==  4) {
	      answer.push(friends[i])
	    } else {
	     answer = answer
	    }
	 }
  return answer
}
*/

function friend(friends){
  answer = [];
  for (i = 0; i < friends.length; i++) {
	  friends[i].length == 4 ? answer.push(friends[i]) : null ;
	}
  return answer
}

console.log(friend(["Ryan", "Kieran", "Mark"]))