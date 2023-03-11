import React, { useEffect, useState } from "react";
import { getStudents } from "../services/students";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setStudents(data));
  }, []);

  if (!students) return "Loading...";

  return (
    <>
      <h2>Students</h2>

      {students &&
        students.map((student) => (
          <Link to={`/students/${student.login.uuid}`} key={student.login.uuid}>
            <div>
              {student.name.first} {student.name.last}
            </div>
          </Link>
        ))}
    </>
  );
};

export default Students;
