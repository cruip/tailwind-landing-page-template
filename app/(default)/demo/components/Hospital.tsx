"use client";
import { ChangeEvent, useEffect, useState } from 'react';

import { Card, Col, Row, Space, Divider, Button, Input, Form, Select, message, Menu, Upload } from 'antd';
import { UserOutlined, InboxOutlined, KeyOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import axios from 'axios';
import React from 'react';
import data from  '../data_example/simple.json'
import data_b from  '../data_example/risk.json'


const { TextArea } = Input;

export default function Hospital() {
    const [form] = Form.useForm();
    const [mint, setMint] = useState({});
    const [key_a, setKey_a] = useState({});
    const [key_b, setKey_b] = useState({});
    const [hash_a, setHash_a] = useState({});
    const [hash_b, setHash_b] = useState({});
    const [message_a, setMessage_a] = useState<string>(JSON.stringify(data, null, 2));
    const [message_b, setMessage_b] = useState<string>(JSON.stringify(data_b, null, 2));
    const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(true);
  const [next_a, setNext_a] = useState(false);
  const [loading_b, setLoading_b] = useState(true);
  const [next_b, setNext_b] = useState(false);

    const { Dragger } = Upload;
 

    const handleGetKeyPair = async (hospital: string) => {
        const apiCall = () => {return axios.get('http://localhost:3000/key_pair');}
        if (hospital == 'A') {
            setLoading(true)
        } else {
            setLoading_b(true)
        }
    
        apiCall()
          .then(response => {
            console.log(response.data);
            if (hospital == 'A') {
                setLoading(false)
                setKey_a(response.data)
                handleUpload_A(response.data['public_key'])
            } else {
                setLoading_b(false)
                setKey_b(response.data)
                handleUpload_B(response.data['public_key'])
            }
          })
          .catch(error => {
            console.log(error);
          });
        
      }

      const handleDataChangeA = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage_a(e.target.value)
      }
    
      const handleDataChangeB = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage_b(e.target.value)
      }
    
    const handleUpload_A = async (pub: string) => {
        axios.put('http://localhost:3000/publickey?name=' + 'HospitalA&public_key=' + pub,null, {
            headers: {
              'from': 'hospitalA'
            }
            })
        .then(response => {
            setNext_a(true)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    // 073142d3c4d51e536057cd5596984dad96834642dcc5f8aa11cd10c816677259
    //5c6876ecf8665c738bc37f8746d9e4d824734e588f756229d83385ffaf81e09b

    const handleHSU_A = async () => {
        axios.post('http://localhost:3000/sign_message' ,{
            'private_key': key_a['private_key'],
            message: message_a
            })
        .then(response => {
            console.log(response.data)
            setHash_a(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleHSU_B = async () => {
        axios.post('http://localhost:3000/sign_message' ,
                {
                    'private_key': key_b['private_key'],
                    message: message_b
                })
        .then(response => {
            console.log(response.data)
            setHash_b(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleUpload_B = async (pub: string) => {
        axios.put('http://localhost:3000/publickey?name=' + 'HospitalB&public_key=' + pub, null, {
            headers: {
              'from': 'hospitalB'
            }
            })
        .then(response => {
            setNext_b(true)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

  const goToNextPage = () => {
    window.scrollTo({
        top: 1000,
        behavior: "smooth",
    });
};
const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
  const { TextArea } = Input;

  console.log(JSON.stringify(key_a))

  return (
    <div 
    // class="h-14 bg-gradient-to-r from-amber-500 to-red-800"
    style={{
            height: '100%', margin: 0, 'boxSizing': 'border-box' }}
    >

        <Card title="Hospital A" style={{ overflow: 'scroll', maxHeight: '45%', margin: 10 }}>
            <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="recipient1"
                    label="Generate Keys"
                > 
                    {JSON.stringify(key_a) != '{}' &&
                    <div style={{ width: '100%', fontWeight: 'bold'}}>
                        Public and Private Keys
                        <TextArea rows={6} style={{ color: 'black'}}  defaultValue={JSON.stringify(key_a, null, 2)} disabled={true} />
                        {/* <Card bodyStyle={{overflowWrap: 'break-word'}}>{JSON.stringify(key_a)}</Card> */}
                        {/* <textarea readOnly={true} defaultValue={JSON.stringify(key_a)} style={{width: '100%', maxWidth: '100%', fontWeight: 'bold'}} /> */}
                    </div>
                    }
                     {JSON.stringify(key_a) == '{}' &&
                    <div style={{ width: '100%', fontWeight: 'bold'}}>
                        Public and Private Keys
                        <Card loading={loading}>None</Card>

                    </div>
                    }
                    <br/>
                    <Button
                        type="primary"
                        onClick={() => {handleGetKeyPair('A')}}
                    >
                        Generate!
                    </Button>
                </Form.Item>
                <Form.Item
                    name="name"
                    label='Name'
                >   
                {JSON.stringify(key_a) == '{}' &&
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                }
                 {JSON.stringify(key_a) != '{}' &&
                    <TextArea rows={1} style={{ color: 'black'}}  defaultValue={'Hospital A'} disabled={true} />
                }
                </Form.Item>
                <Form.Item
                    name="public_key"
                    label='Public Key'
                >   
                {JSON.stringify(key_a) == '{}' &&
                    <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Public Key" />
                }
                 {JSON.stringify(key_a) != '{}' &&
                 <TextArea rows={1} style={{ color: 'black'}}  defaultValue={key_a['public_key']} disabled={true} />
                }
                </Form.Item>
                <Form.Item
                    name="private_key"
                    label='Private Key'
                >   
                {JSON.stringify(key_a) == '{}' &&
                    <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Private Key" />
                }
                 {JSON.stringify(key_a) != '{}' &&
                    <TextArea rows={1} style={{ color: 'black'}}  defaultValue={key_a['private_key']} disabled={true} />
                }
                </Form.Item>
                <Form.Item
                    name="data_a"
                    label='Input Data'
                >   
                    <TextArea rows={10}  defaultValue={message_a} onChange={handleDataChangeA} />
                </Form.Item>
                <Form.Item >
                    <Button
                        type="primary"
                        onClick={handleHSU_A}
                        disabled={!next_a}
                    >
                        Hash, Sign, and Upload Signature
                    </Button>
                </Form.Item>
                <Form.Item
                    name="output"
                    label="Hash Output"
                > 
                    {JSON.stringify(hash_a) != '{}' &&
                    <div style={{ width: '100%'}}>
                        <TextArea rows={5} style={{ color: 'black'}}  defaultValue={JSON.stringify(hash_a)} disabled={true} />
                        {/* <Card bodyStyle={{overflowWrap: 'break-word'}}>{JSON.stringify(hash_a, null, 2)}</Card> */}
                        {/* <textarea readOnly={true} defaultValue={JSON.stringify(key_a)} style={{width: '100%', maxWidth: '100%', fontWeight: 'bold'}} /> */}
                    </div>
                    }
                     {JSON.stringify(hash_a) == '{}' &&
                    <div style={{ width: '100%'}}>
                        <Card loading={true}>None</Card>

                    </div>
                    }
                </Form.Item>
            </Form>
        </Card>
        <Divider />
            <Card title="Hospital B" style={{ overflow: 'scroll', maxHeight: '45%', margin: 10}} >
            <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
                <Form.Item
                    name="recipient1b"
                    label="Generate Keys"
                > 
                    {JSON.stringify(key_b) != '{}' &&
                    <div style={{ width: '100%', fontWeight: 'bold'}}>
                        Public and Private Keys
                        <TextArea rows={6} style={{ color: 'black'}}  defaultValue={JSON.stringify(key_b, null, 2)} disabled={true} />
                        {/* <textarea readOnly={true} defaultValue={JSON.stringify(key_a)} style={{width: '100%', maxWidth: '100%', fontWeight: 'bold'}} /> */}
                    </div>
                    }
                     {JSON.stringify(key_b) == '{}' &&
                    <div style={{ width: '100%', fontWeight: 'bold'}}>
                        Public and Private Keys
                        <Card loading={loading_b}>None</Card>

                    </div>
                    }
                    <Button
                        type="primary"
                        onClick={() => {handleGetKeyPair('B')}}
                    >
                        Generate!
                    </Button>
                </Form.Item>
                <Form.Item
                    name="nameb"
                    label='Name'
                >   
                {JSON.stringify(key_b) == '{}' &&
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                }
                 {JSON.stringify(key_b) != '{}' &&
                    <TextArea rows={1} style={{ color: 'black'}}  defaultValue={'Hospital B'} disabled={true} />
                }
                </Form.Item>
                <Form.Item
                    name="public_key"
                    label='Public Key'
                >   
                {JSON.stringify(key_b) == '{}' &&
                    <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Public Key" />
                }
                 {JSON.stringify(key_b) != '{}' &&
                    <TextArea rows={1} style={{ color: 'black'}}  defaultValue={key_b['public_key']} disabled={true} />
                }
                </Form.Item>
                <Form.Item
                    name="private_key"
                    label='Private Key'
                >   
                {JSON.stringify(key_b) == '{}' &&
                    <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Private Key" />
                }
                 {JSON.stringify(key_b) != '{}' &&
                    <TextArea rows={1} style={{ color: 'black'}}  defaultValue={key_b['private_key']} disabled={true} />
                }
                </Form.Item>
                <Form.Item
                    name="data_a"
                    label='Input Data'
                >   
                     <TextArea rows={10}  defaultValue={message_b} onChange={handleDataChangeB} />
                </Form.Item>
                <Form.Item >
                    <Button
                        type="primary"
                        onClick={handleHSU_B}
                        disabled={!next_b}
                    >
                        Hash, Sign, and Upload Signature
                    </Button>
                </Form.Item>
                <Form.Item
                    name="outputb"
                    label="Hash Output"
                > 
                    {JSON.stringify(hash_b) != '{}' &&
                    <div style={{ width: '100%', fontWeight: 'bold'}}>
                        <TextArea rows={5} style={{ color: 'black'}}  defaultValue={JSON.stringify(hash_b)} disabled={true} />
                        {/* <textarea readOnly={true} defaultValue={JSON.stringify(key_a)} style={{width: '100%', maxWidth: '100%', fontWeight: 'bold'}} /> */}
                    </div>
                    }
                     {JSON.stringify(hash_b) == '{}' &&
                    <div style={{ width: '100%', fontWeight: 'bold'}}>
                        <Card loading={true}>None</Card>

                    </div>
                    }
                </Form.Item>
            </Form>
        </Card>
    </div>
  )
}
