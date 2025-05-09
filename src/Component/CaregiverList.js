import React, { useEffect, useState } from "react";
import CaregiverActivityList from "../Component/CaregiverActivityList";
import Pagination from "../Component/Pagination";
import Search from "../Component/Search";
import { sortData, renderSortArrow } from "../Utils/utils";
import sort_asc from "../Assets/sort_asc.png";
import sort_desc from "../Assets/sort_desc.png";
import sort_asc_disabled from "../Assets/sort_asc_disabled.png";
import sort_desc_disabled from "../Assets/sort_desc_disabled.png";
const CaregiverList = () => {
  const [caregiverList, setCaregiverList] = useState([
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
      caregiverName: "Nisha, Arjun",
      checkInDate: "05/07/2025 11:00:00 AM",
      checkOutDate: "",
      clientID: 15,
      clientName: "Mrs. 13, Client",
    },
    {
      caregiverName: "Seema, Harish",
      checkInDate: "05/06/2025 08:20:15 AM",
      checkOutDate: "05/06/2025 12:45:00 PM",
      clientID: 16,
      clientName: "Mr. 14, Client",
    },
    {
      caregiverName: "Yash, Swati",
      checkInDate: "05/09/2025 09:25:45 AM",
      checkOutDate: "",
      clientID: 17,
      clientName: "Mrs. 15, Client",
    },
    {
      caregiverName: "Tanvi, Rohit",
      checkInDate: "05/08/2025 08:10:00 AM",
      checkOutDate: "05/08/2025 12:00:30 PM",
      clientID: 18,
      clientName: "Mr. 16, Client",
    },
    {
      caregiverName: "Rekha, Manish",
      checkInDate: "05/07/2025 10:30:50 AM",
      checkOutDate: "",
      clientID: 19,
      clientName: "Mrs. 17, Client",
    },
    {
      caregiverName: "Lakshmi, Vishal",
      checkInDate: "05/06/2025 09:55:20 AM",
      checkOutDate: "05/06/2025 02:10:10 PM",
      clientID: 20,
      clientName: "Mr. 18, Client",
    },
    {
      caregiverName: "Kapil, Sneha",
      checkInDate: "05/09/2025 07:40:00 AM",
      checkOutDate: "05/09/2025 10:55:10 AM",
      clientID: 21,
      clientName: "Mrs. 19, Client",
    },
    {
      caregiverName: "Divya, Ajay",
      checkInDate: "05/09/2025 09:50:30 AM",
      checkOutDate: "",
      clientID: 22,
      clientName: "Mr. 20, Client",
    },
  ]);
  const [filteredCaregiverList, setFilteredCaregiverList] = useState([
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
    // const fetchCaregiverReports = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await fetch(
    //       "http://10.10.1.52/homecare/admin/checkInReportWithTaskInfo.do"
    //     );
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch caregiver data");
    //     }
    //     const result = await response.json();
    //     console.log(result.data);
    //     setCaregiverList(result.data);
    //     setFilteredCaregiverList(result.data);
    //   } catch (err) {
    //     console.log(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchCaregiverReports();
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

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredCaregiverList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  console.log("last Index: ",indexOfLastRecord);
  console.log("Index of the First Record: ",indexOfFirstRecord);
  console.log("Index of current records: ",currentRecords);
  const totalPages = Math.ceil(filteredCaregiverList.length / recordsPerPage);

  return (
    <div className="caregiver-report">
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
                  console.log(value);
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
                    {data.checkOutDate ? data.checkOutDate : "Yet to check out"}
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

       (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          searchVal = {searchValue}
        />
      )

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
