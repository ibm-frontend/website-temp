import React from 'react';
import PropTypes from 'prop-types';

import ComponentExample from '../ComponentExample/ComponentExample';

export default class ComponentCode extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    codepen: PropTypes.string,
    background: PropTypes.string,
    haslightversion: PropTypes.string,
    hasreactversion: PropTypes.string,
    haslightbackground: PropTypes.string,
  };

  render() {
    const { 
      name, 
      codepen, 
      haslightbackground,
      haslightversion,
      hasreactversion,
      
    } = this.props;

    const component = name.toLowerCase()

    let htmlFile;
    htmlFile = require(`carbon-components/html/${component}/${component}.html`);

    return (    
      <div className="component-variation">
        <h2 className="page-h2">{name}</h2>
        <ComponentExample
          codepenSlug={codepen}
          component={component}
          htmlFile={htmlFile}
          hideViewFullRender={this.props.hideViewFullRender}
          hasLightVersion={haslightversion}
          hasReactVersion={hasreactversion}
          hasLightBackground={haslightbackground}
       />
      </div>   
      
    );
  }
}