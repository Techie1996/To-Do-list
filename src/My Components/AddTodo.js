import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Givee Title");
    }
    if (!descr) {
      alert("Givee Description");
    }
    else{
      addTodo(title, descr);
      setTitle("");
      setDescr(""); 
    }
  }
  return (
    <div>
      <div className="container  flex-direction-coloumn justify-content-center align-items-center my-4 ">
        <h3>Add A todo</h3>
        <form className="row g-3" onSubmit={submit}>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Todoo Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="inputAddress" placeholder="title" fdprocessedid="yjaaf" />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Todoo Description</label>
            <input type="text" value={descr} onChange={(e) => setDescr(e.target.value)} className="form-control" id="inputAddress" placeholder="Description" fdprocessedid="yjaaf" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success" fdprocessedid="bhw9q">Add Todoo</button>
          </div>
        </form>
      </div>
    </div>
  )
}
