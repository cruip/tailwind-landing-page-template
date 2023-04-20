"use client";
import { ChangeEvent, useEffect, useState } from 'react';

import type { CheckboxValueType } from 'antd/es/checkbox/Group';

import { Card, Col, Row, Space, Divider, Button, Input, Form, Select, message, QRCode, Upload, Checkbox } from 'antd';
import { UserOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import axios from 'axios';
import React from 'react';
import SizeContext from 'antd/es/config-provider/SizeContext';

const { TextArea } = Input;
const { Search } = Input;

export default function Owner() {
    const [form] = Form.useForm();
    const [mint, setMint] = useState<any[]>([]);
    const [from, setFrom] = useState<CheckboxValueType[]>([]);
    const [options, setOptions] = useState([
        {value:"access_type_a",
         label:"access_type_a"},
        {value:"access_type_b",
         label:"access_type_b"},
        {value:"access_type_c",
         label:"access_type_c"}
    ]);
    const [messageApi, contextHolder] = message.useMessage();
    const { Option } = Select;

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
      };
    const handleOptionChange = (value: string[]) => {
        let res: any[] = []
        for (let i = 0; i < value.length; i++) {
            res.push({value: value[i], label: value[i]})
        }
        setOptions(res)
      };
 

  const handleMint = async (recipient: any) => {
    // let address = getAddress(recipient);
    const apiCall = () => {return axios.get('http://localhost:3000/authorize_authority?recipient=' + recipient, {
          headers: {
            'from': 'owner'
          }
          }
        )}

    apiCall()
      .then(response => {
        console.log(response.data);
        setMint([...mint, response.data])
      })
      .catch(error => {
        console.log(error);
      });
  }
  const handleMintResearcher = async (recipient: string, accessTypes: any) => {
    axios
      .post(
        `http://localhost:3000/authorize_researcher?recipient=${recipient}`,
        { access_types: accessTypes },
        {
          headers: {
            "Content-Type": "application/json",
            from: "owner",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const goToNextPage = () => {
    window.scrollTo({
        top: 1000,
        behavior: "smooth",
    });
};
const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };
  
const onFinish = async (values: any) => {
    console.log('Finish:', values);
    let mintList = ['0x98526c571e324028250B0f5f247Ca4F1b575fadB', '0x99eBB39932f6F697194EA70115762d4c06D1A9c9'];

    if (values['hospitals'] != undefined) {
        for (let j = 0; j < values['hospitals'].length; j++) {
            mintList.concat(values['hospitals'][j]['last'])
        }
    }

    for (let i = 0; i < mintList.length; i++) {
        await handleMint(mintList[i]);
    }
    let types = values['default-type']
    if (values['default-type'] == undefined) {
        types = ['access_type_a']
    }
    let researchers = [["0xac46159C08f103f7fF87ED138CFf7e389aac0550", types]]
    if (values['researchers'] != undefined) {
        for (let i = 0; i < values['researchers'].length; i++) {
            let curr_types = values['researchers'][i]['default-type']
            if (curr_types == undefined) {
                curr_types = ['access_type_a']
            }
            researchers.concat([values['researchers'][i]['last'], curr_types])
        }
    }

    for (let i = 0; i < researchers.length; i++) {
        handleMintResearcher(researchers[i][0], researchers[i][1]);
    }


  };

  return (
    <div 
        // class="h-14 bg-gradient-to-r from-emerald-500 to-green-900"
        style={{ margin: 0, height: '100%'}}
        >

    <Card 
        style={{ margin: 40, height: '90%'}} 
        >
            <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish} >
                <Form.Item
                    label='Data Providers'
                    name="recipient1"
                >   
                    <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                            <Form.Item
                                label='Name'
                                style={{flex: 1}}
                                name={['default', 'first']}
                            >
                                <Input defaultValue="Hospital A Wallet" disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                label='Address'
                                name={['default', 'address']}
                                style={{flex: 1}}
                            >
                                <Input style={{width: '100%'}} defaultValue="0x98526c571e324028250B0f5f247Ca4F1b575fadB" disabled={true} />
                            </Form.Item>
                            </div>
                    <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                            <Form.Item
                            label='Name'
                            style={{flex: 1}}
                                name={['default', 'first']}
                            >
                                <Input defaultValue="Hospital B Wallet" disabled={true}/>
                            </Form.Item>
                            <Form.Item
                            label='Name'
                            style={{flex: 1}}
                                name={['default', 'address']}
                            >
                                <Input defaultValue="0x99eBB39932f6F697194EA70115762d4c06D1A9c9" disabled={true} />
                            </Form.Item>
                    </div>
                    <Form.List name="hospitals">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                            <Form.Item
                                {...restField}
                                label='Name'
                                style={{flex: 1}}
                                name={[name, 'first']}
                            >
                                <Input placeholder="Hospital Name" />
                            </Form.Item>
                            <Form.Item
                                {...restField}
                                label='Address'
                                style={{flex: 1}}
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
                
                <Form.Item
                    label='Available Access Types'
                    name="access_types"
                    style={{flex: 1}}
                >
                    <Select
                        mode="tags"
                        placeholder="select access type"
                        defaultValue={['access_type_a', 'access_type_b', 'access_type_c']}
                        onChange={handleOptionChange}
                        optionLabelProp="label"
                        options={options}
                    />
                </Form.Item>
                <Form.Item
                    label='Data Consumer'
                    name="recipient4"
                >
                    <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                            <Form.Item
                                name={'default-name'}
                                label='Name'
                                style={{flex: 1}}
                            >
                                <Input defaultValue="Wallet_Name_Researcher_1" disabled={true}/>
                            </Form.Item>
                            <Form.Item
                                name={'default-address'}
                                label='Address'
                                style={{flex: 1}}
                            >
                                <Input defaultValue="0xac46159C08f103f7fF87ED138CFf7e389aac0550" disabled={true} />
                            </Form.Item>
                            <Form.Item
                                name={'default-type'}
                                label='Access Types'
                                style={{flex: 1}}
                            >
                                <Select
                                    mode="multiple"
                                    placeholder="select type"
                                    defaultValue={['access_type_a']}
                                    onChange={handleChange}
                                    optionLabelProp="label"
                                    options={options}
                                />
                            </Form.Item>
                        </div>
                <Form.List name="researchers">
                    {(fields, { add, remove }) => (
                        <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div style={{ display: "inline-flex", gap: "8px", width: '100%' }}>
                            <Form.Item
                                {...restField}
                                name={[name, 'first']}
                                label='Name'
                                style={{flex: 1}}
                            >
                                <Input placeholder="Researcher Name" />
                            </Form.Item>
                            <Form.Item
                                {...restField}
                                name={[name, 'last']}
                                label='Address'
                                style={{flex: 1}}
                            >
                                <Input placeholder="Address" />
                            </Form.Item>
                            <Form.Item
                                {...restField}
                                name={[name, 'type']}
                                label='Acess Types'
                                style={{flex: 1}}
                            >

                             <Select
                                 mode="multiple"
                                 placeholder="select access type"
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
                    Mint!
                </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
  )
}
