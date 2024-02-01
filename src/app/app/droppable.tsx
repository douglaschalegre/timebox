import { useDroppable } from '@dnd-kit/core';

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    backgroundColor: isOver ? 'red' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className='z-10'>
      {props.children}
    </div>
  );
}
