import NavBar from "./NavBar";
import Body from "./Body";
import BodyProj from "./BodyProj";
import FNote from "./FNote";

export default function Home() {
  return (
    <div >
      <div style={{backgroundColor: 'rgb(235,235,235)'}}>
        <Body/>
      </div>
      <div style={{backgroundColor: 'black'}}>
        <BodyProj/>
      </div>
    </div>
  )
}
