var secondGreatLow = function(arr){
	arr = _.unique(arr)
	var highest = Math.max.apply(Math, arr)
	var lowest = Math.min.apply(Math, arr)

	highest = arr.splice(arr.indexOf(highest), 1)
	lowest = arr.splice(arr.indexOf(lowest), 1)

	switch(arr.length) {
		case 0:
			return lowest + ' ' + highest
		case 1:
			return arr[0] + ' ' + arr[0]
	}

	return Math.min.apply(Math, arr) + ' ' + Math.max.apply(Math, arr)
}