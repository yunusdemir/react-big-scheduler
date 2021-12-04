import React from 'react'
import {Form, Input, Modal} from 'antd';


const AddResourceForm = (
    (props) => {
        const { visible, onCancel, onCreate } = props;
        return (
            <Modal
                visible={visible}
                title="New Resource"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical" >
                    <Form.Item label="Name" rules={[{ required: true, message: 'Please input the name of the resource!' }]}>
                            <Input />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
);

export default AddResourceForm
