import { connect } from "react-redux";
import { WithRedirectComponent } from "../common/HOC/WithRedirectComponent";
import Setting from "./Setting";

export default connect()(WithRedirectComponent(Setting));
