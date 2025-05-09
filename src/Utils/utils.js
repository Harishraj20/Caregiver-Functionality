//Utility Function to convert date from string to js date object
import sort_asc from "../Assets/sort_asc.png";
import sort_desc from "../Assets/sort_desc.png";
import sort_asc_disabled from "../Assets/sort_asc_disabled.png";
import sort_desc_disabled from "../Assets/sort_desc_disabled.png";

const parseDate = (dateStr) => {
  console.log("The date str: ", dateStr);
  if (!dateStr) {
    return Number.POSITIVE_INFINITY;
  }
  const [date, time, meridian] = dateStr.split(" ");
  const [month, day, year] = date.split("/").map(Number);

  let [hour, minute, second] = time.split(":").map(Number);

  if (meridian === "PM" && hour !== 12) hour += 12;
  if (meridian === "AM" && hour === 12) hour = 0;

  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59 ||
    second < 0 ||
    second > 59
  ) {
    throw new Error("Invalid date or time range.");
  }
  return new Date(year, month - 1, day, hour, minute, second);
};

//Utility function to sortData

const sortData = (column, sortConfig, data) => {
  const isSameColumn = sortConfig.column === column;
  const newOrder = isSameColumn && sortConfig.order === "asc" ? "desc" : "asc";

  const sortedList = [...data].sort((a, b) => {
    let valA, valB, result;

    if (
      column === "checkInDate" ||
      column === "checkOutDate" ||
      column === "time"
    ) {
      valA = parseDate(a[column]) ?? new Date(0);
      valB = parseDate(b[column]) ?? new Date(0);
      result = valA - valB;
    } else {
      const nameA = a[column]?.toLowerCase() ?? "";
      const nameB = b[column]?.toLowerCase() ?? "";

      if (nameA < nameB) return newOrder === "asc" ? -1 : 1;
      if (nameA > nameB) return newOrder === "asc" ? 1 : -1;
      return 0;
    }

    return newOrder === "asc" ? result : -result;
  });
  return { sortedList, newOrder };
};

//Utitiy function to display arrows

const renderSortArrow = (key, sortConfig) => {
  return (
    <div className="sort-icons">
      {sortConfig.column === key && sortConfig.order === "asc" ? (
        <img src={sort_asc} alt="Up" />
      ) : sortConfig.column !== key ? (
        <img src={sort_asc_disabled} alt="Up" />
      ) : null}

      {sortConfig.column === key && sortConfig.order === "desc" ? (
        <img src={sort_desc} alt="Down" />
      ) : sortConfig.column !== key ? (
        <img src={sort_desc_disabled} alt="Down" />
      ) : null}
    </div>
  );
};

const extractTime = (dateTime) => {
  if (!dateTime) {
    return "Not Yet";
  }
  const splitArr = dateTime.split(" ");
  console.log(splitArr);
  if (/^\d{2}:\d{2}:\d{2}$/.test(splitArr[1])) {
    const formatted = splitArr[1] + " " + splitArr[2];
    return formatted;
  }
  console.log(dateTime);
  return dateTime;
};

export { sortData, renderSortArrow, extractTime };
