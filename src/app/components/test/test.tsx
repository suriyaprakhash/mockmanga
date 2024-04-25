import React, { useEffect, useId, useState } from 'react'

import {
    DndContext, closestCorners, KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    TouchSensor
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export const Task = ({ id, title }: any) => {

    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            {title}
        </div>
    );
}

// export const Column = ({ tasks }: any) => {
//     return (
//         <div>Tasks -
//         </div>
//     )
// }

function Test() {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'one' },
        { id: 2, title: 'two' },
        { id: 3, title: 'three' }
    ])

    const summaId = useId();

    const getTaskPos = (id: number) => tasks.findIndex((task) => task.id === id);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id === over.id) return;

        setTasks((tasks) => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);

            return arrayMove(tasks, originalPos, newPos);
        });
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );




    return (
        <div className="flex flex-col">
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}  id={summaId}>

                <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                    {tasks.map((task: any) => {
                        return (
                            <Task id={task.id} title={task.title} key={task.id} />
                        )
                    })}
                </SortableContext>
                
            </DndContext>
        </div>
    )
}

// https://www.youtube.com/watch?v=dL5SOdgMbRY

export default Test