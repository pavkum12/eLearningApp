import React from "react";

export default function AdminAddUpdate(props) {
  let { handleSubmit, setnoti } = props.updateContent;

  return (
    <div className="container add-update ">
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="title"></label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control input-text"
            onChange={(e) => setnoti(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Add Update"
          className="btn btn-add-update"
        />
      </form>
    </div>
  );
}
