import Btn from "./assets/components/btn"
import CapilizeFirstLetter from "./assets/components/CapilizeFirstLetter"
import ExtractObjProperties from "./assets/components/ExtractObjProperties"
import FilterMaping from "./assets/components/FilterMaping"
import Greeting from "./assets/components/Greeting"
import RenderingListItems from "./assets/components/RenderingListItems"


function App() {

  return (
    <>

      {/* Create a components ang give name Greeting and check is logged or not */}
      <Greeting />

      {/* Using Bootstrap Make one button color dynamic */}
      <Btn />

      {/* Extracting Object Properties */}
      <ExtractObjProperties />

      {/* Capitalising First Letter */}
      <CapilizeFirstLetter />

      {/* Filtering and Mapping */}
      <FilterMaping />

      {/* Rendering a List of Items */}
      <RenderingListItems />

    </>
  )
}

export default App
