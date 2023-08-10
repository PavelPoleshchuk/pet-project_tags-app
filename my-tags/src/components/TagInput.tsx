import * as React from "react";
interface ITagInput {
  tags: string[];
  remakeTags: (arr: string[]) => void;
}
export const TagInput = ({ tags, remakeTags }: ITagInput) => {
  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!e.currentTarget.value.trim()) return;
    remakeTags([...tags, e.currentTarget.value]);
    e.currentTarget.value = "";
  };

  const delTag = (index: number) => {
    remakeTags(tags.filter((_item, i) => i != index));
  };
  return (
    <div className="tags-container">
      {tags.length !== 0 &&
        tags.map((tag, index) => (
          <div className="tags-item" key={index}>
            <span className="text">{tag}</span>
            <span className="icon" onClick={() => delTag(index)}>
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
