import { useQuery } from '@tanstack/react-query'
import * as API from '../../apis/gallery'
import { useEffect } from 'react'

function Memories() {
  const {
    data: memories,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['memories'],
    queryFn: API.getAllGallery,
  })

  useEffect(() => {
    if (memories) {
      console.log('Fetched memories:', memories)
    }
  }, [memories])

  if (isPending) {
    return <p className="alert alert-info text-center">Loading...</p>
  }

  if (isError) {
    return (
      <p className="alert alert-danger text-center">Something went wrong!</p>
    )
  }

  if (memories && Array.isArray(memories) && memories.length > 0) {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Our Memories</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {memories.map((memory) => (
            <div key={memory.id} className="col">
              <div className="card shadow h-100">
                <img
                  src={memory.images}
                  className="card-img-top"
                  alt={memory.description}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{memory.images}</h5>{' '}
                  <p className="card-text">{memory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <p className="text-center mt-3">No memories to display yet.</p>
}

export default Memories
