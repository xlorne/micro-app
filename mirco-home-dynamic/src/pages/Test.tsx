import React, {Suspense, useState} from 'react';
import {Button} from "antd";
import {ModalForm, ProForm, ProFormText} from "@ant-design/pro-components";
import {loadRemoteComponent, loadRemoteScript} from '@/utils/dynamicLoader';

const Test = () => {

    const [RemoteTestComponent, setRemoteTestComponent] = useState<React.ComponentType | null>(null);

    const [visible, setVisible] = useState(false);

    const [form] = ProForm.useForm();

    const handlerLoadComponent = async (values: any) => {
        const {remoteUrl, scope, module} = values;
        try {
            loadRemoteScript(remoteUrl).then(async () => {
                const ComponentModule = await loadRemoteComponent(scope, module);
                const Component = ComponentModule.default || ComponentModule;
                setRemoteTestComponent(() => Component);
            })
        } catch (error) {
            console.error('Error loading remote component:', error);
        }
    }

    return (
        <>
            {RemoteTestComponent && (
                <Suspense fallback={<div>Loading Header...</div>}>
                    <RemoteTestComponent/>
                </Suspense>
            )}

            <Button
                onClick={()=>{
                    form.setFieldsValue({
                        remoteUrl: "http://localhost:3000/remoteEntry.js",
                        scope: "MicroApp",
                        module: "./Header"
                    })
                    setVisible(true);
                }}
            >load component</Button>
            <ModalForm
                title={"load component form"}
                open={visible}
                form={form}
                modalProps={{
                    onCancel: () => {
                        setVisible(false);
                    },
                    destroyOnClose: true,
                    onClose: () => {
                        setVisible(false);
                    }
                }}
                onFinish={async (values:any) => {
                    await handlerLoadComponent(values);
                }}
            >
                <ProFormText
                    label={"remoteUrl"}
                    name={"remoteUrl"}
                    rules={[
                        {
                            required: true,
                            message: "remoteUrl is required"
                        }
                    ]}
                />

                <ProFormText
                    label={"scope"}
                    name={"scope"}
                    rules={[
                        {
                            required: true,
                            message: "scope is required"
                        }
                    ]}
                />

                <ProFormText
                    label={"module"}
                    name={"module"}
                    rules={[
                        {
                            required: true,
                            message: "module is required"
                        }
                    ]}
                />

            </ModalForm>

        </>
    )
}

export default Test;

