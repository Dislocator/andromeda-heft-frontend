import { Chip } from "@mui/material";
import React from "react";

const Tags = (props) => {
  const { tags } = props;

  console.log(tags);
  const handleDelete = () => {};
  return (
    <div>
      {tags.map((tag) => (
        <Chip label={tag.name} variant="outlined" onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Tags;
