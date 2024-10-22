// gHappy 

// function gHappy(word:string):boolean {
//     if (word === "") {
//         return true
//     }
//     let isHappy: boolean = false;
//     for(let i=0; i<word.length; i++){
//         if(word[i] === 'g'){
//             const leftG = (word[i - 1] === 'g');
//             const rightG = (word[i + 1] === 'g');
//             if(!leftG && !rightG){
//                 isHappy = false;
//             }else{
//                 isHappy = true;
//             }
//         }
//     }
//     return isHappy;
// }

// console.log(gHappy('xxggyygxx'));


// countYZ

// function countYZ(str:string):number{
//     let count= 0;
//     for(let i = 0; i<str.length; i++){
//         if ((str[i] === 'y' || str[i] === 'z') && (i === str.length - 1 || !str[i + 1].match(/[a-z]/))) {
//           count++
                
//       }
   
//   }
//   return count;
// }



//MIRROR
// function mirrorEnds(str:string):string{
//     let count2 ="";
//     let newstr ="";
//     for(let i = str.length - 1; i >= 0; i--){
//         count2 += str[i]
//     }
//     for(let i =0; i < str.length; i++){
//         if(count2[i]===str[i]){
//             newstr += str[i]
//         }else{
//             break;
//         }
//     }
//     return newstr;

// }

// console.log(mirrorEnds("abopba"))




// function mirrorEnds(string:string):string{
//     let string2 = ''
//     let newString = ''
//     for(let i = string.length -1; i >= 0; i--){
//         string2 += string[i]
//     }
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === string2[i]){
//             newString += string[i]
//         }else{
//             break;
//         }
//     }
//     return newString;
// }

// console.log(mirrorEnds('abopba'));



//WITHOUT STRING
function withoutString(b:string, r:string):string{
    
  return b.split(r).join('');
}



//SERIESUP

// function seriesUp(n:number):number{

//   let newSeries:number[];
//   for(let i = 1; i <= n; i++ ){
//     for(let n = i; n >= i; n++)
//       newSeries
//   }
  
// }