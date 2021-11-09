import React from "react";
import { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import './App.css';
import Main from "./components/Main"
import Aside from "./components/Aside";
import Header from "./components/Header"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  const [journalsState, setJournalsState ] = useState({ journals: []});

  useEffect(() => {
      async function getJournals() {
        try {
          const journals = await fetch('http://localhost:3000/journals')
          .then(response => response.json())
          setJournalsState({ journals });
          console.log(journals);
        } catch (error) {
          console.log(error)
        }
      }
      getJournals();
  }, []);
  
  async function handleAdd(formInputs) {
      try {
        const journals = await fetch('http://localhost:3000/journals', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify(formInputs)
        }).then(res => res.json())

        setJournalsState({ journals });
        
      } catch(error) {
        console.log(error)
      }
    }

    async function handleDelete(journalId) {
      try {
        const journals = await fetch(`http://localhost:3000/journals/${journalId}`, {
          method: 'DELETE',
        }).then(res => res.json());
      
      setJournalsState({ journals });
  
      } catch (error) {
        console.log(error)
      }
    }

  async function handleUpdate(formInputs) {
    try {
      /* 
        we'll destructure the formInputs values so we can seperate the id,
        and use it for the url param. We don't want to send the id to the server
        as it's not included in our rails controller permit params
      */
      const { title, date, entry, id } = formInputs;
      const journals = await fetch(`http://localhost:3000/journals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ title, date, entry }),
      }).then(res => res.json())
      setJournalsState({ journals })
    } catch (error) {
      console.log(error)
    }
  }
    return (
      <div className="App">
      <div className="container">
        <Header />
        <Aside
        handleAdd={handleAdd}/>
        <Main
          journals={journalsState.journals}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
        <Nav />
        <Footer />
      </div>
    </div>
    );
  }

// function App() {
//   return (
//     <>
//      <Router>
//        <Post />
//        <Routes>
//        <Route path='/'/>
//        </Routes>
//      </Router>
      
//     </>
//   );
// }

export default App;
