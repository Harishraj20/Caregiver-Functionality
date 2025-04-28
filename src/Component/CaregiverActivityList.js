import React from "react";

function CaregiverActivityList({
  activityList = [
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
  return (
    <div className="caregiver-activity-list">
      <div className="activity-container">
        <p className="caregiver-title">CAREGIVER ACTIVITIES</p>
        <div className="search-bar">
          <label htmlFor="search-field">Search: </label>
          <input type="text" id="search-field" placeholder="search" />
        </div>
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
              {activityList.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No data available
                  </td>
                </tr>
              ) : (
                activityList.map((data, index) => (
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
        <div className="pagnation-section"></div>
        <div className="back-btn">
          <button onClick={() => closeModal()}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default CaregiverActivityList;
