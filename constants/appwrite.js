import { Client ,Databases,Account,Avatars} from 'react-native-appwrite';
import { Platform } from 'react-native';

const config = {
        endpoint : "https://nyc.cloud.appwrite.io/v1",
        projectId:"6971bd67003d005a3b2d",
        db:"",
        collections:{

        }

}

const client = new Client()
        .setProject(config.projectId)
        .setEndpoint(config.endpoint)

switch(Platform.OS){
    case "ios":
        client.setPlatform("ios");
        break;
    case "android":
        client.setPlatform("com.asoni.shelfie_app");          
        break;
    default:
        client.setPlatform("other");
        break;
}

const database = new Databases(client);
    

const account = new Account(client);
const avatars = new Avatars(client);

export default client;
module.exports = {client,database,config,account,avatars};

