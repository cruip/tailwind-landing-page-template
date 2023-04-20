"use client";
import { ChangeEvent, useEffect, useState } from 'react';


import { Card, Col, Row, Space, Divider, Form, Button, Input, Select, message, QRCode, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import axios from 'axios';
import React from 'react';


const { TextArea } = Input;

export default function Verifier() {
  const [form] = Form.useForm();
  const [receiverAddress, setReceiverAddress] = useState<string>("");
  const [transferAmount, setTransferAmout] = useState<string>("0");
  const [publicKey, setPublicKey] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [compute, setCompute] = useState<string>("");
  const [computeRes, setComputeRes] = useState({});
  const [uploadFile, setUploadFile] = useState({});
  const [success, setSuccess] = useState(false);
  const [success2, setSuccess2] = useState(false);
  const [qrCode, setQrCode] = React.useState('https://github.com/pierg/zkp-hackathon');
 
  const consoleRef = React.createRef()
  const [messageApi, contextHolder] = message.useMessage();


  const onRecipientAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReceiverAddress(e.target.value);
  }

  const onTransferAmountChange = ( e: ChangeEvent<HTMLInputElement>) => {
    setTransferAmout(e.target.value);
  }


  const downloadQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = 'QRCode.png';
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };


  const handleSign = async () => {
    const apiCall = () => {return axios.get('http://localhost:3000/mint?recipient=0x98526c571e324028250B0f5f247Ca4F1b575fadB', {
          headers: {
            'from': 'owner'
          }
          }
        )}

    apiCall()
      .then(response => {
        console.log(response.data);
        // setComputeRes(response.data)
      })
      .catch(error => {
        console.log(error);
      });
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
        setSuccess(true)
      })
      .catch(error => {
        console.log(error);
      });
  }
  const handleVerifyProof = async () => {
    const apiCall = () => {return axios.post('http://localhost:3000/verify_proof', {
          headers: {
            'from': 'owner'
          }
          }
        )}

    apiCall()
      .then(response => {
        console.log(response.data);
        setSuccess2(true)
      })
      .catch(error => {
        console.log(error);
      });
  }


  const handleCompute = async () => {
    const apiCall = () => {return axios.get('http://localhost:3000/mint', {
                                      params: {
                                        'recipient': publicKey
                                        }
                                      }
                                    )}

    apiCall()
      .then(response => {
        console.log(response.data);
        setComputeRes(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleSelect = (value: string) => {
    setCompute(value)
    console.log(value)
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
      content: 'Error',
    });
  }
  const onFinish = (values: any) => {
    console.log('Finish:', values);
    setSuccess(true)
    setSuccess2(true)
    // handleVerifyPublic(values['public_key'])
    // handleVerifyProof()
  };

  const { Dragger } = Upload;

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    onChange(info) {
      console.log(info)
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setUploadFile(info)
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
    if (success && success2) {
      successMess()
    }
  }, [success, success2])

  return (
<div style={{ height: '100%', overflow: 'scroll'}}>
      {contextHolder}
      <Card title="Verifier" style={{height: '90%',  overflow: 'scroll', margin: 40}} >
        <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
            <Form.Item
                name="public_key"
                label='Input Public Key'
            >   
                <Input />
            </Form.Item>
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

                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Upload
                </Button>
            </Form>
          </Card>
    </div>
  )
}
