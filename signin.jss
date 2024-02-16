import React from 'react';
import { isReturnStatement } from "typescript";

function SignButton() {
  return <button>Sign In</button>;
}

function RegisterButton() {
  return <button> Register</button>;
}

function PassEntry() {
  return (
    <form>
      <label htmlFor="password"> Password: </label>
      <input type="text" id="password" name="password" value={password} />
    </form>
  );
}

function EmailEntry() {
  return (
    <form>
      <label htmlFor="email"> Email: </label>
      <br />
      <input type="text" id="email" name="email" value={email} />
    </form>
  );
}

//returns error message if error
function errorMessage() {}

//submit data
function submitData() {}

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <h2> Login </h2>
      <EmailEntry email={email} setEmail={setEmail} />
      <PassEntry password={password} setPassword={setPassword} />
      <SignButton onSubmit={() => submitData(email, password)} />
    </div>
  );
}

