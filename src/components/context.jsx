// import { useContext } from "react";
// import { createContext } from "react";


// const UserContext=createContext();

// function DisplayUser(){
//     const user=useContext(UserContext)
//     return <p>loggd in as {user}</p>
     
// }
// function LogoutUser(){
//     const use=useContext(UserContext)
//     return<p>log out {use}</p>
// }

// function Context(){
//     return(
//     <UserContext.Provider value="ragul" >
//         <DisplayUser/>
//         <LogoutUser/>
//     </UserContext.Provider>
//     );
// } 
  
// export default Context;



import "../styles/context.scss"
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}>
        Toggle theme
      </Button>
    </>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
