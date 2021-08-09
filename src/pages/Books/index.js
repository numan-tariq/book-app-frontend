import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { columns } from "./Columns.config";
import { getBooks } from "../../store/actions";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleBooks();
  }, []);

  const handleBooks = () => {
    getBooks({
      success: (data) => {
        if (data?.list?.length) {
          setBooks(
            data.list.map((x) => {
              return { ...x, key: x._id };
            })
          );
        }
        setIsLoading(false);
      },
      failure: (err) => {
        if (err) console.log("[ERROR]", err);
        setIsLoading(false);
      },
    });
  };

  return (
    <section>
      <Table columns={columns} dataSource={books} loading={isLoading} />
    </section>
  );
};

export default Books;
