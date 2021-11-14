import { useState } from "react";

const App = () => {
 
  const [nameField, setNameField] = useState("");
  const [showNameField, setShowNameField] = useState(false);
  const [emailField, setEmailField] = useState("");
  const [showEamilField, setshowEamilField] = useState(false);
  const [addressField, setAddressField] = useState("");
  const [showAddressField, setShowAddressField] = useState(false);
  const [addressField2, setAddressField2] = useState("");
  const [showAddressField2, setShowAddressField2] = useState(false);
  const [cityField, setCityField] = useState("");
  const [showCityField, setShowCityField] = useState(false);
  const [provinceField, setProvinceField] = useState("");
  const [showProvinceField, setShowProvinceField] = useState(false);
  const [postCodeField, setPostCodeField] = useState("");
  const [showPostCodeField, setShowPostCodeField] = useState(false);
  
  let subnsnHandlerMethod = (evt) => {
      evt.preventDefault();
      setShowNameField(true);
      setshowEamilField(true);
      setShowAddressField(true);
      setShowAddressField2(true);
      setShowCityField(true);
      setShowProvinceField(true);
      setShowPostCodeField(true);
    };
     return (
    <>
    <form onSubmit={subnsnHandlerMethod}>
        <h2>Data Entry Form</h2>
        <div className="top">
            <div>
                <label htmlFor="emBox">Email</label>
                <input type="email" id="emBox" placeholder="Enter email" value={emailField} onChange={(evt) => setEmailField(evt.target.value)} />
                </div>
                <div>
                    <label htmlFor="nameBox">Name</label>
                    <input type="text" id="nameBox" placeholder="Full Name" value={nameField} onChange={(evt) => setNameField(evt.target.value)} />
                    </div>
                    </div>
                    <label htmlFor="addressBox">Address</label>
                    <input type="text" id="addressBox" placeholder="1234 Main St" value={addressField} onChange={(evt) => setAddressField(evt.target.value)} />
                    <label htmlFor="addr2Box">Address 2</label>
                    <input type="text" id="addr2Box" value={addressField2} onChange={(evt) => setAddressField2(evt.target.value)} />
                    <div className="btm">
                        <div>
                            <label htmlFor="cityBox">City</label>
                            <input type="text" id="cityBox" value={cityField} onChange={(evt) => setCityField(evt.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="prvncBox" id="prncBox">
                                    Province
                                    </label>
                                    <select id="prvncBox" value={provinceField} onChange={(evt) => setProvinceField(evt.target.value)}>
                                        <option value="Alberta" id="1">Alberta</option>
                                        <option value="British Columbia" id="2">British Columbia</option>
                                        <option value="Nova Scotia" id="6">Nova Scotia</option>
                                        <option value="Ontario" id="7">Ontario</option>
                                        </select>
                                        </div>
                                        <div>
                                            <label htmlFor="postBox">Postal Code</label>
                                            <input type="text" id="postBox" value={postCodeField} onChange={(evt) => setPostCodeField(evt.target.value)} />
                                            </div>
                                            </div>
                                            <input type="checkbox" id="chck" /> Agree Terms &amp; Condition?
                                            <input type="submit" value="Submit" id="Subbtn" />
                                            </form>
                                            <table className="output">
                                                <tr>{showNameField ? (<><td className='op'>Full name:</td> {nameField}</>) : ''}</tr>
                                                <tr>{showEamilField ? (<><td className='op'>Email:</td> {emailField}</>) : ''}</tr>
                                                <tr>{showAddressField ? (<><td className='op'>Address:</td> {addressField}</>) : ''}</tr>
                                                <tr>{showAddressField2 ? (<><td className='op'>Address 2:</td> {addressField2}</>) : ''}</tr>
                                                <tr>{showCityField ? (<><td className='op'>City:</td> {cityField}</>) : ''}</tr>
                                                <tr>{showProvinceField ? (<><td className='op'>Province:</td> {provinceField}</>) : ''}</tr>
                                                <tr>{showPostCodeField ? (<><td className='op'>Post code:</td> {postCodeField}</>) : ''}</tr>
                                            </table>
                                            </>
                                            );
                                        }
                                        export default App;
