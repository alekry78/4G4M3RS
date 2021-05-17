/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import Page from '../components/Page';

const MyApp = ({Component, pageProps}) =>{
    return(
        <Page>
            <Component {...pageProps}  />
        </Page>
    )
}
export default MyApp