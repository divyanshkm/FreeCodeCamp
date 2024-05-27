import Student from "./components/Student"

function App() {
  
  return (
    <>
    <Student name="Goku" age={30} isStudent={true}/>
    <Student name="Patrick" age="sa" isStudent={false} />
    <Student />
    </>
  )  
}

export default App
