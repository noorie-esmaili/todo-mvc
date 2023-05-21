import React from "react";

interface FooterProps {
    numOfleftItems: number
}

const TodoList: React.FC<FooterProps> = ({ numOfleftItems }) => {

    return (
        <>
            <p>{numOfleftItems} items left</p>
            <button>Active</button>
            <button>Completed</button>
            <button>Clear Completed</button>
        </>
    );
};

export default TodoList;






