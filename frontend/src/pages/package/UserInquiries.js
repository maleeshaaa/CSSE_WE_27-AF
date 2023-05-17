import React, { useEffect, useState } from "react";
import axios from "axios";

const UserInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [editData, setEditData] = useState({});
  const [editingId, setEditingId] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const userId = "123456"; // Replace with the actual user ID
      const response = await axios.get(`http://localhost:8080/api/inquiry/inquiries/${userId}`);
      const { data } = response;
      setInquiries(data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  const deleteInquiry = async (inquiryId) => {
    try {
      await axios.delete(`http://localhost:8080/api/inquiry/inquiries/${inquiryId}`);
      fetchInquiries(); // Refresh inquiries after deletion
    } catch (error) {
      console.error("Error deleting inquiry:", error);
    }
  };

  const handleEdit = (inquiryId) => {
    const inquiry = inquiries.find((inquiry) => inquiry._id === inquiryId);
    setEditingId(inquiryId);
    setEditData({
      inquiryTitle: inquiry.inquiryTitle,
      inquiryType: inquiry.inquiryType,
      inquiryDescription: inquiry.inquiryDescription,
    });
  };

  const cancelEdit = () => {
    setEditingId("");
    setEditData({});
  };

  const updateInquiry = async (inquiryId) => {
    try {
      await axios.put(`http://localhost:8080/api/inquiry/inquiries/${inquiryId}`, editData);
      fetchInquiries(); // Refresh inquiries after editing
      setEditingId("");
      setEditData({});
    } catch (error) {
      console.error("Error updating inquiry:", error);
    }
  };

  return (
    <div>
      <h1 class="display-4 text-center bg-primary text-white p-3">Sent Inquiries</h1>

      {inquiries.length === 0 ? (
        <p>No inquiries sent.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Package Id</th>
              <th>Heading</th>
              <th>Type</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry._id}>
                <td>
                  {editingId === inquiry._id ? (
                    <input
                      type="text"
                      value={editData.packageId}
                      disabled
                    />
                  ) : (
                    inquiry.packageId
                  )}
                </td>
                <td>
                  {editingId === inquiry._id ? (
                    <input
                      type="text"
                      value={editData.inquiryTitle}
                      onChange={(e) => setEditData({ ...editData, inquiryTitle: e.target.value })}
                    />
                  ) : (
                    inquiry.inquiryTitle
                  )}
                </td>

                <td>
                  {editingId === inquiry._id ? (
                    <input
                      type="text"
                      value={editData.inquiryType}
                      onChange={(e) => setEditData({ ...editData, inquiryType: e.target.value })}
                      disabled
                    />
                  ) : (
                    inquiry.inquiryType
                  )}
                </td>
                <td>
                  {editingId === inquiry._id ? (
                    <input
                      type="text"
                      value={editData.inquiryDescription}
                      onChange={(e) => setEditData({ ...editData, inquiryDescription: e.target.value })}
                    />
                  ) : (
                    inquiry.inquiryDescription
                  )}
                </td>
                <td>
                  {inquiry.isResolved ? (
                    <span>Resolved</span>
                  ) : (
                    <span>Not Resolved</span>
                  )}
                </td>
                <td>
                  {editingId === inquiry._id ? (
                    <div class="btn-group">
                      <button class="btn btn-primary" onClick={() => updateInquiry(inquiry._id)}>Save</button>
                      <button class="btn btn-secondary" onClick={cancelEdit}>Cancel</button>
                    </div>
                  ) : (
                    <div class="btn-group">
                      <button class="btn btn-info" onClick={() => handleEdit(inquiry._id)}>Edit</button>
                      <button class="btn btn-danger" onClick={() => deleteInquiry(inquiry._id)}>Delete</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserInquiries;

