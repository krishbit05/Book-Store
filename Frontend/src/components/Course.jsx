import React from 'react'
import Cards from "./Cards"
import list from "../../public/Freebooks.json"
import { Link } from "react-router-dom"

function Course() {
  console.log(list);
  return (
    <>
      <div className='md:px-20 px-4 dark:bg-black dark:text-white/80'>
        <div className='text-center pt-24'>
          <h1 className='text-xl md:text-2xl font-semibold'>We're delighted to have you {""}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className='mt-12 dark:text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores aliquam aliquid ullam nesciunt, in ad distinctio dignissimos dicta quod qui quisquam nemo minima dolor quo sed a. Nemo cupiditate, pariatur dignissimos, voluptas corporis impedit, quibusdam quis similique eius error illo nam obcaecati dolorem blanditiis. Porro incidunt necessitatibus sunt libero.</p>
          <Link to="/">
            <button className='mt-4 text-white bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-md text-xl transition-all ease in out'>
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course