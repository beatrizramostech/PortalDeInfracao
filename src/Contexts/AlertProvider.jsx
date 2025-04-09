import { createContext, useContext, useState } from 'react';

// Create the alert context
const AlertContext = createContext();

// AlertProvider wraps your app
export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (message, type = 'info', timeout = 4000) => {
    const id = Date.now();

    // Add alert to state
    setAlerts(prev => [...prev, { id, message, type }]);

    // Auto-remove after X seconds
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id));
    }, timeout);
  };

  const closeAlert = id => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      {/* Render alerts */}
      {/* <div className="alert-container">
        {alerts.map(({ id, message, type }) => (
          <div key={id} className={`alert alert-${type}`}>
            <span>{message}</span>
            <span className="close-alert" onClick={() => closeAlert(id)}>
              ✖
            </span>
          </div>
        ))}
      </div> */}
    </AlertContext.Provider>
  );
};

// Hook to use in any component
export const useAlert = () => useContext(AlertContext);
