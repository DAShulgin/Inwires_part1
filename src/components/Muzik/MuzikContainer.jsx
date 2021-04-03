import { connect } from "react-redux";
import { WithRedirectComponent } from "../common/HOC/WithRedirectComponent";
import Muzik from "./Muzik";


export default connect()(WithRedirectComponent(Muzik));