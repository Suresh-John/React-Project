import React, { useState, useEffect } from 'react';
import GridItem from './components/grid';
import Detail from './components/detail';
import Login from './components/login';
import PrivateRoute from'./components/privateroute';import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const mockedData = [
  { name: "Akash", age: 22, gender: "Male", role: "Developer", profileUrl:"https://via.placeholder.com/50" },
  { name: "Joseph", age: 25, gender: "Male", role: "Developer", profileUrl:"https://via.placeholder.com/50" },
  { name: "Zubee", age: 29, gender: "Male", role: "Devops", profileUrl:"https://via.placeholder.com/50" },
  { name: "Suresh", age: 25, gender: "Male", role: "Developer", profileUrl:"https://via.placeholder.com/50" }
];

const AppRoutes = (props) => {
  const [data, setData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const apiURL = 'https://api.example.com/data';

  useEffect(() => {
    fetch(apiURL)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.error('Error data:', error);
        setData(mockedData);
      });
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <header className="App-header">
         {/* <Greet/>
       <Welcome/>
         <div className="table">
         <Table data={data} />
         </div>
       <Message/> */}
        <Router>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute 
                  isAuthenticated={isAuthenticated} 
                  element={
                    <div className="grid-container">
                      {data.map((item, index) => (
                        <GridItem
                          key={index}
                          name={item.name}
                          age={item.age}
                          gender={item.gender}
                          role={item.role}
                          url={item.profileUrl}
                        />
                      ))}
                    </div>
                  } 
                />
              } 
            />
            <Route 
              path="/detail" 
              element={
                <PrivateRoute 
                  isAuthenticated={isAuthenticated} 
                  element={<Detail />} 
                />
              } 
            />
          </Routes>
        </Router>
      </header>
    </div>
  );
};

export default AppRoutes;
