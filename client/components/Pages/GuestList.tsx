import { useQuery } from '@tanstack/react-query'
import * as API from '../../apis/guest-list'
import { useEffect } from 'react'

function GuestList() {
  const {
    data: list,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['guestlist'],
    queryFn: API.getAllGuestList,
  })

  useEffect(() => {
    if (list) {
      console.log('Fetched Guest List:', list)
    }
  }, [list])

  if (isPending) {
    return <p className="alert alert-info text-center">Loading...</p>
  }

  if (isError) {
    return (
      <p className="alert alert-danger text-center">Something went wrong!</p>
    )
  }

  if (list && Array.isArray(list) && list.length > 0) {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Guest List</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered shadow">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Availability</th>
                <th>Allergies</th>
              </tr>
            </thead>
            <tbody>
              {list.map((guest) => (
                <tr key={guest.id}>
                  <td>{guest.id}</td>
                  <td>{guest.name}</td>
                  <td>{guest.availability ? 'Yes' : 'No'}</td>
                  <td>{guest.allergies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return <p className="text-center mt-3">No guests in the list yet.</p>
}

export default GuestList
