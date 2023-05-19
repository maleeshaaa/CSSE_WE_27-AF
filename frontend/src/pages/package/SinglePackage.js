import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Swal from 'sweetalert2';


const SinglePackage = () => {
  const { id } = useParams();
  const [showPackage, setShowPackage] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const userId = "64569c01d4d5180affb57eb3";
  const [unlockedPackage, setUnlockedPackage] = useState(null);
  const [inquiryType, setInquiryType] = useState('');
  const [inquiryTitle, setInquiryTitle] = useState('');
  const [inquiryDescription, setInquiryDescription] = useState('');

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/package/check-fields', {
          userid: userId,
          id: id
        });
        const { data } = response.data;

        if (data && data.isPurchased) {
          setUnlockedPackage(data);
          setShowPackage(true);
        } else {
          setShowPackage(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkPayment();
  }, [id]);

  const handleFormButtonClick = () => {
    setShowForm(true);
  };

  const handleInquiryTypeChange = (event) => {
    setInquiryType(event.target.value);
  };

  const handleInquiryTitleChange = (event) => {
    setInquiryTitle(event.target.value);
  };

  const handleInquiryDescriptionChange = (event) => {
    setInquiryDescription(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const inquiryData = {
      userId: localStorage.getItem('username'),
      inquiryType: values.inquiryType,
      packageId: id,
      inquiryTitle: values.inquiryTitle,
      inquiryDescription: values.inquiryDescription,
    };
  
    try {

      const response = await axios.post(
        "http://localhost:8080/api/inquiry/inquiries",
        inquiryData
      );
  
      // Show SweetAlert success notification
      Swal.fire({
        icon: 'success',
        title: 'Inquiry Submitted',
        text: 'Your inquiry has been submitted successfully!',
        confirmButtonText: 'OK',
      });
  
      // Reset the form fields
      setInquiryType('');
      setInquiryTitle('');
      setInquiryDescription('');
  
      // Optionally, hide the form after submission
      setShowForm(false);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    } finally {
      setSubmitting(false);
    }
  };
  

  // Validation schema
  const validationSchema = yup.object().shape({
    inquiryType: yup.string().required('Please select an inquiry type'),
    inquiryTitle: yup.string().required('Please enter a title'),
    inquiryDescription: yup.string().required('Please enter a description'),
  });

  // Formik form
  const formik = useFormik({
    initialValues: {
      inquiryType: '',
      inquiryTitle: '',
      inquiryDescription: '',
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <div>
      {showPackage ? (
        <div className="package-details">
          <h2>Package {unlockedPackage.package_no}</h2>
          <p>{unlockedPackage.description}</p>
          <p>{unlockedPackage.details}</p>
          <p>Price: ${unlockedPackage.price}</p>
          <button
            type="button"
            className="btn btn-dark"
            style={{ width: '200px' }}
            onClick={handleFormButtonClick}
          >
            Not Satisfied (Make Inquiry)
          </button>
          {showForm && (
            <form className="form-control my-4" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type:</label>
                <select
                  className="form-control"
                  id="inquiryType"
                  value={inquiryType}
                  onChange={handleInquiryTypeChange}
                >
                  <option value="">Select an inquiry type</option>
                  <option value="General">General Inquiry</option>
                  <option value="Technical">Technical Inquiry</option>
                  <option value="Billing">Billing Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="heading">Package Id:</label>
                <input
                  className="form-control"
                  type="text"
                  id="heading"
                  value={id}
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="heading">Heading:</label>
                <input
                  className="form-control"
                  type="text"
                  id="heading"
                  value={inquiryTitle}
                  onChange={handleInquiryTitleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  value={inquiryDescription}
                  onChange={handleInquiryDescriptionChange}
                />
              </div>

              <button className="btn btn-dark" type="submit">
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="mt-5">
            You don't have access to view this package unless you purchase it
          </h1>
          <a href={`/payment/${id}`}>
            <button
              type="submit"
              className="btn btn-dark mt-3"
              style={{ width: "200px" }}
            >
              Pay
            </button>
          </a>
          {showForm && (
            <form className="mt-4">
              {/* Render your form components here */}
            </form>
          )}
        </div>
      )}
    </div>
  ) : (
    <div className="text-center">
      <h1 className="mt-5">
        You don't have access to view this package unless you purchase it
      </h1>
      <a href="/payment">
        <button
          type="submit"
          className="btn btn-dark mt-3"
          style={{ width: '200px' }}
        >
          Pay
        </button>
      </a>
      {showForm && (
        <form className="mt-4">
          {/* Render your form components here */}
        </form>
      )}
    </div>
  )}
</div>
);
};
export default SinglePackage;