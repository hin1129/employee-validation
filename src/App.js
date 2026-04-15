import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [employeeId, setEmployeeId] = useState("")
  const [joiningDate, setJoiningDate] = useState("")
  const today = new Date().toISOString() //2026-04-15T17:15:35.552Z

  return (
    <div className="App">
      <header className="App-header">
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {
          name.length >= 4
            ?
            null
            :
            <p>min 4 characters</p>
        }

        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {
          email.includes("@") && email.includes(".")
            ?
            null
            :
            <p>not valid email</p>
        }

        <input
          type='number'
          placeholder='employeeId'
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />

        {
          employeeId.length === 6
            ?
            null
            :
            <p>not valid employeeId</p>
        }

        <input
          type='date'
          placeholder='joiningDate'
          value={joiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
        />

        {/* 2026-04-15T17:18:05.936Z */}
        {today}<br />

        {/* 2026-04-1517:18:41.331Z */}
        {today.split("T")}<br />

        {/* 2026-04-15 */}
        {today.split("T")[0]}<br />

        {/* 17:18:54.165Z */}
        {today.split("T")[1]}<br />

        {/* 17:18:54.165Z */}
        {Date.now()}<br />

        {/* 1776297600000*/}
        {Date.parse(joiningDate)}<br />

        {/* 2026-04-16 */}
        {joiningDate}

        {
          // date format is 2026-04-15
          today.split("T")[0] > joiningDate
            ?
            null
            :
            <p>joining date cant be in future</p>
        }

        {/* {
          // date format is 1776273231442
          Date.now() > Date.parse(joiningDate)
            ?
            null
            :
            <p>joining date cant be in future</p>
        } */}

        <button
          disabled={
            !(name.length >= 4) ||
            !((email.includes("@") && email.includes("."))) ||
            !(employeeId.length === 6) ||
            !(today.split("T")[0] > joiningDate)
          }
        >
          submit
        </button>
      </header>
    </div>
  );
}

export default App;
