import React, {Component} from 'react'

import $style from './Header.css'

import banner from '../../banner.png'
import env from '../../env.png'

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleTransform = this.handleTransform.bind(this)
        this.state = {transform: 0, imgs: [{id: 1, img: banner}, {id: 2, img: env}, {id: 3, img: banner}]}
    }
    handleTransform() {
        this.intervelId = setInterval(() => {
            let transform = 0

            this.setState((prev) => {
                const imgs = prev.imgs
                const img = imgs.splice(0, 1)
                imgs.push(img[0])
                return {
                    transform,
                    imgs
                }
            })

            setTimeout(() => {
                this.setState(() => {
                    return {
                        transform: -375
                    }
                })
            })

        }, 3000)
    }
    componentDidMount() {
        setTimeout(() => {
            this.handleTransform()
            this.setState(() => {
                return {
                    transform: -375
                }
            })
        }, 2000)
    }
    componentUnMount() {
        clearInterval(this.intervelId)
    }
    render() {
        return <div>
            <div className={$style.content}>
                {
                    this.state.imgs.map(img => (<img alt="404" className={[$style.img + ' ' + (this.state.transform ? $style.transition : '')]} src={img.img} key={img.id} style={{transform: `translate3d(${this.state.transform}px,0, 0)`}}/>))
                }
            </div>
        </div>
    }
}

export default Header