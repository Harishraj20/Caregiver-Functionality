import React, { useEffect, useState } from "react";
import CaregiverActivityList from "../Component/CaregiverActivityList";
import Pagination from "../Component/Pagination";
import Search from "../Component/Search";
import { sortData, renderSortArrow } from "../Utils/utils";

const CaregiverList = () => {
  const [caregiverList, setCaregiverList] = useState([]);
  const [filteredCaregiverList, setFilteredCaregiverList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activityList, setActivityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    order: "asc",
    column: "",
  });

  useEffect(() => {
    const fetchCaregiverReports = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://10.10.1.52/homecare/admin/checkInReportWithTaskInfo.do"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch caregiver data");
        }
        const result = await response.json();
        console.log(result.data);
        setCaregiverList(result.data);
        setFilteredCaregiverList(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCaregiverReports();
  }, []);

  const recordsPerPage = 10;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    if (!value) {
      setFilteredCaregiverList(caregiverList);
      setCurrentPage(1);
      return;
    }

    const filteredResult = caregiverList.filter((item) =>
      item.caregiverName.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCaregiverList(filteredResult);
    setCurrentPage(1);
  };

  const handleViewClick = (activities) => {
    setActivityList(activities);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSort = (column) => {
    const { sortedList, newOrder } = sortData(
      column,
      sortConfig,
      filteredCaregiverList
    );

    setFilteredCaregiverList(sortedList);
    setCurrentPage(1);
    setSortConfig({ column, order: newOrder });
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredCaregiverList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredCaregiverList.length / recordsPerPage);

  return (
    <div className="caregiver-report">
      <h2 className="title">CareGiver Reports</h2>
      <Search
        className="search-bar-cg-reports"
        value={searchValue}
        onChangeFunction={(e) => handleSearchChange(e.target.value)}
      />

      <div className="caregiver-info">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("caregiverName")}>
                Caregiver Name {renderSortArrow("caregiverName", sortConfig)}
              </th>
              <th onClick={() => handleSort("clientName")}>
                Client Name {renderSortArrow("clientName", sortConfig)}
              </th>
              <th onClick={() => handleSort("checkInDate")}>
                Check-In Time {renderSortArrow("checkInDate", sortConfig)}
              </th>
              <th onClick={() => handleSort("checkOutDate")}>
                Check-Out Time {renderSortArrow("checkOutDate", sortConfig)}
              </th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            ) : (
              currentRecords.map((data, index) => (
                <tr key={index}>
                  <td>{data.caregiverName}</td>
                  <td>{data.clientName}</td>
                  <td>{data.checkInDate}</td>
                  <td>{data.checkOutDate ? data.checkOutDate : "Yet to check out"}</td>
                  <td>
                    <button
                      className="view-button"
                      onClick={() => handleViewClick(data.activities)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {filteredCaregiverList.length > recordsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}

      {isOpen && (
        <CaregiverActivityList
          activityList={activityList}
          closeModal={closeModal}
          setActivityList={setActivityList}
        />
      )}
    </div>
  );
};

export default CaregiverList;
