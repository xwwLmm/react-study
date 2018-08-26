import React, {Component} from 'react'

import $style from './explore.css'
import logo from './logo.png'

class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [{
                icon: 'gift',
                name: '活动'
            }, {
                icon: 'schedule',
                name: '课表'
            }, {
                icon: 'huiyuanqia',
                name: '会员卡'
            }, {
                icon: 'personal-information',
                name: '个人中心'
            }]
        }
    }
    render() {
        return <div className={$style.container}>
                <div className={$style.content}>
                    {
                        this.state.links.map((link, index) => {
                            return <div className={$style.item} key={index}>
                                <span className={`iconfont icon-${link.icon}`}></span>
                                <div>{ link.name }</div>
                            </div>
                        })
                    }
                </div>
                <div className={$style.logo}>
                    <img alt="icon" src={logo}/>
                </div>
        </div>
    }
}

export default Explore