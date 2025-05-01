export interface GuestListData {
  name: string
  availability: boolean
  allergies: string
}

export interface GuestList extends GuestListData {
  id: number
}
