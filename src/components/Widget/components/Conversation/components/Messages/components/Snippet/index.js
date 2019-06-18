import React, { PureComponent } from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';

import QuickReply from '../QuickReply/index';

import { PROP_TYPES } from 'constants';

import './styles.scss';

class Snippet extends PureComponent {
  render() {
    const elements = this.props.message.get('elements').elements;
    console.log("Elements: " + JSON.stringify(elements));
    const slides = elements.map((item, index) => {
      return (
        <Slide index={index}>
            
            <Image className="snippet-image" src={item.image_url} hasMasterSpinner={false}>

            </Image>
            <a href={item.buttons[0].url} target='_blank'>
                { item.title }
            </a> 
            <p><small>
                { item.subtitle }
            </small></p>  
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
        <Slider className='snippet-slider'>
          {slides}
        </Slider>              
        </CarouselProvider>
      </div>
    );
  }
}

Snippet.propTypes = {
  message: PROP_TYPES.SNIPPET
};

export default Snippet;
