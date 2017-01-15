function sortItemInArray(list) {
	return list[14];
}

function sortList(a, b) {
  return sortItemInArray(b) - sortItemInArray(a)
}

function filterListByDropDownSelection(list) {
	return list.filter(
        (item) => item[0] !== "TOTAL (ALL-INDIA)" && item[0] !== "TOTAL (STATES)")
    .slice(0,10)
}

export default function formatChartData(chartDataList){
    
    let valueArray = [], nameArray = [];
    const sortDataList = chartDataList.sort(sortList);
    const filteredList = filterListByDropDownSelection(sortDataList);
    

    filteredList.forEach((list) => valueArray.push(list[14]))
    filteredList.forEach((list) => nameArray.push(list[0]))

    return {
    	itemName: nameArray,
    	itemValue: valueArray
    }   
}