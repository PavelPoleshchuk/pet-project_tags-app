import { useState } from "react";
import { TagInput } from "./components/TagInput";

function App() {
  const [tags, setTag] = useState<string[]>([]);
  const remakeTags = (arr:string[]) => setTag(arr)
  return (
    <>
      <h1>Input some tags...</h1>
      <TagInput tags={tags} remakeTags={remakeTags}/>

    </>
  );
}

export default App;
