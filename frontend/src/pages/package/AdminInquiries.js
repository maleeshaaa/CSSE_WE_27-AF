import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/inquiry/inquiries");
      const { data } = response;
      setInquiries(data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  const handleToggleResolved = async (inquiryId, isResolved) => {
    try {
      await axios.put(`http://localhost:8080/api/inquiry/inquiries/${inquiryId}/resolve`, {
        isResolved: !isResolved,
      });
      fetchInquiries(); // Refresh the inquiries after marking as resolved or unresolved
    } catch (error) {
      console.error("Error toggling inquiry resolution:", error);
    }
  };

  return (
    <div>
      <h1 class="display-4 text-center bg-primary text-white p-3">Inquiries</h1>
      {inquiries.length === 0 ? (
        <p>No inquiries received.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
            
              <th>Heading</th>
              <th>User</th>
              <th>Type</th>
              <th>Message</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry._id}>
                <td>{inquiry.inquiryTitle}</td>
                <td>{inquiry.userId}</td>
                <td>{inquiry.inquiryType}</td>
                <td>{inquiry.inquiryDescription}</td>
                <td>{inquiry.addedDate}</td>
                <td>
  {inquiry.isResolved ? (
    <span class="text-success" role="img" aria-label="Resolved">
      &#x2714;
    </span>
  ) : (
    <span class="text-danger" role="img" aria-label="Unresolved">
      &#x2716;
    </span>
  )}
</td>
<td>
  <button class="btn btn-primary" onClick={() => handleToggleResolved(inquiry._id, inquiry.isResolved)}>
    {inquiry.isResolved ? "Mark Unresolved" : "Mark Resolved"}
  </button>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminInquiries;
