// use "this" keyword to reference public properties and methods of current objects
// to make it private, within lexical scope, use var instead

var Person = function(firstAndLast) {
	
	var fullName = firstAndLast; // Bob Ross
	var arr = fullName.split(' '); // [Bob, Ross]

	
	this.getFirstName = function(){
		return arr[0];
	}
	this.getLastName = function(){
		return arr[1];
	}
	this.getFullName = function(){
		return arr.join(' ');
	}
	this.setFirstName = function(first){
		arr[0] = first;  
	}
	this.setLastName = function(last){
		arr[1] = last;
	}
	this.setFullName = function(firstAndLast){
		arr[0] = firstAndLast.split(' ')[0];
		arr[1] = firstAndLast.split(' ')[1];
		fullName = firstAndLast;
	}


};

var bob = new Person('Bob Ross');

// bob.getFullName() should return "Haskell Ross" 
// after bob.setFirstName("Haskell").

console.log(bob.getFullName())


// done