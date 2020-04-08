import Verify from "../components/authentication/Verify";

const VerifyAccount = (props) => {
  console.log("temp token query : ", props.query.tempToken);
  return <Verify tempToken={props.query.tempToken} />;
};

export default VerifyAccount;
