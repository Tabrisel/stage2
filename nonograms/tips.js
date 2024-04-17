
let topTips = document.querySelector(".tipsX");
let topRows = topTips.childNodes;

/*create tips at the top*/
let columns = topRows[0].childNodes.length;

for (let j = 0; j < columns; j++) {
  let result = [];
  let count = 0;
  for(let i = 0; i <currentNonogramArray.length; i++) {

      if (currentNonogramArray[i][j] === 1) {
        count = count + 1;
      }

      if (count !== 0 && currentNonogramArray[i][j] === 0) {
        result.push(count);
        count = 0;
      }


    if (i===currentNonogramArray.length - 1) {
      if (count !== 0)
      result.push(count);
    }

  
    
    result.reverse().forEach((value, index) => {
    topRows[topRows.length - 1 - index].childNodes[j].innerText = value;
    })
  }

}


let leftTips = document.querySelector(".tipsY");
let leftRows = leftTips.childNodes;

/*create tooltips on the left*/
let columnsLeft = leftRows[0].childNodes.length;

for (let j = 0; j < currentNonogramArray.length; j++) {
  let result = [];
  let count = 0;

  for (let i = 0; i < currentNonogramArray[j].length; i++) {
    if (currentNonogramArray[j][i] === 1) {
      count = count + 1;
    }
    if (count !== 0 && currentNonogramArray[j][i] === 0) {
      result.push(count);
      count = 0;
    }

    if (i === currentNonogramArray[j].length - 1 && count !== 0) {
      result.push(count);
    }
  }

  result.reverse().forEach((value, index) => {
    leftRows[j].childNodes[columnsLeft - index - 1].innerText = value;
  });
}

