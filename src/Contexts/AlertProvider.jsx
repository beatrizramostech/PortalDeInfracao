import { createContext, useContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  let alertCounter = 0;
  const showAlert = (message, type = 'info', timeout = 4000) => {
    const id = `alert-${Date.now()}-${alertCounter++}`;

    setAlerts(prev => [...prev, { id, message, type }]);

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

      <div className="alert-container">
        {alerts.map(({ id, message, type }) => (
          <div key={id} className={`alert alert-${type}`}>
            <span>{message}</span>
            <span className="close-alert" onClick={() => closeAlert(id)}>
              ✖
            </span>
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  );
};

// Hook to use in any component
export const useAlert = () => useContext(AlertContext);
