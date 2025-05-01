import connection from './connection'
// import { Couple } from '../../models/couple'
import { Gallery, GalleryData } from '../../models/gallery'
import { Songs, SongsData } from '../../models/songs'
import { GuestList, GuestListData } from '../../models/guestlist'
import { Contact, ContactData } from '../../models/contact'
import { FunFacts, FunFactsData } from '../../models/funfacts'
// import { addNewCoupleDetailsRequest } from '../dtos/addNewCoupleDetailsRequest'

// //getAllCoupleDetails
// //convert snake to camel (returning camelCase)
// export async function getAllCoupleDetails(): Promise<Couple[]> {
//   return await connection('couple').select(
//     'id',
//     // 'name1',
//     // 'name2',
//     'gallery_id as galleryId',
//     'songs_id as songsId',
//     'guestlist_id as guestlistId',
//     'contact_id as contactId',
//   ) //Fetch all couple details
// }

// //AddNewDetails
// //convert camel to snake! (inserting snake_case)
// export async function addNewCoupleDetails(
//   newDetails: addNewCoupleDetailsRequest,
// ) {
//   const addResult = await connection('couple').returning('id').insert({
//     // name1: newDetails.name1,
//     // name2: newDetails.name2,
//     gallery_id: newDetails.galleryId,
//     songs_id: newDetails.songsId,
//     guestlist_id: newDetails.guestlistId,
//     contact_id: newDetails.contactId,
//   })
//   return addResult[0]
// }

//getAllGallery
//convert snake to camel (returning camelCase)
export async function getAllGallery(): Promise<Gallery[]> {
  return await connection('gallery').select('id', 'image', 'description') //Fetch all gallery
}

//AddNewGallery
//convert camel to snake! (inserting snake_case)
export async function addNewGallery(newDetails: GalleryData): Promise<number> {
  const addResult = await connection('gallery').returning('id').insert({
    images: newDetails.images, //change to image
    description: newDetails.description,
  })
  return addResult[0]
}

//getAllSongs
//convert snake to camel (returning camelCase)
export async function getAllSongs(): Promise<Songs[]> {
  return await connection('songs').select('id', 'album', 'artist', 'song') //Fetch all songs
}

//AddNewSong
//convert camel to snake! (inserting snake_case)
export async function addNewSong(newDetails: SongsData): Promise<number> {
  const addResult = await connection('songs').returning('id').insert({
    album: newDetails.album,
    artist: newDetails.artist,
    song: newDetails.song,
  })
  return addResult[0]
}

//getAllGuestList
//convert snake to camel (returning camelCase)
export async function getAllGuestList(): Promise<GuestList[]> {
  return await connection('guestlist').select(
    'id',
    'name',
    'availability',
    'allergies',
  ) //Fetch all guestlist
}

//AddNewGuestList
//convert camel to snake! (inserting snake_case)
export async function addNewGuestList(
  newDetails: GuestListData,
): Promise<number> {
  const addResult = await connection('guestlist').returning('id').insert({
    name: newDetails.name,
    availability: newDetails.availability,
    allergies: newDetails.allergies,
  })
  return addResult[0]
}

//getAllContact
//convert snake to camel (returning camelCase)
export async function getAllContact(): Promise<Contact[]> {
  return await connection('contact').select('id', 'name', 'phone', 'email') //change email to message //Fetch all contact
}

//AddNewGuestList
//convert camel to snake! (inserting snake_case)
export async function addNewContact(newDetails: ContactData): Promise<number> {
  const addResult = await connection('contact').returning('id').insert({
    name: newDetails.name,
    phone: newDetails.phone,
    email: newDetails.email, //needs to be changed to message
  })
  return addResult[0]
}

//getAllFunFacts
//convert snake to camel (returning camelCase)
export async function getAllFunFacts(): Promise<FunFacts[]> {
  return await connection('funfacts').select('id', 'description', 'memes') //Fetch all funfacts
}

//AddNewFunFact
//convert camel to snake! (inserting snake_case)
export async function addNewFunFact(newDetails: FunFactsData): Promise<number> {
  const addResult = await connection('funfacts').returning('id').insert({
    description: newDetails.description,
    memes: newDetails.memes,
  })
  return addResult[0]
}
