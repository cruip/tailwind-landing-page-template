"use client";
import { ChangeEvent, useEffect, useState } from 'react';


import { Card, Col, Row, Space, Divider, Form, Button, Input, Select, message, ConfigProvider, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import axios from 'axios';
import React from 'react';
import secret from '../data_example/proof.json'
import { convertLegacyProps } from 'antd/es/button/button';


const { TextArea } = Input;

export default function Verifier() {
  const [form] = Form.useForm();
  const [receiverAddress, setReceiverAddress] = useState<string>("");
  const [transferAmount, setTransferAmout] = useState<string>("0");
  const [publicKey, setPublicKey] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [compute, setCompute] = useState<string>("");
  const [computeRes, setComputeRes] = useState({});
  const [uploadFile, setUploadFile] = useState<any>({});
  const [success, setSuccess] = useState({});
  const [success2, setSuccess2] = useState(false);
  const [qrCode, setQrCode] = React.useState('https://github.com/pierg/zkp-hackathon');
 
  const consoleRef = React.createRef()
  const [messageApi, contextHolder] = message.useMessage();

  const handleDataChangeA = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUploadFile(e.target.value)
  }

  const handleVerifyPublic = async (pub: string) => {
    const apiCall = () => {return axios.get('http://localhost:3000/verify_public_inputs?public_key=' + pub, {
          headers: {
            'from': 'owner'
          }
          }
        )}

    apiCall()
      .then(response => {
        console.log(response.data);
        // setSuccess(true)
      })
      .catch(error => {
        console.log(error);
      });
  }
  const handleVerifyProof = async () => {
    // console.log(JSON.parse(uploadFile)['proof'])
    const apiCall = () => {return axios.post('http://localhost:3000/verify_proof?health_function=proof_of_provenance', 
        JSON.parse(uploadFile)['proof']
        )}

    apiCall()
      .then(response => {
        console.log(response.data);
        setSuccess(response.data)
        if (response.data['valid_proof_of_provenance']) {
          successMess()
        } else {
          errorMess()
        }
      })
      .catch(error => {
        setSuccess({"valid_proof_of_provenance": false})
        errorMess()
        console.log(error);
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
  const onFinish = (values: any) => {
    console.log('Finish:', values);
    // handleVerifyPublic(values['public_key'])
    // handleVerifyProof()
  };

  const uploaded = () => {
    JSON.stringify(uploadFile).replace(/\\n/g, '').replace(/\'/g, "'")
    return uploadFile
  }

  const { Dragger } = Upload;

  async function parseJsonFile(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = event => resolve(JSON.parse(event.target.result))
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

  useEffect(() => {
    if (JSON.stringify(success) != '{}') {
      if (success['valid_proof_of_provenance']) {
        setSuccess2(true)
      } else {
        setSuccess2(false)
      }
    }
  }, [success])


  return (
<div style={{ height: '100%', overflow: 'scroll'}}>
      {contextHolder}
      <Card title="Verifier" style={{height: '90%',  overflow: 'scroll', margin: 40}} >
        <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
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
                        {/* <Card bodyStyle={{overflowWrap: 'break-word'}}>{JSON.stringify(key_a)}</Card> */}
                        {/* <textarea readOnly={true} defaultValue={JSON.stringify(key_a)} style={{width: '100%', maxWidth: '100%', fontWeight: 'bold'}} /> */}
                    </div>
                }
                  <p/>
                  {success2 &&
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
                  {!success2 && JSON.stringify(success) != '{}' &&
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
