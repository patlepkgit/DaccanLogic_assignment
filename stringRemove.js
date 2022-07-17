const stringRemove=(str1,str2)=>{
  let strArr=str1.split(' ');
  let temp=[];
  for(i=0;i<strArr.length;i++){
    if(strArr[i]!==str2){
      temp.push(strArr[i]);
    }
  }
  return temp.join(' ');
}

console.log(stringRemove("It is a long established fact that reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy.","is"))