import React, {Suspense, useState} from "react";
import {Button} from "antd";
import {ModalForm} from "@ant-design/pro-components";
import ProFormUploader from "@/components/ProFormUploader";
import {loadRemoteComponent, loadZipJsFileScript} from "@/utils/dynamicLoader";


const Hello = () => {

    const [RemoteTestComponent, setRemoteTestComponent] = useState<React.ComponentType | null>(null);
    const [visible, setVisible] = useState(false);

    const handlerLoadComponent = async (values: any) => {
        const base64 = values.upload[0].response;
        const scope = 'MircoApp';
        const module = './Header';
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
            >upload component</Button>

            <ModalForm
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
                <ProFormUploader
                    label={"upload"}
                    name={"upload"}
                    max={1}
                    accept={".zip"}
                />
            </ModalForm>
        </div>
    )
}

export default Hello;
