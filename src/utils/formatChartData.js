function sortItemInArray(list) {
	return list[14];
}

function sortList(a, b) {
  return sortItemInArray(b) - sortItemInArray(a)
}

function filterListByDropDownSelection(list, inputToFormatData) {

    const { filterValue, filterLocation } = inputToFormatData;
    
	return list.filter(
        (item) => item[0] !== "TOTAL (ALL-INDIA)" 
            && item[0] !== "TOTAL (STATES)" 
            && item[filterLocation] === filterValue)
    .slice(0,10)
}

export default function formatChartData(inputToFormatData){
    
    let valueArray = [], nameArray = [];
    const sortDataList = inputToFormatData.chartData.sort(sortList);
    const filteredList = filterListByDropDownSelection(sortDataList, inputToFormatData);
    

    filteredList.forEach((list) => valueArray.push(list[14]))
    filteredList.forEach((list) => nameArray.push(list[0]))

    return {
    	itemName: nameArray,
    	itemValue: valueArray
    }   
}