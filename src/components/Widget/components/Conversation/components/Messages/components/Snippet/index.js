import React, { PureComponent } from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import { Map, List, fromJS } from 'immutable';
// TODO: import 'pure-react-carousel/dist/react-carousel.es.css';

import QuickReply from '../QuickReply/index';

import { PROP_TYPES } from 'constants';

import './styles.scss';

class Snippet extends PureComponent {
  render() {
    var elements = this.props.message.get('elements');
    // Elements are different if coming from the store (Map) or from the message (Array)
    // If elements is not Map, convert them to make the rest of code working seamlessly
    if (! Map.isMap(elements)) {
        elements = Map(fromJS(elements));   
    }
    elements = elements.get('elements');
    console.log("Elements: " + JSON.stringify(elements));
    if (elements == null) { return null; }

    const slides = elements.map((item, index) => {
      const url = item.get("buttons") != null ? item.get("buttons").get(0).get("url") : null;  
      return (
        <Slide index={index}>
            
            <Image className="snippet-image" src={item.get("image_url")} hasMasterSpinner={false}>

            </Image>
            <a href={url} target='_blank'>
                { item.get("title") }
            </a> 
            <p><small>
                { item.get("subtitle") }
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
