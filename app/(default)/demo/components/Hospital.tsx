"use client";
import { useEffect, useState } from 'react';

import { Card, Button, Input, Form, Radio, message, Tag, Upload, Checkbox } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import axios from 'axios';
import React from 'react';
import data from '../data_example/simple.json'

export default function Hospital() {
    const [form] = Form.useForm();
    const [key_a, setKey_a] = useState({
        'private_key': "",
        "public_key": ""
    });
    const [hash_a, setHash_a] = useState({});
    const [hospitalAccounts, setHospitalAccounts] = useState([]);
    const [message_a, setMessage_a] = useState<string>(JSON.stringify(data, null, 2));
    const [account, setAcount] = useState('Provider A');
    const [loading, setLoading] = useState(true);
    const [next_a, setNext_a] = useState(false);
    const [options, setOptions] = useState([]);

    const handleOptionChange = (value: string[]) => {
        let res: any = []
        for (let i = 0; i < value.length; i++) {
            res.push({ value: value[i], label: value[i] })
        }
        setOptions(res)
    };

    const { Dragger } = Upload;

    const handleAccountChange = (e: RadioChangeEvent) => {
        setAcount(e.target.value);
    };


    const handleGetKeyPair = async (hospital: string) => {
        const apiCall = () => { return axios.get('http://localhost:3000/key_pair'); }
        setLoading(true)


        apiCall()
            .then(response => {
                console.log(response.data);
                setLoading(false)
                setKey_a(response.data)
                handleUpload(response.data['public_key'])
            })
            .catch(error => {
                console.log(error);
            });

    }

    const handleDataChangeA = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage_a(e.target.value)
    }

    const handleMessage = (mess: boolean) => {
        if (mess) {
            message.success(`Successfully Signed With Private Key!`);
        } else {
            message.error(`Failed to Sign`);
        }
    }

    const handleUpload = async (pub: string) => {
        axios.put('http://localhost:3000/publickey?name=' + account + '&public_key=' + pub, null, {
            headers: {
                'from': account
            }
        })
            .then(response => {
                setNext_a(true)
            }).catch(error => {
                console.log(error)
            })
    }

    const handleHSU_A = async () => {
        axios.post('http://localhost:3000/sign_message', {
            'private_key': key_a['private_key'],
            message: message_a
        })
            .then(response => {
                setHash_a(response.data)
                let temp: any = response.data
                temp["health_function"] = "proof_of_provenance"
                temp['public_key'] = key_a['public_key']
                localStorage.setItem('myStorage', JSON.stringify(temp));
                handleMessage(true)
            }).catch(error => {
                handleMessage(false)
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

    useEffect(() => {
        axios
            .get('http://localhost:3000/accounts?account_type=data_providers')
            .then((res) => {
                setHospitalAccounts(res.data)
            })

        axios
            .get('http://localhost:3000/all_access_policies')
            .then((res) => {
                let temp: any = []
                let seen = new Set()
                for (let i = 0; i < res.data['access_policies'].length; i++) {
                    if (!seen.has(res.data['access_policies'][i])) {
                        temp.push({
                            value: res.data['access_policies'][i],
                            label: res.data['access_policies'][i]
                        })
                        seen.add(res.data['access_policies'][i])
                    }
                }
                setOptions(temp)
            })
    }, [])
    useEffect(() => {
        setKey_a({'private_key': "", 'public_key': ""})
        setHash_a({})
        setLoading(true)
        setNext_a(false)

    }, [account])

    const colors = ["blue", "green", "magenta", "purple"];

    return (
        <div
            style={{
                height: '100%', margin: 0, 'boxSizing': 'border-box'
            }}
        >

            {hospitalAccounts.length > 0 && options.length > 0 &&
                <div>
                    <Radio.Group value={account} onChange={handleAccountChange} style={{ height: '100%', margin: 10 }}>
                        {hospitalAccounts.map((val) =>
                            <Radio.Button value={val['account_name']}>{val['account_name']}</Radio.Button>
                        )}
                    </Radio.Group>

                    <Card title={account} style={{ overflow: 'scroll', maxHeight: '45%', margin: 10 }}>
                        <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <b>Authorize data providers to upload their public keys on-chain</b>
                            </div>

                            <br></br>
                                <u>Warning! The generation of signatures is for demo purposes: it should be done offline</u> 
                                <br></br>
                            <Form.Item
                                name="recipient1"
                                label="Generate Keys"
                            >
                                <Button
                                    type="primary"
                                    onClick={() => { handleGetKeyPair('A') }}
                                    block
                                >
                                    Generate!
                                </Button>

                                {key_a['private_key'] != "" &&
                                    <div style={{ width: '100%', fontWeight: 'bold' }}>
                                        <br />
                                        Public and Private Keys
                                        <TextArea rows={6} style={{ color: 'black' }} defaultValue={JSON.stringify(key_a, null, 2)} disabled={true} />
                                    </div>
                                }
                                {key_a['private_key'] == "" &&
                                    <div style={{ width: '100%', fontWeight: 'bold' }}>
                                        <br />
                                        Public and Private Keys
                                        <Card loading={loading}>None</Card>

                                    </div>
                                }

                            </Form.Item>
                            <Form.Item
                                name="name"
                                label='Name'
                            >
                                {JSON.stringify(key_a) == '{}' &&
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                                }
                                {JSON.stringify(key_a) != '{}' &&
                                    <TextArea rows={1} style={{ color: 'black' }} defaultValue={account} disabled={true} />
                                }
                            </Form.Item>
                            <Form.Item
                                name="public_key"
                                label='Public Key'
                            >
                                {key_a['public_key'] == "" &&
                                    <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Public Key" />
                                }
                                {key_a['public_key'] != "" &&
                                    <TextArea rows={1} style={{ color: 'black' }} defaultValue={key_a['public_key']} disabled={true} />
                                }
                            </Form.Item>
                            <Form.Item
                                name="private_key"
                                label='Private Key'
                            >
                                {key_a['private_key'] == "" &&
                                    <Input prefix={<KeyOutlined className="site-form-item-icon" />} placeholder="Private Key" />
                                }
                                {key_a['private_key'] != "" &&
                                    <TextArea rows={1} style={{ color: 'black' }} defaultValue={key_a['private_key']} disabled={true} />
                                }
                            </Form.Item>
                            <Form.Item
                                name="data_a"
                                label='Input Data'
                            >
                                <TextArea rows={10} defaultValue={message_a} onChange={handleDataChangeA} />
                            </Form.Item>
                            <Form.Item
                                label='Available Access Policy'
                                name="access_types"
                                style={{ flex: 1 }}
                                required={true}
                            >
                                {new Set(options.map((val: any, i) =>
                                    <Checkbox defaultChecked={true} disabled={val['label'] == 'default_policy'}>
                                        <Tag bordered={false} color={colors[(i % colors.length)]}>
                                            {val['label']}
                                        </Tag>
                                    </Checkbox>
                                ))}
                            </Form.Item>
                            <Form.Item >
                                <Button
                                    type="primary"
                                    onClick={handleHSU_A}
                                    disabled={!next_a}
                                    block
                                >
                                    Hash, Sign, and Upload Signature
                                </Button>
                            </Form.Item>
                            <Form.Item
                                name="output"
                                label="Hash Output"
                            >
                                {JSON.stringify(hash_a) != '{}' &&
                                    <div style={{ width: '100%' }}>
                                        <TextArea rows={5} style={{ color: 'black' }} defaultValue={JSON.stringify(hash_a)} disabled={true} />
                                    </div>
                                }
                                {JSON.stringify(hash_a) == '{}' &&
                                    <div style={{ width: '100%' }}>
                                        <Card loading={true}>None</Card>

                                    </div>
                                }
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            }
        </div>
    )
}

