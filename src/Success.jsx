import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f8ff; /* Soft Blue background */
  font-family: "Raleway", sans-serif; 
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SuccessCard = styled.div`
  background-color: #faf3e0; /* Light Beige div */
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); /* Softer shadow */
  max-width: 600px;
  margin: 80px auto;
  text-align: center;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Successful = styled.h1`
  color: #76c7c0; /* Soft Green for success message */
  font-family: "Poppins", sans-serif; /* Rounded, soft font for heading */
  font-size: 2.2em;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  color: #707070; /* Muted Gray for description text */
  font-size: 1.2em;
  font-family: "Raleway", sans-serif; /* Clean and calm font for paragraph */
`;

const Success = () => {
  return (
    <Container>
      <SuccessCard>
        <Logo src="https://cdn.vectorstock.com/i/1000v/60/44/letter-b-crown-logo-vector-25576044.jpg" />
        <Successful>SUCCESSFUL</Successful>
        <Desc>
          Your payment has done successfully, keep shopping and be happy. Have a
          nice day.
        </Desc>
      </SuccessCard>
    </Container>
  );
};

export default Success;
