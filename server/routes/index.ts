import { Router } from 'express'

import * as db from '../db/db'

const router = Router()
// '/api/v1/aay'
router.get('/', async (req, res) => {
  try {
    const songs = await db.getAllSongs()
    res.json(songs)
    console.log('songs', songs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/memories', async (req, res) => {
  try {
    const gallery = await db.getAllGallery()
    res.json(gallery)
    console.log('gallery', gallery)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/guestlist', async (req, res) => {
  try {
    const list = await db.getAllGuestList()
    res.json(list)
    console.log('GuestList', list)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
export default router
