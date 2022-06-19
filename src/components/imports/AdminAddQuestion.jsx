import React, { useState } from "react";

export default function AdminAddQuestion(props) {
  let { handleSubmit, setTitle, setDescription, setFile } = props.courseContent;

  return (
    <div className="container add-cource ">
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="title">Course Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control input-text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Course Description (Year)</label>
          <textarea
            className="form-control input-text"
            name="description"
            id="description"
            cols="30"
            rows="5"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Add Question Paper</label>
          <input
            type="file"
            name="notes"
            id="notes"
            className="form-control input-text"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        <input
          type="submit"
          value="Add Question Paper"
          className="btn btn-add-cource"
        />
      </form>
    </div>
  );
}
