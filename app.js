// for loop -> davtalt
// for(var i=1; i<=10; i++){
	// console.log("hello"+i);
// }
// i=1 -> 1<=10 -> true -> hello1 -> 2
// i=2 -> 2<=10 -> true -> hello2 -> 3
// i=11 -> 11<=10 -> false -> stop
// for(var i=10; i>1; i--){
	// console.log(i);
// }
// 1-20 hurtleh tegsh toonuudiig hevlene uu
for(var t=1; t<=20; t++){
	if(t%2==0){
		console.log("tegsh: "+t);
	}
}
// 1-30 hurtleh 3,5-d zereg huvaagddag toonuudiig hevlene uu
for(var i=1; i<=30; i++){
	if(i%15==0){
		console.log("3,5-d zereg: "+i);
	}
}
// Garaas too oruulahad ter toonii hvrdiig hevleh code bichne uu
var too=5;
for(var i=1; i<=10; i++){
	console.log(too+"X"+i+"="+too*i);
}
// 1-ees 10 hurtleh toonuudiin niilber bolon vrjveriig olno uu
var niilber=0;
for(var i=1; i<=10; i++){
	niilber=niilber+i;
}
console.log(niilber);
var vrjver=1;
for(var i=1; i<=10; i++){
	vrjver=vrjver*i
}
console.log(vrjver);

// Randomoor 1-10 hoorondoh toog taana
// 3 udaa taah erhtei
// zov taaval yalna
var random=Math.floor(Math.random()*10)+1;
console.log(random);
for(var i=1; i<=3; i++){
	var myNumber=+prompt("1-10 hurtleh too taana uu");
	if(random==myNumber){
		alert("You win of "+i+" try");
		break;
	}else if(random>myNumber){
		alert("Baga baina");
	}else if(random<myNumber){
		alert("Ih baina");
	}else{
		alert("Wrong number");
	}
	if(i==3){
		alert("You lose");
	}
}
// Ih too esvel baga too oruulval hint ogdog bolgoh
// Heddeh udaagiin oroldlogoor hojij baigaag gargaj ireh
// 3n udaa buruu taahad ylagdlaa gej gargaj ireh