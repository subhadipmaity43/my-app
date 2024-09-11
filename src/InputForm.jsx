// src/InputForm.js
import React, { useRef, useEffect } from "react";
import "./HospitalForm.css";

const InputForm = ({ handleInputChange, formData, handleBulletPoint }) => {
  const chiefComplaintRef = useRef(null);
  const illnessRef = useRef(null);
  const physicalRef = useRef(null);
  const diagnosisRef = useRef(null);
  const medicineRef = useRef(null);
  const testRef = useRef(null);

  const adjustHeight = (ref) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight(chiefComplaintRef);
  }, [formData.chiefComplaint]);

  useEffect(() => {
    adjustHeight(illnessRef);
  }, [formData.illness]);

  useEffect(() => {
    adjustHeight(physicalRef);
  }, [formData.physical]);

  useEffect(() => {
    adjustHeight(diagnosisRef);
  }, [formData.diagnosis]);

  useEffect(() => {
    adjustHeight(medicineRef);
  }, [formData.medicine]);

  useEffect(() => {
    adjustHeight(testRef);
  }, [formData.test]);

  return (
    <div className="container mt-5 cont">
      <p className="text">Doctor's Editable Section</p>
      {/* *******************Doctors Information******************* */}
      <div className="row mb-4">
        <h5>Doctor's Information:</h5>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            name="docfirstName"
            value={formData.docfirstName}
            onChange={handleInputChange}
            placeholder="Doctor Name"
          />
        </div>
        <div className="col-md-6 text-right">
          <input
            type="text"
            className="form-control"
            name="docdegree"
            value={formData.docdegree}
            onChange={handleInputChange}
            placeholder="Doctor Degree"
          />
        </div>
      </div>

      {/* *******************Patient Information******************* */}
      <div className="row mb-4">
        <h5>Patient's Information:</h5>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            name="patName"
            value={formData.patName}
            onChange={handleInputChange}
            placeholder="Patient Name"
          />
        </div>
        <div className="col-md-3 text-right">
          <input
            type="text"
            className="form-control"
            name="patage"
            value={formData.patage}
            onChange={handleInputChange}
            placeholder="Patient Age"
          />
        </div>
        <div className="col-md-3 text-right">
          <input
            type="text"
            className="form-control"
            name="patsex"
            value={formData.patsex}
            onChange={handleInputChange}
            placeholder="Patient Sex"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            name="pateaddress"
            value={formData.pateaddress}
            onChange={handleInputChange}
            placeholder="Patient Address"
          />
        </div>
        <div className="col-md-4 text-center">
          <input
            type="text"
            className="form-control"
            name="patphone"
            value={formData.patphone}
            onChange={handleInputChange}
            placeholder="Patient Phone"
          />
        </div>
        <div className="col-md-2 text-right">
          <input
            type="text"
            className="form-control"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleInputChange}
            placeholder="Date"
          />
        </div>
      </div>

      {/* *******************Chief Complaint Information******************* */}
      <form>
        <div className="form-group mb-4">
          <h5>Chief Complaint:</h5>
          <textarea
            className="form-control"
            name="chiefComplaint"
            value={formData.chiefComplaint}
            onChange={(e) => {
              handleInputChange(e);
              adjustHeight(chiefComplaintRef);
            }}
            onKeyDown={(e) => handleBulletPoint(e, "chiefComplaint")}
            ref={chiefComplaintRef}
            rows="2"
            placeholder="Enter message"
            style={{
              whiteSpace: "pre-wrap",
              overflow: "hidden",
            }}
          />
        </div>
        {/* *******************History of Present Illness******************* */}
        <div className="form-group mb-4">
          <h5>History of Present Illness:</h5>
          <textarea
            className="form-control"
            name="illness"
            value={formData.illness}
            onChange={(e) => {
              handleInputChange(e);
              adjustHeight(illnessRef);
            }}
            onKeyDown={(e) => handleBulletPoint(e, "illness")}
            ref={illnessRef}
            rows="2"
            placeholder="Enter message"
            style={{
              whiteSpace: "pre-wrap",
              overflow: "hidden",
            }}
          />
        </div>
        {/* *******************Physical Examination******************* */}
        <div className="form-group mb-4">
          <h5>Physical Examination:</h5>
          <textarea
            className="form-control"
            name="physical"
            value={formData.physical}
            onChange={(e) => {
              handleInputChange(e);
              adjustHeight(physicalRef);
            }}
            onKeyDown={(e) => handleBulletPoint(e, "physical")}
            ref={physicalRef}
            rows="2"
            placeholder="Enter message"
            style={{
              whiteSpace: "pre-wrap",
              overflow: "hidden",
            }}
          />
        </div>
        {/* *******************Diagnosis******************* */}
        <div className="form-group mb-4">
          <h5>Diagnosis:</h5>
          <textarea
            className="form-control"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={(e) => {
              handleInputChange(e);
              adjustHeight(diagnosisRef);
            }}
            onKeyDown={(e) => handleBulletPoint(e, "diagnosis")}
            ref={diagnosisRef}
            rows="2"
            placeholder="Enter message"
            style={{
              whiteSpace: "pre-wrap",
              overflow: "hidden",
            }}
          />
        </div>
        {/* *******************Medicine******************* */}
        <div className="form-group mb-4">
          <h5>Medicine:</h5>
          <textarea
            className="form-control"
            name="medicine"
            value={formData.medicine}
            onChange={(e) => {
              handleInputChange(e);
              adjustHeight(medicineRef);
            }}
            onKeyDown={(e) => handleBulletPoint(e, "medicine")}
            ref={medicineRef}
            rows="2"
            placeholder="Enter message"
            style={{
              whiteSpace: "pre-wrap",
              overflow: "hidden",
            }}
          />
        </div>
        {/* *******************Test/Procedure Advise******************* */}
        <div className="form-group mb-4">
          <h5>Test/Procedure Advise:</h5>
          <textarea
            className="form-control"
            name="test"
            value={formData.test}
            onChange={(e) => {
              handleInputChange(e);
              adjustHeight(testRef);
            }}
            onKeyDown={(e) => handleBulletPoint(e, "test")}
            ref={testRef}
            rows="2"
            placeholder="Enter message"
            style={{
              whiteSpace: "pre-wrap",
              overflow: "hidden",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
