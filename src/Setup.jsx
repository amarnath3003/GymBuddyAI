import { useState } from 'react'; 

function Setup() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState(""); 
  const [height, setHeight] = useState(""); 
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
   const [fitnessgoal, setFitnessGoal] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
    setWeight(e.target.value);
    setHeight(e.target.value);
    setGender(e.target.value);
    setActivityLevel(e.target.value);
    setFitnessGoal(e.target.value);
  };

  return (
    <div className="Setup">
      <input 
        type="number"
        value={age}
        onChange={handleChange}
        min="16"
        max="100"
        placeholder="Age" 
      />

    
      <input 
        type="number"
        value={height}
        onChange={handleChange}
        min="20"
        max="200"
        placeholder="Height" 
      />
      <input 
        type="number"
        value={weight}
        onChange={handleChange}
        min="20"
        max="250"
        placeholder="Weight" 
      />

      <><label>Gender:</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      </>

      <><label>Activity Level:</label>
      <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
        <option value="">Select</option>
        <option value="sedentary">Sedentary</option>
        <option value="moderatelyActive">Moderately Active</option>
        <option value="active">Active</option>
        <option value="veryActive">Very Active</option>
      </select>
      </>

      <><label>Fitness Goal:</label>
      <select value={fitnessgoal} onChange={(e) => setFitnessGoal(e.target.value)}>
        <option value="">Select</option>
        <option value="loseWeight">Fat loss</option>
        <option value="gainMuscle">Gain Muscle</option>
        <option value="maintainFitness">Maintain Fitness</option>
      </select>
      </>

      


    </div>



      


  


  );
}

export default Setup;