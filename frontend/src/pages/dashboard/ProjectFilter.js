import { useState } from 'react'

const filterList = ['all', 'mine', 'Cryptocurrencies', 'Exchanges', 'NFTs', 'Stablecoins']

export default function ProjectFilter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
    changeFilter(newFilter)
  }

  return (
    <div className="project-filter">
      <nav>
        <>Filter by: </>
        {filterList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
          >{f}</button>          
        ))}
      </nav>
    </div>
  )
}