"use client";
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import { Card, Button, Input, Form, Select, message } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import React from 'react';
import { stringify } from 'querystring';

const { TextArea } = Input;
const { Search } = Input;

export default function Owner() {
    const [form] = Form.useForm();
    const [mint, setMint] = useState<any[]>([]);
    const [hospitalAccounts, setHospitalAccounts] = useState<any[]>([]);
    const [researcherAccounts, setResearcherAccounts] = useState<any[]>([]);
    const [success, setSuccess] = useState(true)
    const [options, setOptions] = useState([]);
    const { Option } = Select;

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };
    const handleOptionChange = (value: string[]) => {
        let res: any = []
        for (let i = 0; i < value.length; i++) {
            res.push({ value: value[i], label: value[i] })
        }
        setOptions(res)
    };


    function handleMint(recipient: any) {
        const apiCall = () => {
            return axios.get('http://localhost:3000/authorize_provider?address=' + recipient, {
                headers: {
                    'from': 'owner'
                }
            }
            )
        }
        return new Promise(function (resolve, reject) {
            apiCall()
            .then(response => {
                setMint((prev) => [...prev, response.data])
                setSuccess(success && true)
                resolve(true)
            })
            .catch(error => {
                setSuccess(false)
                console.log(error);
                resolve(false)
            });
        })
    }
    function handleMintResearcher(recipient: string, accessTypes: any) {
        return new Promise(function (resolve, reject) {
            axios
            .post(
                `http://localhost:3000/authorize_analyst?address=${recipient}`,
                { access_policies: accessTypes },
                {
                    headers: {
                        "Content-Type": "application/json",
                        from: "owner",
                    },
                }
            )
            .then((response) => {
                setMint((prev) => [...prev, response.data])
                setSuccess(success && true)
                resolve(true)
            })
            .catch((error) => {
                console.error(error);
                setSuccess(false)
                resolve(false)
            });
        })
    }

    function handleSetAccessTypes(accessTypes: any) {
        return new Promise(function (resolve, reject) {
            axios
            .post(
                `http://localhost:3000/all_access_policies`,
                { access_policies: accessTypes },
                {
                    headers: {
                        "Content-Type": "application/json",
                        from: "owner",
                    },
                }
            )
            .then((response) => {
                resolve(true)
            })
            .catch((error) => {
                setSuccess(false)
                resolve(false)
            });
        })
    }

    const onFinish = async (values: any) => {
        console.log('Finish:', values);
        let tracker = []
        for (let i = 0; i < hospitalAccounts.length; i++) {
            let finished = await handleMint(hospitalAccounts[i]['address'])
            tracker.push(finished)
        }

        let all_access_policies: never[] = []
        for (let i = 0; i < options.length; i++) {
            all_access_policies.push(options[i]['value'])
        }
        let finished = await handleSetAccessTypes(all_access_policies)
        tracker.push(finished)
        for (let i = 0; i < researcherAccounts.length; i++) {
            if (values[researcherAccounts[i]['account_name'] + 'type'] == undefined) {
                let res = await handleMintResearcher(researcherAccounts[i]['address'], researcherAccounts[i]['access_types'])
                tracker.push(res)
            } else {
                let res = await handleMintResearcher(researcherAccounts[i]['address'], values[researcherAccounts[i]['account_name'] + 'type'])
                tracker.push(res)
            }
        }
        handleMessage(tracker.every(v => v === true))
    };

    const handleMessage = (mess: boolean) => {
        if (mess) {
            message.success(`Successfully Minted All Tokens!`);
        } else {
            message.error(`Failed to Mint`);
        }
    }

    useEffect(() => {
        // reset
        axios
            .get('http://localhost:3000/reset_accounts', {
                headers: {
                    "Content-Type": "application/json",
                    from: "owner",
                },
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch(function (error) {
                Notiflix.Report.failure('Error', 'The Fact Fortress backend is not up and running. To run it: `pnpm backend` and wait for the message `server started on port 3000`', 'Ok');
            })

        // get all accounts
        axios
            .get('http://localhost:3000/accounts?account_type=data_providers')
            .then((res) => {
                setHospitalAccounts(res.data)
                console.log(res.data)
            })
        axios
            .get('http://localhost:3000/accounts?account_type=data_analysts')
            .then((res) => {
                setResearcherAccounts(res.data)
                console.log(res.data)
            })
        axios
            .get('http://localhost:3000/all_access_policies')
            .then((res) => {
                console.log(res.data)
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

    return (
        <div
            style={{ margin: 0, height: '100%' }}
        >
            {hospitalAccounts.length > 0 && researcherAccounts.length > 0 &&
                <Card
                    style={{ margin: 40, height: '90%' }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <b>Authorize data providers to upload their public keys on-chain</b>
                    </div>
                    <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish} >
                        <Form.Item
                            label='Data Providers'
                            name="recipient1"
                        >
                            {hospitalAccounts.map((val) =>
                                <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                                    <Form.Item
                                        label='Name'
                                        style={{ flex: 1 }}
                                        name={['default', 'first']}
                                    >
                                        <Input defaultValue={val['account_name']} disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        label='Address'
                                        name={['default', 'address']}
                                        style={{ flex: 1 }}
                                    >
                                        <Input style={{ width: '100%' }} defaultValue={val.address} disabled={true} />
                                    </Form.Item>
                                </div>

                            )}

                            <Form.List name="hospitals">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                                                <Form.Item
                                                    {...restField}
                                                    label='Name'
                                                    style={{ flex: 1 }}
                                                    name={[name, 'first']}
                                                >
                                                    <Input placeholder="Hospital Name" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    label='Address'
                                                    style={{ flex: 1 }}
                                                    name={[name, 'last']}
                                                >
                                                    <Input placeholder="Address" />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </div>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Form.Item>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <b>Define how data analysts should access the data</b>
                        </div>
                        <Form.Item
                            label='Available Access Policies'
                            name="access_types"
                            style={{ flex: 1 }}
                        >
                            <Select
                                mode="tags"
                                placeholder="select access policy"
                                defaultValue={Array.from(new Set(options.map((val: any) => val['label'])))}
                                onChange={handleOptionChange}
                                optionLabelProp="label"
                                options={options}
                            />
                        </Form.Item>
                        <Form.Item
                            label='Data Analysts'
                            name="recipient4"
                        >
                            {researcherAccounts.map((val) =>
                                <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                                    <Form.Item
                                        label='Name'
                                        style={{ flex: 1 }}
                                        name={[val['account_name'] + stringify(val['account_id']), 'first']}
                                    >
                                        <Input defaultValue={val['account_name']} disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        label='Address'
                                        name={[val['account_name'] + stringify(val['account_id']), 'address']}
                                        style={{ flex: 1 }}
                                    >
                                        <Input style={{ width: '100%' }} defaultValue={val.address} disabled={true} />
                                    </Form.Item>
                                    <Form.Item
                                        name={val['account_name'] + 'type'}
                                        label='Access Policies'
                                        style={{ flex: 1 }}
                                    >
                                        <Select
                                            mode="multiple"
                                            placeholder="select policy"
                                            defaultValue={val['access_types']}
                                            onChange={handleChange}
                                            optionLabelProp="label"
                                            options={options}
                                        />
                                    </Form.Item>
                                </div>

                            )}

                            <Form.List name="researchers">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'first']}
                                                    label='Name'
                                                    style={{ flex: 1 }}
                                                >
                                                    <Input placeholder="Researcher Name" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'last']}
                                                    label='Address'
                                                    style={{ flex: 1 }}
                                                >
                                                    <Input placeholder="Address" />
                                                </Form.Item>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'type']}
                                                    label='Acess Types'
                                                    style={{ flex: 1 }}
                                                >

                                                    <Select
                                                        mode="multiple"
                                                        placeholder="select access policy"
                                                        defaultValue={['access_type_a']}
                                                        onChange={handleChange}
                                                        optionLabelProp="label"
                                                        options={options}
                                                    />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </div>
                                        ))}
                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Authorize
                            </Button>
                        </Form.Item>
                    </Form>
                    {mint.length > 4 && 
                        <div style={{ width: '100%', fontWeight: 'bold' }}>
                            {<TextArea rows={5} style={{ color: 'black' }} defaultValue={mint.map((token) => (JSON.stringify(token)))} />}
                        </div>
                    }
                </Card>
            }
        </div>
    )
}
