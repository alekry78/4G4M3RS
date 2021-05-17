/* eslint-disable react/prop-types */

import Header from "./Header"

/* eslint-disable prettier/prettier */
const Page = ({children}) =>(
        <div>
            <Header /> 
            <h2>I am page component</h2>
            {children}
        </div>
    )
export default Page 