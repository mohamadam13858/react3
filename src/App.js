import React from "react";
import TopForm from "./TopForm";
import TaskItems from "./Taskitems";


const App = () => {
  return (
    <div className="container w-100 h-100 p-2">
      <div className="row h-100 justify-content-center align-item-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
          <TopForm />
          <TaskItems />
        </div>
      </div>
    </div>
  )
}
export default App;