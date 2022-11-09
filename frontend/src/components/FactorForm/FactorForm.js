import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFactors } from "../../store/factors";
import "./factorForm.css";

function FactorForm({ setShowEditFactorsModal }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const factors = Object.values(useSelector((state) => state.factors))[0];

  const id = factors.id;
  const userId = user.id;

  const [familyFriendValue, setFamilyFriendValue] = useState(
    factors.familyFriend
  );
  const [highEndValue, setHighEndValue] = useState(factors.highEnd);
  const [complicatedValue, setComplicatedValue] = useState(factors.complicated);
  const [complicatedClientValue, setComplicatedClientValue] = useState(
    factors.complicatedClient
  );
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newFactors = {
      id,
      userId,
      familyFriend: +familyFriendValue,
      highEnd: +highEndValue,
      complicated: +complicatedValue,
      complicatedClient: +complicatedClientValue,
    };

    try {
      const updatedFactors = await dispatch(updateFactors(newFactors));
      if (updatedFactors) return setShowEditFactorsModal(false);
    } catch (res) {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    }
  };

  const cancelEditFactors = () => {
    setShowEditFactorsModal(false);
  };

  return (
    <div>
      <h2>Edit Job Factors</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>Family/Friend Factor</label>
        <input
          type="number"
          value={familyFriendValue}
          onChange={(e) => setFamilyFriendValue(e.target.value)}
          required
        />
        <label>High End Job Factor</label>
        <input
          type="number"
          value={highEndValue}
          onChange={(e) => setHighEndValue(e.target.value)}
          required
        />
        <label>Complicated Job Factor</label>
        <input
          type="number"
          value={complicatedValue}
          onChange={(e) => setComplicatedValue(e.target.value)}
          required
        />
        <label>Complicated Client Factor</label>
        <input
          type="number"
          value={complicatedClientValue}
          onChange={(e) => setComplicatedClientValue(e.target.value)}
          required
        />
        <button type="submit">Update Job Factors</button>
        <button onClick={cancelEditFactors} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default FactorForm;
