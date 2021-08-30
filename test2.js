var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,7,90,34,6,7,1,2,3]


function apples(input) {
	var arrMaster=[[]];
	var arrAmigos =[[]]
	var contCuatro =0
	var contDos =0

	for (var i = 0; i < input.length; i++) {
		if ((i%4)==0 && i > 0) {
			contCuatro+=1
			arrMaster.push([])
		}
		console.log(contCuatro)
		arrMaster[contCuatro].push(input[i])
		
	}

	for (var i = 0; i < arrMaster.length; i++) {
		if ((i%2)==0 && i > 0) {
			contDos+=1
			arrAmigos.push([])
		}
		console.log(contDos)
		arrAmigos[contDos].push(arrMaster[i])
		
	}
	return arrAmigos
}

console.log(apples(input))
