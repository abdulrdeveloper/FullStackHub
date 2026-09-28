import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [posts, setPosts] = useState([]);
  // const [status, setStatus] = useState(true);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 5, 0));
    }, 1700);

    return () => {
      //cleanup
      clearInterval(timerId);
    };
  }, []);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   async function loadPost() {
  //     try {
  //       setStatus("loading");
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts?_limit=5",
  //         { signal: controller.signal }
  //       );
  //       const data = await response.json();
  //       setPosts(data);
  //       setStatus("success");
  //     } catch (error) {
  //       if (error.name === "AbortError") {
  //         console.log("Fetch aborted");
  //       } else {
  //         setStatus("error");
  //       }
  //     }
  //   }
  //   loadPost();

  //   return () => {
  //     controller.abort()
  //   }
  // }, []);


  return (
    <>
      <div>
        <h1>useEffect</h1>
        <h1>{seconds}</h1>
      </div>
    </>
  );
}

export default App;
