import React from 'react';
import './style.css'

function hi() {


  return (
    <div className="home-container">
    <header className="header">
        <h1>Welcome to the Passport Application Portal</h1>
        <p>Apply for a new passport or renew your existing one with ease.</p>
    </header>

    <main className="main-content">
        <section className="info-section">
            <h2>About the Passport Application Process</h2>
            <p>
                Our application process is quick and easy. Simply follow the steps
                and fill in the necessary details to complete your application.
            </p>
        </section>

        <section className="cta-section">
            <button className="start-application-button" onClick={() => alert('Starting application...')}>
                Start Your Application
            </button>
        </section>
    </main>

    <footer className="footer">
        <p>For more information, visit our <a href="#">help center</a> or <a href="#">contact us</a>.</p>
    </footer>
</div>
   
  )
}

export default hi
