import { useState } from 'react'

const filterList = ['all', 'mine', 'Cryptocurrencies', 'Exchanges', 'NFTs', 'Stablecoins']

export default function PostFilter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
    changeFilter(newFilter)
  }

  return (
    <div className="project-filter">
      <nav>
        <div className='px-3'><strong>Filter by: </strong></div>
        {filterList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active round-corner bg-primary text-white' : 'round-corner text-dark'}
          >{f}</button>          
        ))}
      </nav>
    </div>
  )
}