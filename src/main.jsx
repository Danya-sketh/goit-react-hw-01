import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'


function App() {
  return (
<div>
    <p>Hello</p>
  </div>
  );
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
)
