import { connect } from "react-redux";
import LoginForm from './LoginForm';
import { userLogin } from "../../../store/actions/actions_login";

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchToProps = {
    userLogin: (data, userType) => dispatch(userLogin(data, userType))
  }

  return dispatchToProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
