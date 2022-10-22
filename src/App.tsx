import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

type FormInputs = {
  name: string;
  email: string;
  confirmEmail: string;
};

function App() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const handleCloseAfter = () => setShowAfter(false);
  const handleShowAfter = () => setShowAfter(true);
  const [showAfter, setShowAfter] = useState(false);

  const [error, setError] = useState("");
  const [button, setButton] = useState("Send");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    if (data.email != data.confirmEmail) {
      setError("Emails do not match");
    } else {
      setButton("Sending...Please wait");
      axios
        .post(
          "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
          {
            name: data.name,
            email: data.email,
          }
        )
        .then((res) => {
          console.log(res);
          setError("");
          setButton("Sent");
          handleClose();
          handleShowAfter();
        })
        .catch((err) => {
          setError(err.message + ", Please try again");
          setButton("Send");
        });
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <section className="pageSection">
          <h1 className="h1Text">
            A better way <br></br>
            to <span style={{ color: "palevioletred" }}>enjoy</span> every day
          </h1>

          <p className="p1Text">Be the first to know when we launch</p>
          <button className="button" onClick={handleShow}>
            Request an invite
          </button>
          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleClose}
            show={show}
          >
            <Modal.Body>
              <h4 className="title">
                <i>Request an invite</i>
                <hr
                  style={{
                    width: "10%",
                    height: "3px",
                    borderWidth: "0px",
                    color: "black",
                    backgroundColor: "black",
                    margin: "auto",
                    marginTop: "30px",
                  }}
                ></hr>
              </h4>
              <div className="items">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                  <input
                    className="input"
                    type="text"
                    minLength={3}
                    placeholder="Full name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>This field is required</span>}

                  <input
                    className="input"
                    type="email"
                    placeholder="Email "
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                  <input
                    className="input"
                    type="email"
                    placeholder="Confirm Email "
                    {...register("confirmEmail", { required: true })}
                  />
                  {errors.confirmEmail && <span>This field is required</span>}

                  <input
                    className="submit input"
                    type="submit"
                    value={button}
                  />
                  <span className="errorText">{error}</span>
                </form>
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleCloseAfter}
            show={showAfter}
          >
            <Modal.Body>
              <h4 className="title">
                <i>All done !</i>
                <hr
                  style={{
                    width: "10%",
                    height: "3px",
                    borderWidth: "0px",
                    color: "black",
                    backgroundColor: "black",
                    margin: "auto",
                    marginTop: "30px",
                  }}
                ></hr>
              </h4>
              <p className="afterText">
                You will be one of the first to experience <br></br>Broccoli &
                Co. when we launch{" "}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingBottom: "30px",
                }}
              >
                <button
                  className="button submit afterButton"
                  onClick={handleCloseAfter}
                >
                  Ok
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
