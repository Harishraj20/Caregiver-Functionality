import React, { useEffect, useState } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import closePNG from "../Assets/new.png";

function CaregiverActivityList({
  initialActivityList = [
    { clientName: "Client1", taskName: "Task1", status: "Completed", time: "04/28/2025 03:22:46 AM" },
    { clientName: "Client2", taskName: "Task2", status: "Completed", time: "10:00 AM" },
    { clientName: "Client3", taskName: "Task3", status: "Completed", time: "11:00 AM" },
    { clientName: "Client1", taskName: "Task1", status: "Completed", time: "04/28/2025 03:22:46 AM" },
    { clientName: "Client2", taskName: "Task2", status: "Completed", time: "10:00 AM" },
    { clientName: "Client3", taskName: "Task3", status: "Completed", time: "11:00 AM" },
    { clientName: "Client1", taskName: "Task1", status: "Completed", time: "04/28/2025 03:22:46 AM" },
    { clientName: "Client2", taskName: "Task2", status: "Completed", time: "10:00 AM" },
    { clientName: "Client3", taskName: "Task3", status: "Completed", time: "11:00 AM" },
    { clientName: "Client31", taskName: "Task3", status: "Completed", time: "11:00 AM" },
    { clientName: "Client13", taskName: "Task3", status: "Completed", time: "11:00 AM" },
  ],
  closeModal,
}) {
  const [filteredActivityList, setFilteredActivityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const recordsPerPage = 10;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    setSortConfig((prevState) => {
      if (prevState.key === key) {
        const newDirection = prevState.direction === "asc" ? "desc" : "asc";
        return { key, direction: newDirection };
      }
      return { key, direction: "asc" };
    });
  };

  useEffect(() => {
    let filteredData = [...initialActivityList];

    if (searchValue) {
      filteredData = filteredData.filter((item) =>
        item.clientName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.taskName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.status.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.time.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        const aVal = a[sortConfig.key]?.toLowerCase?.() || a[sortConfig.key];
        const bVal = b[sortConfig.key]?.toLowerCase?.() || b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    const startIndex = (currentPage - 1) * recordsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + recordsPerPage);

    setFilteredActivityList(paginatedData);
  }, [currentPage, searchValue, initialActivityList, sortConfig]);

  const getTotalFilteredData = () => {
    if (!searchValue) return initialActivityList;
    return initialActivityList.filter((item) =>
      item.clientName.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.taskName.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.status.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.time.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const totalFilteredData = getTotalFilteredData();
  const totalPages = Math.ceil(totalFilteredData.length / recordsPerPage);

  const renderSortArrow = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? " ↑" : " ↓";
  };

  return (
    <div className="caregiver-activity-list">
      <img className="close-png" src={closePNG} alt="close" onClick={closeModal} />
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
                <th onClick={() => handleSort("clientName")}>Client Name{renderSortArrow("clientName")}</th>
                <th onClick={() => handleSort("taskName")}>Task{renderSortArrow("taskName")}</th>
                <th onClick={() => handleSort("status")}>Status{renderSortArrow("status")}</th>
                <th onClick={() => handleSort("time")}>Time{renderSortArrow("time")}</th>
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
          {totalPages > 1 && (
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
