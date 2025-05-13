import React, { useEffect, useState } from "react";
import Search from "../Component/Search";
import Pagination from "../Component/Pagination";
import closePNG from "../Assets/new.png";
import { sortData, renderSortArrow, extractTime } from "../Utils/utils";


function CaregiverActivityList({
  activityList=[],
  closeModal,
  caregiverName,
  checkInDate,
  checkOutDate,
}) {
  const [filteredActivityList, setFilteredActivityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ order: "", column: "" });

  const recordsPerPage = 10;

  useEffect(() => {
    let data = [...activityList];
    if (searchValue) {
      const lowerValue = searchValue.toLowerCase();
      data = data.filter((item) => {
        const nameMatch =
          item.taskName.toLowerCase().includes(lowerValue) ||
          item.status.toLowerCase().includes(lowerValue);
        const dateMatch = item.statusTime.includes(searchValue);
        return nameMatch || dateMatch;
      });
    }

   
    setFilteredActivityList(data);
    setCurrentPage(1);
  }, [activityList, searchValue]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
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

  const indexOfFirstRecord = (currentPage - 1) * recordsPerPage;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const currentRecords = filteredActivityList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const totalPages = Math.ceil(filteredActivityList.length / recordsPerPage);

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
            {caregiverName || "N/A"}
          </div>
          <div className="checkin-date">
            <b>
              <i>Check-In Time: </i>
            </b>
            {extractTime(checkInDate)}
          </div>
          <div className="checkout-date">
            <b>
              <i>Check-Out Time: </i>
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
                <th
                  onClick={() => handleSort("taskName")}
                  className="header-cell"
                >
                  <div className="header-field">
                    Task Name {renderSortArrow("taskName", sortConfig)}
                  </div>
                </th>
                <th
                  onClick={() => handleSort("status")}
                  className="header-cell"
                >
                  <div className="header-field">
                    Status {renderSortArrow("status", sortConfig)}
                  </div>
                </th>
                <th
                  onClick={() => handleSort("statusTime")}
                  className="header-cell"
                >
                  <div className="header-field">
                    Time {renderSortArrow("statusTime", sortConfig)}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length === 0 ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No Task Available
                  </td>
                </tr>
              ) : (
                currentRecords.map((data, index) => (
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
          {filteredActivityList.length > 10 ? (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              firstIndex={indexOfFirstRecord}
              lastIndex={Math.min(
                indexOfLastRecord,
                filteredActivityList.length
              )}
              totalRecords={filteredActivityList.length}
              name="activities"
              searchval={searchValue}
              totalValue={filteredActivityList.length}
              closeModal={closeModal}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CaregiverActivityList;
