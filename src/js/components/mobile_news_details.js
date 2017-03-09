import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import PCNewsImageBlock from './pc_news_image_block'

export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    };
    componentDidMount() {
        var myFetchOptions = {
            methos: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            });
    };
    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };
    render() {
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader/>
                <div className="ucmobileList"></div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className='container'>
                        <div className='articleContainer' dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <MobileFooter/>
                <BackTop />
            </div>
        )
    }
}
