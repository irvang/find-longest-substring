//====TESTS
findLongestSubstringWithUniqueCharacters('dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh', 2);
findLongestSubstringWithUniqueCharacters('dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh', 3);
findLongestSubstringWithUniqueCharacters('dgfddsssdsfdffdfdfadfhheedsfdfcdfdxffdh', 4);

findLongestSubstringWithUniqueCharacters('aecbcaacbceb', 3);
findLongestSubstringWithUniqueCharacters('aecbcaabceb', 2);
findLongestSubstringWithUniqueCharacters('aabacadbae', 2);
findLongestSubstringWithUniqueCharacters('abacaabaa', 2);
findLongestSubstringWithUniqueCharacters('abacaadbafaaaad', 3);


function findLongestSubstringWithUniqueCharacters(str, n) {

	//Indexes for substring
	let subStart = 0,
		subEnd = 1;

	let longestSubstring = '';

	while (true) {
		let subString = str.substring(subStart, subEnd);//get a substring
		if (isSubsetLessThanOrEqualToK(subString, n)) {
			if (subString.length > longestSubstring.length) {
				longestSubstring = subString;
			}
			subEnd++;
		} else {
			subStart++
		}
		if (longestSubstring.length >= str.length - subStart) break;
	}

	console.log(longestSubstring, '-', str.indexOf(longestSubstring, 0));
	return [longestSubstring, str.indexOf(longestSubstring, 0)];
}

function isSubsetLessThanOrEqualToK(str, n) {
	const newSet = new Set(str);
	return newSet.size <= n;
}