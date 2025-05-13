import React, { useEffect, useState } from "react";
import CaregiverActivityList from "../pages/CaregiverActivityList";
import Pagination from "../Component/Pagination";
import Search from "../Component/Search";
import { sortData, renderSortArrow } from "../Utils/utils";
import { Backdrop } from "@mui/material";
const CaregiverList = () => {
  const [caregiverList, setCaregiverList] = useState([]);
  const [filteredCaregiverList, setFilteredCaregiverList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activityList, setActivityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    order: "",
    column: "",
  });
  const [selectedCaregiverInfo, setSelectedCaregiverInfo] = useState({});
  const [recordsPerPage, setrecordsPerPage] = useState(10);

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
        setCaregiverList(result.data);
        setFilteredCaregiverList(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCaregiverReports();
    // setCaregiverList(cargiverJSON);
    // setFilteredCaregiverList(cargiverJSON);
  }, []);

  const handleSearchChange = (value) => {
    setSearchValue(value);

    if (!value) {
      setFilteredCaregiverList(caregiverList);
      setCurrentPage(1);
      return;
    }

    const lowerValue = value.toLowerCase();

    const filteredResult = caregiverList.filter((item) => {
      const nameMatch =
        item.caregiverName.toLowerCase().includes(lowerValue) ||
        item.clientName.toLowerCase().includes(lowerValue);
      const dateMatch =
        item.checkInDate.includes(value) ||
        (item.checkOutDate && item.checkOutDate.includes(value));

      return nameMatch || dateMatch;
    });

    setFilteredCaregiverList(filteredResult);
    setCurrentPage(1);
  };

  const handleViewClick = (
    activities,
    caregiverName,
    checkInDate,
    checkOutDate
  ) => {
    setActivityList(activities);
    setSelectedCaregiverInfo({ caregiverName, checkInDate, checkOutDate });
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
  const indexOfFirstRecord = (currentPage - 1) * recordsPerPage;
  const indexOfLastRecord = Math.min(
    currentPage * recordsPerPage,
    filteredCaregiverList.length
  );
  const currentRecords = filteredCaregiverList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredCaregiverList.length / recordsPerPage);

  return (
    <div className="caregiver-report">
      <Backdrop
        sx={{ color: "#ffba30", zIndex: (theme) => theme.zIndex.drawer + 1000 }}
        open={loading}
      >
        <img src={require("../Assets/btTree.png")} className="loading-img" />
      </Backdrop>
      <div className="title-div">
        <h3 className="title">CareGiver Reports</h3>
      </div>
      <div className="search-filter">
        <div className="search-holder">
          <div className="select-div">
            <label htmlFor="select-entry-list" className="select-label">
              Show
              <select
                id="select-entry-list"
                className="select-field"
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  setrecordsPerPage(value);
                }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </label>
          </div>
          <Search
            className="search-bar-cg-reports"
            value={searchValue}
            onChangeFunction={(e) => handleSearchChange(e.target.value)}
          />
        </div>
      </div>
      <div className="caregiver-info">
        <table>
          <thead>
            <tr>
              <th
                onClick={() => handleSort("caregiverName")}
                className="header-cell"
              >
                <div className="header-field">
                  Caregiver Name {renderSortArrow("caregiverName", sortConfig)}
                </div>{" "}
              </th>
              <th
                className="header-cell"
                onClick={() => handleSort("clientName")}
              >
                {" "}
                <div className="header-field">
                  Client Name {renderSortArrow("clientName", sortConfig)}
                </div>
              </th>
              <th
                className="header-cell"
                onClick={() => handleSort("checkInDate")}
              >
                {" "}
                <div className="header-field">
                  Check-In Time {renderSortArrow("checkInDate", sortConfig)}{" "}
                </div>
              </th>
              <th
                className="header-cell"
                onClick={() => handleSort("checkOutDate")}
              >
                <div className="header-field">
                  {" "}
                  Check-Out Time {renderSortArrow("checkOutDate", sortConfig)}
                </div>
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
                  <td>
                    {data.checkOutDate ? data.checkOutDate : "-"}
                  </td>
                  <td>
                    <button
                      className="view-button"
                      onClick={() =>
                        handleViewClick(
                          data.taskList,
                          data.caregiverName,
                          data.checkInDate,
                          data.checkOutDate
                        )
                      }
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
      {filteredCaregiverList.length > 10 ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          firstIndex={indexOfFirstRecord}
          lastIndex={indexOfLastRecord}
          totalRecords={filteredCaregiverList.length}
          name=""
          searchval={searchValue}
          totalValue={caregiverList.length}
        />
      ) : (
        ""
      )}
      {isOpen && (
        <CaregiverActivityList
          activityList={activityList}
          closeModal={closeModal}
          setActivityList={setActivityList}
          caregiverName={selectedCaregiverInfo.caregiverName}
          checkInDate={selectedCaregiverInfo.checkInDate}
          checkOutDate={selectedCaregiverInfo.checkOutDate}
        />
      )}
    </div>
  );
};

export default CaregiverList;
