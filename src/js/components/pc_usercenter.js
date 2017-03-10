import React from 'react';
import {Row, Col} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {
    Tabs,
    CheckBox,
    Upload,
    Icon,
    Modal
} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            previewImage: '',
            previewVisible: false
        };
    };

    render() {
        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            listType: 'picture-card',
            defaultFileList: [
                {
                    uid: -1,
                    name: 'xxx.png',
                    state: 'done',
                    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
                }
            ],
            onPreview: (file) => {
                this.setState({previewImage: file.url, previewVisible: true});
            }
        };
        return (
            <div>
                <Row>
                    <Col span={2}/>
                    <Col span={20}>
                        <Tabs>
                            <PCHeader/>
                            <TabPane tab="我的收藏列表" key="1">
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus"/>
                                        <div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null}
                                           onCancel={this.handleCancel}>
                                        <img src={this.state.previewImage} alt="预览"/>
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}/>
                </Row>
                <PCFooter/>
            </div>
        )
    }
}