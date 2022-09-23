import React, { useState } from "react";

function Loader() {
  return <div>Loading...</div>
}

function Content() {
  return <div>Raneh Egbe is a 22- year old girl who lives in Lagos, Nigeria.</div>
}

//Root Component
function App() {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  return <section>
    {isLoading ? <Loader/> : <Content/>}
  </section>
  
}

export default App;
