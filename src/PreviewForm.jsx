import React, { useRef, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import "./PreviewForm.css";

const PreviewForm = ({ formData }) => {
  const chiefComplaintRef = useRef(null);
  const illnessRef = useRef(null);
  const physicalRef = useRef(null);
  const diagnosisRef = useRef(null);
  const medicineRef = useRef(null);
  const testRef = useRef(null);

  const [chiefComplaintHeight, setChiefComplaintHeight] = useState("50px");
  const [illnessHeight, setIllnessHeight] = useState("50px");
  const [physicalHeight, setPhysicalHeight] = useState("50px");
  const [diagnosisHeight, setDiagnosisHeight] = useState("50px");
  const [medicineHeight, setMedicineHeight] = useState("50px");
  const [testHeight, setTestHeight] = useState("50px");

  useEffect(() => {
    if (chiefComplaintRef.current) {
      setChiefComplaintHeight(
        `${Math.max(chiefComplaintRef.current.scrollHeight, 50)}px`
      );
    }
  }, [formData.chiefComplaint]);

  useEffect(() => {
    if (illnessRef.current) {
      setIllnessHeight(`${Math.max(illnessRef.current.scrollHeight, 50)}px`);
    }
  }, [formData.illness]);

  useEffect(() => {
    if (physicalRef.current) {
      setPhysicalHeight(`${Math.max(physicalRef.current.scrollHeight, 50)}px`);
    }
  }, [formData.physical]);

  useEffect(() => {
    if (diagnosisRef.current) {
      setDiagnosisHeight(
        `${Math.max(diagnosisRef.current.scrollHeight, 50)}px`
      );
    }
  }, [formData.diagnosis]);

  useEffect(() => {
    if (medicineRef.current) {
      setMedicineHeight(`${Math.max(medicineRef.current.scrollHeight, 50)}px`);
    }
  }, [formData.medicine]);

  useEffect(() => {
    if (testRef.current) {
      setTestHeight(`${Math.max(testRef.current.scrollHeight, 50)}px`);
    }
  }, [formData.test]);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page { size: auto; margin: 0; }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          background-color: #e6f0fa; /* Set the background color */
          margin: 0;
        }
        .print-area {
          margin: 0 !important;
          padding: 20mm; /* Add padding if needed */
          box-sizing: border-box;
          height: 100vh;
        }
      }
    `,
  });

  return (
    <Container className="preview-container">
      <div className="container mt-5 preview-container cont">
        <p className="text">Prescription Preview Section</p>
        <div ref={componentRef} className="print-area">
          <div className="row mb-4">
            <div className="col-md-9">
              {/* Start of Hospital Information */}
              <div className="prescription-preview">
                <div className="header">
                  <h4>Apollo Multispeciality Hospitals, Kolkata</h4>
                  <p>
                    58, Canal Circular Rd, Kadapara, Phool Bagan, Kankurgachi,
                    Kolkata, West Bengal 700054
                  </p>
                  <p>Phone: 033 4420 2122</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              {/* <img src={logo} alt="Logo"></img> */}
            </div>
          </div>
          {/* End of Hospital Information */}

          {/* Start of Doctor Information */}
          <div className="col-md-12">
            <div className="info">
              <h2>Doctor Information :</h2>
              <div className="row">
                <div className="col-md-4">
                  <p>{formData.docfirstName}</p>
                </div>
                <div className="col-md-8">
                  <p>{formData.docdegree}</p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Doctor Information */}

          {/* Start of Patient Information */}
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="info">
                <h2>Patient Information :</h2>
                <div className="row">
                  <div className="col-md-5 name-column">
                    <p>Name: {formData.patName}</p>
                  </div>
                  <div className="col-md-2 age-column ">
                    <p>Age: {formData.patage}</p>
                  </div>
                  <div className="col-md-2 sex-column">
                    <p>Sex: {formData.patsex}</p>
                  </div>
                  <div className="col-md-3 date-column">
                    <p>Date: {formData.visitDate}</p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12">
                    <p>Address: {formData.pateaddress}</p>
                  </div>
                  <div className="col-md-12 ">
                    <p>Phone: {formData.patphone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Patient Information */}

          <div className="form-group">
            <h2>Chief Complaint :</h2>
            <div
              className="form-control"
              ref={chiefComplaintRef}
              style={{
                whiteSpace: "pre-wrap",
                height: chiefComplaintHeight,
                overflowY: "hidden",
                border: "none",
                backgroundColor: "#eaf9f5",
              }}
            >
              {formData.chiefComplaint}
            </div>
          </div>
          <div className="form-group">
            <h2>History of Present Illness :</h2>
            <div
              className="form-control"
              ref={illnessRef}
              style={{
                whiteSpace: "pre-wrap",
                height: illnessHeight,
                overflowY: "hidden",
                border: "none",
                backgroundColor: "#eaf9f5",
              }}
            >
              {formData.illness}
            </div>
          </div>
          <div className="form-group">
            <h2>Physical Examination :</h2>
            <div
              className="form-control"
              ref={physicalRef}
              style={{
                whiteSpace: "pre-wrap",
                height: physicalHeight,
                overflowY: "hidden",
                border: "none",
                backgroundColor: "#eaf9f5",
              }}
            >
              {formData.physical}
            </div>
          </div>
          <div className="form-group">
            <h2>Diagnosis :</h2>
            <div
              className="form-control"
              ref={diagnosisRef}
              style={{
                whiteSpace: "pre-wrap",
                height: diagnosisHeight,
                overflowY: "hidden",
                border: "none",
                backgroundColor: "#eaf9f5",
              }}
            >
              {formData.diagnosis}
            </div>
          </div>
          <div className="form-group">
            <h2>Medicine :</h2>
            <div
              className="form-control"
              ref={medicineRef}
              style={{
                whiteSpace: "pre-wrap",
                height: medicineHeight,
                overflowY: "hidden",
                border: "none",
                backgroundColor: "#eaf9f5",
              }}
            >
              {formData.medicine}
            </div>
          </div>
          <div className="form-group">
            <h2>Test/Procedure Advise :</h2>
            <div
              className="form-control"
              ref={testRef}
              style={{
                whiteSpace: "pre-wrap",
                height: testHeight,
                overflowY: "hidden",
                border: "none",
                backgroundColor: "#eaf9f5",
              }}
            >
              {formData.test}
            </div>
          </div>
        </div>
        <div className="d-md-flex justify-content-md-end m-2">
          <Button
            className="btn btn-primary btn-lg px-5 py-2"
            onClick={handlePrint}
          >
            Print
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PreviewForm;
