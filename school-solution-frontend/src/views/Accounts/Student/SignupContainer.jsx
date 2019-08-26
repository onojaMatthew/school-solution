import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import { userSignup } from "../../../store/actions/actions_signup";

const mapStateToProps = (state) => {
  return {
    signup: state.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchToProps = {
    userSignup: (data, userType) => dispatch(userSignup(data, userType))
  }

  return dispatchToProps;
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
