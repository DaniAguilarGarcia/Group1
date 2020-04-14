
import React from "react";
import { withBookConsumer } from "../context";
import BooksList from "./BookList";

function BookContainer({ context }) {
  const { books } = context;
  
  return (
    <>
      <BooksList books={books} />
    </>
  );
}

export default withBookConsumer(BookContainer);
