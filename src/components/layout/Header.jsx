import React from "react"
import useMain from "../../MainContext"
import hstyles from "./Header.module.css"

const Header = ({}) => {
  const { }  = useMain()

  return (
    <header className={hstyles["header"] + " w-100 p2 d-flex j-cont-between al-items-center brd-bottom"}>
      some header
      <button className="btn-primary">asdsadsad</button>
      <input prm="t" className={"m2 p1"} placeholder="ASdasd" />
      <select prm="t" className={"m2 p1"}>
        <option>asdasd</option>
      </select>
    </header>
  )
}

export default Header;