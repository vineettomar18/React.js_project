function AddTodo() {
  return (
    <div classNameName="container text-center">
      <div classNameName="row kg-row">
        <div classNameName="col-6">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div classNameName="col-4">
          <input type="date" />
        </div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-success vt-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
