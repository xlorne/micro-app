import React from "react";
import {RcFile} from "antd/es/upload";
import {ProFormUploadButton, ProFormUploadButtonProps} from "@ant-design/pro-form";


const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

const ProFormUploader: React.FC<ProFormUploadButtonProps> = (props) => {

  return (
    <ProFormUploadButton
      {...props}
      fieldProps={{
        customRequest: async ({file, onSuccess}) => {
          const base64 = await getBase64(file as RcFile);
          // @ts-ignore
          onSuccess(base64);
        }
      }}
    />
  )
}

export default ProFormUploader;
