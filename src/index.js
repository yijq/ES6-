
function addAll(){
	return Array.from(arguments).reduce((a,b) => a + b);
}

function foo() {
	setTimeout(() => {
		console.log(this.id);
	},200);
}