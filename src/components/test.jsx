import { useState } from "react";

const Test = () => {
  const [name, setName] = useState("Will Cisneros");
  const [email, setEmail] = useState("will.cisneros@yahoo.com");
  const [dataVisible, setDataVisible] = useState(false);

  const getData = () => {
    if (dataVisible) {
      return (
        <div>
          <h3>{name}</h3>
          <h4>{email}</h4>
        </div>
      );
    } else {
      return <label>Click on the button to see my info</label>;
    }
  };

  const handleClick = () => {
    setDataVisible(true);
  };

  return (
    <div className="test-page">
      {getData()}

      <button onClick={handleClick} className="btn btn-info">
        See my Info
      </button>
    </div>
  );
};

export default Test;
