const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div classNameName="container text-center">
      <div classNameName="row kg-row">
        <div classNameName="col-6">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-danger vt-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
