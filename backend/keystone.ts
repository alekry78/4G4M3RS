import 'dotenv/config';
// @ts-ignore
import {config,createSchema} from "@keystone-next/keystone/Schema";
import {User} from "./schemas/User";
import {createAuth} from "@keystone-next/auth";
import {statelessSessions, withItemData} from "@keystone-next/keystone/session";
import {Product} from "./schemas/Products";
import {ProductImage} from "./schemas/ProductImage";
import {insertSeedData} from "./seed-data";
const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-4g4m3rs';
const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in
    secret:process.env.COOKIE_SECRET,
}
const {withAuth} = createAuth({
    listKey:'User',
    identityField:'email',
    secretField:'password',
    initFirstItem:{
        fields:['name','email','password'],
        //TODO: add initial roles here
    }
})
export default withAuth(config(
    {
        server:{
            cors:{
                origin:[process.env.FRONTEND_URL],
                credentials:true
            }
        },
        db:{
            adapter:'mongoose',
            url:databaseURL,
            async onConnect(keystone){
                console.log("Connected to database!");
                if(process.argv.includes('--seed-data')){
                    await insertSeedData(keystone);
                }
            }
        },
        lists:createSchema({
            // Schema items go in here
            User,
            Product,
            ProductImage
        }),
        ui:{
            //Show the ui only for people who pass this test
            isAccessAllowed:({session})=> {
                return session?.data;
            }
        },
        session:withItemData(statelessSessions(sessionConfig), {
           User:'id'
        })
    })
)