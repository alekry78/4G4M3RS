/* eslint-disable react/prop-types */

import Header from "../Header/Header"
import {GlobalStyles, InnerStyles} from "./Page.styles";

/* eslint-disable prettier/prettier */
const Page = ({children}) => (
    <div>
        <GlobalStyles/>
        <Header/>
        <InnerStyles>
            {children}
        </InnerStyles>
    </div>
)
export default Page 