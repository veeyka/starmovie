import { AxiosRequestConfig } from "axios";
import { ApiErr, ApiUrl, Progress, UploadMethod } from "./types";
import { METHODS, TMethods } from "./config/constants";
import createCustomizedRequest from "./config/functions/create-customized-request";
import { apiConfig } from "../../constant/config";
import createSimpleRequest from "./config/functions/create-simple-request";
import downloadFile from "./config/functions/download-file";
import { uploadByBase64, uploadByFormData } from "./config/functions/upload-file";
import actionTypes from "../../redux/actions/actionTypes";
import { reactQueryClient } from "../../constant";
import { manageError } from "./config/functions/handle-error";



class HttpClinet {
    post:(<D, R>(api: ApiUrl, config?: Omit<AxiosRequestConfig, "data"> & D) => Promise<R>);
    get: (<D, R>(api: ApiUrl, config?: Omit<AxiosRequestConfig, "data"> & D) => Promise<R>);

    constructor(){
        METHODS.forEach((method:TMethods)=>(this[method] = this.createAdvancedRequest.bind(this, method)));
    }

    protected createAdvancedRequest(method:TMethods, api: ApiUrl, config: AxiosRequestConfig) {
		return createCustomizedRequest(method, apiConfig.url[api], config);
	}

    plain(config: AxiosRequestConfig) {
		return createSimpleRequest(config);
	}

    async download(url: string, fileName: string, getProgress: Progress) {
		await downloadFile(url, fileName, getProgress);
	}

    async upload(url: string, file: Blob, getProgress: Progress, type: UploadMethod) {
		type === "formData" && (await uploadByFormData(url, file, getProgress));
		type === "base64" && (await uploadByBase64(url, file, getProgress));
	}
    
    async destroyQuery(queryKey: keyof typeof actionTypes, shouldRemove: boolean = true) {
		await reactQueryClient.invalidateQueries(queryKey);
		shouldRemove && reactQueryClient.removeQueries(queryKey);
	}

    handleError(err: unknown, placeOfOccurrence: string): Error {
		return manageError(err as ApiErr, placeOfOccurrence);
	}
}

export default new HttpClinet();





















// use blob
// const ConvertImageObjectToBlob = () => {

//     const [file, setFile] = useState("");

//       const convertToBlob =(e) => {
//         setFile(URL?.createObjectURL(e.target.files[0]));
//         }
//          console.log({file}) //the result will in blob format.

//   return (
//            <>
//              <form>
//                  <div> 
//                     <input type="file" onChange={convertToBlob}/> 
//                   </div>
//               </form>
//            </>
//          )
//        }
//     default export ConvertImageObjectToBlob;


// or if you want send as form data
// let formData = new FormData();
// let fileName = `${blob_file.name}.${blob_file.extension}`;
// let file = new File([blob_file.blob], fileName);
// formData.append('file', file, fileName);
// formData.append('chat', roomId);
// formData.append('message', messageId);

// return session.post(`/chats/files/`,
//     formData, {
//        headers: {
//          'Content-Type': `multipart/form-data`,
//        },
//     })