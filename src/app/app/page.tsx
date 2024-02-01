'use client';
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './draggable';
import { Droppable } from './droppable';
import { TimeInput } from '@/components/timebox/timeInput';

export default function App() {
  const [parent, setParent] = useState(null);
  const dragabbleMarkup = <Draggable id='dragabble'>Drag me</Draggable>;
  const containers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  return (
    <main className='flex justify-center items-center flex-col h-svh'>
      <DndContext onDragEnd={handleDragEnd}>
        <div className='flex w-svw justify-around'>
          <div>{parent === null ? dragabbleMarkup : null}</div>
          <div className='flex flex-col gap-y-0.5'>
            {containers.map((id) => (
              <div className='flex justify-center items-center' key={id}>
                <div className='w-8 text-center'>
                  <span className=''>{id}</span>
                </div>
                <Droppable id={id}>
                  {parent === id ? dragabbleMarkup : <TimeInput />}
                </Droppable>
              </div>
            ))}
          </div>
        </div>
      </DndContext>
    </main>
  );

  function handleDragEnd(event: { over: any }) {
    const { over } = event;
    setParent(over ? over.id : null);
  }
}
