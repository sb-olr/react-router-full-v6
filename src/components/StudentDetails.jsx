import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleStudent } from "../services/students";

const StudentDetails = () => {
  const [student, setStudent] = useState(null);
  const { uuid } = useParams();

  useEffect(() => {
    getSingleStudent(uuid).then((data) => setStudent(data));
  }, [uuid]);

  if (!student) return "Loading...";

  return (
    <div>
      <div>uuid: {uuid}</div>
      <div>
        Name: {student.name.title} {student.name.first} {student.name.last}
      </div>
      <div>Email: {student.email}</div>
    </div>
  );
};

export default StudentDetails;
