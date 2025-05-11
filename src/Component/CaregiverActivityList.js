import React, { useEffect, useState } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import closePNG from "../Assets/new.png";
import { sortData, renderSortArrow, extractTime } from "../Utils/utils";

function CaregiverActivityList({
  activityList = [
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
  ],
  closeModal,
  caregiverName,
  checkInDate,
  checkOutDate,
}) {
  const [filteredActivityList, setFilteredActivityList] = useState([
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
    {
      caregiverName: "Ravi, Pradeep",
      checkInDate: "05/09/2025 09:05:08 AM",
      checkOutDate: "",
      clientID: 3,
      clientName: "Mr. 1, Client",
    },
    {
      caregiverName: "Anita, Sunil",
      checkInDate: "05/08/2025 08:15:12 AM",
      checkOutDate: "05/08/2025 12:30:45 PM",
      clientID: 4,
      clientName: "Mrs. 2, Client",
    },
    {
      caregiverName: "Meena, Rakesh",
      checkInDate: "05/07/2025 10:20:55 AM",
      checkOutDate: "05/07/2025 02:45:30 PM",
      clientID: 5,
      clientName: "Mr. 3, Client",
    },
    {
      caregiverName: "Kiran, Neha",
      checkInDate: "05/06/2025 11:10:40 AM",
      checkOutDate: "05/06/2025 03:25:00 PM",
      clientID: 6,
      clientName: "Mrs. 4, Client",
    },
    {
      caregiverName: "Raj, Komal",
      checkInDate: "05/09/2025 07:55:35 AM",
      checkOutDate: "",
      clientID: 7,
      clientName: "Mr. 5, Client",
    },
    {
      caregiverName: "Sita, Mohan",
      checkInDate: "05/09/2025 09:00:10 AM",
      checkOutDate: "05/09/2025 01:30:20 PM",
      clientID: 8,
      clientName: "Mr. 6, Client",
    },
    {
      caregiverName: "Amit, Priya",
      checkInDate: "05/08/2025 08:40:00 AM",
      checkOutDate: "05/08/2025 12:45:35 PM",
      clientID: 9,
      clientName: "Mrs. 7, Client",
    },
    {
      caregiverName: "Vikram, Pooja",
      checkInDate: "05/07/2025 10:10:20 AM",
      checkOutDate: "05/07/2025 02:20:50 PM",
      clientID: 10,
      clientName: "Mr. 8, Client",
    },
    {
      caregiverName: "Geeta, Suresh",
      checkInDate: "05/06/2025 09:35:15 AM",
      checkOutDate: "05/06/2025 01:15:10 PM",
      clientID: 11,
      clientName: "Mrs. 9, Client",
    },
    {
      caregiverName: "Anil, Rekha",
      checkInDate: "05/09/2025 08:10:40 AM",
      checkOutDate: "",
      clientID: 12,
      clientName: "Mr. 10, Client",
    },
    {
      caregiverName: "Sumit, Alka",
      checkInDate: "05/09/2025 07:50:30 AM",
      checkOutDate: "05/09/2025 11:20:30 AM",
      clientID: 13,
      clientName: "Mrs. 11, Client",
    },
    {
      caregiverName: "Rani, Deepak",
      checkInDate: "05/08/2025 09:45:00 AM",
      checkOutDate: "05/08/2025 01:10:15 PM",
      clientID: 14,
      clientName: "Mr. 12, Client",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    order: "asc",
    column: "",
  });
  const [records, totalRecords] = useState("");
  const recordsPerPage = 10;

  const handleSearchChange = (value) => {
    setSearchValue(value);
    if (!value) {
      const data = fetchRecords(currentPage, activityList);
      setFilteredActivityList(data);
      return;
    }

    const filteredResult = activityList.filter((item) =>
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
  const indexOfLastRecord = Math.min(
    currentPage * recordsPerPage,
    activityList.length
  );
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredActivityList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  console.log(currentPage);
  console.log(recordsPerPage);
  console.log(indexOfFirstRecord);
  console.log(indexOfLastRecord);
  console.log(currentRecords);

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
            harish
            {/* {caregiverName} */}
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
                    <td>{data.caregiverName}</td>
                    <td>{data.status}</td>
                    <td>{data.statusTime}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination-section">
          {activityList.length > recordsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              name="activities"
              firstIndex={indexOfFirstRecord}
              lastIndex={indexOfLastRecord}
              totalRecords={activityList.length}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CaregiverActivityList;
