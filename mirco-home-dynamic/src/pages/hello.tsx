import React, {Suspense, useState} from "react";
import {Button} from "antd";
import {ModalForm, ProForm, ProFormText} from "@ant-design/pro-components";
import ProFormUploader from "@/components/ProFormUploader";
import {loadRemoteComponent, loadZipJsFileScript} from "@/utils/dynamicLoader";


const Hello = () => {

    const [RemoteTestComponent, setRemoteTestComponent] = useState<React.ComponentType | null>(null);
    const [visible, setVisible] = useState(false);

    const [form] = ProForm.useForm();

    const handlerLoadComponent = async (values: any) => {
        const base64 = values.component;
        const scope = values.scope;
        const module = values.module;
        loadZipJsFileScript(base64).then(()=>{
            loadRemoteComponent(scope, module).then((ComponentModule: any) => {
                const Component = ComponentModule.default || ComponentModule;
                setRemoteTestComponent(() => Component);
                setVisible(false);
            });
        });
    }

    return (
        <div>
            Hello Page

            {RemoteTestComponent && (
                <Suspense fallback={<div>Loading Header...</div>}>
                    <RemoteTestComponent/>
                </Suspense>
            )}

            <Button
                onClick={() => {
                    setVisible(true);
                }}
            >upload zip component</Button>

            <ModalForm
                form={form}
                title={"upload component"}
                open={visible}
                modalProps={{
                    onCancel: () => {
                        setVisible(false);
                    },
                    destroyOnClose: true
                }}
                onFinish={handlerLoadComponent}
            >
                <ProFormText
                    name={"component"}
                    hidden={true}
                />

                <ProFormText
                    name={"scope"}
                    label={"scope"}
                    rules={[
                        {
                            required: true,
                            message: "scope is required"
                        }
                    ]}
                />

                <ProFormText
                    name={"module"}
                    label={"module"}
                    rules={[
                        {
                            required: true,
                            message: "module is required"
                        }
                    ]}
                />

                <ProFormUploader
                    label={"upload component zip"}
                    name={"upload"}
                    max={1}
                    accept={".zip"}
                    onChange={({file}) => {
                        if(file.response){
                            form.setFieldValue('component', file.response);
                        }
                    }}
                    rules={[
                        {
                            required: true,
                            message: "upload zip file"
                        }
                    ]}
                />

            </ModalForm>
        </div>
    )
}

export default Hello;
