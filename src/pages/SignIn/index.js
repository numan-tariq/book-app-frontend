import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form, Input, Button, Spin } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { userLogin, userFullName } from "../../store/actions/dataAction";
import { login } from "../../store/actions";

const SignIn = (props) => {
  const { userLogin, userFullName } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const history = useHistory();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    setIsLoading(true);
    setErrorMessage(false);
    login({
      values,
      success: (data) => {
        setIsLoading(false);
        setErrorMessage(false);

        localStorage.setItem("token", data.access_token);

        userFullName(data.profile.firstName);
        localStorage.setItem("user", JSON.stringify(data.profile));
        userLogin();

        history.push("./user");

        setIsLoading(false);
      },
      failure: (err) => {
        if (err) console.log("[ERROR]", err);

        setErrorMessage(true);
        setIsLoading(false);
      },
    });
  };

  return (
    <section>
      {isLoading && (
        <Spin
          size="large"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      {!isLoading && (
        <Form
          {...layout}
          style={{ marginTop: "12rem" }}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          {errorMessage && (
            <p style={{ color: "red", textAlign: "center" }}>
              Invalid email or password
            </p>
          )}
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                marginLeft: "27rem",
                backgroundColor: "rgb(68, 100, 87)",
                borderRadius: "12px",
              }}
            >
              SignIn
            </Button>
          </Form.Item>
        </Form>
      )}
    </section>
  );
};

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 8,
  },
};

export default connect(null, { userLogin, userFullName })(SignIn);
