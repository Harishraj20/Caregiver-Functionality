import React, { useEffect, useState } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import closePNG from "../Assets/new.png";
import { sortData, renderSortArrow, extractTime } from "../Utils/utils";

function CaregiverActivityList({
  activityList,
  closeModal,
  caregiverName,
  checkInDate,
  checkOutDate,
}) {
  const [filteredActivityList, setFilteredActivityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    order: "asc",
    column: "",
  });
  const [records,totalRecords] = useState('');
  const recordsPerPage = 10;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    if (!value) {
      const data = fetchRecords(currentPage, activityList);
      setFilteredActivityList(data);
      return;
    }

    const filteredResult = activityList.filter(
      (item) =>
        item.taskName.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredActivityList(filteredResult);
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    const { sortedList, newOrder } = sortData(
      column,
      sortConfig,
      filteredActivityList
    );
    setFilteredActivityList(sortedList);
    setCurrentPage(1);
    setSortConfig({ column, order: newOrder });
  };

  useEffect(() => {
    const data = fetchRecords(currentPage, activityList);
    setFilteredActivityList(data);
  }, []);

  useEffect(() => {
    const data = fetchRecords(currentPage, activityList);
    setFilteredActivityList(data);
  }, [currentPage]);
  const fetchRecords = (currentPage, data) => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const pageData = data.slice(startIndex, startIndex + recordsPerPage);
    return pageData;
  };

  const totalPages = Math.ceil(activityList.length / recordsPerPage);

  return (
    <div className="caregiver-activity-list">
      <img
        className="close-png"
        src={closePNG}
        alt="close"
        onClick={closeModal}
      />
      <div className="activity-container">
        <p className="caregiver-title">CAREGIVER ACTIVITIES</p>

        <div className="param-container">
          <div className="caregiver-name">
            <b>
              <i>Caregiver Name: </i>
            </b>
            {caregiverName}
          </div>
          <div className="checkin-date">
            <b>
              <i> Check-In Time: </i>
            </b>
            {extractTime(checkInDate)}
          </div>
          <div className="checkout-date">
            <b>
              <i> Check-Out Time: </i>
            </b>
            {extractTime(checkOutDate)}
          </div>

          <Search
            className="search-bar"
            value={searchValue}
            onChangeFunction={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        <div className="caregiver-activities">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("taskName")}>
                  Task{renderSortArrow("taskName", sortConfig)}
                </th>
                <th onClick={() => handleSort("status")}>
                  Status{renderSortArrow("status", sortConfig)}
                </th>
                <th onClick={() => handleSort("time")}>
                  Time{renderSortArrow("time", sortConfig)}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredActivityList.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No Task Available
                  </td>
                </tr>
              ) : (
                filteredActivityList.map((data, index) => (
                  <tr key={index}>
                    <td>{data.taskName}</td>
                    <td>{data.status}</td>
                    <td>{data.statusTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination-section">
          <div className="back-btn">
            <button onClick={closeModal}>Back</button>
          </div>
          {activityList.length > recordsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CaregiverActivityList;
