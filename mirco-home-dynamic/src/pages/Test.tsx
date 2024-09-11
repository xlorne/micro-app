import React, {Suspense, useState} from 'react';
import {Button, Form, Input, Modal} from "antd";
import {loadRemoteComponent, loadRemoteScript} from '@/utils/dynamicLoader';

const Test = () => {

    const [RemoteTestComponent, setRemoteTestComponent] = useState<React.ComponentType | null>(null);

    const [visible, setVisible] = useState(false);

    const [form] = Form.useForm();

    const handlerLoadComponent = async (values: any) => {
        const {remoteUrl, scope, module} = values;
        try {
            loadRemoteScript(remoteUrl).then(async () => {
                const ComponentModule = await loadRemoteComponent(scope, module);
                const Component = ComponentModule.default || ComponentModule;
                console.log('ComponentModule:', ComponentModule);
                setRemoteTestComponent(() => Component);
            })
        } catch (error) {
            console.error('Error loading remote component:', error);
        }finally {
            setVisible(false);
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
                onClick={() => {
                    form.setFieldsValue({
                        remoteUrl: "http://localhost:3000/remoteEntry.js",
                        scope: "MircoApp",
                        module: "./Header"
                    })
                    setVisible(true);
                }}
            >dynamic load component</Button>

            <Modal
                title={"load component form"}
                open={visible}
                onCancel={() => {
                    setVisible(false);
                }}
                onOk={() => {
                    form.submit();
                }}
            >
                <Form
                    form={form}
                    onFinish={handlerLoadComponent}
                >
                    <Form.Item
                        label={"remoteUrl"}
                        name={"remoteUrl"}
                        rules={[
                            {
                                required: true,
                                message: "remoteUrl is required"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={"scope"}
                        name={"scope"}
                        rules={[
                            {
                                required: true,
                                message: "scope is required"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={"module"}
                        name={"module"}
                        rules={[
                            {
                                required: true,
                                message: "module is required"
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}

export default Test;

