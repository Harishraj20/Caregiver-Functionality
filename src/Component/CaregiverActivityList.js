import React, { useEffect, useState } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import closePNG from "../Assets/new.png";

function CaregiverActivityList({
  initialActivityList = [
    {
      clientName: "Client1",
      taskName: "Task1",
      status: "Completed",
      time: "04/28/2025 03:22:46 AM",
    },
    {
      clientName: "Client2",
      taskName: "Task2",
      status: "Completed",
      time: "10:00 AM",
    },
    {
      clientName: "Client3",
      taskName: "Task3",
      status: "Completed",
      time: "11:00 AM",
    },
    {
      clientName: "Client1",
      taskName: "Task1",
      status: "Completed",
      time: "04/28/2025 03:22:46 AM",
    },
    {
      clientName: "Client2",
      taskName: "Task2",
      status: "Completed",
      time: "10:00 AM",
    },
    {
      clientName: "Client3",
      taskName: "Task3",
      status: "Completed",
      time: "11:00 AM",
    },
    {
      clientName: "Client1",
      taskName: "Task1",
      status: "Completed",
      time: "04/28/2025 03:22:46 AM",
    },
    {
      clientName: "Client2",
      taskName: "Task2",
      status: "Completed",
      time: "10:00 AM",
    },
    {
      clientName: "Client3",
      taskName: "Task3",
      status: "Completed",
      time: "11:00 AM",
    },
    {
      clientName: "Client1",
      taskName: "Task1",
      status: "Completed",
      time: "04/28/2025 03:22:46 AM",
    },
    {
      clientName: "Client2",
      taskName: "Task2",
      status: "Completed",
      time: "10:00 AM",
    },
    {
      clientName: "Client3",
      taskName: "Task3",
      status: "Completed",
      time: "11:00 AM",
    },
  ],
  closeModal,
}) {
  const [filteredActivityList, setFilteredActivityList] =
    useState(initialActivityList);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
    if (!value) {
      setFilteredActivityList(initialActivityList);
      return;
    }

    const filteredResult = initialActivityList.filter(
      (item) =>
        item.clientName.toLowerCase().includes(value.toLowerCase()) ||
        item.taskName.toLowerCase().includes(value.toLowerCase()) ||
        item.status.toLowerCase().includes(value.toLowerCase()) ||
        item.time.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredActivityList(filteredResult);
  };

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentData = filteredActivityList.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  useEffect(()=>{
    const startIndex = (currentPage - 1) * recordsPerPage;
  const currentData = filteredActivityList.slice(
    startIndex,
    startIndex + recordsPerPage
  );
  },[currentPage])

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
                <th>Client Name</th>
                <th>Task</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No data available
                  </td>
                </tr>
              ) : (
                currentData.map((data, index) => (
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
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredActivityList.length / recordsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default CaregiverActivityList;
