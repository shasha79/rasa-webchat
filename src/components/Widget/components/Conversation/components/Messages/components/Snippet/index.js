import React, { PureComponent } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import QuickReply from '../QuickReply/index';

import { PROP_TYPES } from 'constants';

import './styles.scss';


class Snippet extends PureComponent {
  render() {
    const elements = this.props.message.get('elements').elements;
    console.log("Elements: " + JSON.stringify(elements));
    const slides = elements.map((item, index) => {
      {/* const buttons = item.buttons.map((button, index1) => {
        return ( 
        <div></div>                     
        );
      }); */}
      return (
        <Slide index={index}>
          <a href={item.buttons[0].url} target='_blank'>
              <img
                alt=''
                src={item.image_url}
                />
                { item.title }
                <p><small>
                  { item.subtitle }
                </small></p>  
              </a> 
        </Slide>
      );
    });
    return (
      <div className="snippet">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={elements.length}
        orientation={'horizontal'}
        >
        <Slider>
          {slides}
        </Slider>              
    </CarouselProvider>


{/*
class Snippet extends PureComponent {
  render() {
    return (
      <div className="snippet">
        <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={.5}
            sideSize={.1}
            slidesToScroll={1}
            slidesToShow={1}
            scrollOnDevice={true}
  >
    <div>
      <a href={this.props.message.get('link')} target={this.props.message.get('target')}>
        <img
          alt=''
          src='https://jck.nl/sites/default/files/inline-images/LR_042%20afb%202%20-%20F003124%20176B022.jpg'
          />
          { this.props.message.get('content') }
        </a>    
     </div> 
     <div>
      <a href={this.props.message.get('link')} target={this.props.message.get('target')}>
        <img
          alt=''
          src='https://jck.nl/sites/default/files/inline-images/LR_042_afb.04_0.jpg'
          />
          { this.props.message.get('content') }
        </a>    
     </div> 
            

  </InfiniteCarousel>

  */}
  {/*   <b className="snippet-title">
          { this.props.message.get('title') }
        </b>
        <div className="snippet-details">
          <a href={this.props.message.get('link')} target={this.props.message.get('target')} className="link">
            { this.props.message.get('content') }
          </a>
        </div>
    */}        
      </div>
    );
  }
}

Snippet.propTypes = {
  message: PROP_TYPES.SNIPPET
};

export default Snippet;
