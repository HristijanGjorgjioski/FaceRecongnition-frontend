import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

const Signin = () => {
  const { login } = useAuth()
  const [error, setError] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <form onSubmit={handleSubmit} className="measure" method="POST">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                ref={emailRef}
                required
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
                required
              />
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
          {error && <h4>{error}</h4>}
        </form>
      </main>
    </article>
  )
}

export default Signin
