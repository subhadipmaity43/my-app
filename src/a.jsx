import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import "../styles/PreviewForm.css";

const PreviewForm = ({ formData }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page { size: auto; margin: 20mm; }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
        .print-area {
          margin-left: 0 !important;
          margin-top: 0 !important;
        }
      }
    `,
  });

  return (
    <Container className="preview-container">
      <div ref={componentRef} className="print-area">
        <h2>Apollo Multispeciality Hospitals, Kolkata</h2>
        <p>
          58, Canal Circular Rd, Kadapara, Phool Bagan, Kankurgachi, Kolkata,
          West Bengal 700054
        </p>
        <p>Phone: 033 4420 2122</p>
        <h3>Doctor Information</h3>
        <h3>Patient Information</h3>
        <div className="patient-info">
          <div className="row">
            <div className="col-md-8">
              <p>Name: {formData.name}</p>
              <p>Age: {formData.age}</p>
              <p>Sex: {formData.sex}</p>
              <p>Address: {formData.address}</p>
              <p>Phone: {formData.phone}</p>
              <p>Visit Date: {formData.visitDate}</p>
            </div>
            <div className="col-md-2">
              <p>Chief Complaint:</p>
              <p>{formData.chiefComplaint}</p>
            </div>
          </div>
          <p>History of Present Illness: {formData.historyOfPresentIllness}</p>
          <p>Physical Examination: {formData.physicalExamination}</p>
        </div>
      </div>
      <Button onClick={handlePrint}>Print</Button>
    </Container>
  );
};

export default PreviewForm;
