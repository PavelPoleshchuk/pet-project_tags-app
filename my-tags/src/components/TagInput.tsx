import * as React from "react";
import { useState } from "react";
// interface ITagInput {
//   Array: string;
// }
export const TagInput = () => {
  const [tags, setTag] = useState<string[]>([]);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!e.currentTarget.value.trim()) return;
    setTag([...tags, e.currentTarget.value]);
    e.currentTarget.value = "";
  };

  const delTag = (index: number) => {
    setTag(tags.filter((item, i) => i != index));
  };
  return (
    <div className="tags-container">
      {tags.length !== 0 &&
        tags.map((tag, index) => (
          <div className="tags-item" key={index}>
            <span className="text">{tag}</span>
            <span className="icon" onClick={()=>delTag(index)}>
              &times;
            </span>
          </div>
        ))}

      <input
        className="input-item"
        type="text"
        placeholder="Add tag..."
        onKeyDown={addTag}
      />
    </div>
  );
};
