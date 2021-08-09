import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Table, Space } from "antd";
import { apis } from "../services";

const AutherBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const { data } = await apis.getAutherBooks();

      if (data?.list?.length) {
        setBooks(
          data.list.map((x) => {
            return { ...x, key: x._id };
          })
        );
      }
      setIsLoading(false);
    } catch (err) {
      console.log("[ERROR]", err);
      setIsLoading(false);
    }
  };

  return (
    <section>
      <Table columns={columns} dataSource={books} loading={isLoading} />
    </section>
  );
};

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "IBAN",
    dataIndex: "iban",
    key: "iban",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Auther Name",
    dataIndex: "auther",
    key: "auther",
    render: (auther) => <p>{auther?.name}</p>,
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
    render: (genre) => <p>{genre?.name}</p>,
  },
  {
    title: "Publish Date",
    dataIndex: "publishedDate",
    key: "publishedDate",
    render: (value) => <Moment format="DD-MM-YYYY">{value}</Moment>,
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Link to="/edit-book" style={{ color: "green" }}>
          Edit
        </Link>
        <Link to="/delete-book" style={{ color: "red" }}>
          Delete
        </Link>
      </Space>
    ),
  },
];

export default AutherBooks;
