import { useState } from "react"
import { CiSearch } from "react-icons/ci"

export default function SearchField() {
    const [value, setValue] = useState("")
  return (
    <div className="flex items-center gap-4">
        <CiSearch />
        <form>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        </form>
    </div>
  )
}