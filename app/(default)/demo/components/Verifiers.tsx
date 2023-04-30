"use client";
import { useState } from 'react';


import { Card, Form, Button, Input, message, ConfigProvider, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import axios from 'axios';
import React from 'react';


const { TextArea } = Input;

export default function Verifier() {
  const [form] = Form.useForm();
  const [uploadFile, setUploadFile] = useState<any>({});
  const [success, setSuccess] = useState({
    'valid_proof_of_provenance': true
  });
  const [success2, setSuccess2] = useState('wait');
 
  const consoleRef = React.createRef()
  const [messageApi, contextHolder] = message.useMessage();

  const handleDataChangeA = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUploadFile(e.target.value)
  }

  const handleVerifyProof = async () => {
    const apiCall = () => {return axios.post('http://localhost:3000/verify_proof?statement_function=proof_of_provenance', 
        JSON.parse(uploadFile)['proof']
        )}

    apiCall()
      .then(response => {
        setSuccess(response.data)
        if (response.data['valid_proof_of_provenance']) {
          setSuccess2('true')
          successMess()
        } else {
          setSuccess2('false')
          errorMess()
        }
      })
      .catch(error => {
        setSuccess({"valid_proof_of_provenance": false})
        setSuccess2('false')
        errorMess()
      });
  }

  const successMess = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully verified',
    });
  };

  const errorMess = () => {
    messageApi.open({
      type: 'error',
      content: 'Unable to Verify',
    });
  }

  const uploaded = () => {
    JSON.stringify(uploadFile).replace(/\\n/g, '').replace(/\'/g, "'")
    return uploadFile
  }

  const { Dragger } = Upload;

  async function parseJsonFile(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = event => {
        let temp = event.target || {'result': "{}"}
        resolve(JSON.parse(temp.result as string))
      }
      fileReader.onerror = error => reject(error)
      fileReader.readAsText(file)
    })
  }
  

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    beforeUpload: async (file, fileList) => {
      const object = await parseJsonFile(file)
      setUploadFile(object)

      message.success(`File uploaded successfully.`);
      return false;
    },
    onChange(info) {
      console.log(info)
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };



  return (
    <div style={{ height: '100%', overflow: 'scroll'}}>
      {contextHolder}
      <Card title="Verifier" style={{height: '90%',  overflow: 'scroll', margin: 40}} >
        <Form form={form} name="horizontal_login" layout="vertical" >
            <Form.Item
              name="proof"
              label="Upload Proof"
            > 
            <Card >
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </Card>
            </Form.Item>
              {JSON.stringify(uploadFile) != '{}' &&
                <div style={{ width: '100%', fontWeight: 'bold'}}>
                    Data
                    <TextArea rows={10} style={{ color: 'black'}}  defaultValue={uploaded()}  onChange={handleDataChangeA}/>
                </div>
              }
              <p/>
              {success2 == 'true' &&
                  <div style={{ width: '100%', fontWeight: 'bold'}}>
                      Result
                        <ConfigProvider
                            theme={{
                              token: {
                                colorPrimary: '#00b96b',
                              },
                            }}
                          >
                            <Button block type='primary'>Success!</Button>
                        </ConfigProvider>
                  </div>
              }
              {success2 == 'false' && JSON.stringify(success) != '{}' &&
                <div style={{ width: '100%', fontWeight: 'bold'}}>
                  Result
                  <Button block danger type='primary' >Unable to Verify</Button>
                </div>
              }
              <p/>
              <Button
                  type="primary"
                  htmlType="submit"
                  onClick={handleVerifyProof}
              >
                  Verify!
              </Button>
            </Form>
          </Card>
    </div>
  )
}
