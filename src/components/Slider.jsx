import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTranslateValue } from '../actions/action_setTranslateValue';
import { loadImages, setIndex } from '../actions/action_getImages';
import Slide from './Slide';
import Arrow from "./Arrow";


class Slider extends Component{
    constructor(props){
        super(props);
        this.widthSlide = React.createRef();

    }

    componentDidMount(){
        this.props.loadImages();
    }

    componentWillUpdate(nextProps){
        // this.props.setIndex(nextProps.images.length)
    }


    widthOfImage = () => {
        return this.widthSlide.clientWidth;
    };

    goToNextSlide = () => {
        const {
            setTranslateValue,
            setIndex,
            translateValue,
            images,
            index
        } = this.props;
        if(index === images.length - 1){
            setTranslateValue(0);
            return setIndex(0);
        }
        const widthOfWindow = this.widthOfImage();
        setTranslateValue(translateValue - widthOfWindow);
        setIndex(index + 1);
        // console.log('go to next slide', this.props);
    };

    goToPreviousSlide = () => {
        const {
            setTranslateValue,
            setIndex,
            translateValue,
            index
        } = this.props;
        if(index === 0) return;

        const widthOfWindow = this.widthOfImage();
        setTranslateValue(translateValue + widthOfWindow);
        setIndex(index - 1);
        // console.log('go to previous slide', index);
    };

    renderSlides(){
        return this.props.images.map((img, i) => {
            return <Slide
                key={i}
                image={img}
                testRef={el => this.widthSlide = el}
            />
        })
    };

    render(){
        // console.log('this.props', this.props);
        const {
            translateValue
        } = this.props;
        const animationStyle = {
            transform: `translateX(${translateValue}px)`,
            transition: 'transform 0.45s ease-out'
        };
        return(
            <div
                className='slider'
                // ref={this.widthSlide}
            >
                <img src="../img/test-bg.jpg" alt='temp img' width='640' height='440'/>
                <div
                    className='slider-wrapper'
                    style={animationStyle}
                >
                    {this.renderSlides()}
                </div>
                <Arrow
                    image={'left-arrow.svg'}
                    arrowStyle={'left-arrow'}
                    next={this.goToPreviousSlide}
                />
                <Arrow
                    image={'right-arrow.svg'}
                    arrowStyle={'right-arrow'}
                    next={this.goToNextSlide}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    // console.log('maptoprops state', state);
    const { translateValue, images, index } = state.slider;
    return{
        translateValue,
        images,
        index
    }
};

export default connect(mapStateToProps, { setTranslateValue, loadImages, setIndex })(Slider);