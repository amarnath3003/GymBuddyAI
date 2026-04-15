import { useState } from 'react'; 
import './setup.css';

function Setup() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState(""); 
  const [height, setHeight] = useState(""); 
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [fitnessgoal, setFitnessGoal] = useState("");

  return (
    <div className="Setup">
      {/* 1. Physical Stats Row */}
      <div className="input-row">
        <input 
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age" 
        />
        <input 
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height" 
        />
        <input 
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight" 
        />
      </div>

      {/* 2. Dropdown Sections */}
      <div className="dropdown-container">
        <div className="input-group">
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="input-group">
          <label>Activity Level</label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="">Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="moderatelyActive">Moderately Active</option>
            <option value="active">Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </div>

        <div className="input-group">
          <label>Fitness Goal</label>
          <select value={fitnessgoal} onChange={(e) => setFitnessGoal(e.target.value)}>
            <option value="">Select</option>
            <option value="loseWeight">Fat loss</option>
            <option value="gainMuscle">Gain Muscle</option>
            <option value="maintainFitness">Maintain Fitness</option>
          </select>
        </div>
      </div>
      
      <button className="submit-btn">Calculate Plan</button>
    </div>
  );
}

export default Setup;