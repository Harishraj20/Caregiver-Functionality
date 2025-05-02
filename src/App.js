import { useState } from "react";
import "./App.css";
import CaregiverActivityList from "./Component/CaregiverActivityList";
import Pagination from "./Component/Pagination";
import Search from "./Component/Search";

function App() {
  const [caregiverList] = useState([
    {
      name: "Rohan",
      checkIn: "8:00 AM",
      checkOut: "4:00 PM",
      activities: [
        {
          clientName: "Client1",
          taskName: "Task1",
          status: "Completed",
          time: "9:00 AM",
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
    },
    {
      name: "Kishore",
      checkIn: "9:00 AM",
      checkOut: "5:00 PM",
      activities: [
        {
          clientName: "Client4",
          taskName: "Task4",
          status: "Completed",
          time: "6:00 AM",
        },
        {
          clientName: "Client5",
          taskName: "Task5",
          status: "Completed",
          time: "7:00 AM",
        },
        {
          clientName: "Client6",
          taskName: "Task6",
          status: "Completed",
          time: "8:00 AM",
        },
      ],
    },
    {
      name: "Ravi",
      checkIn: "7:30 AM",
      checkOut: "3:30 PM",
      activities: [
        {
          clientName: "Client7",
          taskName: "Task7",
          status: "Completed",
          time: "3:00 AM",
        },
        {
          clientName: "Client8",
          taskName: "Task8",
          status: "Completed",
          time: "4:30 AM",
        },
        {
          clientName: "Client9",
          taskName: "Task9",
          status: "Completed",
          time: "5:00 AM",
        },
      ],
    },
    {
      name: "Lakshmi",
      checkIn: "10:00 AM",
      checkOut: "6:00 PM",
      activities: [
        {
          clientName: "Client10",
          taskName: "Task10",
          status: "Completed",
          time: "1:00 AM",
        },
        {
          clientName: "Client11",
          taskName: "Task11",
          status: "Completed",
          time: "2:00 AM",
        },
        {
          clientName: "Client12",
          taskName: "Task12",
          status: "Completed",
          time: "3:00 AM",
        },
      ],
    },
    {
      name: "Rohan",
      checkIn: "8:00 AM",
      checkOut: "4:00 PM",
      activities: [
        {
          clientName: "Client1",
          taskName: "Task1",
          status: "Completed",
          time: "9:00 AM",
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
    },
    {
      name: "Kishore",
      checkIn: "9:00 AM",
      checkOut: "5:00 PM",
      activities: [
        {
          clientName: "Client4",
          taskName: "Task4",
          status: "Completed",
          time: "6:00 AM",
        },
        {
          clientName: "Client5",
          taskName: "Task5",
          status: "Completed",
          time: "7:00 AM",
        },
        {
          clientName: "Client6",
          taskName: "Task6",
          status: "Completed",
          time: "8:00 AM",
        },
      ],
    },
    {
      name: "Rohan",
      checkIn: "8:00 AM",
      checkOut: "4:00 PM",
      activities: [
        {
          clientName: "Client1",
          taskName: "Task1",
          status: "Completed",
          time: "9:00 AM",
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
    },
    {
      name: "Kishore",
      checkIn: "9:00 AM",
      checkOut: "5:00 PM",
      activities: [
        {
          clientName: "Client4",
          taskName: "Task4",
          status: "Completed",
          time: "6:00 AM",
        },
        {
          clientName: "Client5",
          taskName: "Task5",
          status: "Completed",
          time: "7:00 AM",
        },
        {
          clientName: "Client6",
          taskName: "Task6",
          status: "Completed",
          time: "8:00 AM",
        },
      ],
    },
    {
      name: "Ravi",
      checkIn: "7:30 AM",
      checkOut: "3:30 PM",
      activities: [
        {
          clientName: "Client7",
          taskName: "Task7",
          status: "Completed",
          time: "3:00 AM",
        },
        {
          clientName: "Client8",
          taskName: "Task8",
          status: "Completed",
          time: "4:30 AM",
        },
        {
          clientName: "Client9",
          taskName: "Task9",
          status: "Completed",
          time: "5:00 AM",
        },
      ],
    },
    {
      name: "Lakshmi",
      checkIn: "10:00 AM",
      checkOut: "6:00 PM",
      activities: [
        {
          clientName: "Client10",
          taskName: "Task10",
          status: "Completed",
          time: "1:00 AM",
        },
        {
          clientName: "Client11",
          taskName: "Task11",
          status: "Completed",
          time: "2:00 AM",
        },
        {
          clientName: "Client12",
          taskName: "Task12",
          status: "Completed",
          time: "3:00 AM",
        },
      ],
    },
  ]);

  const [filteredCaregiverList, setFilteredCaregiverList] =
    useState(caregiverList);
  const [isOpen, setIsOpen] = useState(false);
  const [activityList, setActivityList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    if (!value) {
      setFilteredCaregiverList(caregiverList);
      setCurrentPage(1);
      return;
    }
    const filteredResult = caregiverList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
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

  const handleSort = (value, order = "asc") => {
    const sortedList = [...filteredCaregiverList].sort((a, b) => {
      let valA = a[value];
      let valB = b[value];
      const result = valA.toString().localeCompare(valB.toString());
      return order === "asc" ? result : -result;
    });
    setFilteredCaregiverList(sortedList);
    setCurrentPage(1);
  };

  // Pagination calculation
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
              <th onClick={() => handleSort("name")}>Caregiver Name</th>
              <th onClick={() => handleSort("checkIn")}>Check-In Time</th>
              <th onClick={() => handleSort("checkOut")}>Check-Out Time</th>
              <th>Activities</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            ) : (
              currentRecords.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.checkIn}</td>
                  <td>{data.checkOut}</td>
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
      {filteredCaregiverList.length > recordsPerPage ? (
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      ) : (
        ""
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
}

export default App;
