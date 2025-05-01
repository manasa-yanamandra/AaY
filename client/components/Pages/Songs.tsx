import { useQuery } from '@tanstack/react-query'
import * as API from '../../apis/songs'
import { useState, useRef } from 'react' // Import useState and useRef

function Songs(id: number) {
  // return <p>There is nothing here </p>

  const {
    data: songs,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['song', id],
    queryFn: API.getAllSongs,
  })

  const [currentSongUrl, setCurrentSongUrl] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = (url: string) => {
    setCurrentSongUrl(url)
    if (audioRef.current) {
      audioRef.current.src = url
      audioRef.current.play()
    }
  }

  // console.log(songs);
  if (isPending) {
    return <p className="alert alert-info text-center">Loading...</p>
  }

  if (isError) {
    return (
      <p className="alert alert-danger text-center">Something went wrong!</p>
    )
  }
  if (songs) {
    console.log('Fetched songs:', songs) // Inspect your API response
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-3"> Our Songs</h2>
        <ul className="list-group">
          {songs.map((song) => (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between align-items-center shadow-lg mb-3"
              style={{ textAlign: 'center' }}
            >
              <div style={{ textAlign: 'left' }}>
                {' '}
                {/* Override center for text content */}
                <h6 className="mb-2">
                  <strong>{song.song}</strong>
                </h6>
                <p className="mb-2 p-0">
                  Album: <span className="font-italic">{song.album}</span>
                </p>
                <p className="mb-2 p-0">
                  Artist:{' '}
                  <span className="font-weight-bold">{song.artist}</span>
                </p>
              </div>
              {song.url && (
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => handlePlay(song.url)}
                >
                  Play
                </button>
              )}
            </li>
          ))}
        </ul>
        {currentSongUrl && (
          <div className="mt-3 text-center">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio controls ref={audioRef} className="w-100">
              <source src={currentSongUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    )
  }
  return null // Added a default return statement
}
export default Songs
