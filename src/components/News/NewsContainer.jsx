import { connect } from "react-redux";
import { WithRedirectComponent } from "../common/HOC/WithRedirectComponent";
import News from "./News";


export default connect()(WithRedirectComponent(News));