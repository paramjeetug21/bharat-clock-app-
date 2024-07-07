import { useEffect, useState } from "react";

const Time = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    console.log("interval is setuped");
    const intervid = setInterval(() => {
      settime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervid);
      console.log("cancelled the intercal");
    };
  }, []);

  return (
    <p>
      {" "}
      THE DATE IS : {time.toLocaleDateString()} AND TIME IS{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default Time;
