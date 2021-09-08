//palindrome pgm
str1="007=>@>=700";
str2="";
str2=str1.split('').reverse().join('');
if (str2==str1)
    console.log(`you entered a palindrome! ${str2}`);
else
    console.log(`entered string ${str1} is not a palindrome`);
