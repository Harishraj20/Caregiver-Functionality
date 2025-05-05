import React, { useEffect, useState } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import closePNG from "../Assets/new.png";
import { sortData, renderSortArrow } from "../Utils/utils";

function CaregiverActivityList({
  initialActivityList = [
    {
      clientName: "Client1",
      taskName: "Task1",
      status: "Completed",
      time: "12.04.2024 07:30 AM",
    },
    {
      clientName: "Client2",
      taskName: "Task2",
      status: "Completed",
      time: "12.04.2024 08:30 AM",
    },
    {
      clientName: "Client3",
      taskName: "Task3",
      status: "Completed",
      time: "12.04.2024 06:00 PM",
    },
    {
      clientName: "Client1",
      taskName: "Task1",
      status: "Completed",
      time: "12.04.2024 12:30 PM",
    },
    {
      clientName: "Client2",
      taskName: "Task2",
      status: "Completed",
      time: "12.04.2024 10:37 AM",
    },
    {
      clientName: "Client3",
      taskName: "Task3",
      status: "Completed",
      time: "12.04.2024 11:30 AM",
    },
    {
      clientName: "Client1",
      taskName: "Task1",
      status: "Completed",
      time: "12.04.2024 09:30 PM",
    },
    {
      clientName: "Client2",
      taskName: "Task2",
      status: "Completed",
      time: "12.04.2024 09:00 AM",
    },
    {
      clientName: "Client3",
      taskName: "Task3",
      status: "Completed",
      time: "12.04.2024 03:30 PM",
    },
    {
      clientName: "Client31",
      taskName: "Task3",
      status: "Completed",
      time: "12.04.2024 08:00 AM",
    },
    {
      clientName: "Client13",
      taskName: "Task3",
      status: "Completed",
      time: "12.04.2024 06:30 AM",
    },
    {
      clientName: "Client13",
      taskName: "Task3",
      status: "Completed",
      time: "12.04.2024 06:30 AM",
    },
  ],
  closeModal,
}) {
  const [filteredActivityList, setFilteredActivityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    order: "asc",
    column: "",
  });
  const recordsPerPage = 10;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    if (!value) {
      const data = fetchRecords(currentPage, initialActivityList);
      setFilteredActivityList(data);
      return;
    }

    const filteredResult = initialActivityList.filter(
      (item) =>
        item.clientName.toLowerCase().includes(value.toLowerCase()) ||
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
    const data = fetchRecords(currentPage, initialActivityList);
    setFilteredActivityList(data);
  }, []);

  useEffect(() => {
    const data = fetchRecords(currentPage, initialActivityList);
    setFilteredActivityList(data);
  }, [currentPage]);
  const fetchRecords = (currentPage, data) => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const pageData = data.slice(startIndex, startIndex + recordsPerPage);
    return pageData;
  };

  const totalPages = Math.ceil(initialActivityList.length / recordsPerPage);

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
        <Search
          className="search-bar"
          value={searchValue}
          onChangeFunction={(e) => handleSearchChange(e.target.value)}
        />
        <div className="caregiver-activities">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort("clientName")}>
                  Client Name{renderSortArrow("clientName", sortConfig)}
                </th>
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
                    No data available
                  </td>
                </tr>
              ) : (
                filteredActivityList.map((data, index) => (
                  <tr key={index}>
                    <td>{data.clientName}</td>
                    <td>{data.taskName}</td>
                    <td>{data.status}</td>
                    <td>{data.time}</td>
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
          {initialActivityList.length > recordsPerPage && (
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
