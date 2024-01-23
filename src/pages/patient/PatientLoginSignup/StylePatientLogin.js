import styled from "styled-components";

const StylePatientLogin = styled.section`
  .Pt-body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/Doctor/Home.jpg') center/cover;
    color: #fff;
    font-family: 'Arial', sans-serif;
  }

  .wrapper {
    text-align: center;
    width: 80%;
    max-width: 450px;
    background: rgba(255, 255, 255, 0.9); /* Slightly increased opacity for better readability */
    color: #050046;
    border-radius: 20px; /* Reduced border-radius for a softer look */
    padding: 40px; /* Reduced padding for a more compact design */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Increased box-shadow for depth */
  }

  .wrapper:hover {
    transform: scale(1.02);
  }

  .wrapper h1 {
    font-size: 28px; /* Decreased font size for a more balanced title */
    text-align: center;
    color: #050046;
  }

  .wrapper .input-box {
    position: relative;
    width: 70%;
    margin: 30px auto; /* Adjusted margin for better spacing */
    text-align: center;
  }

  .input-box input {
    margin-left: -15px;
    width: 100%;
    height: 100%;
    background: rgba(220, 255, 255, 0.6);
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    font-size: 12px;
    font-style: italic;
    color: navy; /* Set the text color to navy blue */
    padding: 12px 12px;
}

  .input-box input::placeholder {
    color: #050046;
  }

  .input-box .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    color: #050046;
  }

  .input-box .icon2 {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    color: #050046;
  }


  .wrapper button {
    width: 100%;
    height: 45px;
    background: #050046;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Increased box-shadow for depth */
    cursor: pointer;
    font-size: 18px; /* Increased font size for better readability */
    color: #fff;
    font-weight: 700;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
    margin-top: 20px; /* Adjusted margin for better spacing */
  }

  .wrapper button:hover {
    background: #002750;
    transform: scale(1.05);
  }

  .wrapper .remember-forgot {
    display: flex;
    justify-content: center;
    font-size: 10px;
    margin: 15px 0;
  }

  .wrapper .register-link {
    font-size: 14px;
    text-align: center;
    margin: 20px 0 15px;
  }

  .register-link p a {
    color: #27ae60;
    text-decoration: none;
    font-weight: 600;
  }

  .register-link p a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    .wrapper {
      width: 90%; /* Adjusted width for better responsiveness */
    }
  }
`;

export default StylePatientLogin;