import { useState } from 'react'
import { ScaresForm } from '../models/scares'

// TODO LASTLY Create Interface for { handleAdd }: Props
interface Props {
  handleAdd: (obj: ScaresForm) => void
}
function MultiInputContactForm({ handleAdd }: Props) {
  //  TODO 2.a : Create a "form" state, set the initial state to be an object.
  //  e.g. {scare: "", animal: "" }
  const [form, setForm] = useState({ scare: '', animal: '' })
  const [raz, setRaz] = useState(false)
  // TODO 3: Create handleChange function.

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const name = event.target.name
    // const value = event.target.value
    // De-Structured
    const { name, value } = event.target
    console.log(name, value)
    setForm({ ...form, [name]: value })
  }
  // TODO 4: Create handleSubmit function,
  // prevents default html form behaviour
  // updates the scaryStuff state using the handleAdd() function!
  // resets the form state
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (form.scare !== '' && form.animal !== '') {
      // 5. handleAdd function
      handleAdd(form)
      setForm({ scare: '', animal: '' })
      setRaz(false)
    } else setRaz(true)
  }
  return (
    <>
      {raz && <p>What you only scarda one thing tuff guy!</p>}
      {/* handle submit */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="scare">Scare:</label>
        <input
          // handle changes
          onChange={handleChange}
          type="text"
          name="scare"
          id="scare"
          placeholder="enter a scare"
          // TODO 2.b: make the input value dynamic/ stateful
          value={form.scare}
        />
        <br></br>
        <label htmlFor="animal">Animal:</label>
        <input
          // handle changes
          onChange={handleChange}
          type="text"
          name="animal"
          id="animal"
          placeholder="enter an animal"
          // TODO 2.c: make the input value dynamic/ stateful
          value={form.animal}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MultiInputContactForm
