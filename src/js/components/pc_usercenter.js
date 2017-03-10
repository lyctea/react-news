import React from 'react';
import {Row, Col} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {
    Tabs,
    CheckBox,
} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
    render() {
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