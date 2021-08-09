import Moment from "react-moment";

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
];