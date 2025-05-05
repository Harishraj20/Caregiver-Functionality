//Utility Function to convert date from string to js date object

const parseDate = (dateStr) => {
  const [date, time, meridian] = dateStr.split(" ");
  const [day, month, year] = date.split(".").map(Number);
  let [hour, minute] = time.split(":").map(Number);

  if (meridian === "PM" && hour !== 12) hour += 12;
  if (meridian === "AM" && hour === 12) hour = 0;

  return new Date(year, month - 1, day, hour, minute);
};

//Utility function to sortData

const sortData = (column, sortConfig, data) => {
  console.log("im called");
  console.log("column: ", column);
  console.log("sort Config", sortConfig);
  console.log("data: ", data);
  const isSameColumn = sortConfig.column === column;
  const newOrder = isSameColumn && sortConfig.order === "asc" ? "desc" : "asc";

  const sortedList = [...data].sort((a, b) => {
    let valA, valB, result;

    if (column === "checkIn" || column === "checkOut" || column === "time") {
      valA = parseDate(a[column]) ?? new Date(0);
      valB = parseDate(b[column]) ?? new Date(0);
      result = valA - valB;
    } else {
      const nameA = a.caregiverName.toLowerCase();
      const nameB = b.caregiverName.toLowerCase();

      if (nameA < nameB) return newOrder === "asc" ? -1 : 1;
      if (nameA > nameB) return newOrder === "asc" ? 1 : -1;
      return 0;
    }

    return newOrder === "asc" ? result : -result;
  });
  console.log("sorted List: ", sortedList);
  return { sortedList, newOrder };
};

//Utitiy function to display arrows

const renderSortArrow = (key, sortConfig) => {
  console.log("sort arrow KEY: ", key);
  if (sortConfig.column !== key) return "";
  return sortConfig.order === "asc" ? " ↑" : " ↓";
};

export { sortData, renderSortArrow };
