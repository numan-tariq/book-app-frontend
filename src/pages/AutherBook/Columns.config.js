import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Space } from "antd";

export const columns = [
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