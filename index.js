// code your solution here
function superbowlWin (element){
   let winYear = element.find(x => x.result === "W")
   if (winYear){
  return winYear.year}
   
}