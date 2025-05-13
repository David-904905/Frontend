// import React, { useState } from 'react';
// import { DndContext } from '@dnd-kit/core';
// import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';

// const DraggableComponent = () => {
//   const [items, setItems] = useState([
//     { id: '1', title: 'Skills', content: ['Item 1', 'Item 2', 'Item 3'] },
//     { id: '2', title: 'Stats', content: ['Item 4', 'Item 5', 'Item 6'] },
//     { id: '3', title: 'Top Books', content: ['Item 7', 'Item 8', 'Item 9'] },
//     { id: '4', title: 'Completed', content: ['Item 10', 'Item 11', 'Item 12'] }
//   ]);

//   // Handle the drag end event
//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (!over) return; // If no item was over, return early

//     const activeIndex = items.findIndex((item) => item.id === active.id);
//     const overIndex = items.findIndex((item) => item.id === over.id);
    
//     // If the item is dropped in the same place, do nothing
//     if (activeIndex === overIndex) return;

//     const newItems = [...items];
//     newItems.splice(activeIndex, 1);
//     newItems.splice(overIndex, 0, items[activeIndex]);

//     setItems(newItems);
//   };

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
//         <div className="skills-and-other-info">
//           {items.map((item) => (
//             <SortableItem key={item.id} id={item.id} item={item} />
//           ))}
//         </div>
//       </SortableContext>
//     </DndContext>
//   );
// };

// // Sortable item component
// const SortableItem = ({ id, item }) => {
//   const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id });

//   return (
//     <div
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       style={{
//         padding: '20px',
//         backgroundColor: isDragging ? 'lightblue' : 'lightgray',
//         marginBottom: '10px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         cursor: 'move',
//       }}
//     >
//       <h2>{item.title}</h2>
//       <ul>
//         {item.content.map((contentItem, idx) => (
//           <li key={idx}>{contentItem}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DraggableComponent;
