"use client";
import { ChangeEvent, useEffect, useState } from 'react';

import { Card, Col, Row, Space, Divider, Button, Input, Select, Form, message, Radio, QRCode, Upload, Table, Tag } from 'antd';
import { InboxOutlined, LoadingOutlined } from '@ant-design/icons';
import type { UploadProps, SelectProps, RadioChangeEvent } from 'antd';
import axios from 'axios';
import React from 'react';
import { stringify } from 'querystring';
import hashSignature from '../data_example/hash.json'
import { previewData } from 'next/dist/client/components/headers';


const { TextArea } = Input;

export default function Dapp() {
  const [form] = Form.useForm();
  const [researcherAccounts, setResearcherAccounts] = useState<any[]>([]);
  const [account, setAcount] = useState(['Analyzer A', 0]);
  const [tags, setTags] = useState([]);

  const [key, setKey] = useState({});
  const [compute, setCompute] = useState<string>("");
  const [computeRes, setComputeRes] = useState({});
  const [dataRes, setDataRes] = useState({});
  const [functions, setFunctions] = useState([]);
  const [proof, setProof] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [qrCode, setQrCode] = React.useState('https://github.com');
 
  const consoleRef = React.createRef()

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType })
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }

  const exportToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(createJSON()),
      fileName: 'proof.json',
      fileType: 'text/json',
    })
  }


  const handleGenerate = async () => {
    // let address = getAddress(recipient);
    console.log(localStorage.getItem('myStorage'))
    setLoading(true)
    const apiCall2 = () => {return axios.post('http://localhost:3000/generate_proof', JSON.parse(localStorage.getItem('myStorage')))}

    apiCall2()
      .then(async response => {
        setProof(response.data)
        setLoading(false)
        setDone(true)
      })
      .catch(error => {
        console.log(error);
      });
  }
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows:any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setDataRes(selectedRows[0])
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const rowSelectionFunc = {
    onChange: (selectedRowKeys: React.Key[], selectedRows:any[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setComputeRes(selectedRows[0])
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleAccountChange = (e: RadioChangeEvent) => {
    setAcount(e.target.value);
    setTags(researcherAccounts[e.target.value[1]]['access_policies'])
  };

  const handleSelect = (value: any) => {
    setCompute(functions[value]['function'])
    let temp = functions[value]['data']
    for (let i = 0; i < functions[value]['data'].length; i++) {
      temp[i] = {...functions[value]['data'][i], key: i}
    }
    setData(temp)
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

  const { Dragger } = Upload;

  const populate_options = () => {
    const options: any[] = [];
    for (let i = 0; i < functions.length; i++) {
      options.push({
        key: i,
        name: functions[i]['function']['name'],
        description: functions[i]['function']['description'],
      });
    }
    return options;
  }
  const populate_data = () => {
    const options: any[] = [];
    for (let i = 0; i < functions.length; i++) {
      options.push({
        key: i,
        name: functions[i]['function']['name'],
        data: functions[i]['data']
      });
    }
    return options;
  }
  const createJSON = () => {
    let res: any = {}
    res['function'] = {
      'name': dataRes['name'],
      'description': dataRes['description']
    }
    res['data'] = {
      'name': computeRes['name'],
      'values': computeRes['data']
    }
    res['proof'] = proof
    return JSON.stringify(res, null, 2)
  }

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };


  const columnsInner = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Provider',
      dataIndex: 'provider',
      key: 'provider',
    },
  ];

  const columns = [
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data',
      render: (text: any) => <div style={{margin: 5}}><Table columns={columnsInner} dataSource={text} pagination={{ position: ['none', 'none'] }} bordered={true}/></div>
    },
  ];

  const columnsFunc = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:3000/accounts?account_type=data_analyzers')
      .then((res) => {
        setResearcherAccounts(res.data)
      })
      axios
      .get('http://localhost:3000/available_functions')
      .then((res) => {
        console.log(res.data)
        setFunctions(res.data)
      })
  }, [])

  // console.log(researcherAccounts[account[1]]['access_policies'])
  const colors = ["blue", "green", "magenta", "purple"];

  return (
<div 
  // class="h-14 bg-gradient-to-r from-zinc-400 to-slate-900"
  style={{
  height: '100%', margin: 0, 'boxSizing': 'border-box' }}
>
      {contextHolder}
      {researcherAccounts.length > 0 && functions.length > 0 &&
            <div>
                <Radio.Group value={account} onChange={handleAccountChange} style={{ height: '100%', margin: 10 }}>
                    {researcherAccounts.map((val, i) => 
                        <Radio.Button value={[val['account_name'], i]}>{val['account_name']}</Radio.Button>
                    )}
                </Radio.Group>
          <Card title={account[0]} style={{ height: '90%',  overflow: 'scroll', margin: 10}}  bordered={false}>
          
          <div style={{ width: '100%', fontWeight: 'bold' }}>
                  Granted Access Policies
                  <p/>
          {researcherAccounts[account[1]][Object.keys(researcherAccounts[account[1]])[3]] != undefined && researcherAccounts[account[1]][Object.keys(researcherAccounts[account[1]])[3]].map((tag, i) => 
                
                  <Tag bordered={false} color={colors[(i % colors.length)]}>{tag}</Tag>

            )}
            </div>
          <h4>Select Function</h4>
            <Space 
              direction="vertical"
              style={{
                display: 'flex',
              }}
            >

            <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
              <Form.Item >
                  {/* <Select
                    defaultValue="Select Function"
                    style={{
                      width: 300,
                    }}
                    onChange={handleSelect}
                    options={populate_options()}
                  /> */}
                  <Table 
                rowSelection={{
                  type: 'radio',
                  ...rowSelection
                }} 
                columns={columnsFunc} dataSource={populate_options()} 
                pagination={{ position: ['none', 'none'] }}
                />
              
              <p/>
              <h4>Available Data</h4>
              <Table 
                rowSelection={{
                  type: 'radio',
                  ...rowSelectionFunc
                }} columns={columns} dataSource={populate_data()}
                pagination={{ position: ['none', 'none'] }}
                 />
              </Form.Item>
              <Button block type='primary' onClick={handleGenerate} disabled={(JSON.stringify(computeRes) == '{}' || JSON.stringify(dataRes) == '{}')}>Generate Proof!</Button>
              <Divider type='horizontal' />
              <div id="myqrcode">
                  {loading && 
                    <Card loading={loading}>None</Card>
                  }
                  {done && 
                  <div>
                    <TextArea rows={6} style={{ color: 'black'}}  defaultValue={createJSON()} disabled={true} />
                    <Button type="primary" onClick={exportToJson} style={{marginTop: 10}}>
                      Download Proof
                    </Button>
                    <p/>
                    <div style={{ display: "flex", gap: "10px", width: '100%' }}>
                    <QRCode value={qrCode} />
                    </div>
                  </div>
                  }
              </div>
              </Form>
            </Space>
          </Card>
          </div>
      }
    </div>
  )
}
