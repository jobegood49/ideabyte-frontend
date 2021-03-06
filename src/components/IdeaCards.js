import React from 'react'

const data = [
  {
    id: 1,
    _id: 'abcdef',
    image: '/assets/traveling.jpg',
    title: 'Tripvesto',
    description: 'App to plan and gather your friends to travel',
    author: 'Joen Doe',
    date: '2019/02/25',
    location: 'Jakarta, Indonesia'
  },
  {
    id: 2,
    _id: 'abcdef',
    image: '/assets/traveling.jpg',
    title: 'Tripvesto',
    description: 'App to plan and gather your friends to travel',
    author: 'Joen Doe',
    date: '2019/02/25',
    location: 'Jakarta, Indonesia'
  },
  {
    id: 3,
    _id: 'abcdef',
    image: '/assets/traveling.jpg',
    title: 'Tripvesto',
    description: 'App to plan and gather your friends to travel',
    author: 'Joen Doe',
    date: '2019/02/25',
    location: 'Jakarta, Indonesia'
  },
  {
    id: 4,
    _id: 'abcdef',
    image: '/assets/traveling.jpg',
    title: 'Tripvesto',
    description: 'App to plan and gather your friends to travel',
    author: 'Joen Doe',
    date: '2019/02/25',
    location: 'Jakarta, Indonesia'
  },
  {
    id: 5,
    _id: 'abcdef',
    image: '/assets/traveling.jpg',
    title: 'Tripvesto',
    description: 'App to plan and gather your friends to travel',
    author: 'Joen Doe',
    date: '2019/02/25',
    location: 'Jakarta, Indonesia'
  },
  {
    id: 6,
    _id: 'abcdef',
    image: '/assets/traveling.jpg',
    title: 'Tripvesto',
    description: 'App to plan and gather your friends to travel',
    author: 'Joen Doe',
    date: '2019/02/25',
    location: 'Jakarta, Indonesia'
  }
]

const IdeaCards = () => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div>
              <p>{item.author}</p>
              <p>{item.date}</p>
              <p>{item.location}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default IdeaCards
