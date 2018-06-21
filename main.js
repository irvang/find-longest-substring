
// let str1 = 'aecbcaacbceb';
// let k = 3;

let str1 = 'aecbcaabceb';
let k = 3;

// let str1 = 'aabacadbae';
// let k = 2;

// let str1 = 'dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh';
// let k = 2;

findLongestSubstringWithUniqueCharacters(str1, k);

function findLongestSubstringWithUniqueCharacters(str, k) {
	let subStart = 0, subEnd = 1;
	console.log("strLength:",str.length)
	let longest = '';
	let subStr1 = str.substring(0, 1);
	let checkResult = isSubsetLessThanOrEqualToK(subStr1, k);
	if (checkResult)
		longest = subStr1;

	/* if checkResult is true, then increase ending index by one, if not, 
	increase beginning until checkResult is false
	*/
	while (subStart < str.length) {
		logStates('start:');
		subStr1 = str.substring(subStart, subEnd);
		checkResult = isSubsetLessThanOrEqualToK(subStr1, k);


		if (checkResult) {
			if(subStr1.length > longest.length) longest = subStr1;
			// longest = subStr1;
			subEnd++;
			
		} else {
			subStart++
		}
		
		if(longest.length > str.length - subStart) break;

		// if(subEnd > str.length) subEnd = str.length;
	}

	console.log('The end. Longest is:', longest, "length is: ", 
	longest.length, 'starts at: ', str.indexOf(longest, 0)  );

	function logStates(position) {
		console.log(position, 'sub: ' +subStr1, "| lessThanK: " + checkResult, "| longest: "+longest, '|', subStart +", " +subEnd);
	}
}

function isSubsetLessThanOrEqualToK(str, k) {
	const newSet = new Set(str);
	return newSet.size <= k;
}

//press esc to split console
