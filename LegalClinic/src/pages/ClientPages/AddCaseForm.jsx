
import { useState } from "react";
import "./AddCaseForm.css";
import * as caseAPI from "../../utilities/case-api";
import caseImage from '../../assets/case1.png';
import { useNavigate } from "react-router";
const AddCaseForm = () => {
    const [formData, setFormData] = useState({
      caseId: '',
      description: '',
      file: null,
      lawyer: '',
    });
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'file') {
        setFormData({ ...formData, file: files[0] });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitted:', formData);
      // تنفيذ الإرسال الحقيقي هنا
      navigate('/client'); // الرجوع إلى صفحة العميل بعد الإرسال
    };
  
    const handleCancel = () => {
      navigate('/client');
    };
  
    return (
      <div className="add-case-wrapper">
        <div className="add-case-card-container">
          {/* الصورة بجانب النموذج */}
          <div className="case-image">
            <img src={caseImage} alt="Case Visual" />
          </div>
  
          {/* الفورم */}
          <div className="add-case-card">
            <h2>Add New Case</h2>
            <form className="add-case-form" onSubmit={handleSubmit}>
              <label>Case ID:</label>
              <input
                type="text"
                name="caseId"
                value={formData.caseId}
                onChange={handleChange}
                required
              />
  
              <label>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
  
              <label>Select Lawyer:</label>
              <select
                name="lawyer"
                value={formData.lawyer}
                onChange={handleChange}
                required
              >
                <option value="">-- Choose a Lawyer --</option>
                <option value="ahmed">Lawyer Ahmed</option>
                <option value="sarah">Lawyer Sarah</option>
                <option value="mohammed">Lawyer Mohammed</option>
                <option value="layla">Lawyer Layla</option>
              </select>
  
              <label>Attach File:</label>
              <input type="file" name="file" onChange={handleChange} />
  
              <div className="form-buttons">
                <button type="button" onClick={handleCancel}>Cancel</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddCaseForm;