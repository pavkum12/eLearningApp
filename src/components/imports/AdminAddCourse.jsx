import React, { useState } from "react";

export default function AdminAddCourse(props) {
  let {
    handleSubmit,
    setTitle,
    setDescription,
    setCategory,
    setSelectedimage,
    setFile,
  } = props.courseContent;

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
          <label htmlFor="description">Course Description</label>
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
          <label htmlFor="category">Select Category</label>
          <select
            name="cat"
            className="form-control input-text"
            onChange={(e) => setCategory(e.target.value)}
            id="cat"
          >
            <option value="none" disabled selected>
              -- Select Category --
            </option>
            <option value="ncert">NCERT</option>
            <option value="another">Another category</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Add notes</label>
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
        <div className="form-group">
          <label htmlFor="image">Add Image</label>
          <input
            type="file"
            name="notes"
            id="notes"
            className="form-control input-text"
            accept="image/*"
            onChange={(e) => setSelectedimage(e.target.files[0])}
            required
          />
        </div>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-add-cource"
        />
      </form>
    </div>
  );
}
