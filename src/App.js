import "./styles.css";
import React, { useState } from "react";

const DragDrop = () => {
  const [dragging, setDragging] = useState(false);

  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setDragging(true);
    e.target.style.opacity = "1"; // Set opacity to 0.5 when dragging starts
  };

  const onDragEnd = (e) => {
    setDragging(false);
    e.target.style.background = "white"; // Reset opacity to 1 when dragging ends
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData("text/plain");
    const droppedItem = document.getElementById(droppedItemId);
    e.target.appendChild(droppedItem);
    setDragging(false);
    droppedItem.style.opacity = "0.5"; // Reset opacity to 1 when dropped
  };

  return (
    <div className="container">
      <div
        className={`drop-zone ${dragging ? "dragging" : ""}`}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        Drop Zone
      </div>
      <div
        id="draggable"
        className={`drag-item ${dragging ? "dragging" : ""}`}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        Draggable Element
      </div>
    </div>
  );
};

export default DragDrop;
