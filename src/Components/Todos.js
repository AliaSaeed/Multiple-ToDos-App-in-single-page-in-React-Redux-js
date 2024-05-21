import React, { useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actons/index';
import { useSelector, useDispatch } from 'react-redux';
import "./todo.css";

const Todos = ({ listId }) => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.lists[listId]);
  const dispatch = useDispatch();

  return (
      <div className='main-div'>
          <div className='child-div'>
           
            <h2 text="center"> ToDo List</h2>
              <figure>
              <figcaption>{listId === "list1" ? "Lecturar of AI" : listId === "list2" ? "Lecturar of web development" : "Lecturar of Math"}</figcaption>

              </figure>
              <div className='addItems'>
                  <input
                      type='text'
                      placeholder='Add Items...'
                      value={inputData}
                      onChange={(event) => setInputData(event.target.value)}
                  />
                  <i
                      className='fa fa-plus add-btn'
                      onClick={() => {
                        dispatch(addTodo({ listId, data: inputData }));
                          setInputData('');
                      }}
                  ></i>
              </div>
              <div className='showItems'>
    {list.map((item) => (
        <div key={item.id} className='column'>
            <div className='itemRow'>
                <h3>{item.data}</h3>
                <div className='Todo-btn'>
                    <span className='iconTextWrapper'>
                        <i
                            className='fa fa-trash del-btn'
                            title="Delete Item"
                            onClick={() => dispatch(deleteTodo({ listId, id: item.id }))}
                        ></i>
                       
                    </span>
                </div>
            </div>
        </div>
    ))}
</div>
 

              <div className='showItems'>
                  <button
                      className='btn effect04'
                      data-sm-link-text="remove all"
                      onClick={() => dispatch(removeTodo({ listId }))}
                  >
                      <span>Delete All</span>
                  </button>
              </div>
          </div>
      </div>
  );
};

export default Todos;