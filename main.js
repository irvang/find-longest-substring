// //====TESTS
findLongestSubstringWithUniqueCharacters('dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh', 2);
findLongestSubstringWithUniqueCharacters('dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh', 3);
findLongestSubstringWithUniqueCharacters('dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh', 4);

findLongestSubstringWithUniqueCharacters('aecbcaacbceb', 3);
findLongestSubstringWithUniqueCharacters('aecbcaabceb', 2);
findLongestSubstringWithUniqueCharacters('aabacadbae', 2);
findLongestSubstringWithUniqueCharacters('abacaabaa', 2);
findLongestSubstringWithUniqueCharacters('abacaadbafaaaad', 3);

findLongestSubstringWithUniqueCharacters('aaaaaaaa', 4);
findLongestSubstringWithUniqueCharacters('', 4);


function findLongestSubstringWithUniqueCharacters(str, n) {//(string, n unique charachters)

	//Indexes for substring
	let subStart = 0,
		subEnd = 1;

	let longestSubstring = '';

	while (true) {
		let subString = str.substring(subStart, subEnd);//get a substring

		/* if the set of letters' size is less than n, increase the substring end 
		   index, else increase sub start index */
		if (isSubsetLessThanOrEqualToK(subString, n)) {

			//keep whichever string is longer
			if (subString.length > longestSubstring.length) {
				longestSubstring = subString;
			}
			subEnd++;
		} else {
			subStart++
		}

		//	if substring of remaining characters is shorter than or equal to 
		// 	the longestSubstring subset's length, break the loop
		if (longestSubstring.length >= str.length - subStart) break;
	}

	console.log(longestSubstring, '-', str.indexOf(longestSubstring, 0));

	//could return instead
	return [longestSubstring, str.indexOf(longestSubstring, 0)];
}

//creates a Set object, and compares its size to see if it is greater than n
function isSubsetLessThanOrEqualToK(str, n) {
	const newSet = new Set(str);
	return newSet.size <= n;
}