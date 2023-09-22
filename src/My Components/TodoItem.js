import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <div className="container">
      <h5>{todo.sno}</h5>
      <h3>{todo.title}</h3>
      <p>{todo.descr}</p>
      <button className="btn btn-sm-2 btn-primary my-2" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

//Dhruvi Barot

/*<div class="text-one">Hello,</div>
<!--<div class="text-two">I Am Govinda Yadav</div>
<div class="text-two">Dhruvi Barot</div>
<!--<div class="text-three">Web Designer/software Developer</div>-->
<div class="text-three">Miss Microbiologist</div>
<div class="text-four">From United kingdom</div>
</div>
<div class="button">
<a href="D.pdf"  id="aresume"style="color:white;""><button>Hire Me</button></a>
</div>*/
