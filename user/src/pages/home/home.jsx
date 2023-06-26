import React from 'react'
import './home.css'
import TopNavBar from './top/topNavBar'


const Home = () => {
  return (
    <div className='home'>
      <TopNavBar/>
      <section className="service">
        <h1>
          Our Services
        </h1>
        <div className="dec">
       <p>
        You can access services like borrowing a book and  returning it.
        <br />
        You have also an opportunity to see the books we have, the books that you have borrowed .
        <br />
        You can borrow a MAXIMUM OF THREE books after which you return it after a certain period of time

       </p>
        </div>
        <div className="pic">

        </div>
      </section>
    </div>
  )
}

export default Home