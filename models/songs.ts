export interface SongsData {
  album: string
  artist: string
  song: string
  url?: string
}

export interface Songs extends SongsData {
  id: number
}
