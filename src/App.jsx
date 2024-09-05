import React, { useState, useEffect } from 'react';
import './App.css'

const Counter = () => {

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counter');
    return savedCount !== null ? parseInt(savedCount, 10) : 0;   
  });


  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };



  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0); 
  };

  return (
    <div id='gg'>
      <button  onClick={decrement}>-</button>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;













// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//     <button>-</button>
//          <button >
//           count is {count}
//         </button>
//        <button>+</button>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react';

// const PasswordValidator = () => {
//   const [password, setPassword] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const handleChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     setIsValid(newPassword.length >= 6);
//   };

//   return (
//     <div style={{ margin: '20px' }}>
//       <input
//         type="password"
//         value={password}
//         onChange={handleChange}
//         placeholder="Enter your password"
//         style={{ padding: '10px', fontSize: '16px' }}
//       />
//       <div style={{ marginTop: '10px' }}>
//         {password.length === 0 && <p>Enter 6 digit password</p>}
//         {password.length > 0 && (
//           <p style={{ color: isValid ? 'green' : 'red' }}>
//             {isValid ? '✅ Valid password' : '❌ Invalid password'}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PasswordValidator;