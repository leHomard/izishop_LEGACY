import Verify from "../components/authentication/Verify";

const VerifyAccount = (props) => {
  return <Verify tempToken={props.query.tempToken} />;
};

export default VerifyAccount;
